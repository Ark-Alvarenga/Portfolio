import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Apostaí.app',
    description: 'Full-stack sports betting platform with real-time data integration, AI-powered insights, and secure authentication.',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    techStack: ['React', 'Next.js', 'JWT Auth', 'Context API', 'LLM'],
    githubUrl: 'https://github.com/Ark-Alvarenga',
    featured: true
  },
  {
    id: '2',
    title: 'E-Commerce Platform',
    description: 'Modern online store with Stripe integration, inventory management, and real-time order tracking.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    techStack: ['TypeScript', 'Next.js', 'Stripe', 'PostgreSQL'],
    githubUrl: 'https://github.com/Ark-Alvarenga'
  },
  {
    id: '3',
    title: 'Task Manager Pro',
    description: 'Collaborative task management tool with drag-and-drop interface, team collaboration, and analytics.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    techStack: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    githubUrl: 'https://github.com/Ark-Alvarenga'
  }
];
