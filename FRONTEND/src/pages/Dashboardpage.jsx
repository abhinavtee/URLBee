import React from 'react'
import UrlForm from '../components/UrlForm.jsx'
import UserUrl from '../components/User-Url.jsx'

export const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-4 sm:py-6 lg:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-2 sm:mb-3">
            URLBee Dashboard 🐝
          </h1>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
            Manage and track your shortened URLs
          </p>
        </div>

        {/* URL Form Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl border border-white/20 p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 lg:mb-10">
          <div className="mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
              Create Short URL
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Enter your long URL below to generate a short link
            </p>
          </div>
          <UrlForm />
        </div>

        {/* User URLs Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl border border-white/20 p-4 sm:p-6 lg:p-8">
          <div className="mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
              Your URLs
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              View and manage all your shortened URLs
            </p>
          </div>
          <UserUrl />
        </div>
      </div>
    </div>
  )
}

export default DashboardPage;
