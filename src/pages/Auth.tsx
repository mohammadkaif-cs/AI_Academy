
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '@/lib/firebase';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, Lock, Loader2, Brain, ArrowLeft } from 'lucide-react';

interface FormData {
  email: string;
  password: string;
}

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  // Redirect if already logged in
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, data.email, data.password);
        toast({
          title: "Welcome back!",
          description: "Successfully signed in to AI Academy",
        });
        navigate('/dashboard');
      } else {
        await createUserWithEmailAndPassword(auth, data.email, data.password);
        toast({
          title: "Account Created!",
          description: "Welcome to AI Academy by AK!",
        });
        navigate('/dashboard');
      }
    } catch (error: any) {
      console.error('Auth error:', error);
      let errorMessage = "An error occurred. Please try again.";
      
      if (error.code === 'auth/user-not-found') {
        errorMessage = "No account found with this email.";
      } else if (error.code === 'auth/wrong-password') {
        errorMessage = "Incorrect password.";
      } else if (error.code === 'auth/email-already-in-use') {
        errorMessage = "An account already exists with this email.";
      } else if (error.code === 'auth/weak-password') {
        errorMessage = "Password should be at least 6 characters.";
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = "Invalid email address.";
      }
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    }
    setLoading(false);
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    
    try {
      const result = await signInWithPopup(auth, googleProvider);
      
      toast({
        title: "Welcome!",
        description: "Successfully signed in with Google",
      });
      navigate('/dashboard');
    } catch (error: any) {
      console.error('Google Sign-In error:', error);
      
      let errorMessage = "Google Sign-In failed. Please try again.";
      
      if (error.code === 'auth/popup-blocked') {
        errorMessage = "Popup was blocked. Please allow popups and try again.";
      } else if (error.code === 'auth/popup-closed-by-user') {
        errorMessage = "Sign-in was cancelled.";
      } else if (error.code === 'auth/unauthorized-domain') {
        errorMessage = "This domain is not authorized for Google Sign-In.";
      } else if (error.code === 'auth/network-request-failed') {
        errorMessage = "Network error. Please check your connection.";
      }
      
      toast({
        title: "Google Sign-In Error",
        description: errorMessage,
        variant: "destructive",
      });
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
              <Brain className="h-7 w-7 text-white" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            AI Academy by AK
          </h1>
          <p className="text-gray-600 text-sm">
            {isLogin ? 'Welcome back! Sign in to continue' : 'Create your account to get started'}
          </p>
        </div>

        {/* Auth Card */}
        <Card className="shadow-xl border-0 bg-white">
          <CardHeader className="space-y-1 pb-4">
            <CardTitle className="text-xl font-semibold text-center">
              {isLogin ? 'Sign In' : 'Create Account'}
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10 h-11"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Invalid email address'
                      }
                    })}
                  />
                </div>
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="pl-10 h-11"
                    {...register('password', { 
                      required: 'Password is required',
                      minLength: {
                        value: 6,
                        message: 'Password must be at least 6 characters'
                      }
                    })}
                  />
                </div>
                {errors.password && (
                  <p className="text-sm text-red-500">{errors.password.message}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full h-11 bg-blue-600 hover:bg-blue-700"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {isLogin ? 'Signing in...' : 'Creating account...'}
                  </>
                ) : (
                  isLogin ? 'Sign In' : 'Create Account'
                )}
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">Or continue with</span>
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full h-11"
              onClick={handleGoogleSignIn}
              disabled={loading}
            >
              {loading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
              )}
              Continue with Google
            </Button>

            <div className="text-center">
              <span className="text-sm text-gray-600">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
              </span>
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="ml-1 text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </div>

            <div className="text-center">
              <Link 
                to="/" 
                className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700"
              >
                <ArrowLeft className="mr-1 h-3 w-3" />
                Back to Home
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
