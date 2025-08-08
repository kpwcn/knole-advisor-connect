import React from 'react';
import { cn } from '@/lib/utils';

interface ShinyTextProps {
  children: React.ReactNode;
  speedInMs?: number;
  className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({ 
  children, 
  speedInMs = 3000, 
  className 
}) => {
  return (
    <span
      className={cn(
        "text-white",
        className
      )}
    >
      {children}
    </span>
  );
};

export default ShinyText;