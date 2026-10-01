import { streamText, convertToModelMessages, tool } from "ai";
import { z } from "zod";
import { SYSTEM_PROMPT, PROJECTS } from "@/lib/Bio";

export async function POST(req) {
  const { messages } = await req.json();

  const result = streamText({
    model: "poolside/laguna-s-2.1-free",
    system: SYSTEM_PROMPT,
    messages: await convertToModelMessages(messages),
    tools: {
      getProjectDetails: tool({
        description:
          "Get details about a specific project John has built, by name.",
        inputSchema: z.object({
          projectName: z
            .string()
            .describe("The name of the project to look up, e.g. 'Billr'"),
        }),
        execute: async ({ projectName }) => {
          const project = PROJECTS.find((p) =>
            p.name.toLowerCase().includes(projectName.toLowerCase()),
          );
          return (
            project ?? { error: `No project found matching "${projectName}"` }
          );
        },
      }),
    },
  });

  return result.toUIMessageStreamResponse();
}
