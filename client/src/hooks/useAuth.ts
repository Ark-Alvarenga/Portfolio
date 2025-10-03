import { useState, useCallback } from 'react';
import { AuthState, User } from '../types';

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
    token: null
  });

  const login = useCallback((email: string, password: string) => {
    // Simulate JWT token generation
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ';
    const user: User = {
      id: '1',
      name: 'John Doe',
      email: email
    };

    setAuthState({
      isAuthenticated: true,
      user,
      token
    });

    console.log('User authenticated with JWT:', token);
    return Promise.resolve({ success: true });
  }, []);

  const logout = useCallback(() => {
    setAuthState({
      isAuthenticated: false,
      user: null,
      token: null
    });
    console.log('User logged out');
  }, []);

  return {
    authState,
    login,
    logout
  };
};
