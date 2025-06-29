import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, BarChart3, Target, Users } from 'lucide-react';

export function HomePage() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent mb-6">
              Master Azure DevOps
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Track your learning journey, monitor progress, and achieve Azure DevOps certification 
              with our comprehensive syllabus tracker designed for modern DevOps professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/syllabus"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-700 bg-white border-2 border-blue-200 rounded-xl hover:bg-blue-50 hover:border-blue-300 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <BarChart3 className="mr-2 h-5 w-5" />
                View Progress
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-green-200 rounded-full opacity-20 animate-pulse delay-2000"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive tools and resources to guide your Azure DevOps learning journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-blue-100">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Structured Learning Path</h3>
            <p className="text-gray-600 leading-relaxed">
              Follow a carefully crafted curriculum covering Azure, Terraform, Kubernetes, Docker, 
              and CI/CD tools with clear progression milestones.
            </p>
          </div>

          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-purple-100">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <BarChart3 className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Progress Analytics</h3>
            <p className="text-gray-600 leading-relaxed">
              Visualize your learning progress with detailed analytics, completion rates, 
              and personalized recommendations for your next steps.
            </p>
          </div>

          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-green-100">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Resource Library</h3>
            <p className="text-gray-600 leading-relaxed">
              Access curated documentation, tutorials, and learning materials for each topic 
              with direct links to official resources.
            </p>
          </div>
        </div>
      </section>

      {/* Syllabus Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive DevOps Curriculum
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Master the essential technologies and practices that define modern DevOps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Azure Services', icon: '☁️', topics: 5, color: 'from-blue-500 to-blue-600' },
            { title: 'Terraform & IaC', icon: '🏗️', topics: 4, color: 'from-purple-500 to-purple-600' },
            { title: 'Kubernetes', icon: '⚙️', topics: 3, color: 'from-green-500 to-green-600' },
            { title: 'Docker', icon: '📦', topics: 3, color: 'from-cyan-500 to-cyan-600' },
            { title: 'GitHub Actions', icon: '🔄', topics: 3, color: 'from-gray-700 to-gray-800' },
            { title: 'Jenkins', icon: '🔧', topics: 2, color: 'from-orange-500 to-orange-600' },
            { title: 'SonarQube', icon: '🛡️', topics: 2, color: 'from-indigo-500 to-indigo-600' },
            { title: 'Coming Soon', icon: '✨', topics: 0, color: 'from-pink-500 to-pink-600' }
          ].map((category, index) => (
            <div key={index} className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100">
              <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-2xl">{category.icon}</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{category.title}</h3>
              <p className="text-sm text-gray-600">
                {category.topics > 0 ? `${category.topics} topics` : 'More coming'}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/syllabus"
            className="inline-flex items-center px-6 py-3 text-lg font-semibold text-blue-700 bg-blue-100 rounded-xl hover:bg-blue-200 transition-colors duration-200"
          >
            Explore Full Syllabus
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Begin Your DevOps Journey?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of professionals who are advancing their careers 
              with structured Azure DevOps learning.
            </p>
            <Link
              to="/syllabus"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-700 bg-white rounded-xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}