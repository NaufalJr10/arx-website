import React, { useState } from 'react';
import { AlertCircle, Phone, MapPin, Shield } from 'lucide-react';

export default function EmergencyButton() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleEmergency = (action: 'call' | 'location' | 'alert') => {
    switch (action) {
      case 'call':
        // In production, this would initiate an emergency call
        console.log('Initiating emergency call');
        break;
      case 'location':
        // In production, this would share location with emergency contacts
        console.log('Sharing location with emergency contacts');
        break;
      case 'alert':
        // In production, this would trigger the full emergency protocol
        console.log('Full emergency protocol activated');
        break;
    }
  };

  return (
    <div className="fixed bottom-8 right-8 flex flex-col-reverse gap-2">
      {isExpanded && (
        <div className="flex flex-col gap-2">
          <button
            onClick={() => handleEmergency('call')}
            className="bg-red-600 text-white rounded-full p-4 shadow-lg hover:bg-red-700 transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <Phone className="h-6 w-6" />
            <span className="font-bold">Emergency Call</span>
          </button>
          <button
            onClick={() => handleEmergency('location')}
            className="bg-red-600 text-white rounded-full p-4 shadow-lg hover:bg-red-700 transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <MapPin className="h-6 w-6" />
            <span className="font-bold">Share Location</span>
          </button>
        </div>
      )}
      <button
        onClick={() => {
          if (!isExpanded) {
            handleEmergency('alert');
          }
          setIsExpanded(!isExpanded);
        }}
        className="bg-red-600 text-white rounded-full p-4 shadow-lg hover:bg-red-700 transition-colors duration-200 flex items-center justify-center gap-2"
      >
        {isExpanded ? (
          <>
            <Shield className="h-6 w-6" />
            <span className="font-bold">Close Emergency</span>
          </>
        ) : (
          <>
            <AlertCircle className="h-6 w-6" />
            <span className="font-bold">Emergency Help</span>
          </>
        )}
      </button>
    </div>
  );
}