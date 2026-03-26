import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#products', label: 'Products' },
  { href: '#vision', label: 'Vision' },
  { href: '#contact', label: 'Contact' },
];

export default function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('section[id]');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-amber-800 p-2 focus:outline-none"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-amber-50 shadow-lg border-t border-amber-200 flex flex-col p-4 gap-1 pb-6">
          {navLinks.map(link => {
            const id = link.href.replace('#', '');
            const isActive = activeId === id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-2 rounded text-sm transition-colors ${
                  isActive
                    ? 'text-amber-900 font-bold bg-amber-100 border-l-4 border-amber-500'
                    : 'text-amber-800 font-medium hover:bg-amber-100 border-l-4 border-transparent'
                }`}
              >
                {link.label}
              </a>
            );
          })}

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-3 bg-amber-500 hover:bg-amber-600 text-white text-center py-2.5 rounded-lg text-sm font-semibold shadow-md transition-colors"
          >
            Hubungi Kami
          </a>
        </div>
      )}
    </div>
  );
}
