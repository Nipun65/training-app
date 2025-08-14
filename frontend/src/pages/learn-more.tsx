import React from 'react';

const LearnMorePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">About SkillBoost Academy</h1>
          <div className="text-center mb-4">
            <a 
              href="/" 
              className="inline-block px-6 py-3 bg-brand-primary text-white font-semibold rounded-lg shadow-md hover:bg-brand-primaryDark transition duration-300"
            >
              Back to Login
            </a>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-brand-primary mb-4">Welcome to Our Platform</h2>
            <p className="text-gray-600 mb-6">
              Welcome to SkillBoost Academy, your premier destination for online learning and skill development. 
              Our platform is designed to help you enhance your skills with comprehensive courses and track your progress as you learn.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              We believe that continuous learning is essential for personal and professional growth. Our mission is to 
              provide accessible, high-quality education to learners worldwide, regardless of their background or experience level.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">What We Offer</h3>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Comprehensive courses across various domains and skill levels</li>
              <li>Expert instructors with real-world experience</li>
              <li>Interactive learning materials and assessments</li>
              <li>Progress tracking to monitor your learning journey</li>
              <li>Flexible learning schedules to fit your lifestyle</li>
              <li>Community support and peer interaction</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-brand-primary/5 p-6 rounded-lg">
                <div className="text-2xl font-bold text-brand-primary mb-2">1</div>
                <h4 className="font-semibold text-gray-800 mb-2">Explore Courses</h4>
                <p className="text-gray-600 text-sm">
                  Browse our extensive catalog of courses to find what interests you.
                </p>
              </div>
              <div className="bg-brand-secondary/5 p-6 rounded-lg">
                <div className="text-2xl font-bold text-brand-secondary mb-2">2</div>
                <h4 className="font-semibold text-gray-800 mb-2">Subscribe & Learn</h4>
                <p className="text-gray-600 text-sm">
                  Subscribe to courses and start learning at your own pace.
                </p>
              </div>
              <div className="bg-brand-primaryDark/5 p-6 rounded-lg">
                <div className="text-2xl font-bold text-brand-primaryDark mb-2">3</div>
                <h4 className="font-semibold text-gray-800 mb-2">Track Progress</h4>
                <p className="text-gray-600 text-sm">
                  Monitor your progress and earn certificates upon completion.
                </p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Why Choose Us?</h3>
            <p className="text-gray-600 mb-6">
              SkillBoost Academy stands out from other learning platforms with our commitment to quality content, 
              expert instruction, and user-friendly experience. We focus on practical skills that you can apply 
              immediately in your career or personal projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMorePage;