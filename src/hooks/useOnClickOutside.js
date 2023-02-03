import { useEffect } from 'react';

export default function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener); // 모바일 대응
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener); // 모바일 대응
    };
  }, [ref, handler]);
}
