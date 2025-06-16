
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white py-16 border-t border-gray-700 mt-auto font-poppins relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.02\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"30\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Academy by AK
            </h3>
            <p className="text-gray-300 mb-8 max-w-md leading-relaxed text-lg font-inter">
              Empowering the next generation of AI professionals through comprehensive, 
              hands-on education in artificial intelligence and machine learning.
            </p>
            <div className="flex space-x-6">
              <a 
                href="#" 
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-125 transform"
                aria-label="Twitter"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-125 transform"
                aria-label="LinkedIn"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-125 transform"
                aria-label="GitHub"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="#home" 
                  className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block font-inter"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block font-inter"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#courses" 
                  className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block font-inter"
                >
                  Courses
                </a>
              </li>
              <li>
                <a 
                  href="#assessments" 
                  className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block font-inter"
                >
                  Assessments
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block font-inter"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Resources</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block font-inter"
                >
                  Blog
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block font-inter"
                >
                  Career Guide
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block font-inter"
                >
                  Community
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block font-inter"
                >
                  Support
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block font-inter"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm font-inter">
            © {currentYear} AI Academy by AK. All rights reserved. |{" "}
            <a 
              href="#" 
              className="hover:text-white ml-1 transition-colors duration-300 hover:underline underline-offset-2"
            >
              Privacy Policy
            </a>{" "}
            |{" "}
            <a 
              href="#" 
              className="hover:text-white ml-1 transition-colors duration-300 hover:underline underline-offset-2"
            >
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
