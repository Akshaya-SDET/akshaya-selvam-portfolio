
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Code, Database, GitBranch, Layout, Settings } from 'lucide-react';

const SkillsSection = () => {
  const technicalSkills = [
    { name: 'Selenium WebDriver', level: 95 },
    { name: 'Java Programming', level: 90 },
    { name: 'RestAssured API Testing', level: 88 },
    { name: 'Test Automation Frameworks', level: 92 },
    { name: 'Manual Testing', level: 95 },
    { name: 'API Testing', level: 90 },
    { name: 'Git Version Control', level: 85 },
    { name: 'SQL & Databases', level: 82 },
  ];

  const skillCategories = [
    {
      title: 'Automation Testing',
      icon: <Code className="h-10 w-10 text-qa-600" />,
      skills: ['Selenium WebDriver', 'Test Framework Architecture', 'Page Object Model', 'Data-Driven Testing']
    },
    {
      title: 'API Testing',
      icon: <Settings className="h-10 w-10 text-qa-600" />,
      skills: ['RestAssured', 'Postman', 'API Automation', 'Swagger/OpenAPI']
    },
    {
      title: 'Programming',
      icon: <Layout className="h-10 w-10 text-qa-600" />,
      skills: ['Java', 'TestNG', 'Cucumber', 'Maven/Gradle']
    },
    {
      title: 'Tools & Technologies',
      icon: <GitBranch className="h-10 w-10 text-qa-600" />,
      skills: ['Jenkins CI/CD', 'Git', 'JIRA', 'Docker Basics']
    },
    {
      title: 'Database Testing',
      icon: <Database className="h-10 w-10 text-qa-600" />,
      skills: ['SQL', 'Database Testing', 'JDBC Connection', 'Data Validation']
    },
    {
      title: 'Quality Assurance',
      icon: <CheckCircle className="h-10 w-10 text-qa-600" />,
      skills: ['Test Planning', 'Test Strategy', 'Defect Management', 'Test Documentation']
    }
  ];

  return (
    <section id="skills" className="section-container bg-gradient-to-b from-sky-50 to-white">
      <h2 className="section-title">Skills & Expertise</h2>
      <p className="section-subtitle">
        My technical skills and areas of expertise in quality assurance and test automation
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div>
          <h3 className="text-xl font-semibold mb-6">Technical Proficiency</h3>
          <div className="space-y-6">
            {technicalSkills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6">Key Strengths</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card className="bg-gradient-to-br from-qa-100 to-white border-qa-200">
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-2">Test Framework Architecture</h4>
                <p className="text-sm text-muted-foreground">
                  Designing scalable and maintainable automation frameworks
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-qa-100 to-white border-qa-200">
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-2">End-to-End Testing</h4>
                <p className="text-sm text-muted-foreground">
                  Comprehensive testing across all application layers
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-qa-100 to-white border-qa-200">
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-2">CI/CD Integration</h4>
                <p className="text-sm text-muted-foreground">
                  Seamless integration of tests in CI/CD pipelines
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-qa-100 to-white border-qa-200">
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-2">Problem Solving</h4>
                <p className="text-sm text-muted-foreground">
                  Analytical approach to complex testing challenges
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {skillCategories.map((category) => (
          <Card key={category.title} className="skill-card">
            <CardContent className="p-6">
              <div className="mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-qa-500"></div>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
