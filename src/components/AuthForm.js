import React, { useState } from 'react';
import { auth } from '../firebase/firebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        // Sign in user
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        // Create new user
        await createUserWithEmailAndPassword(auth, email, password);
      }
      setEmail('');
      setPassword('');
      setError('');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">{isLogin ? 'Login' : 'Sign Up'}</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full mb-2 p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full mb-2 p-2 border rounded"
          required
        />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>
      <button
        onClick={() => setIsLogin((prev) => !prev)}
        className="mt-2 text-blue-500"
      >
        {isLogin ? 'Create an account' : 'Already have an account?'}
      </button>
    </div>
  );
};

export default AuthForm;
