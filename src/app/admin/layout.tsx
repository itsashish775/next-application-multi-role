"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { AuthService } from "@/lib/auth";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/admin/sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const user = AuthService.getCurrentUser();

  useEffect(() => {
    if (!AuthService.isAuthenticated() || !AuthService.hasRole("admin")) {
      router.push("/auth/login");
    }
  }, [router]);

  if (!user || user.role !== "admin") {
    return null;
  }
  return (
    <div className='flex h-screen bg-gray-100'>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Section */}
      <div className=' text-black flex flex-col mx-1 flex-1'>
        {/* Header */}
        <header className='h-16 bg-white shadow-md flex items-center justify-between px-6'>
          <h1 className='text-lg font-semibold'>Welcome, Admin</h1>
          <div className='flex items-center gap-4'>
            <button
              className='px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700'
              onClick={() => {
                AuthService.logout();
                router.push("/");
              }}
            >
              Logout
            </button>
          </div>
        </header>

        {/* Content */}
        <main className='flex-1 p-6 overflow-y-auto'>{children}</main>
      </div>
    </div>
  );
}
