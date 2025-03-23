import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
      {/* Header */}
      <header className="bg-gray-900 py-8 px-4 md:px-12 lg:px-24 flex justify-between items-center text-white">
        <h1 className="text-4xl">Catalyst</h1>
        <nav className="hidden md:flex space-x-10 text-lg">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            Features
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            Resources
          </a>
        </nav>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300">
          <Link to="/signup">Get Started</Link>
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-gray-900 py-32 px-4 md:px-12 lg:px-24 text-center text-white overflow-hidden">
        {/* <div className="absolute top-0 left-0 w-full h-full bg-white opacity-5 transform -rotate-12"></div> */}
        <div className="relative z-10">
          <h2 className="text-5xl md:text-7xl tracking-tight mb-10 animate-fade-in">
            Unleash Your Team's Potential
          </h2>
          <p className="text-2xl md:text-3xl font-light mt-16 mb-16 max-w-3xl mx-auto text-white animate-fade-in">
            Catalyst is the all-in-one platform for project management, team
            collaboration, and achieving extraordinary results.
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 animate-fade-in">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-black py-4 px-8 rounded-full shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
              Learn More
            </button>
            <button className="bg-transparent border-2 border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 font-black py-4 px-8 rounded-full shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
              Watch Demo
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-600 opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-purple-600 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-900 py-24 px-4 md:px-12 lg:px-24 text-white">
        <h3 className="text-5xl font-bold text-center mb-16">Key Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Project Management",
              description:
                "Organize, track, and manage projects with ease. Assign tasks, set deadlines, and monitor progress effortlessly.",
            },
            {
              title: "Team Collaboration",
              description:
                "Foster seamless communication and collaboration with integrated chat, file sharing, and dedicated team workspaces.",
            },
            {
              title: "Analytics & Reporting",
              description:
                "Gain valuable insights with comprehensive reports and analytics on project performance, task completion, and team productivity.",
            },
            {
              title: "User Management",
              description:
                "Secure user authentication, role-based access control, and comprehensive profile management for all team members.",
            },
            {
              title: "Workspace Creation",
              description:
                "Create personal or team workspaces with customizable settings and easy member management.",
            },
            {
              title: "Task Management",
              description:
                "Create, update, and categorize tasks with status tracking, priority setting, and real-time updates.",
            },
            {
              title: "Communication",
              description:
                "Real-time chat for individuals, teams, and projects, with direct messaging and group chat options.",
            },
            {
              title: "Analytics Dashboard",
              description:
                "Visualize project progress, team performance, and key metrics with interactive charts and graphs.",
            },
            {
              title: "Report Generation",
              description:
                "Generate detailed reports on projects, tasks, and team performance in various formats, including PDF and CSV.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl shadow-2xl p-8 transition duration-300 ease-in-out hover:shadow-3xl hover:scale-105 transform"
            >
              <h4 className="text-3xl font-bold mb-4">{feature.title}</h4>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-24 px-4 md:px-12 lg:px-24 text-white">
        <h3 className="text-5xl font-bold text-center mb-16">
          What Our Users Say
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Khalid Bin Selim",
              title: "Project Manager",
              quote:
                "Catalyst has transformed the way our team collaborates. The real-time updates and intuitive interface have made project management a breeze.",
            },
            {
              name: "Rayhanul Amin",
              title: "Team Lead",
              quote:
                "The analytics dashboard provides invaluable insights into our team's performance. We've seen a significant increase in productivity since using Catalyst.",
            },
            {
              name: "Rezaul Karim",
              title: "Developer",
              quote:
                "The task management features are top-notch. I love being able to see my progress and easily communicate with my team.",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-2xl shadow-2xl p-8 transition duration-300 ease-in-out hover:shadow-3xl hover:scale-105 transform"
            >
              <svg
                className="w-12 h-12 text-blue-500 mb-4 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                ></path>
              </svg>
              <p className="text-gray-300 mb-6 italic text-center">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-2xl font-bold">
                    {testimonial.name[0]}
                  </span>
                </div>
                <div>
                  <h5 className="text-lg font-bold text-white">
                    {testimonial.name}
                  </h5>
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-900 py-24 px-4 md:px-12 lg:px-24 text-white">
        <h3 className="text-5xl font-bold text-center mb-16">Pricing Plans</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              plan: "Free",
              price: "$0",
              features: ["Feature 1", "Feature 2", "Feature 3"],
            },
            {
              plan: "Pro",
              price: "$15",
              features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
              isPopular: true,
            },
            {
              plan: "Enterprise",
              price: "Custom",
              features: [
                "Feature 1",
                "Feature 2",
                "Feature 3",
                "Feature 4",
                "Feature 5",
              ],
            },
          ].map((pricing, index) => (
            <div
              key={index}
              className={`bg-gray-800 rounded-2xl shadow-2xl p-8 transition duration-300 ease-in-out hover:shadow-3xl hover:scale-105 transform ${
                pricing.isPopular ? "border-0 border-blue-500 scale-105" : ""
              }`}
            >
              {pricing.isPopular && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 rounded-bl-2xl font-semibold">
                  Popular
                </div>
              )}
              <h4 className="text-3xl font-bold mb-4">{pricing.plan}</h4>
              <p className="text-5xl font-bold mb-6">{pricing.price}/mo</p>
              <ul className="mb-8">
                {pricing.features.map((feature, i) => (
                  <li key={i} className="mb-3 flex items-center">
                    <svg
                      className="w-6 h-6 mr-3 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full w-full transition duration-300 ease-in-out shadow-lg">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-gray-900 py-24 px-4 md:px-12 lg:px-24 text-center text-white overflow-hidden">
        {/* <div className="absolute top-0 left-0 w-full h-full bg-white opacity-5 transform -rotate-12"></div> */}
        <div className="relative z-10">
          <h4 className="text-5xl font-bold text-center mb-12">
            Ready to Get Started?
          </h4>
          <p className="text-2xl md:text-3xl mb-12 max-w-3xl mx-auto">
            Join thousands of teams using Catalyst to achieve more.
          </p>
          <button className="bg-transparent border-2 border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 font-black py-4 px-8 rounded-full shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
            <Link to="/signup">Sign Up Free</Link>
          </button>
        </div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-600 opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-purple-600 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      </section>

      {/* Detailed Credits Section */}
      <footer className="bg-gray-900 text-white py-16 px-4 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
            {/* Column 1: About */}
            <div className="flex flex-col justify-between">
              <div>
                <h5 className="text-lg font-bold mb-4 text-blue-400">
                  About Catalyst
                </h5>
                <p className="text-sm mb-4 leading-relaxed">
                  Catalyst is a revolutionary platform designed to streamline
                  project management, enhance team collaboration, and provide
                  powerful analytics. Our mission is to empower teams to achieve
                  more, together.
                </p>
              </div>
            </div>

            {/* Column 2: Resources */}
            <div>
              <h5 className="text-lg font-bold mb-4 text-blue-400">
                Resources
              </h5>
              <ul className="text-sm space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-300 transition duration-300"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-300 transition duration-300"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-300 transition duration-300"
                  >
                    Webinars
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-300 transition duration-300"
                  >
                    Case Studies
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-300 transition duration-300"
                  >
                    API Documentation
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h5 className="text-lg font-bold mb-4 text-blue-400">
                Contact Us
              </h5>
              <p className="text-sm mb-2">Email: contact@catalyst.com</p>
              <p className="text-sm mb-2">Phone: (+880) 1721998383</p>
              <p className="text-sm mb-4">
                Address: Akhalia, SUST, Sylhet, Bangladesh
              </p>
              <p className="text-sm mb-2">Follow us on social media:</p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-white hover:text-blue-300 transition duration-300"
                >
                  <i className="fab fa-facebook-f text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-white hover:text-blue-300 transition duration-300"
                >
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-white hover:text-blue-300 transition duration-300"
                >
                  <i className="fab fa-linkedin-in text-xl"></i>
                </a>
              </div>
            </div>

            {/* Column 4: Legal */}
            <div>
              <h5 className="text-lg font-bold mb-4 text-blue-400">Legal</h5>
              <ul className="text-sm space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-300 transition duration-300"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-300 transition duration-300"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-300 transition duration-300"
                  >
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-300 transition duration-300"
                  >
                    Security
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-300 transition duration-300"
                  >
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-24 text-center">
          <p className="text-xs text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Catalyst. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
