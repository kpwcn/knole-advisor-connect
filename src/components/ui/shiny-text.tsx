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
    <>
      <style>
        {`
          @keyframes shine {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
        `}
      </style>
      <span
        className={cn(
          "relative inline-block bg-gradient-to-r from-transparent via-white to-transparent bg-clip-text text-transparent",
          className
        )}
        style={{
          backgroundSize: '200% 100%',
          animation: `shine ${speedInMs}ms ease-in-out infinite`,
        }}
      >
        {children}
      </span>
    </>
  );
};

export default ShinyText;