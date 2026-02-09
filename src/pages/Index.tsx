import { useEffect, useRef } from "react";
import { ChatHeader } from "@/components/ChatHeader";
import { ChatMessage } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";
import { TypingIndicator } from "@/components/TypingIndicator";
import { useChat } from "@/hooks/useChat";

const Index = () => {
  const { messages, isTyping, sendMessage } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div className="flex flex-col h-screen bg-background">
      <ChatHeader />
      
      <div className="flex-1 overflow-y-auto scrollbar-thin p-4 space-y-4">
        <div className="flex flex-col gap-4 max-w-4xl mx-auto w-full">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message.text}
              isBot={message.isBot}
              isNew={message.isNew}
            />
          ))}
          {isTyping && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="max-w-4xl mx-auto w-full">
        <ChatInput onSend={sendMessage} disabled={isTyping} />
      </div>
    </div>
  );
};

export default Index;
