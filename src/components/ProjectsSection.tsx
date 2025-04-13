
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'E-commerce Test Framework',
      description: 'A comprehensive Selenium-based test automation framework for e-commerce applications using Page Object Model design pattern.',
      tags: ['Selenium', 'Java', 'TestNG', 'Maven', 'Jenkins'],
      githubUrl: 'https://github.com/aksh0607',
      demoUrl: '#'
    },
    {
      title: 'RestAssured API Framework',
      description: 'A robust API testing framework built with RestAssured and Java to automate REST API testing with data-driven capabilities.',
      tags: ['RestAssured', 'Java', 'TestNG', 'Maven', 'API Testing'],
      githubUrl: 'https://github.com/aksh0607',
      demoUrl: '#'
    },
    {
      title: 'Mobile App Testing Suite',
      description: 'An Appium-based test automation solution for cross-platform mobile application testing with reporting capabilities.',
      tags: ['Appium', 'Java', 'Mobile Testing', 'Cross-platform'],
      githubUrl: 'https://github.com/aksh0607',
      demoUrl: '#'
    },
    {
      title: 'CI/CD Pipeline for QA',
      description: 'Integrated test automation in CI/CD pipeline with Jenkins, allowing automated test execution and reporting.',
      tags: ['Jenkins', 'CI/CD', 'Docker', 'Test Automation'],
      githubUrl: 'https://github.com/aksh0607',
      demoUrl: '#'
    },
    {
      title: 'Database Testing Tool',
      description: 'Custom utility for database validation and testing using JDBC and SQL to verify data integrity.',
      tags: ['JDBC', 'SQL', 'Java', 'Database Testing'],
      githubUrl: 'https://github.com/aksh0607',
      demoUrl: '#'
    },
    {
      title: 'Test Reporting Dashboard',
      description: 'A custom dashboard to visualize test results and metrics, providing insights into test coverage and quality.',
      tags: ['HTML/CSS', 'JavaScript', 'Data Visualization', 'Reporting'],
      githubUrl: 'https://github.com/aksh0607',
      demoUrl: '#'
    }
  ];

  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">GitHub Projects</h2>
      <p className="section-subtitle">
        A selection of my open-source projects and contributions on GitHub
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col h-full hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                  <Github size={16} />
                  <span>Code</span>
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                  <ExternalLink size={16} />
                  <span>Demo</span>
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-muted-foreground mb-4">
          Explore more of my projects and contributions on GitHub
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
