import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Login({ setIsAuthenticated }) {
  const [isLogin, setIsLogin] = useState(true);  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleFormSwitch = () => {
    setIsLogin(!isLogin); 
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:4000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      
      if (response.ok) {
        const userData = await response.json();
        // console.log("Login success, user data:", userData); //  Debug message: ensure console output

        localStorage.setItem('user', JSON.stringify(userData));
        // console.log('isAuthenticated:', true);  // Debug message
        toast.success('Login Successful');
        // console.log("Navigating to home page");
        // window.location.href = '/'
        navigate('/'); 
        setIsAuthenticated(true);

      } else {
        const errorData = await response.json();
        toast.error(errorData.error || 'Login failed');
      }
    } catch (error) {
      toast.error('Login failed. Please try again.');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    const newUser = {
      firstName,
      lastName,
      email,
      password,
    };

    try {
      const response = await fetch('http://localhost:4000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        const userData = await response.json();
        localStorage.setItem('user', JSON.stringify(userData));
        toast.success('Signup Successful');
        navigate('/'); //navigate("/account");
        setIsAuthenticated(true);

      } else {
        const errorData = await response.json();
        toast.error(errorData.error || 'Signup Failed');
      }
    } catch (error) {
      toast.error('Signup Failed. Please try again.');
    }
  };

  return (
    <div className="w-full flex items-center justify-center my-16">
      <div className="p-8 border-2 border-grey rounded-4xl max-w-[450px] w-full bg-grey-light">
        {isLogin ? (
          <div>
            <h2 className="text-4xl mb-4 font-title text-center">
              Login to <span className="text-primary-dark">Book Garden</span>
            </h2>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-gray-700">Email:</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-2 border rounded"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password:</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full p-2 border rounded"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="w-full p-2 bg-black text-white rounded-full font-semibold hover:bg-primary-dark">
                Login
              </button>
            </form>
            <p className="mt-4 text-center">
              Don't have an account?{' '}
              <button
                onClick={handleFormSwitch}
                className="text-primary-dark underline hover:text-accent"
              >
                Register now
              </button>
            </p>
          </div>
        ) : (
          <div>
            <h2 className="text-4xl mb-4 font-title text-center">
              Register to <span className="text-primary-dark">Book Garden</span>
            </h2>
            <form onSubmit={handleRegister}>
              <div className="mb-4">
                <label className="block text-gray-700">First Name:</label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full p-2 border rounded"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Last Name:</label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full p-2 border rounded"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email Address:</label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full p-2 border rounded"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password:</label>
                <input
                  type="password"
                  placeholder="Create a password"
                  className="w-full p-2 border rounded"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Confirm Password:</label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full p-2 border rounded"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="w-full p-2 bg-black text-white rounded-full font-semibold hover:bg-primary-dark">
                Register
              </button>
            </form>
            <p className="mt-4 text-center">
              Already have an account?{' '}
              <button
                onClick={handleFormSwitch}
                className="text-primary-dark underline hover:text-accent"
              >
                Login here
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;