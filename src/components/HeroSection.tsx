
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative pt-20 lg:pt-32 overflow-hidden bg-gradient-to-b from-white to-sky-50">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                QA Engineer &<br />
                <span className="text-qa-600">Automation Specialist</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-2xl">
                I build robust test automation frameworks and ensure quality at every step of the software development lifecycle.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <a href="#projects">
                  View My Work
                  <ArrowRight size={18} />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="gap-2">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            <div className="flex gap-4">
              <a 
                href="https://github.com/aksh0607" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-qa-600 transition-colors"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/akshaya-selvam-382a67212/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-qa-600 transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <div className="relative animate-slide-up delay-200">
            <div className="aspect-square max-w-md mx-auto lg:ml-auto lg:mr-0 bg-gradient-to-br from-qa-100 to-qa-200 rounded-full flex items-center justify-center">
              <div className="w-[90%] h-[90%] rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center p-8">
                  <h3 className="text-2xl font-bold text-qa-700">7+ Years</h3>
                  <p className="text-gray-600 mt-2">Professional Experience in Quality Assurance</p>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div>
                      <div className="font-semibold text-qa-600">Selenium</div>
                      <div className="text-sm text-gray-600">Test Automation</div>
                    </div>
                    <div>
                      <div className="font-semibold text-qa-600">RestAssured</div>
                      <div className="text-sm text-gray-600">API Testing</div>
                    </div>
                    <div>
                      <div className="font-semibold text-qa-600">Java</div>
                      <div className="text-sm text-gray-600">Programming</div>
                    </div>
                    <div>
                      <div className="font-semibold text-qa-600">Frameworks</div>
                      <div className="text-sm text-gray-600">Development</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
