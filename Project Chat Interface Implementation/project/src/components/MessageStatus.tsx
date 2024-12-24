import React from 'react';
import { Check, CheckCheck } from 'lucide-react';

interface MessageStatusProps {
  status: 'sent' | 'delivered' | 'read';
}

export const MessageStatus: React.FC<MessageStatusProps> = ({ status }) => {
  if (status === 'read') {
    return <CheckCheck className="h-4 w-4 text-blue-500" />;
  }
  if (status === 'delivered') {
    return <CheckCheck className="h-4 w-4 text-gray-500" />;
  }
  return <Check className="h-4 w-4 text-gray-500" />;
};