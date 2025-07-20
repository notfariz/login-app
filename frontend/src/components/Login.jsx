import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const res = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('isLoggedIn', 'true'); // required by PrivateRoute
        navigate('/dashboard');
      } else {
        setMessage(data.message || 'Login failed');
      }
    } catch (err) {
      setMessage('Error logging in');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="container max-w-md mx-auto bg-[#141414] p-6 sm:p-10 rounded-xl shadow-lg">
        <div className="flex justify-center mb-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt="Netflix Logo"
            className="h-12"
          />
        </div>
        <h2 className="text-2xl font-semibold mb-6 text-center">Sign In</h2>
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full p-3 rounded bg-[#333] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full p-3 rounded bg-[#333] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-red-600 hover:bg-red-700 p-3 rounded font-semibold"
          >
            Sign In
          </button>
        </div>
        {message && (
          <p className="text-red-500 text-center mt-4">{message}</p>
        )}
        <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="form-checkbox bg-black" />
            Remember me
          </label>
          <a href="#" className="hover:underline">
            Need help?
          </a>
        </div>
        <div className="mt-6 text-sm text-gray-400 text-center">
          New to Netflix?{' '}
          <a href="#" className="text-white hover:underline">
            Sign up now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;