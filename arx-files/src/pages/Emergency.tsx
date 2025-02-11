import React, { useState } from 'react';
import { Phone, MapPin, AlertCircle } from 'lucide-react';

export default function Emergency() {
  const [location, setLocation] = useState<GeolocationPosition | null>(null);

  const handleEmergencyCall = () => {
    // In production, this would integrate with emergency services
    console.log('Emergency call initiated');
  };

  const handleShareLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation(position);
          // In production, this would share with emergency contacts
          console.log('Location shared:', position);
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    }
  };

  return (
    <div className="pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-8">
          <div className="flex items-center">
            <AlertCircle className="h-6 w-6 text-red-400" />
            <p className="ml-3 text-red-700">
              If you are in immediate danger, please call your local emergency services immediately.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Emergency Contacts */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Emergency Contacts</h2>
            <div className="space-y-4">
              <button
                onClick={handleEmergencyCall}
                className="w-full flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors"
              >
                <Phone className="h-5 w-5" />
                Emergency Call
              </button>
              <button
                onClick={handleShareLocation}
                className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors"
              >
                <MapPin className="h-5 w-5" />
                Share Location
              </button>
            </div>
          </div>

          {/* Safety Instructions */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Safety Instructions</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="font-semibold">1.</span>
                Stay in a safe location if possible
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold">2.</span>
                Contact emergency services if in immediate danger
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold">3.</span>
                Share your location with trusted contacts
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold">4.</span>
                Document any incidents if safe to do so
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}