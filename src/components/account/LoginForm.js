import React, { useState } from 'react';
import { useLogin } from '../../customHooks/useLogin'; // Importing custom hook for login
import { useSignup } from '../../customHooks/useSignup'; // Importing custom hook for signup

function Login({ setIsAuthenticated }) {
  const [isLogin, setIsLogin] = useState(true);

  // Using custom hooks
  const {
    email: loginEmail,
    password: loginPassword,
    setEmail: setLoginEmail,
    setPassword: setLoginPassword,
    handleLogin,
  } = useLogin(setIsAuthenticated);

  const {
    firstName,
    lastName,
    email: signupEmail,
    password: signupPassword,
    confirmPassword,
    setFirstName,
    setLastName,
    setEmail: setSignupEmail,
    setPassword: setSignupPassword,
    setConfirmPassword,
    handleRegister,
  } = useSignup(setIsAuthenticated);

  const handleFormSwitch = () => {
    setIsLogin(!isLogin);
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
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password:</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full p-2 border rounded"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
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
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password:</label>
                <input
                  type="password"
                  placeholder="Create a password"
                  className="w-full p-2 border rounded"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
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