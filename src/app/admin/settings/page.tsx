"use client";

import React, { useState } from "react";

export default function SettingsPage() {
  const [form, setForm] = useState({
    siteName: "My Admin Panel",
    email: "admin@example.com",
    notifications: true,
    theme: "light",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked // force TS to treat as input
          : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Settings Saved:", form);
    alert("✅ Settings Saved!");
  };

  return (
    <div className='p-6'>
      <h2 className='text-2xl font-bold mb-6'>Settings</h2>

      <form
        onSubmit={handleSubmit}
        className='space-y-6 bg-white rounded-lg shadow-md p-6 max-w-2xl'
      >
        {/* Site Name */}
        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Site Name
          </label>
          <input
            type='text'
            name='siteName'
            value={form.siteName}
            onChange={handleChange}
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2'
          />
        </div>

        {/* Admin Email */}
        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Admin Email
          </label>
          <input
            type='email'
            name='email'
            value={form.email}
            onChange={handleChange}
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2'
          />
        </div>

        {/* Notifications */}
        <div className='flex items-center gap-2'>
          <input
            type='checkbox'
            name='notifications'
            checked={form.notifications}
            onChange={handleChange}
            className='h-4 w-4 text-blue-600 border-gray-300 rounded'
          />
          <label className='text-sm text-gray-700'>
            Enable Email Notifications
          </label>
        </div>

        {/* Theme Selection */}
        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Theme
          </label>
          <select
            name='theme'
            value={form.theme}
            onChange={handleChange}
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2'
          >
            <option value='light'>Light</option>
            <option value='dark'>Dark</option>
          </select>
        </div>

        {/* Save Button */}
        <div>
          <button
            type='submit'
            className='w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700'
          >
            Save Settings
          </button>
        </div>
      </form>
    </div>
  );
}
