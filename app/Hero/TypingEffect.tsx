import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delaySpeed?: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  words,
  typingSpeed = 35,
  deletingSpeed = 5,
  delaySpeed = 700,
}) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleTyping = () => {
      const currentWord = words[wordIndex];

      // Update text based on whether typing or deleting
      if (!isDeleting) {
        setText((prev) => currentWord.substring(0, prev.length + 1));
      } else {
        setText((prev) => currentWord.substring(0, prev.length - 1));
      }

      // Handle transition from typing to deleting
      if (!isDeleting && text === currentWord) {
        timer = setTimeout(() => setIsDeleting(true), delaySpeed);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    // Trigger typing or deleting based on the current state
    timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, words, wordIndex, typingSpeed, deletingSpeed, delaySpeed]);

  return (
    <h1>
      {text}
      <span className="cursor">|</span>
    </h1>
  );
};

export default TypingEffect;
