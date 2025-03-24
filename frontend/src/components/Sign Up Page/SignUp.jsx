import React,{ useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
const SignUpPage = () => {
  const navigate = useNavigate()
  // Initialize state for form fields
  const [formData, setFormData] = useState({
    fullname: '',
    workspacename: '',
    email: '',
    password: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  
  // Handle form submission
  const handleSubmit = async(e) => {
    e.preventDefault(); 
    console.log(formData);

    try {
      const response = await axios.post('http://localhost:3000/user/signup', formData, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      console.log("Response data:", response.data);
      alert("Account created successfully!");

      // Navigate to Home Page after success
      navigate("/home");

    } catch (error) {
      console.error("There was an error creating the account:", error);
      alert("An error occurred. Please try again.");
    }
    // e.preventDefault(); // Prevent page reload
    // // Log or display the form data
    // console.log(formData);
    // // alert(`Full Name: ${formData.fullname}\nWorkshop Name: ${formData.workspacename}\nEmail: ${formData.email}`);
    
    // const data = JSON.stringify(formData);
    // console.log(data)
    // alert(data)
    // let config = {
    //   method: 'post',
    //   maxBodyLength: Infinity,
    //   url: 'http://localhost:3000/user/signup',
    //   headers: { 
    //     'Content-Type': 'application/json'
    //   },
    //   data : data
    // };

    // axios.request(config)
    // .then((response) => {
    //   console.log(JSON.stringify(response.data));
    //   alert(JSON.stringify(response.data))
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  };
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-900 to-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-md w-full space-y-8 p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl">
        <h2 className="text-center text-2xl font-bold text-white mb-4">
          Create Your Catalyst Account
        </h2>
        <p className="text-center text-sm text-gray-400 mb-6">
          Sign up to get started
        </p>

        <form className="mt-8 space-y-6" action="#" method="POST">
          <div>
            <input
              type="text"
              name="fullname"
              autoComplete="name"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Full Name"
              value={formData.fullname} // Set value to the state
              onChange={handleChange} // Update state on input change
            />
          </div>
          <div>
            <input
              type="text"
              name="workspacename"
              autoComplete="name"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Workshop Name"
              value={formData.workspacename} // Set value to the state
              onChange={handleChange} // Update state on input change
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              autoComplete="email"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Email"
              value={formData.email} // Set value to the state
              onChange={handleChange} // Update state on input change
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              autoComplete="new-password"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Password"
              value={formData.password} // Set value to the state
              onChange={handleChange} // Update state on input change
            />
          </div>

          <button
            type="submit"
            onSubmit={handleSubmit}
            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign up
          </button>
        </form>
        
        <div className="text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Sign in
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-600 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-purple-600 opacity-20 rounded-full blur-3xl animate-pulse"></div>
    </div>
  );
};

export default SignUpPage;
