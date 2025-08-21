"use client";


import { adminDashboardData } from "@/lib/data";

export default function AdminDashboard() {
  return (
    <div className=' bg-gray-100'>
      <main>
        <div className=' mx-auto py-1 sm:px-6 lg:px-8'>
          <div className='px-4 py-6 sm:px-0'>
            <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'>
              {adminDashboardData.stats.map((stat, index) => (
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
                            : "text-red-600"
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

            <div className='bg-white shadow overflow-hidden sm:rounded-md'>
              <div className='px-4 py-5 sm:px-6 border-b border-gray-200'>
                <h3 className='text-lg leading-6 font-medium text-gray-900'>
                  Recent Users
                </h3>
              </div>
              <ul className='divide-y divide-gray-200'>
                {adminDashboardData.recentUsers.map((user) => (
                  <li key={user.id}>
                    <div className='px-4 py-4 flex items-center sm:px-6'>
                      <div className='min-w-0 flex-1 sm:flex sm:items-center sm:justify-between'>
                        <div>
                          <div className='flex text-sm'>
                            <p className='font-medium text-indigo-600 truncate'>
                              {user.name}
                            </p>
                            <p className='ml-4 flex-shrink-0 font-normal text-gray-500'>
                              {user.email}
                            </p>
                          </div>
                          <div className='mt-2 flex'>
                            <div className='flex items-center text-sm text-gray-500'>
                              <p>Joined on {user.joined}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='ml-5 flex-shrink-0'>
                        <button className='px-2 py-1 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none'>
                          View
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <main>
        <div className=' mx-auto py-1 sm:px-6 lg:px-8'>
          <div className='px-4 py-6 sm:px-0'>
            <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'>
              {adminDashboardData.stats.map((stat, index) => (
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
                            : "text-red-600"
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

            <div className='bg-white shadow overflow-hidden sm:rounded-md'>
              <div className='px-4 py-5 sm:px-6 border-b border-gray-200'>
                <h3 className='text-lg leading-6 font-medium text-gray-900'>
                  Recent Users
                </h3>
              </div>
              <ul className='divide-y divide-gray-200'>
                {adminDashboardData.recentUsers.map((user) => (
                  <li key={user.id}>
                    <div className='px-4 py-4 flex items-center sm:px-6'>
                      <div className='min-w-0 flex-1 sm:flex sm:items-center sm:justify-between'>
                        <div>
                          <div className='flex text-sm'>
                            <p className='font-medium text-indigo-600 truncate'>
                              {user.name}
                            </p>
                            <p className='ml-4 flex-shrink-0 font-normal text-gray-500'>
                              {user.email}
                            </p>
                          </div>
                          <div className='mt-2 flex'>
                            <div className='flex items-center text-sm text-gray-500'>
                              <p>Joined on {user.joined}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='ml-5 flex-shrink-0'>
                        <button className='px-2 py-1 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none'>
                          View
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <main>
        <div className=' mx-auto py-1 sm:px-6 lg:px-8'>
          <div className='px-4 py-6 sm:px-0'>
            <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'>
              {adminDashboardData.stats.map((stat, index) => (
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
                            : "text-red-600"
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

            <div className='bg-white shadow overflow-hidden sm:rounded-md'>
              <div className='px-4 py-5 sm:px-6 border-b border-gray-200'>
                <h3 className='text-lg leading-6 font-medium text-gray-900'>
                  Recent Users
                </h3>
              </div>
              <ul className='divide-y divide-gray-200'>
                {adminDashboardData.recentUsers.map((user) => (
                  <li key={user.id}>
                    <div className='px-4 py-4 flex items-center sm:px-6'>
                      <div className='min-w-0 flex-1 sm:flex sm:items-center sm:justify-between'>
                        <div>
                          <div className='flex text-sm'>
                            <p className='font-medium text-indigo-600 truncate'>
                              {user.name}
                            </p>
                            <p className='ml-4 flex-shrink-0 font-normal text-gray-500'>
                              {user.email}
                            </p>
                          </div>
                          <div className='mt-2 flex'>
                            <div className='flex items-center text-sm text-gray-500'>
                              <p>Joined on {user.joined}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='ml-5 flex-shrink-0'>
                        <button className='px-2 py-1 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none'>
                          View
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <main>
        <div className=' mx-auto py-1 sm:px-6 lg:px-8'>
          <div className='px-4 py-6 sm:px-0'>
            <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'>
              {adminDashboardData.stats.map((stat, index) => (
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
                            : "text-red-600"
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

            <div className='bg-white shadow overflow-hidden sm:rounded-md'>
              <div className='px-4 py-5 sm:px-6 border-b border-gray-200'>
                <h3 className='text-lg leading-6 font-medium text-gray-900'>
                  Recent Users
                </h3>
              </div>
              <ul className='divide-y divide-gray-200'>
                {adminDashboardData.recentUsers.map((user) => (
                  <li key={user.id}>
                    <div className='px-4 py-4 flex items-center sm:px-6'>
                      <div className='min-w-0 flex-1 sm:flex sm:items-center sm:justify-between'>
                        <div>
                          <div className='flex text-sm'>
                            <p className='font-medium text-indigo-600 truncate'>
                              {user.name}
                            </p>
                            <p className='ml-4 flex-shrink-0 font-normal text-gray-500'>
                              {user.email}
                            </p>
                          </div>
                          <div className='mt-2 flex'>
                            <div className='flex items-center text-sm text-gray-500'>
                              <p>Joined on {user.joined}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='ml-5 flex-shrink-0'>
                        <button className='px-2 py-1 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none'>
                          View
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <main>
        <div className=' mx-auto py-1 sm:px-6 lg:px-8'>
          <div className='px-4 py-6 sm:px-0'>
            <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'>
              {adminDashboardData.stats.map((stat, index) => (
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
                            : "text-red-600"
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

            <div className='bg-white shadow overflow-hidden sm:rounded-md'>
              <div className='px-4 py-5 sm:px-6 border-b border-gray-200'>
                <h3 className='text-lg leading-6 font-medium text-gray-900'>
                  Recent Users
                </h3>
              </div>
              <ul className='divide-y divide-gray-200'>
                {adminDashboardData.recentUsers.map((user) => (
                  <li key={user.id}>
                    <div className='px-4 py-4 flex items-center sm:px-6'>
                      <div className='min-w-0 flex-1 sm:flex sm:items-center sm:justify-between'>
                        <div>
                          <div className='flex text-sm'>
                            <p className='font-medium text-indigo-600 truncate'>
                              {user.name}
                            </p>
                            <p className='ml-4 flex-shrink-0 font-normal text-gray-500'>
                              {user.email}
                            </p>
                          </div>
                          <div className='mt-2 flex'>
                            <div className='flex items-center text-sm text-gray-500'>
                              <p>Joined on {user.joined}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='ml-5 flex-shrink-0'>
                        <button className='px-2 py-1 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none'>
                          View
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
