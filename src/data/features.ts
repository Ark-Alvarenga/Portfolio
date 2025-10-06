import { FeatureDemo } from '../types';

export const features: FeatureDemo[] = [
  {
    id: 'auth',
    title: 'Authentication Demo',
    description: 'JWT Auth + Context API simulation with login/logout functionality',
    type: 'auth',
    techStack: ['JWT', 'Context API']
  },
  {
    id: 'api',
    title: 'API Fetch Demo',
    description: 'Real-time data fetching with live sports API integration',
    type: 'api',
    techStack: ['REST API', 'Real-time Data']
  },
  {
    id: 'chat',
    title: 'AI Chat Demo',
    description: 'GPT-style chat interface with mock LLM responses',
    type: 'chat',
    techStack: ['ChatGPT', 'AI/ML']
  },
  {
    id: 'upload',
    title: 'AWS Upload Demo',
    description: 'File upload simulation to AWS S3 with progress tracking',
    type: 'upload',
    techStack: ['AWS S3', 'File Upload']
  }
];
