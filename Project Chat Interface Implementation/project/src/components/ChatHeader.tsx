import React from 'react';
import { Phone, Video, MoreHorizontal } from 'lucide-react';
import { Avatar } from './Avatar';
import { IconButton } from './IconButton';

export const ChatHeader: React.FC = () => (
  <div className="flex items-center justify-between p-4 border-b">
    <div className="flex items-center space-x-3">
      <Avatar
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces"
        alt="User"
      />
      <div>
        <h2 className="font-semibold">Oguz Yagiz Kara</h2>
        <p className="text-sm text-gray-500">oguz@bluereceipt.com</p>
      </div>
    </div>
    <div className="flex items-center space-x-2">
      <IconButton icon={<Phone className="h-5 w-5" />} />
      <IconButton icon={<Video className="h-5 w-5" />} />
      <IconButton icon={<MoreHorizontal className="h-5 w-5" />} />
    </div>
  </div>
);