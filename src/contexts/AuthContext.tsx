
import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, onAuthStateChanged, signOut, getIdToken } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useNavigate } from "react-router-dom";
import * as session from '@/utils/session';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      setLoading(false);

      if (user) {
        // Get and save the Firebase ID token
        const token = await getIdToken(user, true);
        session.saveToken(token);

        // Restore last visited page (but not if on /auth)
        const lastPath = session.getLastVisited();
        if (
          window.location.pathname === "/auth" &&
          lastPath &&
          lastPath !== "/auth"
        ) {
          navigate(lastPath, { replace: true });
        }
      } else {
        // Clear token on signout
        session.clearToken();
      }
    });

    return unsubscribe;
  }, [navigate]);

  const logout = async () => {
    await signOut(auth);
    session.clearToken();
    session.remove('last_visited_path');
    // Optionally, you can redirect to /auth here if needed
  };

  const value = {
    user,
    loading,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
