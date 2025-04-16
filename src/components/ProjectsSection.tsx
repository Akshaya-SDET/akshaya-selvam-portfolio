
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">GitHub Projects</h2>
      <p className="section-subtitle">
        Explore my open-source contributions and personal projects
      </p>

      <div className="text-center mt-12">
        <p className="text-muted-foreground mb-4">
          All my projects and contributions are available on GitHub
        </p>
        <Button asChild>
          <a 
            href="https://github.com/aksh0607" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Github size={18} />
            View GitHub Profile
          </a>
        </Button>
      </div>
    </section>
  );
};

export default ProjectsSection;

