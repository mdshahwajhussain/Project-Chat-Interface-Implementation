import React from 'react';
import { cn } from '../utils/cn';
import { Avatar } from './Avatar';
import { MessageStatus } from './MessageStatus';
import type { Message } from '../types/chat';

export const ChatMessage: React.FC<Message> = ({
  text,
  timestamp,
  isUser,
  isSystem,
  sender,
  status
}) => {
  if (isSystem) {
    return (
      <div className="flex flex-col items-center text-center text-sm text-gray-500">
        <p>{text}</p>
        <span className="text-xs">{timestamp}</span>
      </div>
    );
  }

  return (
    <div className={cn("flex items-start space-x-2", isUser && "flex-row-reverse space-x-reverse")}>
      <Avatar
        src={isUser 
          ? "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces"
          : "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=faces"}
        alt={sender || "User"}
      />
      <div className={cn(
        "max-w-[70%] rounded-lg p-3",
        isUser ? "bg-blue-500 text-white" : "bg-gray-100"
      )}>
        {sender && <p className="text-sm font-medium mb-1">{sender}</p>}
        <p className="text-sm">{text}</p>
        <div className="flex items-center justify-end space-x-1 mt-1">
          <span className="text-xs text-gray-500">{timestamp}</span>
          {isUser && status && <MessageStatus status={status} />}
        </div>
      </div>
    </div>
  );
};