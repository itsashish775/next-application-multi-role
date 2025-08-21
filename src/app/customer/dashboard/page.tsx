"use client";

import { customerDashboardData } from "@/lib/data";

export default function CustomerDashboard() {
  return (
    <div className=' bg-gray-100'>
      <main>
        <div className=' mx-auto py-6 sm:px-6 lg:px-8'>
          <div className='px-4 py-6 sm:px-0'>
            <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'>
              {customerDashboardData.stats.map((stat, index) => (
                <div
                  key={index}
                  className='bg-white overflow-hidden shadow rounded-lg'
                >
                  <div className='px-4 py-5 sm:p-6'>
                    <dt className='text-sm font-medium text-gray-500 truncate'>
                      {stat.title}
                    </dt>
                    <dd className='mt-1 text-3xl font-semibold text-gray-900'>
                      {stat.value}
                    </dd>
                    <div className='mt-1'>
                      <span
                        className={`text-sm font-medium ${
                          stat.change.startsWith("+")
                            ? "text-green-600"
                            : stat.change.startsWith("-")
                            ? "text-red-600"
                            : "text-gray-600"
                        }`}
                      >
                        {stat.change}
                      </span>
                      <span className='text-sm text-gray-500 ml-1'>
                        from last week
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className='bg-white shadow overflow-hidden sm:rounded-md mb-8'>
              <div className='px-4 py-5 sm:px-6 border-b border-gray-200'>
                <h3 className='text-lg leading-6 font-medium text-gray-900'>
                  Recent Orders
                </h3>
              </div>
              <ul className='divide-y divide-gray-200'>
                {customerDashboardData.orders.map((order) => (
                  <li key={order.id}>
                    <div className='px-4 py-4 sm:px-6'>
                      <div className='flex items-center justify-between'>
                        <p className='text-sm font-medium text-indigo-600 truncate'>
                          {order.product}
                        </p>
                        <div className='ml-2 flex-shrink-0 flex'>
                          <p
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${
                              order.status === "Delivered"
                                ? "bg-green-100 text-green-800"
                                : order.status === "Shipped"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {order.status}
                          </p>
                        </div>
                      </div>
                      <div className='mt-2 sm:flex sm:justify-between'>
                        <div className='sm:flex'>
                          <p className='flex items-center text-sm text-gray-500'>
                            Ordered on {order.date}
                          </p>
                        </div>
                        <div className='mt-2 flex items-center text-sm text-gray-500 sm:mt-0'>
                          <p>{order.amount}</p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className='bg-white shadow overflow-hidden sm:rounded-md'>
              <div className='px-4 py-5 sm:px-6 border-b border-gray-200'>
                <h3 className='text-lg leading-6 font-medium text-gray-900'>
                  Customer Actions
                </h3>
              </div>
              <div className='px-4 py-5 sm:p-6'>
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
                  <button className='inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                    Place New Order
                  </button>
                  <button className='inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                    Support Ticket
                  </button>
                  <button className='inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                    Account Settings
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <main>
        <div className=' mx-auto py-6 sm:px-6 lg:px-8'>
          <div className='px-4 py-6 sm:px-0'>
            <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'>
              {customerDashboardData.stats.map((stat, index) => (
                <div
                  key={index}
                  className='bg-white overflow-hidden shadow rounded-lg'
                >
                  <div className='px-4 py-5 sm:p-6'>
                    <dt className='text-sm font-medium text-gray-500 truncate'>
                      {stat.title}
                    </dt>
                    <dd className='mt-1 text-3xl font-semibold text-gray-900'>
                      {stat.value}
                    </dd>
                    <div className='mt-1'>
                      <span
                        className={`text-sm font-medium ${
                          stat.change.startsWith("+")
                            ? "text-green-600"
                            : stat.change.startsWith("-")
                            ? "text-red-600"
                            : "text-gray-600"
                        }`}
                      >
                        {stat.change}
                      </span>
                      <span className='text-sm text-gray-500 ml-1'>
                        from last week
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className='bg-white shadow overflow-hidden sm:rounded-md mb-8'>
              <div className='px-4 py-5 sm:px-6 border-b border-gray-200'>
                <h3 className='text-lg leading-6 font-medium text-gray-900'>
                  Recent Orders
                </h3>
              </div>
              <ul className='divide-y divide-gray-200'>
                {customerDashboardData.orders.map((order) => (
                  <li key={order.id}>
                    <div className='px-4 py-4 sm:px-6'>
                      <div className='flex items-center justify-between'>
                        <p className='text-sm font-medium text-indigo-600 truncate'>
                          {order.product}
                        </p>
                        <div className='ml-2 flex-shrink-0 flex'>
                          <p
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${
                              order.status === "Delivered"
                                ? "bg-green-100 text-green-800"
                                : order.status === "Shipped"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {order.status}
                          </p>
                        </div>
                      </div>
                      <div className='mt-2 sm:flex sm:justify-between'>
                        <div className='sm:flex'>
                          <p className='flex items-center text-sm text-gray-500'>
                            Ordered on {order.date}
                          </p>
                        </div>
                        <div className='mt-2 flex items-center text-sm text-gray-500 sm:mt-0'>
                          <p>{order.amount}</p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className='bg-white shadow overflow-hidden sm:rounded-md'>
              <div className='px-4 py-5 sm:px-6 border-b border-gray-200'>
                <h3 className='text-lg leading-6 font-medium text-gray-900'>
                  Customer Actions
                </h3>
              </div>
              <div className='px-4 py-5 sm:p-6'>
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
                  <button className='inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                    Place New Order
                  </button>
                  <button className='inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                    Support Ticket
                  </button>
                  <button className='inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                    Account Settings
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <main>
        <div className=' mx-auto py-6 sm:px-6 lg:px-8'>
          <div className='px-4 py-6 sm:px-0'>
            <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'>
              {customerDashboardData.stats.map((stat, index) => (
                <div
                  key={index}
                  className='bg-white overflow-hidden shadow rounded-lg'
                >
                  <div className='px-4 py-5 sm:p-6'>
                    <dt className='text-sm font-medium text-gray-500 truncate'>
                      {stat.title}
                    </dt>
                    <dd className='mt-1 text-3xl font-semibold text-gray-900'>
                      {stat.value}
                    </dd>
                    <div className='mt-1'>
                      <span
                        className={`text-sm font-medium ${
                          stat.change.startsWith("+")
                            ? "text-green-600"
                            : stat.change.startsWith("-")
                            ? "text-red-600"
                            : "text-gray-600"
                        }`}
                      >
                        {stat.change}
                      </span>
                      <span className='text-sm text-gray-500 ml-1'>
                        from last week
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className='bg-white shadow overflow-hidden sm:rounded-md mb-8'>
              <div className='px-4 py-5 sm:px-6 border-b border-gray-200'>
                <h3 className='text-lg leading-6 font-medium text-gray-900'>
                  Recent Orders
                </h3>
              </div>
              <ul className='divide-y divide-gray-200'>
                {customerDashboardData.orders.map((order) => (
                  <li key={order.id}>
                    <div className='px-4 py-4 sm:px-6'>
                      <div className='flex items-center justify-between'>
                        <p className='text-sm font-medium text-indigo-600 truncate'>
                          {order.product}
                        </p>
                        <div className='ml-2 flex-shrink-0 flex'>
                          <p
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${
                              order.status === "Delivered"
                                ? "bg-green-100 text-green-800"
                                : order.status === "Shipped"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {order.status}
                          </p>
                        </div>
                      </div>
                      <div className='mt-2 sm:flex sm:justify-between'>
                        <div className='sm:flex'>
                          <p className='flex items-center text-sm text-gray-500'>
                            Ordered on {order.date}
                          </p>
                        </div>
                        <div className='mt-2 flex items-center text-sm text-gray-500 sm:mt-0'>
                          <p>{order.amount}</p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className='bg-white shadow overflow-hidden sm:rounded-md'>
              <div className='px-4 py-5 sm:px-6 border-b border-gray-200'>
                <h3 className='text-lg leading-6 font-medium text-gray-900'>
                  Customer Actions
                </h3>
              </div>
              <div className='px-4 py-5 sm:p-6'>
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
                  <button className='inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                    Place New Order
                  </button>
                  <button className='inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                    Support Ticket
                  </button>
                  <button className='inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                    Account Settings
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <main>
        <div className=' mx-auto py-6 sm:px-6 lg:px-8'>
          <div className='px-4 py-6 sm:px-0'>
            <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'>
              {customerDashboardData.stats.map((stat, index) => (
                <div
                  key={index}
                  className='bg-white overflow-hidden shadow rounded-lg'
                >
                  <div className='px-4 py-5 sm:p-6'>
                    <dt className='text-sm font-medium text-gray-500 truncate'>
                      {stat.title}
                    </dt>
                    <dd className='mt-1 text-3xl font-semibold text-gray-900'>
                      {stat.value}
                    </dd>
                    <div className='mt-1'>
                      <span
                        className={`text-sm font-medium ${
                          stat.change.startsWith("+")
                            ? "text-green-600"
                            : stat.change.startsWith("-")
                            ? "text-red-600"
                            : "text-gray-600"
                        }`}
                      >
                        {stat.change}
                      </span>
                      <span className='text-sm text-gray-500 ml-1'>
                        from last week
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className='bg-white shadow overflow-hidden sm:rounded-md mb-8'>
              <div className='px-4 py-5 sm:px-6 border-b border-gray-200'>
                <h3 className='text-lg leading-6 font-medium text-gray-900'>
                  Recent Orders
                </h3>
              </div>
              <ul className='divide-y divide-gray-200'>
                {customerDashboardData.orders.map((order) => (
                  <li key={order.id}>
                    <div className='px-4 py-4 sm:px-6'>
                      <div className='flex items-center justify-between'>
                        <p className='text-sm font-medium text-indigo-600 truncate'>
                          {order.product}
                        </p>
                        <div className='ml-2 flex-shrink-0 flex'>
                          <p
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${
                              order.status === "Delivered"
                                ? "bg-green-100 text-green-800"
                                : order.status === "Shipped"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {order.status}
                          </p>
                        </div>
                      </div>
                      <div className='mt-2 sm:flex sm:justify-between'>
                        <div className='sm:flex'>
                          <p className='flex items-center text-sm text-gray-500'>
                            Ordered on {order.date}
                          </p>
                        </div>
                        <div className='mt-2 flex items-center text-sm text-gray-500 sm:mt-0'>
                          <p>{order.amount}</p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className='bg-white shadow overflow-hidden sm:rounded-md'>
              <div className='px-4 py-5 sm:px-6 border-b border-gray-200'>
                <h3 className='text-lg leading-6 font-medium text-gray-900'>
                  Customer Actions
                </h3>
              </div>
              <div className='px-4 py-5 sm:p-6'>
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
                  <button className='inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                    Place New Order
                  </button>
                  <button className='inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                    Support Ticket
                  </button>
                  <button className='inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                    Account Settings
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <main>
        <div className=' mx-auto py-6 sm:px-6 lg:px-8'>
          <div className='px-4 py-6 sm:px-0'>
            <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'>
              {customerDashboardData.stats.map((stat, index) => (
                <div
                  key={index}
                  className='bg-white overflow-hidden shadow rounded-lg'
                >
                  <div className='px-4 py-5 sm:p-6'>
                    <dt className='text-sm font-medium text-gray-500 truncate'>
                      {stat.title}
                    </dt>
                    <dd className='mt-1 text-3xl font-semibold text-gray-900'>
                      {stat.value}
                    </dd>
                    <div className='mt-1'>
                      <span
                        className={`text-sm font-medium ${
                          stat.change.startsWith("+")
                            ? "text-green-600"
                            : stat.change.startsWith("-")
                            ? "text-red-600"
                            : "text-gray-600"
                        }`}
                      >
                        {stat.change}
                      </span>
                      <span className='text-sm text-gray-500 ml-1'>
                        from last week
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className='bg-white shadow overflow-hidden sm:rounded-md mb-8'>
              <div className='px-4 py-5 sm:px-6 border-b border-gray-200'>
                <h3 className='text-lg leading-6 font-medium text-gray-900'>
                  Recent Orders
                </h3>
              </div>
              <ul className='divide-y divide-gray-200'>
                {customerDashboardData.orders.map((order) => (
                  <li key={order.id}>
                    <div className='px-4 py-4 sm:px-6'>
                      <div className='flex items-center justify-between'>
                        <p className='text-sm font-medium text-indigo-600 truncate'>
                          {order.product}
                        </p>
                        <div className='ml-2 flex-shrink-0 flex'>
                          <p
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${
                              order.status === "Delivered"
                                ? "bg-green-100 text-green-800"
                                : order.status === "Shipped"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {order.status}
                          </p>
                        </div>
                      </div>
                      <div className='mt-2 sm:flex sm:justify-between'>
                        <div className='sm:flex'>
                          <p className='flex items-center text-sm text-gray-500'>
                            Ordered on {order.date}
                          </p>
                        </div>
                        <div className='mt-2 flex items-center text-sm text-gray-500 sm:mt-0'>
                          <p>{order.amount}</p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className='bg-white shadow overflow-hidden sm:rounded-md'>
              <div className='px-4 py-5 sm:px-6 border-b border-gray-200'>
                <h3 className='text-lg leading-6 font-medium text-gray-900'>
                  Customer Actions
                </h3>
              </div>
              <div className='px-4 py-5 sm:p-6'>
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
                  <button className='inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                    Place New Order
                  </button>
                  <button className='inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                    Support Ticket
                  </button>
                  <button className='inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                    Account Settings
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
