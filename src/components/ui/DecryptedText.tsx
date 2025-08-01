import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  characters?: string;
  className?: string;
  parentClassName?: string;
  encryptedClassName?: string;
  animateOn?: 'hover' | 'view';
  revealDirection?: 'left' | 'right' | 'center';
}

const DecryptedText: React.FC<DecryptedTextProps> = ({
  text,
  speed = 50,
  maxIterations = 10,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?",
  className = "",
  parentClassName = "",
  encryptedClassName = "",
  animateOn = 'hover',
  revealDirection = 'left'
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const getRandomChar = () => characters[Math.floor(Math.random() * characters.length)];

  const animateDecryption = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    let iterations = 0;
    
    const interval = setInterval(() => {
      setDisplayText(prevText => {
        const chars = prevText.split('');
        
        for (let i = 0; i < chars.length; i++) {
          if (text[i] === ' ') {
            chars[i] = ' ';
            continue;
          }
          
          let shouldReveal = false;
          
          switch (revealDirection) {
            case 'left':
              shouldReveal = i < iterations / 2;
              break;
            case 'right':
              shouldReveal = i >= chars.length - iterations / 2;
              break;
            case 'center':
              const center = Math.floor(chars.length / 2);
              const distance = Math.abs(i - center);
              shouldReveal = distance <= iterations / 2;
              break;
          }
          
          if (shouldReveal && iterations > maxIterations / 2) {
            chars[i] = text[i];
          } else {
            chars[i] = getRandomChar();
          }
        }
        
        return chars.join('');
      });
      
      iterations++;
      
      if (iterations > maxIterations) {
        clearInterval(interval);
        setDisplayText(text);
        setIsAnimating(false);
      }
    }, speed);
    
    intervalRef.current = interval;
  };

  useEffect(() => {
    if (animateOn === 'view') {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => animateDecryption(), 200);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }

      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (animateOn === 'hover') {
      animateDecryption();
    }
  };

  return (
    <span
      ref={elementRef}
      className={cn(parentClassName)}
      onMouseEnter={handleMouseEnter}
    >
      <span className={cn(
        isAnimating ? encryptedClassName : className,
        "font-mono transition-all duration-200"
      )}>
        {displayText}
      </span>
    </span>
  );
};

export default DecryptedText;