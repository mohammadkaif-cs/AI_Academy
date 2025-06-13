
export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About AI Academy by AK
            </h2>
            <div className="space-y-6 text-gray-700">
              <p className="text-lg">
                AI Academy by AK was founded with a clear mission: to democratize artificial intelligence 
                education and make cutting-edge AI knowledge accessible to learners worldwide. In an era 
                where AI is reshaping every industry, we believe that quality education should be the 
                bridge between complex AI concepts and practical, real-world applications.
              </p>
              
              <p>
                Our academy stands out through its commitment to hands-on learning, industry-relevant 
                content, and personalized guidance. Unlike traditional academic approaches that focus 
                solely on theory, we emphasize practical implementation, ensuring our students can 
                immediately apply their knowledge to solve real business problems and create innovative solutions.
              </p>
              
              <p>
                Founded by AI industry veterans with over 15 years of combined experience at leading 
                tech companies including Google, Microsoft, and OpenAI, our team brings deep technical 
                expertise and practical insights from building AI systems at scale. We've trained 
                thousands of professionals, from complete beginners to senior engineers looking to 
                specialize in AI technologies.
              </p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-700">
                To create a world where AI literacy is as fundamental as digital literacy, empowering 
                individuals and organizations to harness the transformative power of artificial intelligence 
                for positive impact.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-700">
                To provide world-class, accessible AI education that bridges the gap between academic 
                theory and industry practice, preparing learners for successful careers in the AI-driven 
                economy of tomorrow.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What Makes Us Unique</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Industry-designed curriculum updated quarterly</li>
                <li>• Hands-on projects with real datasets</li>
                <li>• Personalized learning paths and mentorship</li>
                <li>• Direct connections to AI job opportunities</li>
                <li>• Community of 10,000+ AI practitioners</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
