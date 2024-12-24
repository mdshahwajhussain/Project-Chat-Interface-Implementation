import React from 'react';

interface AvatarProps {
  src: string;
  alt: string;
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt }) => (
  <div className="w-8 h-8 rounded-full overflow-hidden">
    <img src={src} alt={alt} className="w-full h-full object-cover" />
  </div>
);