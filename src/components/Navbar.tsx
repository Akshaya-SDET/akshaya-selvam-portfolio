
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X, Download } from 'lucide-react';

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

  const handleDownloadResume = () => {
    // LinkedIn resume URL - replace with your actual LinkedIn resume URL
    const resumeUrl = "https://www.linkedin.com/in/akshaya-selvam/overlay/1635538577488/single-media-viewer/?profileId=ACoAADUGzYMB-RYe3kNlizc1BtJaZGYGmvs5qCM";
    
    // Create an anchor element and set properties
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.target = '_blank';
    link.download = 'Akshaya_Selvam_Resume.pdf';
    
    // Append to the document, click it, and remove it
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
            <Button 
              variant="outline" 
              onClick={handleDownloadResume}
              className="flex items-center gap-2"
            >
              <Download size={16} />
              Download Resume
            </Button>
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
            <Button 
              variant="outline" 
              onClick={handleDownloadResume}
              className="w-full flex items-center justify-center gap-2"
            >
              <Download size={16} />
              Download Resume
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
