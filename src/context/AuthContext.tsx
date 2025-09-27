// src/context/AuthContext.tsx

import React, { createContext, useState, useContext, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

// Define the shape of the user object and the context
interface User {
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, pass: string) => Promise<void>;
  logout: () => void;
}

// Create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Define the provider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  // --- MOCK LOGIN FUNCTION ---
  // In a real app, this would make an API call.
  // Here, we simulate it with hardcoded credentials.
  const login = async (email: string, pass: string) => {
    // Check against our mock admin user
    if (email === 'admin@schooldekho.com' && pass === 'password123') {
      const mockUser: User = { email: email, name: 'Admin User' };
      setUser(mockUser);
      navigate('/admin'); // Redirect to admin page on success
    } else {
      // If credentials don't match, throw an error
      throw new Error('Invalid email or password');
    }
  };

  // --- LOGOUT FUNCTION ---
  const logout = () => {
    setUser(null);
    navigate('/login'); // Redirect to login page on logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// --- CUSTOM HOOK ---
// This makes it easy to use the context in any component
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};