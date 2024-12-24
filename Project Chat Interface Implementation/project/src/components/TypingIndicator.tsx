import React from 'react';

export const TypingIndicator: React.FC = () => (
  <div className="flex items-center space-x-2 text-gray-500 text-sm">
    <div className="flex space-x-1">
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
    </div>
    <span>Someone is typing...</span>
  </div>
);