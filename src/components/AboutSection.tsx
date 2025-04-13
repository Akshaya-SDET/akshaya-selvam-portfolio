
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Award, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">
        A passionate QA Engineer with expertise in building robust automation frameworks
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
        <div className="lg:col-span-2 space-y-6">
          <p className="text-lg">
            Test Automation Engineer with 7 years of experience in Selenium (Java) and RestAssured. 
            Passionate about building scalable test frameworks and improving software quality.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Button asChild variant="outline" className="gap-2">
              <a href="#" download="Akshaya_Selvam_CV.pdf">
                <FileText size={18} />
                Download Resume
              </a>
            </Button>
            <Button asChild variant="outline" className="gap-2">
              <a href="#skills">
                <Award size={18} />
                View Skills
              </a>
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Users className="mr-2 text-qa-600" size={20} />
                Professional Experience
              </h3>
              <ul className="space-y-4">
                <li>
                  <div className="font-medium">Senior QA Engineer</div>
                  <div className="text-sm text-muted-foreground">Current Role</div>
                </li>
                <li>
                  <div className="font-medium">QA Automation Specialist</div>
                  <div className="text-sm text-muted-foreground">Previous Role</div>
                </li>
                <li>
                  <div className="font-medium">QA Engineer</div>
                  <div className="text-sm text-muted-foreground">Previous Role</div>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Award className="mr-2 text-qa-600" size={20} />
                Certifications
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-qa-500"></div>
                  <span>ISTQB Certified Tester</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-qa-500"></div>
                  <span>Java Programming - Advanced</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-qa-500"></div>
                  <span>API Testing Professional</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
