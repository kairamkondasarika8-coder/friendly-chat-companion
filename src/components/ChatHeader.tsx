import { Bot, Sparkles } from "lucide-react";

export const ChatHeader = () => {
  return (
    <div className="flex items-center gap-3 p-4 border-b border-border bg-card">
      <div className="relative">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
          <Bot className="w-5 h-5 text-primary-foreground" />
        </div>
        <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-success rounded-full border-2 border-card" />
      </div>
      <div className="flex-1">
        <h1 className="font-semibold text-foreground flex items-center gap-2">
          AI Assistant
          <Sparkles className="w-4 h-4 text-primary" />
        </h1>
        <p className="text-xs text-muted-foreground">Always here to help</p>
      </div>
    </div>
  );
};
