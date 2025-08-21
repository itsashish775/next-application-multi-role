"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AuthService } from "@/lib/auth";
import { Eye, EyeOff, Loader2 } from "lucide-react";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "customer",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      try {
        const newUser = AuthService.register(formData);
        alert("🎉 New user created successfully!");
        router.push(`/${formData.role}/dashboard`);
      } catch (error) {
        setError("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    }, 1200); // fake delay for UX
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-indigo-100 px-4">
      <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-8 space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Create Account 🚀</h2>
          <p className="mt-2 text-sm text-gray-600">
            Fill in the details below to register
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-600 px-4 py-2 rounded-md text-sm">
              {error}
            </div>
          )}

          {/* Name */}
          <div className="relative">
            <input
              id="name"
              name="name"
              type="text"
              required
              className="peer w-full px-3 pt-5 pb-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder=" "
              value={formData.name}
              onChange={handleChange}
            />
            <label
              htmlFor="name"
              className="absolute left-3 top-2 text-gray-500 text-xs transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-indigo-500"
            >
              Full Name
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              id="email"
              name="email"
              type="email"
              required
              className="peer w-full px-3 pt-5 pb-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder=" "
              value={formData.email}
              onChange={handleChange}
            />
            <label
              htmlFor="email"
              className="absolute left-3 top-2 text-gray-500 text-xs transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-indigo-500"
            >
              Email Address
            </label>
          </div>

          {/* Role */}
          <div className="relative">
            <select
              id="role"
              name="role"
              className="w-full px-3 py-3 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-700"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="customer">🛒 Customer Account</option>
              <option value="employee">👨‍💻 Employee Account</option>
              <option value="admin">👑 Admin Account</option>
            </select>
          </div>

          {/* Password */}
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              required
              className="peer w-full px-3 pt-5 pb-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder=" "
              value={formData.password}
              onChange={handleChange}
            />
            <label
              htmlFor="password"
              className="absolute left-3 top-2 text-gray-500 text-xs transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-indigo-500"
            >
              Password
            </label>
            <button
              type="button"
              className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <input
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              required
              className="peer w-full px-3 pt-5 pb-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder=" "
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <label
              htmlFor="confirmPassword"
              className="absolute left-3 top-2 text-gray-500 text-xs transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-indigo-500"
            >
              Confirm Password
            </label>
            <button
              type="button"
              className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
            >
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 disabled:opacity-60 transition"
          >
            {loading ? <Loader2 size={18} className="animate-spin" /> : "Register"}
          </button>
        </form>

        <div className="text-center text-sm">
          <Link href="/auth/login" className="text-indigo-600 hover:underline">
            Already have an account? Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
