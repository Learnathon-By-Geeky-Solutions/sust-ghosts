import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0c1a] to-[#1a1c2e] overflow-hidden">
      {/* Header */}
      <header className="bg-[#1a1c2e]/80 backdrop-blur-lg py-3 px-4 md:px-8 lg:px-16 flex justify-between items-center text-white border-b border-white/10 fixed w-full z-50">
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Catalyst</h1>
        <nav className="hidden md:flex space-x-6 text-base">
          <a href="#" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105">
            Features
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105">
            Pricing
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105">
            Resources
          </a>
        </nav>
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl text-sm">
          <Link to="/signup">Get Started</Link>
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 md:px-12 lg:px-24 text-center text-white pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Unleash Your Team's Potential
          </h2>
          <p className="text-xl md:text-2xl font-light mb-12 text-gray-300 max-w-3xl mx-auto">
            Catalyst is the all-in-one platform for project management, team collaboration, and achieving extraordinary results.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              Learn More
            </button>
            <button className="bg-transparent border-2 border-white/20 hover:border-white/40 text-white font-bold py-4 px-8 rounded-full shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl backdrop-blur-sm">
              Watch Demo
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 md:px-12 lg:px-24 bg-[#1a1c2e]">
        <h3 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Key Features
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              title: "Project Management",
              description: "Organize, track, and manage projects with ease. Assign tasks, set deadlines, and monitor progress effortlessly.",
            },
            {
              title: "Team Collaboration",
              description: "Foster seamless communication and collaboration with integrated chat, file sharing, and dedicated team workspaces.",
            },
            {
              title: "Analytics & Reporting",
              description: "Gain valuable insights with comprehensive reports and analytics on project performance, task completion, and team productivity.",
            },
            {
              title: "User Management",
              description: "Secure user authentication, role-based access control, and comprehensive profile management for all team members.",
            },
            {
              title: "Workspace Creation",
              description: "Create personal or team workspaces with customizable settings and easy member management.",
            },
            {
              title: "Task Management",
              description: "Create, update, and categorize tasks with status tracking, priority setting, and real-time updates.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-[#2a2f4a] rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white/10 backdrop-blur-sm"
            >
              <h4 className="text-2xl font-bold mb-4 text-white">{feature.title}</h4>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 md:px-12 lg:px-24 bg-gradient-to-br from-[#1a1c2e] to-[#2a2f4a]">
        <h3 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          What Our Users Say
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              name: "Khalid Bin Selim",
              title: "Project Manager",
              quote: "Catalyst has transformed the way our team collaborates. The real-time updates and intuitive interface have made project management a breeze.",
            },
            {
              name: "Rayhanul Amin",
              title: "Team Lead",
              quote: "The analytics dashboard provides invaluable insights into our team's performance. We've seen a significant increase in productivity since using Catalyst.",
            },
            {
              name: "Rezaul Karim",
              title: "Developer",
              quote: "The task management features are top-notch. I love being able to see my progress and easily communicate with my team.",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#2a2f4a] rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white/10 backdrop-blur-sm"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-white text-xl font-bold">{testimonial.name[0]}</span>
              </div>
              <p className="text-gray-300 mb-6 italic text-center">"{testimonial.quote}"</p>
              <div className="text-center">
                <h5 className="text-lg font-bold text-white">{testimonial.name}</h5>
                <p className="text-sm text-gray-400">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-24 px-4 md:px-12 lg:px-24 text-center text-white bg-gradient-to-br from-[#1a1c2e] to-[#2a2f4a]">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h4 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Ready to Get Started?
          </h4>
          <p className="text-xl text-gray-300 mb-12">
            Join thousands of teams using Catalyst to achieve more.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <Link to="/signup">Sign Up Free</Link>
          </button>
        </div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1c2e] text-white py-16 px-4 md:px-12 lg:px-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h5 className="text-lg font-bold mb-4 text-blue-400">About Catalyst</h5>
              <p className="text-sm text-gray-400">
                Catalyst is a revolutionary platform designed to streamline project management, enhance team collaboration, and provide powerful analytics.
              </p>
            </div>
            <div>
              <h5 className="text-lg font-bold mb-4 text-blue-400">Resources</h5>
              <ul className="space-y-2">
                {['Blog', 'Help Center', 'Webinars', 'Case Studies', 'API Documentation'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-bold mb-4 text-blue-400">Contact Us</h5>
              <p className="text-sm text-gray-400 mb-2">Email: contact@catalyst.com</p>
              <p className="text-sm text-gray-400 mb-2">Phone: (+880) 1721998383</p>
              <p className="text-sm text-gray-400 mb-4">Address: Akhalia, SUST, Sylhet, Bangladesh</p>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'linkedin'].map((social) => (
                  <a key={social} href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    <i className={`fab fa-${social} text-xl`}></i>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h5 className="text-lg font-bold mb-4 text-blue-400">Legal</h5>
              <ul className="space-y-2">
                {['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Security', 'Accessibility'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-16 text-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Catalyst. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
