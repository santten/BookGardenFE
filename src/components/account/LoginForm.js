import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [isLogin, setIsLogin] = useState(true); // 控制登录和注册表单之间的切换

  const handleFormSwitch = () => {
    setIsLogin(!isLogin); // 切换状态
  };

  return (
    <div className="w-full flex items-center justify-center my-16">
      <div className="p-8 border-2 border-grey rounded-4xl max-w-[450px] w-full bg-grey-light">
        {isLogin ? (
          <div>
            <h2 className="text-4xl mb-4 font-title text-center">
              Login to{" "}
              <span className="text-primary-dark">Book Garden</span>
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Email:</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password:</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              
              {/* for the demo, the login button takes you to account page without any handling */}
              
              <Link to="/account">
                <button type="submit" className="w-full p-2 bg-black text-white rounded-full font-semibold hover:bg-primary-dark">
                  Login
                </button>
              </Link>
            
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
              Register to{" "}
              <span className="text-primary-dark">Book Garden</span>
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">First Name:</label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Last Name:</label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email Address:</label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Phone Number:</label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Username:</label>
                <input
                  type="text"
                  placeholder="Create your username"
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password:</label>
                <input
                  type="password"
                  placeholder="Create a password"
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Confirm Password:</label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full p-2 border rounded"
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
                className="hidden text-primary-dark underline hover:text-accent">
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

// import React, { useState } from 'react';

// const LoginForm = ({ onSubmit }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({ email, password });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login</h2>
//       <label>
//         Email:
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//       </label>
//       <br />
//       <label>
//         Password:
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//       </label>
//       <br />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default LoginForm;
