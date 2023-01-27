import { useEffect } from 'react';

export default function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (
        ref.current.contains(event.target) ||
        event.target.dataset.name === 'icon' ||
        event.target.dataset.name === 'button'
      )
        return;

      handler(event);
    };
    // document.addEventListener('mousedown', listener);
    document.addEventListener('click', listener, true);

    return () => {
      // document.removeEventListener('mousedown', listener);
      document.removeEventListener('click', listener, true);
    };
  }, [ref, handler]);
}
