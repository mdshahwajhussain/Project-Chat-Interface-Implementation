export interface Message {
  id: number;
  text: string;
  timestamp: string;
  isSystem?: boolean;
  isUser?: boolean;
  sender?: string;
  status?: 'sent' | 'delivered' | 'read';
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  status: 'online' | 'offline' | 'away';
  lastSeen?: string;
}