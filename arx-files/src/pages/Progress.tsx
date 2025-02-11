import React from 'react';
import { Target, TrendingUp, Award } from 'lucide-react';

export default function Progress() {
  return (
    <div className="pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Your Progress</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Goals */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Target className="h-8 w-8 text-indigo-600 mb-4" />
            <h2 className="text-xl font-semibold mb-4">Goals</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-indigo-600 pl-4">
                <h3 className="font-medium">Daily Check-in</h3>
                <p className="text-gray-600">Streak: 5 days</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="font-medium">Wellness Activities</h3>
                <p className="text-gray-600">2 of 3 completed</p>
              </div>
            </div>
          </div>

          {/* Progress Timeline */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <TrendingUp className="h-8 w-8 text-indigo-600 mb-4" />
            <h2 className="text-xl font-semibold mb-4">Timeline</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                <p className="text-gray-600">Started journey</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                <p className="text-gray-600">First counseling session</p>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Award className="h-8 w-8 text-indigo-600 mb-4" />
            <h2 className="text-xl font-semibold mb-4">Achievements</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-indigo-600" />
                </div>
                <span className="text-sm text-gray-600 mt-2">First Step</span>
              </div>
              {/* Add more achievements as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}