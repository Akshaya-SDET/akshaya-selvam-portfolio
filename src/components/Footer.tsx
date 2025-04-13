
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-qa-700">Akshaya Selvam</h3>
            <p className="mt-2 text-gray-600">
              QA Engineer & Automation Specialist with expertise in building robust test frameworks.
            </p>
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://github.com/aksh0607" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-qa-600 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/akshaya-selvam-382a67212/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-qa-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:contact@akshayaselvam.com" 
                className="text-gray-600 hover:text-qa-600 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-qa-600 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 hover:text-qa-600 transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-600 hover:text-qa-600 transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-600 hover:text-qa-600 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-qa-600 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-qa-600 transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  download="Akshaya_Selvam_CV.pdf" 
                  className="text-gray-600 hover:text-qa-600 transition-colors"
                >
                  Resume
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/aksh0607" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-qa-600 transition-colors"
                >
                  GitHub Repositories
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-qa-600 transition-colors"
                >
                  Certifications
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>© {currentYear} Akshaya Selvam. All rights reserved.</p>
          <p className="mt-2">
            Designed and built with passion for quality.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
