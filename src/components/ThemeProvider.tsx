import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'beach';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Detecta o tema salvo ou fallback para prefers-color-scheme
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const storedTheme = localStorage.getItem('theme') as Theme | null;
  const initialTheme: Theme = storedTheme ?? (prefersDark ? 'dark' : 'light');

  const [theme, setTheme] = useState<Theme>(initialTheme);

  const applyTheme = (themeToApply: Theme) => {
    document.documentElement.classList.remove('light', 'dark', 'beach');
    document.documentElement.classList.add(themeToApply);
  };

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem('theme', theme); // persiste no localStorage
  }, [theme]);

  const toggleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('beach');
    else setTheme('light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
