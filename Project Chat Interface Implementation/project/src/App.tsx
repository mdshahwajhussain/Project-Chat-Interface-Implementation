import React, { useState, useEffect } from 'react';
import { ChatHeader } from './components/ChatHeader';
import { ChatMessage } from './components/ChatMessage';
import { MessageInput } from './components/MessageInput';
import { UserInfo } from './components/UserInfo';
import { TypingIndicator } from './components/TypingIndicator';
import type { Message } from './types/chat';

export default function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "This is the very beginning of your direct message history with @OguzYagizKara",
      timestamp: "11:59pm in Ankara, Turkey",
      isSystem: true,
    },
    {
      id: 2,
      text: "I keep getting 'error while creating a new pop up' for the first time setup, so I'm not able to create a pop up. My shop name is PinkSweetHeart",
      sender: "Oguz Yagiz Kara",
      timestamp: "12:52 PM",
      isUser: true,
      status: 'read',
    },
    {
      id: 3,
      text: "Hey, I saw you were curious about our products. My name is X from StoreNano, feel free to save my number and send me a text if you have any questions or concerns.",
      timestamp: "2:25 PM",
      isUser: false,
    },
  ]);

  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: messages.length + 1,
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isUser: true,
      status: 'sent',
    };
    setMessages([...messages, newMessage]);

    // Simulate message status updates
    setTimeout(() => {
      setMessages(prev => 
        prev.map(msg => 
          msg.id === newMessage.id ? { ...msg, status: 'delivered' as const } : msg
        )
      );
    }, 1000);

    setTimeout(() => {
      setMessages(prev => 
        prev.map(msg => 
          msg.id === newMessage.id ? { ...msg, status: 'read' as const } : msg
        )
      );
    }, 2000);

    // Simulate typing indicator
    setTimeout(() => {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const response: Message = {
          id: messages.length + 2,
          text: "Thanks for your message! I'll look into that right away.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isUser: false,
        };
        setMessages(prev => [...prev, response]);
      }, 3000);
    }, 1000);
  };

  return (
    <div className="flex h-screen bg-white">
      <div className="flex-1 flex flex-col">
        <ChatHeader />
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <ChatMessage key={message.id} {...message} />
          ))}
          {isTyping && <TypingIndicator />}
        </div>
        <MessageInput onSend={handleSendMessage} />
      </div>
      <UserInfo />
    </div>
  );
}