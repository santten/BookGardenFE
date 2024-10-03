import { Link, useNavigate } from 'react-router-dom';
import useField from '../hooks/useField';
import { useLogin } from '../hooks/useLogin';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { Icon } from '@iconify/react';

const Login = () => {
  const navigate = useNavigate();
  const email = useField("email");
  const password = useField("password");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const { login } = useLogin();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const errorMessage = await login({ email: email.value, password: password.value });
    
    if (!errorMessage) {
      toast.success('Login successful. Welcome back! 🎉');
      
      navigate("/");
    } else {
      toast.error(errorMessage);
    }
  };

  return (
    <div className="w-full flex items-center justify-center my-16">
      <div className="p-8 border-2 border-grey rounded-4xl max-w-[450px] w-full bg-grey-light">
        <h2 className="text-4xl mb-4 font-title text-center">
          Login to <span className="text-primary-dark">Book Garden</span>
        </h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email:</label>
            <input
              {...email}
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password:</label>
            <div className='relative'>
              <input
                type={passwordVisible ? 'text' : 'password'}
                placeholder="Enter your password"
                className="w-full p-2 border rounded"
                value={password.value}
                onChange={password.onChange}
                required
              />
              {passwordVisible ? (
                <Icon
                  icon="pajamas:eye-slash"
                  onClick={() => setPasswordVisible(false)}
                  className="absolute right-4 top-[12px] text-buttonBorder cursor-pointer text-grey-dark"
                  width="20px"
                />
              ) : (
                <Icon
                  icon="pajamas:eye"
                  onClick={() => setPasswordVisible(true)}
                  className="absolute right-4 top-[12px] text-buttonBorder cursor-pointer text-grey-dark"
                  width="20px"
                />
              )}
            </div>
          </div>
          <button type="submit" className="w-full p-2 bg-black text-white rounded-full font-semibold hover:bg-primary-dark">
            Login
          </button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account?{' '}
          <Link
            to="/signup"
            className="text-primary-dark underline hover:text-accent"
          >
            Register here
          </Link>
        </p>

      </div>
    </div>
  )
}

export default Login;