import { Link, useNavigate } from 'react-router-dom';
import useField from '../hooks/useField';
import { useSignup } from '../hooks/useSignup';
import { toast } from 'react-toastify';

function Signup() {
  const navigate = useNavigate();
  const firstName = useField("text");
  const lastName = useField("text");
  const email = useField("email");
  const password = useField("password");
  const confirmPassword = useField("password");

  const { signup } = useSignup("/api/users/signup");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (password.value !== confirmPassword.value) {
      toast.error('Passwords do not match');
      return;
    }

    const errorMessage = await signup({
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value
    });
    if (!errorMessage) {
      toast.success('Register successful. You can login now 🎉');
      navigate("/login");
    } else {
      toast.error(errorMessage);
    }
  };

  return (
    <div className="w-full flex items-center justify-center my-4">
      <div className="p-8 border-2 border-grey rounded-4xl max-w-[450px] w-full bg-grey-light">
        <h2 className="text-4xl mb-4 font-title text-center">
          Register to <span className="text-primary-dark">Book Garden</span>
        </h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">First Name:</label>
            <input
              {...firstName}
              placeholder="Enter your first name"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Last Name:</label>
            <input
              {...lastName}
              placeholder="Enter your last name"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email Address:</label>
            <input
              {...email}
              placeholder="Enter your email address"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password:</label>
            <input
              type="password"
              {...password}
              placeholder="Create a password"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Confirm Password:</label>
            <input
              {...confirmPassword}
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
          <Link
            to="/login"
            className="text-primary-dark underline hover:text-accent"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Signup;