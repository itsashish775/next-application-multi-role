"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { href: "/employee/dashboard", label: "Dashboard" },
    { href: "/employee/users", label: "Users" },
    { href: "/employee/settings", label: "Settings" },
  ];

  return (
    <aside className="text-black hidden md:flex md:flex-col min-w-96 bg-white shadow-lg">
      <div className="h-16 flex items-center justify-center text-xl font-bold border-b">
        Employee Panel
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-2 rounded-md ${
                isActive ? "bg-blue-500 text-white" : "hover:bg-gray-200"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
