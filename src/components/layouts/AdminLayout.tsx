import React from "react";
import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="hidden md:flex md:flex-col w-64 bg-white shadow-lg">
        <div className="h-16 flex items-center justify-center text-xl font-bold border-b">
          Admin Panel
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link
            href="/admin/dashboard"
            className="block px-4 py-2 rounded-md hover:bg-gray-200"
          >
            Dashboard
          </Link>
          <Link
            href="/admin/users"
            className="block px-4 py-2 rounded-md hover:bg-gray-200"
          >
            Users
          </Link>
          <Link
            href="/admin/settings"
            className="block px-4 py-2 rounded-md hover:bg-gray-200"
          >
            Settings
          </Link>
        </nav>
      </aside>

      {/* Main Section */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <header className="h-16 bg-white shadow-md flex items-center justify-between px-6">
          <h1 className="text-lg font-semibold">Welcome, Admin</h1>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Logout
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
