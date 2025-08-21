// services/AuthService.ts
import Cookies from "js-cookie";
import { users } from "./data";

export class AuthService {
  static login(userDetails: { email: string; password: string }) {
    // Store user in cookies instead of localStorage
    const user = users.find(
      (u) =>
        u.email === userDetails.email && u.password === userDetails.password
    );
    if (user) {
      // In a real app, you would set a cookie or token here
      Cookies.set("user", JSON.stringify(user));
      return user;
    }
    return null;
  }

  static register(userDetails: {
    email: string;
    password: string;
    name: string;
    role: string;
  }) {
    // Check if email already exists
    const existingUser = users.find((u) => u.email === userDetails.email);
    if (existingUser) {
      throw new Error("User already exists");
    }

    // Create new user
    const newUser = {
      id: users.length + 1, // simple ID for demo
      email: userDetails.email,
      name: userDetails.name,
      password: userDetails.password,
      role: userDetails.role,
    };

    // Add to "database" (your demo array)
    users.push(newUser);

    // Save to cookie (log them in immediately)
    Cookies.set("user", JSON.stringify(newUser));

    return newUser;
  }

  static logout() {
    Cookies.remove("user");
  }

  static getCurrentUser() {
    const userStr = Cookies.get("user");
    return userStr ? JSON.parse(userStr) : null;
  }

  static isAuthenticated() {
    return this.getCurrentUser() !== null;
  }

  static hasRole(role: string) {
    const user = this.getCurrentUser();
    return user && user.role === role;
  }
}
