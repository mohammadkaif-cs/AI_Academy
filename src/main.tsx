
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ErrorBoundary } from "./components/ErrorBoundary";
import { ThemeProvider } from './components/ThemeProvider'

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <App />
    </ThemeProvider>
  </ErrorBoundary>
);
