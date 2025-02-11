import React from 'react';
import { MessageCircle, Users, Activity } from 'lucide-react';
import ResourceHub from '../components/ResourceHub';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your Safety. Your Strength. Your Space.
          </h1>
          <p className="text-xl mb-8">
            A secure platform dedicated to women's safety and empowerment
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              Get Help Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white/10 transition-colors">
              Join Community
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Counselor Chat Card */}
            <div className="bg-white p-8 rounded-lg shadow-md transform hover:scale-105 transition-transform">
              <MessageCircle className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure Counselor Chat</h3>
              <p className="text-gray-600 mb-4">
                Connect with licensed professionals in a safe, encrypted environment.
              </p>
              <button className="text-indigo-600 font-medium hover:text-indigo-700">
                Chat Now →
              </button>
            </div>

            {/* Progress Tracking Card */}
            <div className="bg-white p-8 rounded-lg shadow-md transform hover:scale-105 transition-transform">
              <Activity className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Progress Dashboard</h3>
              <p className="text-gray-600 mb-4">
                Track your journey, set goals, and celebrate achievements.
              </p>
              <button className="text-indigo-600 font-medium hover:text-indigo-700">
                View Progress →
              </button>
            </div>

            {/* Community Space Card */}
            <div className="bg-white p-8 rounded-lg shadow-md transform hover:scale-105 transition-transform">
              <Users className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community Space</h3>
              <p className="text-gray-600 mb-4">
                Connect with others in a private, moderated environment.
              </p>
              <button className="text-indigo-600 font-medium hover:text-indigo-700">
                Join Community →
              </button>
            </div>
          </div>
        </div>
      </section>

      <ResourceHub />
    </div>
  );
}