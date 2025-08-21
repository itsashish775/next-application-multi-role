"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AuthService } from "@/lib/auth";
import { Eye, EyeOff, Loader2 } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      const user = AuthService.login({ email, password });
      setLoading(false);

      if (user) {
        router.push(`/${user.role}/dashboard`);
      } else {
        setError("Invalid email or password");
      }
    }, 1000); // small delay to show loader
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-indigo-100 px-4'>
      <div className='max-w-md w-full bg-white shadow-xl rounded-2xl p-8 space-y-6'>
        <div className='text-center'>
          <h2 className='text-2xl font-bold text-gray-900'>Welcome Back 👋</h2>
          <p className='mt-2 text-sm text-gray-600'>
            Sign in to continue to your account
          </p>
        </div>

        <form onSubmit={handleSubmit} className='space-y-5'>
          {error && (
            <div className='bg-red-100 border border-red-400 text-red-600 px-4 py-2 rounded-md text-sm'>
              {error}
            </div>
          )}

          {/* Email */}
          <div className='relative'>
            <input
              id='email'
              type='email'
              required
              className='peer w-full px-3 pt-5 pb-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=' '
            />
            <label
              htmlFor='email'
              className='absolute left-3 top-2 text-gray-500 text-xs transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-indigo-500'
            >
              Email Address
            </label>
          </div>

          {/* Password */}
          <div className='relative'>
            <input
              id='password'
              type={showPassword ? "text" : "password"}
              required
              className='peer w-full px-3 pt-5 pb-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=' '
            />
            <label
              htmlFor='password'
              className='absolute left-3 top-2 text-gray-500 text-xs transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-indigo-500'
            >
              Password
            </label>
            <button
              type='button'
              className='absolute right-3 top-3 text-gray-500 hover:text-gray-700'
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Sign In Button */}
          <button
            type='submit'
            disabled={loading}
            className='w-full flex items-center justify-center gap-2 py-2 px-4 rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 disabled:opacity-60 transition'
          >
            {loading ? (
              <Loader2 size={18} className='animate-spin' />
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        <div className='text-center text-sm'>
          <Link
            href='/auth/register'
            className='text-indigo-600 hover:underline'
          >
            Don&apos;t have an account? Register now
          </Link>
        </div>

        {/* Demo Credentials */}
        <div className='bg-indigo-50 p-4 rounded-md text-xs'>
          <p className='text-gray-700 font-semibold mb-1'>Demo Credentials:</p>
          <p>👑 Admin → admin@example.com / admin123</p>
          <p>👨‍💻 Employee → employee@example.com / employee123</p>
          <p>🛒 Customer → customer@example.com / customer123</p>
        </div>
      </div>
    </div>
  );
}
