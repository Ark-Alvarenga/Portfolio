export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface FeatureDemo {
  id: string;
  title: string;
  description: string;
  type: 'auth' | 'api' | 'chat' | 'upload';
  techStack: string[];
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
}

export interface UploadState {
  isUploading: boolean;
  progress: number;
  isComplete: boolean;
  fileName?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
