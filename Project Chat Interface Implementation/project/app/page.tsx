"use client";

import { useState } from "react";
import { MessageCircle, Phone, Video, MoreHorizontal, Search, Info, Plus } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import ChatMessage from "@/components/ChatMessage";
import UserInfo from "@/components/UserInfo";

export default function Home() {
  const [messages, setMessages] = useState([
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
    },
    {
      id: 3,
      text: "Hey, #firstname! I saw you were curious about our products. My name is X from StoreNano, feel free to save my number and send me a text if you have any questions or concerns. If you're ready to",
      timestamp: "2:25 PM",
      isUser: false,
    },
  ]);

  return (
    <div className="flex h-screen bg-background">
      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center space-x-3">
            <Avatar>
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces" alt="User" />
            </Avatar>
            <div>
              <h2 className="font-semibold">Oguz Yagiz Kara</h2>
              <p className="text-sm text-muted-foreground">oguz@bluereceipt.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Phone className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Video className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Messages Area */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <ChatMessage key={message.id} {...message} />
            ))}
          </div>
        </ScrollArea>

        {/* Message Input */}
        <div className="p-4 border-t">
          <div className="flex items-center space-x-2">
            <Input 
              placeholder="Type a message..." 
              className="flex-1"
            />
            <Button>Send</Button>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <UserInfo />
    </div>
  );
}