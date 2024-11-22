'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError('Invalid email or password');
      } else {
        router.push('/'); // Redirect to home page after successful login
        router.refresh();
      }
    } catch (error) {
      setError('An error occurred during sign in');
    }
  };

  return (
    <div className="h-[60vh] flex items-center justify-center bg-sage-100" style={{ backgroundImage: "url('/images/back.jpg')" }}>
      <div className="max-w-md w-full space-y-10 p-10 rounded-xl bg-sage-50
                    shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] bg-opacity-50
                    animate-fadeIn">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-forest-900
                       animate-slideDown">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="text-red-500 text-sm text-center animate-shake">{error}</div>
          )}
          <div className="rounded-md space-y-4">
            <div className="transform transition-all duration-500 hover:translate-y-[-2px]">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-xl relative block w-full px-3 py-2 
                         bg-sage-50 border-none text-forest-900 
                         shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]
                         focus:outline-none focus:ring-2 focus:ring-forest-500"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="transform transition-all duration-500 hover:translate-y-[-2px]">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-xl relative block w-full px-3 py-2 
                         bg-sage-50 border-none text-forest-900 
                         shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]
                         focus:outline-none focus:ring-2 focus:ring-forest-500"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="relative w-full py-2 px-4 rounded-xl text-sm font-medium
                       text-white bg-forest-600 hover:bg-forest-700
                       shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]
                       active:shadow-[inset_5px_5px_10px_#1a472a,inset_-5px_-5px_10px_#2a6e42]
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-forest-500
                       transition-all duration-300 transform hover:scale-[1.02]
                       animate-fadeIn"
            >
              Sign in
            </button>
          <div className="mt-4 text-center">
            <p className="text-sm text-forest-700">
              Don't have an account?{' '}
              <a 
                href="/signup" 
                className="font-medium text-forest-600 hover:text-forest-500 
                         transition-colors duration-200 underline py-5"
              >
                Sign up here
              </a>
            </p>
          </div>
          </div>
        </form>
      </div>
    </div>
  );
}
