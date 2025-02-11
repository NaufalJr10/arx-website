import React from 'react';
import { Calendar, MessageCircle, UserCheck } from 'lucide-react';

export default function Counseling() {
  return (
    <div className="pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Counseling Services</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Schedule Session */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Calendar className="h-8 w-8 text-indigo-600 mb-4" />
            <h2 className="text-xl font-semibold mb-4">Schedule Session</h2>
            <p className="text-gray-600 mb-4">
              Book a confidential session with a licensed counselor
            </p>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
              Book Now
            </button>
          </div>

          {/* Start Chat */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <MessageCircle className="h-8 w-8 text-indigo-600 mb-4" />
            <h2 className="text-xl font-semibold mb-4">Secure Chat</h2>
            <p className="text-gray-600 mb-4">
              Connect with your counselor through encrypted messaging
            </p>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
              Start Chat
            </button>
          </div>

          {/* Counselor Profile */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <UserCheck className="h-8 w-8 text-indigo-600 mb-4" />
            <h2 className="text-xl font-semibold mb-4">Find Counselor</h2>
            <p className="text-gray-600 mb-4">
              Browse profiles of licensed professionals
            </p>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
              View Profiles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}