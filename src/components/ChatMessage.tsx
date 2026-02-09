import { cn } from "@/lib/utils";
import { Bot, User } from "lucide-react";

interface ChatMessageProps {
  message: string;
  isBot: boolean;
  isNew?: boolean;
}

export const ChatMessage = ({ message, isBot, isNew = false }: ChatMessageProps) => {
  return (
    <div
      className={cn(
        "flex gap-3 max-w-3xl",
        isBot ? "self-start" : "self-end flex-row-reverse",
        isNew && "animate-message-in"
      )}
    >
      <div
        className={cn(
          "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
          isBot ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"
        )}
      >
        {isBot ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
      </div>
      <div
        className={cn(
          "px-4 py-3 rounded-2xl max-w-md shadow-sm",
          isBot
            ? "bg-chat-bot text-chat-bot-foreground rounded-tl-md"
            : "bg-chat-user text-chat-user-foreground rounded-tr-md"
        )}
      >
        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message}</p>
      </div>
    </div>
  );
};
