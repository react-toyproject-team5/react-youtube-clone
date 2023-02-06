import { useEffect } from 'react';

export default function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (
        ref.current.contains(event.target) ||
        ref.current.dataset.id === event.target.dataset.id
      ) {
        console.log('ref.current.dataset.id',ref.current.dataset.id);
        console.log('event.target.dataset.id',event.target.dataset.id);
        return;
      }

      handler(event);
    };
    document.addEventListener('click', listener, true);

    return () => {
      document.removeEventListener('click', listener, true);
    };
  }, [ref, handler]);
}
