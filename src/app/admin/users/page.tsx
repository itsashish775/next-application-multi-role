"use client";

import React from "react";

const users = [
  { id: 1, name: "Ashish Sharma", email: "ashish@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "John Doe", email: "john@example.com", role: "User", status: "Inactive" },
  { id: 3, name: "Jane Smith", email: "jane@example.com", role: "Moderator", status: "Active" },
  { id: 4, name: "David Lee", email: "david@example.com", role: "User", status: "Active" },
  { id: 1, name: "Ashish Sharma", email: "ashish@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "John Doe", email: "john@example.com", role: "User", status: "Inactive" },
  { id: 3, name: "Jane Smith", email: "jane@example.com", role: "Moderator", status: "Active" },
  { id: 4, name: "David Lee", email: "david@example.com", role: "User", status: "Active" },
  { id: 1, name: "Ashish Sharma", email: "ashish@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "John Doe", email: "john@example.com", role: "User", status: "Inactive" },
  { id: 3, name: "Jane Smith", email: "jane@example.com", role: "Moderator", status: "Active" },
  { id: 4, name: "David Lee", email: "david@example.com", role: "User", status: "Active" },
  { id: 1, name: "Ashish Sharma", email: "ashish@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "John Doe", email: "john@example.com", role: "User", status: "Inactive" },
  { id: 3, name: "Jane Smith", email: "jane@example.com", role: "Moderator", status: "Active" },
  { id: 4, name: "David Lee", email: "david@example.com", role: "User", status: "Active" },
  { id: 1, name: "Ashish Sharma", email: "ashish@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "John Doe", email: "john@example.com", role: "User", status: "Inactive" },
  { id: 3, name: "Jane Smith", email: "jane@example.com", role: "Moderator", status: "Active" },
  { id: 4, name: "David Lee", email: "david@example.com", role: "User", status: "Active" },
  { id: 1, name: "Ashish Sharma", email: "ashish@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "John Doe", email: "john@example.com", role: "User", status: "Inactive" },
  { id: 3, name: "Jane Smith", email: "jane@example.com", role: "Moderator", status: "Active" },
  { id: 4, name: "David Lee", email: "david@example.com", role: "User", status: "Active" },
  { id: 1, name: "Ashish Sharma", email: "ashish@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "John Doe", email: "john@example.com", role: "User", status: "Inactive" },
  { id: 3, name: "Jane Smith", email: "jane@example.com", role: "Moderator", status: "Active" },
  { id: 4, name: "David Lee", email: "david@example.com", role: "User", status: "Active" },
  { id: 1, name: "Ashish Sharma", email: "ashish@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "John Doe", email: "john@example.com", role: "User", status: "Inactive" },
  { id: 3, name: "Jane Smith", email: "jane@example.com", role: "Moderator", status: "Active" },
  { id: 4, name: "David Lee", email: "david@example.com", role: "User", status: "Active" },
  { id: 1, name: "Ashish Sharma", email: "ashish@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "John Doe", email: "john@example.com", role: "User", status: "Inactive" },
  { id: 3, name: "Jane Smith", email: "jane@example.com", role: "Moderator", status: "Active" },
  { id: 4, name: "David Lee", email: "david@example.com", role: "User", status: "Active" },
  { id: 1, name: "Ashish Sharma", email: "ashish@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "John Doe", email: "john@example.com", role: "User", status: "Inactive" },
  { id: 3, name: "Jane Smith", email: "jane@example.com", role: "Moderator", status: "Active" },
  { id: 4, name: "David Lee", email: "david@example.com", role: "User", status: "Active" },
  { id: 1, name: "Ashish Sharma", email: "ashish@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "John Doe", email: "john@example.com", role: "User", status: "Inactive" },
  { id: 3, name: "Jane Smith", email: "jane@example.com", role: "Moderator", status: "Active" },
  { id: 4, name: "David Lee", email: "david@example.com", role: "User", status: "Active" },
  { id: 1, name: "Ashish Sharma", email: "ashish@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "John Doe", email: "john@example.com", role: "User", status: "Inactive" },
  { id: 3, name: "Jane Smith", email: "jane@example.com", role: "Moderator", status: "Active" },
  { id: 4, name: "David Lee", email: "david@example.com", role: "User", status: "Active" },
  { id: 1, name: "Ashish Sharma", email: "ashish@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "John Doe", email: "john@example.com", role: "User", status: "Inactive" },
  { id: 3, name: "Jane Smith", email: "jane@example.com", role: "Moderator", status: "Active" },
  { id: 4, name: "David Lee", email: "david@example.com", role: "User", status: "Active" },
  { id: 1, name: "Ashish Sharma", email: "ashish@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "John Doe", email: "john@example.com", role: "User", status: "Inactive" },
  { id: 3, name: "Jane Smith", email: "jane@example.com", role: "Moderator", status: "Active" },
  { id: 4, name: "David Lee", email: "david@example.com", role: "User", status: "Active" },
  { id: 1, name: "Ashish Sharma", email: "ashish@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "John Doe", email: "john@example.com", role: "User", status: "Inactive" },
  { id: 3, name: "Jane Smith", email: "jane@example.com", role: "Moderator", status: "Active" },
  { id: 4, name: "David Lee", email: "david@example.com", role: "User", status: "Active" },
  { id: 1, name: "Ashish Sharma", email: "ashish@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "John Doe", email: "john@example.com", role: "User", status: "Inactive" },
  { id: 3, name: "Jane Smith", email: "jane@example.com", role: "Moderator", status: "Active" },
  { id: 4, name: "David Lee", email: "david@example.com", role: "User", status: "Active" },
  { id: 1, name: "Ashish Sharma", email: "ashish@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "John Doe", email: "john@example.com", role: "User", status: "Inactive" },
  { id: 3, name: "Jane Smith", email: "jane@example.com", role: "Moderator", status: "Active" },
  { id: 4, name: "David Lee", email: "david@example.com", role: "User", status: "Active" },
  { id: 1, name: "Ashish Sharma", email: "ashish@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "John Doe", email: "john@example.com", role: "User", status: "Inactive" },
  { id: 3, name: "Jane Smith", email: "jane@example.com", role: "Moderator", status: "Active" },
  { id: 4, name: "David Lee", email: "david@example.com", role: "User", status: "Active" },
  { id: 1, name: "Ashish Sharma", email: "ashish@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "John Doe", email: "john@example.com", role: "User", status: "Inactive" },
  { id: 3, name: "Jane Smith", email: "jane@example.com", role: "Moderator", status: "Active" },
  { id: 4, name: "David Lee", email: "david@example.com", role: "User", status: "Active" },
  { id: 1, name: "Ashish Sharma", email: "ashish@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "John Doe", email: "john@example.com", role: "User", status: "Inactive" },
  { id: 3, name: "Jane Smith", email: "jane@example.com", role: "Moderator", status: "Active" },
  { id: 4, name: "David Lee", email: "david@example.com", role: "User", status: "Active" },
  { id: 1, name: "Ashish Sharma", email: "ashish@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "John Doe", email: "john@example.com", role: "User", status: "Inactive" },
  { id: 3, name: "Jane Smith", email: "jane@example.com", role: "Moderator", status: "Active" },
  { id: 4, name: "David Lee", email: "david@example.com", role: "User", status: "Active" },
  { id: 1, name: "Ashish Sharma", email: "ashish@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "John Doe", email: "john@example.com", role: "User", status: "Inactive" },
  { id: 3, name: "Jane Smith", email: "jane@example.com", role: "Moderator", status: "Active" },
  { id: 4, name: "David Lee", email: "david@example.com", role: "User", status: "Active" },
  { id: 1, name: "Ashish Sharma", email: "ashish@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "John Doe", email: "john@example.com", role: "User", status: "Inactive" },
  { id: 3, name: "Jane Smith", email: "jane@example.com", role: "Moderator", status: "Active" },
  { id: 4, name: "David Lee", email: "david@example.com", role: "User", status: "Active" },
  { id: 1, name: "Ashish Sharma", email: "ashish@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "John Doe", email: "john@example.com", role: "User", status: "Inactive" },
  { id: 3, name: "Jane Smith", email: "jane@example.com", role: "Moderator", status: "Active" },
  { id: 4, name: "David Lee", email: "david@example.com", role: "User", status: "Active" },
  { id: 1, name: "Ashish Sharma", email: "ashish@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "John Doe", email: "john@example.com", role: "User", status: "Inactive" },
  { id: 3, name: "Jane Smith", email: "jane@example.com", role: "Moderator", status: "Active" },
  { id: 4, name: "David Lee", email: "david@example.com", role: "User", status: "Active" },
  { id: 1, name: "Ashish Sharma", email: "ashish@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "John Doe", email: "john@example.com", role: "User", status: "Inactive" },
  { id: 3, name: "Jane Smith", email: "jane@example.com", role: "Moderator", status: "Active" },
  { id: 4, name: "David Lee", email: "david@example.com", role: "User", status: "Active" },
  { id: 1, name: "Ashish Sharma", email: "ashish@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "John Doe", email: "john@example.com", role: "User", status: "Inactive" },
  { id: 3, name: "Jane Smith", email: "jane@example.com", role: "Moderator", status: "Active" },
  { id: 4, name: "David Lee", email: "david@example.com", role: "User", status: "Active" },
  { id: 1, name: "Ashish Sharma", email: "ashish@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "John Doe", email: "john@example.com", role: "User", status: "Inactive" },
  { id: 3, name: "Jane Smith", email: "jane@example.com", role: "Moderator", status: "Active" },
  { id: 4, name: "David Lee", email: "david@example.com", role: "User", status: "Active" },
  { id: 1, name: "Ashish Sharma", email: "ashish@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "John Doe", email: "john@example.com", role: "User", status: "Inactive" },
  { id: 3, name: "Jane Smith", email: "jane@example.com", role: "Moderator", status: "Active" },
  { id: 4, name: "David Lee", email: "david@example.com", role: "User", status: "Active" },
  { id: 1, name: "Ashish Sharma", email: "ashish@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "John Doe", email: "john@example.com", role: "User", status: "Inactive" },
  { id: 3, name: "Jane Smith", email: "jane@example.com", role: "Moderator", status: "Active" },
  { id: 4, name: "David Lee", email: "david@example.com", role: "User", status: "Active" },
  { id: 1, name: "Ashish Sharma", email: "ashish@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "John Doe", email: "john@example.com", role: "User", status: "Inactive" },
  { id: 3, name: "Jane Smith", email: "jane@example.com", role: "Moderator", status: "Active" },
  { id: 4, name: "David Lee", email: "david@example.com", role: "User", status: "Active" },
  { id: 1, name: "Ashish Sharma", email: "ashish@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "John Doe", email: "john@example.com", role: "User", status: "Inactive" },
  { id: 3, name: "Jane Smith", email: "jane@example.com", role: "Moderator", status: "Active" },
  { id: 4, name: "David Lee", email: "david@example.com", role: "User", status: "Active" },
];

export default function UsersPage() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Users</h2>

      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              {/* <th className="px-6 py-3">ID</th> */}
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Role</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b hover:bg-gray-50">
                {/* <td className="px-6 py-3">{user.id}</td> */}
                <td className="px-6 py-3 font-medium">{user.name}</td>
                <td className="px-6 py-3">{user.email}</td>
                <td className="px-6 py-3">{user.role}</td>
                <td className="px-6 py-3">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-3 flex gap-2">
                  <button className="px-3 py-1 text-xs bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Edit
                  </button>
                  <button className="px-3 py-1 text-xs bg-red-600 text-white rounded-md hover:bg-red-700">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
