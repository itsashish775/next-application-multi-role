export interface User {
  id: number;
  email: string;
  name: string;
  password: string;
  role: "admin" | "customer" | "employee"; // 👈 adjust roles as needed
}
