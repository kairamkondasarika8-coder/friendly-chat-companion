import { useState, useCallback } from "react";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  isNew: boolean;
}

const botResponses = [
  "I'd be happy to help with that! What would you like to know?",
  "Great question! Let me share some thoughts on this.",
  "That's interesting! Here's what I think...",
  "I understand what you're looking for. Here's my suggestion:",
  "Thanks for asking! I can definitely assist with that.",
  "Good to hear from you! How can I make your day better?",
  "I'm here and ready to help! What's on your mind?",
  "That's a thoughtful question. Let me give you a helpful answer.",
];

const getRandomResponse = () => {
  return botResponses[Math.floor(Math.random() * botResponses.length)];
};

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "Hi there! 👋 I'm your friendly AI assistant. How can I help you today?",
      isBot: true,
      isNew: false,
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = useCallback((text: string) => {
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text,
      isBot: false,
      isNew: true,
    };

    setMessages((prev) => [
      ...prev.map((m) => ({ ...m, isNew: false })),
      userMessage,
    ]);

    setIsTyping(true);

    // Simulate bot response delay
    setTimeout(() => {
      setIsTyping(false);
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        text: getRandomResponse(),
        isBot: true,
        isNew: true,
      };
      setMessages((prev) => [
        ...prev.map((m) => ({ ...m, isNew: false })),
        botMessage,
      ]);
    }, 1000 + Math.random() * 1000);
  }, []);

  return { messages, isTyping, sendMessage };
};
