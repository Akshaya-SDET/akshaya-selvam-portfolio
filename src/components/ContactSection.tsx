
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Github, Linkedin, Mail, MapPin, PhoneCall } from 'lucide-react';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-qa-600" />,
      title: 'Email',
      details: 'contact@akshayaselvam.com',
      link: 'mailto:contact@akshayaselvam.com'
    },
    {
      icon: <MapPin className="h-5 w-5 text-qa-600" />,
      title: 'Location',
      details: 'San Francisco, California',
      link: '#'
    },
    {
      icon: <PhoneCall className="h-5 w-5 text-qa-600" />,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      url: 'https://github.com/aksh0607',
      name: 'GitHub'
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      url: 'https://www.linkedin.com/in/akshaya-selvam-382a67212/',
      name: 'LinkedIn'
    }
  ];

  return (
    <section id="contact" className="section-container bg-gradient-to-b from-white to-sky-50">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-subtitle">
        Have a question or want to work together? Feel free to reach out!
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="John Doe" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="john@example.com" 
                    required 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input 
                  id="subject" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  placeholder="How can I help you?" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder="Write your message here..." 
                  rows={5} 
                  required 
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <h3 className="text-xl font-semibold">Contact Information</h3>
          <div className="space-y-4">
            {contactInfo.map((item, index) => (
              <a 
                key={index}
                href={item.link}
                className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-md transition-colors"
              >
                <div className="mt-0.5">{item.icon}</div>
                <div>
                  <h4 className="font-medium">{item.title}</h4>
                  <p className="text-muted-foreground">{item.details}</p>
                </div>
              </a>
            ))}
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-3 rounded-full shadow-sm hover:shadow transition-shadow border border-gray-100"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
