import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useUser } from "../../context/UserContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const formRef = useRef(null);
  const { updateUserEmail, updateAccessToken } = useUser();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isTyping, setIsTyping] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Reset form when component mounts and on navigation
  useEffect(() => {
    const resetForm = () => {
      setFormData({
        email: '',
        password: ''
      });
      if (formRef.current) {
        formRef.current.reset();
      }
    };

    resetForm();

    // Reset form when navigating away
    return () => resetForm();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
    setIsTyping(true);
    setTimeout(() => setIsTyping(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    if (!formData.email || !formData.password) {
      alert('Please fill in all fields');
      return;
    }

    console.log("Form submitted", formData);
    const data = JSON.stringify(formData);
    console.log('data - type', typeof data);
    console.log('data', data);

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:3000/user/login',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        // Update global user email
        updateUserEmail(formData.email);
        // Save the access token
        if (response.data.access_token) {
          updateAccessToken(response.data.access_token);
          console.log("Access token saved:", response.data.access_token);
        }
        // Reset form after successful submission
        setFormData({
          email: '',
          password: ''
        });
        if (formRef.current) {
          formRef.current.reset();
        }
        navigate("/main-home");
      })
      .catch((error) => {
        console.log(error);
        alert('Login failed. Please check your credentials and try again.');
        // Reset form on error
        setFormData({
          email: '',
          password: ''
        });
        if (formRef.current) {
          formRef.current.reset();
        }
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0a0c1a] to-[#1a1c2e] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl transition-all duration-1000 ${isTyping ? 'scale-150' : 'scale-100'}`}></div>
        <div className={`absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-3xl transition-all duration-1000 ${isTyping ? 'scale-150' : 'scale-100'}`}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-2xl transition-all duration-1000 ${isTyping ? 'scale-125' : 'scale-100'}`}></div>
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-[#1a1c2e]/50 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/10">
          {/* Logo and Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
              Catalyst
            </h1>
            <p className="text-gray-400">Welcome back! Please log in to your account</p>
          </div>

          {/* Login Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                  placeholder="Email address"
                  autoComplete="off"
                />
                <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-purple-500/0 rounded-lg transition-opacity duration-300 -z-10 blur-sm ${formData.email ? 'opacity-100' : 'opacity-0'}`}></div>
                {formData.email && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
                  </div>
                )}
              </div>

              <div className="relative group">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 pr-12"
                  placeholder="Password"
                  autoComplete="off"
                />
                <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-purple-500/0 rounded-lg transition-opacity duration-300 -z-10 blur-sm ${formData.password ? 'opacity-100' : 'opacity-0'}`}></div>
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </button>
                {formData.password && (
                  <div className="absolute right-12 top-1/2 -translate-y-1/2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-ping"></div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-white/20 bg-black/50 text-blue-500 focus:ring-blue-500"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
                  Remember me
                </label>
              </div>
              <Link
                to="/forgot-password"
                className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className={`w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg shadow-lg transition-all duration-300 transform ${Object.values(formData).every(value => value) ? 'scale-105' : 'scale-100'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#1a1c2e]`}
            >
              Log in
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-medium text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>

        {/* Floating Particles */}
        {isTyping && (
          <>
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500/20 rounded-full animate-float-slow"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-purple-500/20 rounded-full animate-float-slow animation-delay-1000"></div>
            <div className="absolute top-1/4 right-1/4 w-6 h-6 bg-blue-500/20 rounded-full animate-float-slow animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/4 w-6 h-6 bg-purple-500/20 rounded-full animate-float-slow animation-delay-3000"></div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
