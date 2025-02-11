import { useCallback } from 'react';

export const useQuickExit = () => {
  const triggerExit = useCallback(() => {
    // In production, this would redirect to a safe site
    window.location.href = 'https://weather.com';
  }, []);

  return { triggerExit };
};