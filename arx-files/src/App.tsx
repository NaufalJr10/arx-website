import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import EmergencyButton from './components/EmergencyButton';
import Home from './pages/Home';
import Emergency from './pages/Emergency';
import Counseling from './pages/Counseling';
import Resources from './pages/Resources';
import Progress from './pages/Progress';
import Community from './pages/Community';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/counseling" element={<Counseling />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/community" element={<Community />} />
      </Routes>
      <EmergencyButton />
    </div>
  );
}

export default App;