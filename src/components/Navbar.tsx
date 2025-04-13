
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <nav
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        scrolled ? 'bg-white/90 shadow-sm backdrop-blur-sm py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-qa-700">
              Akshaya Selvam
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-qa-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <Button
                asChild
                className="ml-3"
                size="sm"
              >
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost" 
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-qa-600 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button
              asChild
              className="w-full mt-2"
              size="sm"
            >
              <a href="#contact" onClick={() => setIsOpen(false)}>Get In Touch</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
