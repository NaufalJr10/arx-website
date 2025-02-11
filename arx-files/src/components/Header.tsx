import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useQuickExit } from '../hooks/useQuickExit';
import Logo from './Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { triggerExit } = useQuickExit();

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <Logo />
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/emergency" className="text-gray-700 hover:text-indigo-600 font-medium">Emergency</Link>
            <Link to="/counseling" className="text-gray-700 hover:text-indigo-600 font-medium">Counseling</Link>
            <Link to="/resources" className="text-gray-700 hover:text-indigo-600 font-medium">Resources</Link>
            <Link to="/progress" className="text-gray-700 hover:text-indigo-600 font-medium">Progress</Link>
            <Link to="/community" className="text-gray-700 hover:text-indigo-600 font-medium">Community</Link>
            <button 
              onClick={triggerExit}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
            >
              Quick Exit
            </button>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/emergency" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">Emergency</Link>
            <Link to="/counseling" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">Counseling</Link>
            <Link to="/resources" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">Resources</Link>
            <Link to="/progress" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">Progress</Link>
            <Link to="/community" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">Community</Link>
            <button 
              onClick={triggerExit}
              className="w-full text-left px-3 py-2 text-red-600 hover:bg-red-50 rounded-md"
            >
              Quick Exit
            </button>
          </div>
        </div>
      )}
    </header>
  );
}