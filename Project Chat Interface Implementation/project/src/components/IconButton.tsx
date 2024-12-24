import React from 'react';

interface IconButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
}

export const IconButton: React.FC<IconButtonProps> = ({ icon, onClick }) => (
  <button
    onClick={onClick}
    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
  >
    {icon}
  </button>
);