import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Brain, ArrowLeft, Eye, EyeOff } from 'lucide-react';

interface FormData {
  email: string;
  password: string;
}

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
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
        const { error } = await supabase.auth.signInWithPassword({
          email: data.email,
          password: data.password,
        });
        
        if (error) throw error;
        
        toast({
          title: "Welcome back!",
          description: "Successfully signed in to AI Academy",
        });
        navigate('/dashboard');
      } else {
        const redirectUrl = `${window.location.origin}/`;
        const { error } = await supabase.auth.signUp({
          email: data.email,
          password: data.password,
          options: {
            emailRedirectTo: redirectUrl
          }
        });
        
        if (error) throw error;
        
        toast({
          title: "Account Created!",
          description: "Please check your email to verify your account.",
        });
      }
    } catch (error: any) {
      console.error('Auth error:', error);
      let errorMessage = "An error occurred. Please try again.";
      
      if (error.message?.includes('Invalid login credentials')) {
        errorMessage = "Invalid email or password.";
      } else if (error.message?.includes('User already registered')) {
        errorMessage = "An account already exists with this email.";
      } else if (error.message?.includes('Password should be')) {
        errorMessage = "Password should be at least 6 characters.";
      } else if (error.message?.includes('Invalid email')) {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex">
      {/* Left Side - Hero Section */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-600/20 via-gray-800/10 to-transparent"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gray-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 right-20 w-48 h-48 bg-gray-400/20 rounded-full blur-xl"></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-start p-16 text-white">
          {/* Logo */}
          <div className="flex items-center mb-12">
            <div className="w-14 h-14 bg-gradient-to-br from-gray-400 to-gray-600 rounded-2xl flex items-center justify-center mr-4 shadow-2xl">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
              AI Academy
            </div>
          </div>
          
          {/* Main Content */}
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Master the
              <br />
              <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
                Future of AI
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Join thousands of learners mastering artificial intelligence with hands-on courses designed by industry experts.
            </p>
            
            {/* Features */}
            <div className="space-y-6">
              <div className="flex items-center text-gray-300">
                <div className="w-3 h-3 bg-gradient-to-r from-gray-400 to-white rounded-full mr-4"></div>
                <span className="text-lg">Expert-designed curriculum</span>
              </div>
              <div className="flex items-center text-gray-300">
                <div className="w-3 h-3 bg-gradient-to-r from-gray-400 to-white rounded-full mr-4"></div>
                <span className="text-lg">Real-world projects</span>
              </div>
              <div className="flex items-center text-gray-300">
                <div className="w-3 h-3 bg-gradient-to-r from-gray-400 to-white rounded-full mr-4"></div>
                <span className="text-lg">Industry certifications</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-xl flex items-center justify-center mr-3">
              <Brain className="h-7 w-7 text-white" />
            </div>
            <div className="text-2xl font-bold text-white">AI Academy</div>
          </div>

          {/* Back to website link */}
          <div className="flex justify-between items-center mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center text-gray-400 hover:text-white transition-colors text-sm"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to website
            </Link>
          </div>

          {/* Form Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              {isLogin ? 'Welcome back' : 'Create account'}
            </h2>
            <p className="text-gray-400">
              {isLogin ? (
                <>
                  Don&apos;t have an account?{' '}
                  <button
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-gray-300 hover:text-white font-medium"
                  >
                    Sign up
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-gray-300 hover:text-white font-medium"
                  >
                    Log in
                  </button>
                </>
              )}
            </p>
          </div>

          {/* Auth Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-300 text-sm font-medium">
                Email address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-gray-500 focus:ring-gray-500/20 h-12 backdrop-blur-sm"
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email address'
                  }
                })}
              />
              {errors.email && (
                <p className="text-sm text-red-400">{errors.email.message}</p>
              )}
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-300 text-sm font-medium">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-gray-500 focus:ring-gray-500/20 h-12 pr-12 backdrop-blur-sm"
                  {...register('password', { 
                    required: 'Password is required',
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters'
                    }
                  })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-sm text-red-400">{errors.password.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900 text-white font-medium rounded-lg transition-all duration-200 shadow-xl"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {isLogin ? 'Signing in...' : 'Creating account...'}
                </>
              ) : (
                isLogin ? 'Sign in' : 'Create account'
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;