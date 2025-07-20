import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from "react-router-dom";
import * as session from '@/utils/session';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    console.error('useAuth was called outside of AuthProvider!');
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [supabaseSession, setSupabaseSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, supabaseSession) => {
        setSupabaseSession(supabaseSession);
        setUser(supabaseSession?.user ?? null);
        setLoading(false);

        if (supabaseSession?.user) {
          // Save the session token
          if (supabaseSession.access_token) {
            session.saveToken(supabaseSession.access_token);
          }

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
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session: supabaseSession } }) => {
      setSupabaseSession(supabaseSession);
      setUser(supabaseSession?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const logout = async () => {
    await supabase.auth.signOut();
    session.clearToken();
    session.remove('last_visited_path');
    navigate('/auth');
  };

  const value = {
    user,
    session: supabaseSession,
    loading,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};