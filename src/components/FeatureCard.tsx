import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  RefreshCw, 
  Send, 
  Upload,
  User,
  MessageCircle,
  Database,
  Cloud
} from 'lucide-react';
import { FeatureDemo, UploadState } from '../types';
import { useAuth } from '../hooks/useAuth';
import { useChat } from '../hooks/useChat';

interface FeatureCardProps {
  feature: FeatureDemo;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  const { authState, login, logout } = useAuth();
  const { messages, sendMessage } = useChat();
  const [uploadState, setUploadState] = useState<UploadState>({
    isUploading: false,
    progress: 0,
    isComplete: false
  });
  const [chatInput, setChatInput] = useState('');
  const [email, setEmail] = useState('demo@example.com');
  const [password, setPassword] = useState('password');
  const [apiLoading, setApiLoading] = useState(false);
  const [sportsData, setSportsData] = useState<any[]>([]);

  const handleLogin = async () => {
    await login(email, password);
  };

  const handleSendMessage = () => {
    if (chatInput.trim()) {
      sendMessage(chatInput);
      setChatInput('');
    }
  };

  const handleUpload = () => {
    setUploadState({ isUploading: true, progress: 0, isComplete: false, fileName: 'document.pdf' });
    
    const interval = setInterval(() => {
      setUploadState(prev => {
        const newProgress = prev.progress + 15;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setUploadState(prev => ({ ...prev, isUploading: false, isComplete: true }));
          }, 500);
          return { ...prev, progress: 100 };
        }
        return { ...prev, progress: newProgress };
      });
    }, 300);
  };

  const handleFetchSports = () => {
    setApiLoading(true);
    setSportsData([]);
    
    setTimeout(() => {
      setApiLoading(false);
      setSportsData([
        { homeTeam: 'Manchester United', awayTeam: 'Liverpool', score: '2-1', league: 'Premier League', status: 'Live', time: "75'" },
        { homeTeam: 'Barcelona', awayTeam: 'Real Madrid', score: '1-1', league: 'La Liga', status: 'Live', time: "82'" },
        { homeTeam: 'Bayern Munich', awayTeam: 'Dortmund', score: '3-0', league: 'Bundesliga', status: 'FT', time: "90'" }
      ]);
    }, 1500);
  };

  const renderFeatureContent = () => {
    switch (feature.type) {
      case 'auth':
        return (
          <div className="space-y-4">
            {!authState.isAuthenticated ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="demo@example.com" 
                    className="w-full px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    data-testid="auth-email-input"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Password</label>
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••" 
                    className="w-full px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    data-testid="auth-password-input"
                  />
                </div>
                <motion.button 
                  className="w-full px-6 py-3 font-semibold text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors"
                  onClick={handleLogin}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-testid="auth-login-button"
                >
                  Sign In
                </motion.button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <Check className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold">{authState.user?.name}</p>
                    <p className="text-sm text-muted-foreground">{authState.user?.email}</p>
                  </div>
                </div>
                <motion.button 
                  className="w-full px-6 py-3 font-semibold text-foreground bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                  onClick={logout}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-testid="auth-logout-button"
                >
                  Sign Out
                </motion.button>
              </div>
            )}
            <div className="mt-4 p-3 bg-muted/30 rounded-lg">
              <p className="text-xs font-mono text-muted-foreground break-all">
                Token: <span className="text-primary">{authState.token ? authState.token.substring(0, 20) + '...' : 'eyJhbGc...'}</span>
              </p>
            </div>
          </div>
        );

      case 'api':
        return (
          <div className="space-y-4">
            <motion.button
              className="w-full px-6 py-3 font-semibold text-primary-foreground bg-gradient-to-r from-primary to-accent rounded-lg hover:shadow-lg transition-all"
              onClick={handleFetchSports}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-testid="api-fetch-button"
            >
              <span className="flex items-center justify-center gap-2">
                <RefreshCw className={`w-5 h-5 ${apiLoading ? 'animate-spin' : ''}`} />
                Fetch Live Sports Data
              </span>
            </motion.button>
            
            {apiLoading && (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
              </div>
            )}
            
            <div className="space-y-2" data-testid="api-results">
              {sportsData.map((match, index) => (
                <motion.div
                  key={index}
                  className="p-3 sm:p-4 bg-secondary/50 border border-border rounded-lg hover:border-primary/30 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-center gap-2">
                    <div className="space-y-1 flex-1 min-w-0">
                      <p className="font-semibold text-sm truncate">{match.homeTeam}</p>
                      <p className="text-xs text-muted-foreground truncate">{match.league}</p>
                    </div>
                    <div className="text-center px-2 flex-shrink-0">
                      <p className="text-xl sm:text-2xl font-bold gradient-text">{match.score}</p>
                      <p className="text-xs text-muted-foreground">{match.status}</p>
                    </div>
                    <div className="space-y-1 text-right flex-1 min-w-0">
                      <p className="font-semibold text-sm truncate">{match.awayTeam}</p>
                      <p className="text-xs text-muted-foreground">{match.time}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'chat':
        return (
          <div className="space-y-4">
            <div className="h-64 overflow-y-auto space-y-3 p-4 bg-secondary/30 rounded-lg" data-testid="chat-messages">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className={`max-w-[80%] px-4 py-2 rounded-lg break-words ${
                    message.sender === 'user'
                      ? 'bg-primary text-primary-foreground rounded-tr-none'
                      : 'bg-accent/20 border border-accent/30 rounded-tl-none'
                  }`}>
                    <p className="text-sm break-words">{message.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="flex gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask me anything..."
                className="flex-1 px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                data-testid="chat-input"
              />
              <motion.button
                className="px-6 py-2 font-semibold text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors"
                onClick={handleSendMessage}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid="chat-send-button"
              >
                <Send className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        );

      case 'upload':
        return (
          <div className="space-y-4">
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
              <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <p className="font-medium mb-1">Click to upload or drag and drop</p>
              <p className="text-sm text-muted-foreground">PNG, JPG, PDF up to 10MB</p>
            </div>
            
            {uploadState.isUploading && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{uploadState.fileName}</span>
                  <span className="text-primary">{uploadState.progress}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                  <motion.div 
                    className="bg-gradient-to-r from-primary to-accent h-full rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${uploadState.progress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            )}
            
            {uploadState.isComplete && (
              <motion.div
                className="p-4 bg-primary/10 border border-primary/20 rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <Check className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold">Upload Complete</p>
                    <p className="text-sm text-muted-foreground">File uploaded to S3 bucket</p>
                  </div>
                </div>
              </motion.div>
            )}
            
            <motion.button
              className="w-full px-6 py-3 font-semibold text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
              onClick={handleUpload}
              disabled={uploadState.isUploading}
              whileHover={{ scale: uploadState.isUploading ? 1 : 1.02 }}
              whileTap={{ scale: uploadState.isUploading ? 1 : 0.98 }}
              data-testid="upload-button"
            >
              Upload to AWS S3
            </motion.button>
          </div>
        );

      default:
        return null;
    }
  };

  const getIcon = () => {
    switch (feature.type) {
      case 'auth': return <User className="w-6 h-6 text-primary" />;
      case 'api': return <Database className="w-6 h-6 text-accent" />;
      case 'chat': return <MessageCircle className="w-6 h-6 text-primary" />;
      case 'upload': return <Cloud className="w-6 h-6 text-accent" />;
      default: return null;
    }
  };

  const getBadgeColor = () => {
    switch (feature.type) {
      case 'auth': return 'bg-primary/10 text-primary';
      case 'api': return 'bg-accent/10 text-accent';
      case 'chat': return 'bg-primary/10 text-primary';
      case 'upload': return 'bg-accent/10 text-accent';
      default: return 'bg-secondary/50 text-foreground';
    }
  };

  return (
    <motion.div
      className="bg-card border border-border rounded-xl p-4 sm:p-6 space-y-4 overflow-hidden"
      whileHover={{ y: -4, boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      data-testid={`feature-card-${feature.type}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <div className="flex items-center gap-3 min-w-0">
          {getIcon()}
          <h3 className="text-xl sm:text-2xl font-bold truncate">{feature.title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {feature.techStack.map((tech, index) => (
            <span key={index} className={`px-3 py-1 text-xs font-medium ${getBadgeColor()} rounded-full whitespace-nowrap`}>
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      {renderFeatureContent()}
    </motion.div>
  );
};

export default FeatureCard;
