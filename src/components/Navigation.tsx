'use client';

import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold text-gray-900 hover:text-emerald-600 transition-colors"
            >
              Dr. Serena Blake
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* CTA Button & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <a
              href="tel:+1234567890"
              className="hidden sm:flex items-center bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-emerald-600 hover:to-teal-700 transition-all"
            >
              <PhoneIcon className="w-4 h-4 mr-2" />
              (555) 123-4567
            </a>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
              >
                {isMenuOpen ? (
                  <XMarkIcon className="block h-6 w-6" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200 shadow-lg">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-emerald-600 block w-full text-left px-3 py-2 text-base font-medium transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-emerald-600 block w-full text-left px-3 py-2 text-base font-medium transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-emerald-600 block w-full text-left px-3 py-2 text-base font-medium transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-gray-700 hover:text-emerald-600 block w-full text-left px-3 py-2 text-base font-medium transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-emerald-600 block w-full text-left px-3 py-2 text-base font-medium transition-colors"
            >
              Contact
            </button>
            <div className="pt-2 border-t border-gray-200">
              <a
                href="tel:+1234567890"
                className="flex items-center bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-3 py-2 rounded-lg text-base font-medium hover:from-emerald-600 hover:to-teal-700 transition-all"
              >
                <PhoneIcon className="w-4 h-4 mr-2" />
                Call (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
