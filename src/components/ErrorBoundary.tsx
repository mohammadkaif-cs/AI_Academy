
import React from 'react';

// A basic error boundary to show errors instead of blank screen
export class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean, error?: any}> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // You can log error details here if needed
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black/90 flex flex-col items-center justify-center text-white">
          <h1 className="text-2xl font-bold mb-2">Something went wrong.</h1>
          <p>{this.state.error?.message || "An error occurred."}</p>
        </div>
      );
    }
    return this.props.children;
  }
}
