import React, { useState } from 'react';

function Login() {
  const [isLogin, setIsLogin] = useState(true); // 控制登录和注册表单之间的切换

  const handleFormSwitch = () => {
    setIsLogin(!isLogin); // 切换状态
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="p-6 border border-gray-300 rounded-lg shadow-lg max-w-[400px] w-full">
        {isLogin ? (
          <div>
            <h2 className="text-xl font-bold mb-4">Login</h2>
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
              <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
                Login
              </button>
            </form>
            <p className="mt-4">
              Don't have an account?{' '}
              <button
                onClick={handleFormSwitch}
                className="text-blue-500 underline"
              >
                Register here
              </button>
            </p>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-bold mb-4">Register</h2>
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
                  type="password"
                  placeholder="Enter your phone number"
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Username:</label>
                <input
                  type="password"
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
              <button type="submit" className="w-full p-2 bg-green-500 text-white rounded">
                Register
              </button>
            </form>
            <p className="mt-4">
              Already have an account?{' '}
              <button
                onClick={handleFormSwitch}
                className="text-blue-500 underline"
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
