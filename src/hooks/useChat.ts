import { useState, useCallback } from 'react';
import { ChatMessage } from '../types';

export const useChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: 'What is React?',
      sender: 'user',
      timestamp: new Date()
    },
    {
      id: '2',
      text: 'React is a JavaScript library for building user interfaces, particularly single-page applications. It was developed by Facebook and allows developers to create reusable UI components.',
      sender: 'ai',
      timestamp: new Date()
    }
  ]);

  const sendMessage = useCallback((text: string) => {
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: `I understand you're asking about "${text}". This is a demo AI chat powered by mock responses. In a real implementation, this would connect to OpenAI's API or similar LLM service.`,
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  }, []);

  return {
    messages,
    sendMessage
  };
};
