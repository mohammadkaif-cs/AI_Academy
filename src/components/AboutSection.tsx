
export const AboutSection = () => {
  return (
    <section id="about" className="py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden font-poppins">
      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-200/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              About AI Academy by AK
            </h2>
            <div className="space-y-8 text-gray-700 font-inter">
              <p className="text-lg leading-relaxed">
                AI Academy by AK was founded with a clear mission: to democratize artificial intelligence 
                education and make cutting-edge AI knowledge accessible to learners worldwide. In an era 
                where AI is reshaping every industry, we believe that quality education should be the 
                bridge between complex AI concepts and practical, real-world applications.
              </p>
              
              <p className="leading-relaxed">
                Our academy stands out through its commitment to hands-on learning, industry-relevant 
                content, and personalized guidance. Unlike traditional academic approaches that focus 
                solely on theory, we emphasize practical implementation, ensuring our students can 
                immediately apply their knowledge to solve real business problems and create innovative solutions.
              </p>
              
              <p className="leading-relaxed">
                Founded by AI industry veterans with over 15 years of combined experience at leading 
                tech companies including Google, Microsoft, and OpenAI, our team brings deep technical 
                expertise and practical insights from building AI systems at scale. We've trained 
                thousands of professionals, from complete beginners to senior engineers looking to 
                specialize in AI technologies.
              </p>
            </div>
          </div>
          
          <div className="space-y-8 animate-scale-in">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-blue-100/50">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed font-inter">
                To create a world where AI literacy is as fundamental as digital literacy, empowering 
                individuals and organizations to harness the transformative power of artificial intelligence 
                for positive impact.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-green-100/50">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed font-inter">
                To provide world-class, accessible AI education that bridges the gap between academic 
                theory and industry practice, preparing learners for successful careers in the AI-driven 
                economy of tomorrow.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-purple-100/50">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What Makes Us Unique</h3>
              <ul className="text-gray-700 space-y-3 font-inter">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></span>
                  Industry-designed curriculum updated quarterly
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></span>
                  Hands-on projects with real datasets
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></span>
                  Personalized learning paths and mentorship
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></span>
                  Direct connections to AI job opportunities
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></span>
                  Community of 10,000+ AI practitioners
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
