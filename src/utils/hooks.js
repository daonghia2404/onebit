import React, { useState, useEffect } from 'react';

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handleDebounce = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handleDebounce);
    };
  }, [value, delay]);

  return debouncedValue;
};

export const useScroll = () => {
  const [scroll, setScroll] = useState({
    x: document.body.getBoundingClientRect().left,
    y: document.body.getBoundingClientRect().top,
    direction: '',
  });

  const listener = () => {
    setScroll((prev) => ({
      x: document.body.getBoundingClientRect().left,
      y: -document.body.getBoundingClientRect().top,
      direction: prev.y > -document.body.getBoundingClientRect().top ? 'up' : 'down',
    }));
  };

  useEffect(() => {
    window.addEventListener('scroll', listener);
    return () => window.removeEventListener('scroll', listener);
  }, []);

  return scroll;
};

export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};
