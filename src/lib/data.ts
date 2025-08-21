// User data
export const users = [
  {
    id: 1,
    email: 'admin@example.com',
    password: 'admin123',
    name: 'Admin User',
    role: 'admin',
  },
  {
    id: 2,
    email: 'employee@example.com',
    password: 'employee123',
    name: 'Employee User',
    role: 'employee',
  },
  {
    id: 3,
    email: 'customer@example.com',
    password: 'customer123',
    name: 'Customer User',
    role: 'customer',
  },
];

// Dashboard data
export const adminDashboardData = {
  stats: [
    { title: 'Total Users', value: 254, change: '+12%' },
    { title: 'Revenue', value: '$12,540', change: '+8%' },
    { title: 'Orders', value: 124, change: '+5%' },
    { title: 'Tickets', value: 42, change: '-2%' },
  ],
  recentUsers: [
    { id: 1, name: 'John Doe', email: 'john@example.com', joined: '2023-04-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', joined: '2023-04-14' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', joined: '2023-04-13' },
  ],
};

export const employeeDashboardData = {
  stats: [
    { title: 'Assigned Tasks', value: 12, change: '+2' },
    { title: 'Completed Tasks', value: 8, change: '+3' },
    { title: 'Pending Requests', value: 5, change: '-1' },
    { title: 'Customer Rating', value: '4.8/5', change: '+0.2' },
  ],
  tasks: [
    { id: 1, title: 'Customer Support Ticket #1254', status: 'In Progress', priority: 'High' },
    { id: 2, title: 'Update Product Documentation', status: 'Pending', priority: 'Medium' },
    { id: 3, title: 'Follow up with Client', status: 'Completed', priority: 'Low' },
  ],
};

export const customerDashboardData = {
  stats: [
    { title: 'Total Orders', value: 15, change: '+3' },
    { title: 'Pending Orders', value: 2, change: '-1' },
    { title: 'Wallet Balance', value: '$245.50', change: '+$45' },
    { title: 'Wishlist Items', value: 8, change: '+2' },
  ],
  orders: [
    { id: 1, product: 'Wireless Headphones', status: 'Delivered', date: '2023-04-10', amount: '$89.99' },
    { id: 2, product: 'Smart Watch', status: 'Shipped', date: '2023-04-12', amount: '$199.99' },
    { id: 3, product: 'Phone Case', status: 'Processing', date: '2023-04-14', amount: '$24.99' },
  ],
};