
export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-24 overflow-hidden font-poppins">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-purple-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-indigo-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Master the Future of
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block mt-2">
              Artificial Intelligence
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-inter">
            From beginner-friendly introductions to advanced deep learning concepts, 
            AI Academy by AK provides comprehensive, hands-on education in artificial intelligence, 
            machine learning, and emerging AI technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20">
            <button
              onClick={() => scrollToSection("courses")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-2xl text-lg font-semibold hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25"
            >
              Explore Courses
            </button>
            <button
              onClick={() => scrollToSection("assessments")}
              className="border-2 border-blue-600 text-blue-600 px-12 py-4 rounded-2xl text-lg font-semibold hover:bg-blue-600 hover:text-white hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-blue-500/20"
            >
              Take Assessment
            </button>
          </div>

          {/* Enhanced Stats */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-scale-in">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">50+</div>
              <div className="text-gray-600 font-medium text-lg">Expert-Designed Courses</div>
            </div>
            <div className="text-center bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-scale-in" style={{animationDelay: '0.2s'}}>
              <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">10,000+</div>
              <div className="text-gray-600 font-medium text-lg">Students Trained</div>
            </div>
            <div className="text-center bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-scale-in" style={{animationDelay: '0.4s'}}>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent mb-3">95%</div>
              <div className="text-gray-600 font-medium text-lg">Job Placement Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
