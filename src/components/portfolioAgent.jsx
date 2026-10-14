"use client";

import { useChat } from "@ai-sdk/react";
import { useEffect, useState } from "react";

const STARTER_QUESTIONS = [
  "What's his tech stack?",
  "Has he worked with AI?",
  "Tell me about UNDR.",
  "How do I get in touch?",
];

const GREETING = "Hi, welcome! What do you want to know about John?";
const TEASER_KEY = "portfolio-agent-teaser-seen";
const TEASER_DELAY_MS = 2500;

export default function PortfolioAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [showTeaser, setShowTeaser] = useState(false);
  const { messages, sendMessage } = useChat({
    api: "/api/portfolio-chat",
  });

  const ask = (text) => {
    sendMessage({ text });
  };

  // Show the teaser bubble once per browser session, shortly after the page loads
  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(TEASER_KEY) === "1";
    } catch {}
    if (seen) return;

    const t = setTimeout(() => setShowTeaser(true), TEASER_DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  const dismissTeaser = () => {
    setShowTeaser(false);
    try {
      sessionStorage.setItem(TEASER_KEY, "1");
    } catch {}
  };

  const openChat = () => {
    dismissTeaser();
    setIsOpen(true);
  };

  return (
    <>
      {/* Teaser bubble */}
      {showTeaser && !isOpen && (
        <div
          role="status"
          className="fixed bottom-24 right-4 md:right-6 z-50 max-w-[calc(100%-2rem)] md:max-w-70 flex items-start gap-2 rounded-2xl rounded-br-sm bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-lg pl-4 pr-2 py-3"
        >
          <button
            onClick={openChat}
            className="text-left text-sm leading-snug text-zinc-800 dark:text-zinc-100"
          >
            {GREETING}
          </button>
          <button
            onClick={dismissTeaser}
            aria-label="Dismiss message"
            className="shrink-0 p-1 rounded-md text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}

      {/* Chat panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 md:right-6 z-50 w-[calc(100%-2rem)] md:w-95 h-[70vh] md:h-130 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
              Ask about John
            </span>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="p-1 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-zinc-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {/* Static greeting: not part of the chat history, never sent to the model */}
            <div className="flex justify-start">
              <div className="max-w-[85%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100">
                {GREETING}
              </div>
            </div>

            {messages.length === 0 && (
              <div className="flex flex-wrap gap-2">
                {STARTER_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    onClick={() => ask(q)}
                    className="text-xs px-3 py-1.5 rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed ${
                    message.role === "user"
                      ? "bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900"
                      : "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100"
                  }`}
                >
                  {message.parts.map((part, i) =>
                    part.type === "text" ? (
                      <div key={i} className="whitespace-pre-wrap">
                        {part.text}
                      </div>
                    ) : null,
                  )}
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!input.trim()) return;
              ask(input);
              setInput("");
            }}
            className="flex items-center gap-2 p-3 border-t border-zinc-200 dark:border-zinc-800"
          >
            <input
              className="flex-1 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 dark:text-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100"
              value={input}
              placeholder="Ask a question..."
              onChange={(e) => setInput(e.currentTarget.value)}
            />
            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Send message"
              className="h-9 w-9 shrink-0 rounded-full bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 transition-transform"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 19V5M5 12l7-7 7 7"
                />
              </svg>
            </button>
          </form>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => (isOpen ? setIsOpen(false) : openChat())}
        aria-label={isOpen ? "Close chat" : "Ask about John"}
        className="fixed bottom-6 right-4 md:right-6 z-50 h-14 w-14 rounded-full bg-linear-to-r from-indigo-500 to-purple-600 cursor-pointer text-white shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        )}
      </button>
    </>
  );
}
