import { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Signup logic here
    alert(`Signup successful for ${email}`);
  };

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="bg-[#111] p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              className="w-full p-3 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block mb-1">Password</label>
            <input
              type="password"
              className="w-full p-3 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 transition-colors text-white font-semibold py-3 rounded"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center mt-4 text-gray-400">
          Already have an account?{' '}
          <Link to="/" className="text-red-500 hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;