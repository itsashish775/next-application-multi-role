"use client";

import { employeeDashboardData } from "@/lib/data";

export default function EmployeeDashboard() {
  return (
    <div className='min-h-screen bg-gray-100'>
      <main>
        <div className=' mx-auto py-6 sm:px-6 lg:px-8'>
          <div className='px-4 py-6 sm:px-0'>
            <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'>
              {employeeDashboardData.stats.map((stat, index) => (
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
                  Your Tasks
                </h3>
              </div>
              <ul className='divide-y divide-gray-200'>
                {employeeDashboardData.tasks.map((task) => (
                  <li key={task.id}>
                    <div className='px-4 py-4 sm:px-6'>
                      <div className='flex items-center justify-between'>
                        <p className='text-sm font-medium text-indigo-600 truncate'>
                          {task.title}
                        </p>
                        <div className='ml-2 flex-shrink-0 flex'>
                          <p
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${
                              task.priority === "High"
                                ? "bg-red-100 text-red-800"
                                : task.priority === "Medium"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-green-100 text-green-800"
                            }`}
                          >
                            {task.priority}
                          </p>
                        </div>
                      </div>
                      <div className='mt-2 sm:flex sm:justify-between'>
                        <div className='sm:flex'>
                          <p className='flex items-center text-sm text-gray-500'>
                            Status: {task.status}
                          </p>
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
                  Quick Actions
                </h3>
              </div>
              <div className='px-4 py-5 sm:p-6'>
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
                  <button className='inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                    View Customer Requests
                  </button>
                  <button className='inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                    Submit Timesheet
                  </button>
                  <button className='inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                    Request Time Off
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
              {employeeDashboardData.stats.map((stat, index) => (
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
                  Your Tasks
                </h3>
              </div>
              <ul className='divide-y divide-gray-200'>
                {employeeDashboardData.tasks.map((task) => (
                  <li key={task.id}>
                    <div className='px-4 py-4 sm:px-6'>
                      <div className='flex items-center justify-between'>
                        <p className='text-sm font-medium text-indigo-600 truncate'>
                          {task.title}
                        </p>
                        <div className='ml-2 flex-shrink-0 flex'>
                          <p
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${
                              task.priority === "High"
                                ? "bg-red-100 text-red-800"
                                : task.priority === "Medium"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-green-100 text-green-800"
                            }`}
                          >
                            {task.priority}
                          </p>
                        </div>
                      </div>
                      <div className='mt-2 sm:flex sm:justify-between'>
                        <div className='sm:flex'>
                          <p className='flex items-center text-sm text-gray-500'>
                            Status: {task.status}
                          </p>
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
                  Quick Actions
                </h3>
              </div>
              <div className='px-4 py-5 sm:p-6'>
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
                  <button className='inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                    View Customer Requests
                  </button>
                  <button className='inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                    Submit Timesheet
                  </button>
                  <button className='inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                    Request Time Off
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
              {employeeDashboardData.stats.map((stat, index) => (
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
                  Your Tasks
                </h3>
              </div>
              <ul className='divide-y divide-gray-200'>
                {employeeDashboardData.tasks.map((task) => (
                  <li key={task.id}>
                    <div className='px-4 py-4 sm:px-6'>
                      <div className='flex items-center justify-between'>
                        <p className='text-sm font-medium text-indigo-600 truncate'>
                          {task.title}
                        </p>
                        <div className='ml-2 flex-shrink-0 flex'>
                          <p
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${
                              task.priority === "High"
                                ? "bg-red-100 text-red-800"
                                : task.priority === "Medium"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-green-100 text-green-800"
                            }`}
                          >
                            {task.priority}
                          </p>
                        </div>
                      </div>
                      <div className='mt-2 sm:flex sm:justify-between'>
                        <div className='sm:flex'>
                          <p className='flex items-center text-sm text-gray-500'>
                            Status: {task.status}
                          </p>
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
                  Quick Actions
                </h3>
              </div>
              <div className='px-4 py-5 sm:p-6'>
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
                  <button className='inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                    View Customer Requests
                  </button>
                  <button className='inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                    Submit Timesheet
                  </button>
                  <button className='inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                    Request Time Off
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
              {employeeDashboardData.stats.map((stat, index) => (
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
                  Your Tasks
                </h3>
              </div>
              <ul className='divide-y divide-gray-200'>
                {employeeDashboardData.tasks.map((task) => (
                  <li key={task.id}>
                    <div className='px-4 py-4 sm:px-6'>
                      <div className='flex items-center justify-between'>
                        <p className='text-sm font-medium text-indigo-600 truncate'>
                          {task.title}
                        </p>
                        <div className='ml-2 flex-shrink-0 flex'>
                          <p
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${
                              task.priority === "High"
                                ? "bg-red-100 text-red-800"
                                : task.priority === "Medium"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-green-100 text-green-800"
                            }`}
                          >
                            {task.priority}
                          </p>
                        </div>
                      </div>
                      <div className='mt-2 sm:flex sm:justify-between'>
                        <div className='sm:flex'>
                          <p className='flex items-center text-sm text-gray-500'>
                            Status: {task.status}
                          </p>
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
                  Quick Actions
                </h3>
              </div>
              <div className='px-4 py-5 sm:p-6'>
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
                  <button className='inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                    View Customer Requests
                  </button>
                  <button className='inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                    Submit Timesheet
                  </button>
                  <button className='inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                    Request Time Off
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
              {employeeDashboardData.stats.map((stat, index) => (
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
                  Your Tasks
                </h3>
              </div>
              <ul className='divide-y divide-gray-200'>
                {employeeDashboardData.tasks.map((task) => (
                  <li key={task.id}>
                    <div className='px-4 py-4 sm:px-6'>
                      <div className='flex items-center justify-between'>
                        <p className='text-sm font-medium text-indigo-600 truncate'>
                          {task.title}
                        </p>
                        <div className='ml-2 flex-shrink-0 flex'>
                          <p
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${
                              task.priority === "High"
                                ? "bg-red-100 text-red-800"
                                : task.priority === "Medium"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-green-100 text-green-800"
                            }`}
                          >
                            {task.priority}
                          </p>
                        </div>
                      </div>
                      <div className='mt-2 sm:flex sm:justify-between'>
                        <div className='sm:flex'>
                          <p className='flex items-center text-sm text-gray-500'>
                            Status: {task.status}
                          </p>
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
                  Quick Actions
                </h3>
              </div>
              <div className='px-4 py-5 sm:p-6'>
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
                  <button className='inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                    View Customer Requests
                  </button>
                  <button className='inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                    Submit Timesheet
                  </button>
                  <button className='inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                    Request Time Off
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
              {employeeDashboardData.stats.map((stat, index) => (
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
                  Your Tasks
                </h3>
              </div>
              <ul className='divide-y divide-gray-200'>
                {employeeDashboardData.tasks.map((task) => (
                  <li key={task.id}>
                    <div className='px-4 py-4 sm:px-6'>
                      <div className='flex items-center justify-between'>
                        <p className='text-sm font-medium text-indigo-600 truncate'>
                          {task.title}
                        </p>
                        <div className='ml-2 flex-shrink-0 flex'>
                          <p
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${
                              task.priority === "High"
                                ? "bg-red-100 text-red-800"
                                : task.priority === "Medium"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-green-100 text-green-800"
                            }`}
                          >
                            {task.priority}
                          </p>
                        </div>
                      </div>
                      <div className='mt-2 sm:flex sm:justify-between'>
                        <div className='sm:flex'>
                          <p className='flex items-center text-sm text-gray-500'>
                            Status: {task.status}
                          </p>
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
                  Quick Actions
                </h3>
              </div>
              <div className='px-4 py-5 sm:p-6'>
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
                  <button className='inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                    View Customer Requests
                  </button>
                  <button className='inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                    Submit Timesheet
                  </button>
                  <button className='inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                    Request Time Off
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
