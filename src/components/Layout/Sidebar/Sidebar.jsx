import React, { useEffect, useState } from 'react';
import SidebarLarge from './SidebarLarge';
import SidebarSmall from './SidebarSmall';

export default function Sidebar({ sidebar }) {
  const [resize, setResize] = useState(window.innerWidth);
  useEffect(() => {
    const listener = () => {
      setResize(window.innerWidth);
    };

    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, []);
  return (
    <>{resize >= 1300 ? sidebar ? <SidebarSmall /> : <SidebarLarge /> : resize >= 792 ? <SidebarSmall /> : null}</>
  );
}
