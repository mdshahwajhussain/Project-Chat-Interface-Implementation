"use client";

import { Avatar } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  text: string;
  timestamp: string;
  isUser?: boolean;
  isSystem?: boolean;
  sender?: string;
}

export default function ChatMessage({ text, timestamp, isUser, isSystem, sender }: ChatMessageProps) {
  if (isSystem) {
    return (
      <div className="flex flex-col items-center text-center text-sm text-muted-foreground">
        <p>{text}</p>
        <span className="text-xs">{timestamp}</span>
      </div>
    );
  }

  return (
    <div className={cn("flex items-start space-x-2", isUser && "flex-row-reverse space-x-reverse")}>
      <Avatar className="w-8 h-8">
        <img 
          src={isUser 
            ? "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces"
            : "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=faces"} 
          alt={sender || "User"} 
        />
      </Avatar>
      <div className={cn(
        "max-w-[70%] rounded-lg p-3",
        isUser ? "bg-primary text-primary-foreground" : "bg-muted"
      )}>
        {sender && <p className="text-sm font-medium mb-1">{sender}</p>}
        <p className="text-sm">{text}</p>
        <span className="text-xs text-muted-foreground block mt-1">{timestamp}</span>
      </div>
    </div>
  );
}