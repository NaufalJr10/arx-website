import React from 'react';
import { Users, MessageSquare, Shield } from 'lucide-react';

export default function Community() {
  return (
    <div className="pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Community Space</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Support Circles */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Users className="h-8 w-8 text-indigo-600 mb-4" />
            <h2 className="text-xl font-semibold mb-4">Support Circles</h2>
            <p className="text-gray-600 mb-4">
              Join groups of supportive individuals sharing similar experiences
            </p>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
              Find Circles
            </button>
          </div>

          {/* Discussion Forums */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <MessageSquare className="h-8 w-8 text-indigo-600 mb-4" />
            <h2 className="text-xl font-semibold mb-4">Discussion Forums</h2>
            <p className="text-gray-600 mb-4">
              Engage in moderated discussions with community members
            </p>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
              View Forums
            </button>
          </div>

          {/* Privacy Settings */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Shield className="h-8 w-8 text-indigo-600 mb-4" />
            <h2 className="text-xl font-semibold mb-4">Privacy Settings</h2>
            <p className="text-gray-600 mb-4">
              Control your visibility and participation preferences
            </p>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
              Manage Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}