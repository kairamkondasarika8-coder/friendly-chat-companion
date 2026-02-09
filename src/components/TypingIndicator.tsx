import { Bot } from "lucide-react";

export const TypingIndicator = () => {
  return (
    <div className="flex gap-3 self-start animate-message-in">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center">
        <Bot className="w-4 h-4" />
      </div>
      <div className="px-4 py-3 rounded-2xl rounded-tl-md bg-chat-bot shadow-sm flex items-center gap-1">
        <span className="w-2 h-2 rounded-full bg-muted-foreground/50 typing-dot" />
        <span className="w-2 h-2 rounded-full bg-muted-foreground/50 typing-dot" />
        <span className="w-2 h-2 rounded-full bg-muted-foreground/50 typing-dot" />
      </div>
    </div>
  );
};
