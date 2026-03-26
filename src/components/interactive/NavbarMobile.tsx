import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="text-amber-800 p-2 focus:outline-none"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-amber-50 shadow-lg border-t border-amber-200 flex flex-col p-4 gap-4 pb-8">
          <a href="#home" onClick={() => setIsOpen(false)} className="text-amber-900 font-bold px-4 py-2 border-l-4 border-amber-500 bg-amber-100 rounded-r">Home</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="text-amber-800 px-4 py-2 hover:bg-amber-100 rounded">About</a>
          <a href="#products" onClick={() => setIsOpen(false)} className="text-amber-800 px-4 py-2 hover:bg-amber-100 rounded">Products</a>
          <a href="#vision" onClick={() => setIsOpen(false)} className="text-amber-800 px-4 py-2 hover:bg-amber-100 rounded">Vision</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-amber-800 px-4 py-2 hover:bg-amber-100 rounded">Contact</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="mt-4 bg-amber-500 hover:bg-amber-600 text-white text-center py-3 rounded-lg font-bold shadow-md">
            Hubungi Kami
          </a>
        </div>
      )}
    </div>
  );
}
