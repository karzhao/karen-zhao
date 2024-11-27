//import Link from 'next/link';
import React from 'react';

// Type definition for the navigation item
interface NavItem {
  title: string;
  url: string;
}

const NavigationBar: React.FC = () => {
  const navItems: NavItem[] = [
    { title: 'Home', url: '#Hero' },
    { title: 'About', url: '#about' },
    { title: 'Projects', url: '#Projects' },
  ];

  return (
    <nav className="fixed top-0 h-10 text-sm flex justify-center w-full z-50 bg-teal-950">
      {navItems.map((item) => (
        <a
          key={item.url}
          href={item.url}
          className="rounded-lg px-3 py-2 text-slate-50 font-medium hover:bg-slate-100 hover:text-slate-900 opacity-100"
        >
          {item.title}
        </a>
      ))}
    </nav>
  );
};

export default NavigationBar;
