
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { User, LogOut, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "AI Skill Assessment", path: "/assessment" },
    { name: "Readiness Test", path: "/readiness-test" },
    { name: "Contact", path: "/contact" },
  ];

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                to="/"
                className="text-2xl font-bold text-foreground hover:text-primary transition-colors duration-200"
                onClick={closeMenu}
              >
                AI Academy
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={cn(
                      "px-3 py-2 text-sm font-medium transition-all duration-200 rounded-md",
                      location.pathname === item.path
                        ? "text-primary bg-accent"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Auth Section */}
            <div className="hidden md:flex items-center space-x-4">
              <ThemeToggle />
              {user ? (
                <div className="flex items-center space-x-4">
                  <Link to="/dashboard">
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-200">
                      <User className="w-4 h-4 mr-2" />
                      Dashboard
                    </Button>
                  </Link>
                  <Button 
                    onClick={handleLogout} 
                    variant="outline" 
                    size="sm"
                    className="hover:bg-destructive/10 hover:text-destructive hover:border-destructive transition-all duration-200"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </Button>
                </div>
              ) : (
                <Link to="/auth">
                  <Button size="sm" className="hover:scale-105 transition-transform duration-200">
                    Sign In
                  </Button>
                </Link>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-muted-foreground hover:text-foreground focus:outline-none p-2 rounded-md hover:bg-accent transition-all duration-200"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        )}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={closeMenu}
                className={cn(
                  "block px-3 py-3 text-base font-medium transition-all duration-200 w-full text-left rounded-md",
                  location.pathname === item.path
                    ? "text-primary bg-accent border-l-4 border-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                )}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Auth */}
            <div className="pt-4 border-t border-border mt-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-muted-foreground">Theme</span>
                <ThemeToggle />
              </div>
              {user ? (
                <div className="space-y-2">
                  <Link
                    to="/dashboard"
                    onClick={closeMenu}
                    className="flex items-center px-3 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-all duration-200"
                  >
                    <User className="w-5 h-5 mr-3" />
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      closeMenu();
                    }}
                    className="flex items-center w-full text-left px-3 py-3 text-base font-medium text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-md transition-all duration-200"
                  >
                    <LogOut className="w-5 h-5 mr-3" />
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  to="/auth"
                  onClick={closeMenu}
                  className="block px-3 py-3 text-base font-medium bg-primary text-primary-foreground rounded-md text-center hover:bg-primary/90 transition-colors duration-200"
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-20 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}
    </>
  );
};
