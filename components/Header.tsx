
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, UserRole } from '../types';
import { APP_NAME } from '../constants';

interface HeaderProps {
  user: User | null;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, onLogout }) => {
  const navigate = useNavigate();

  const getDashboardPath = () => {
    if (!user) return '/auth';
    switch (user.role) {
      case UserRole.ADMIN: return '/admin';
      case UserRole.OWNER: return '/owner-dashboard';
      case UserRole.SELLER: return '/seller-dashboard';
      default: return '/';
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">N</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900 hidden sm:block">{APP_NAME}</span>
        </Link>

        <nav className="flex items-center space-x-6">
          <Link to="/" className="text-gray-600 hover:text-green-600 font-medium transition">Home</Link>
          {user ? (
            <>
              <Link to={getDashboardPath()} className="text-gray-600 hover:text-green-600 font-medium transition">Dashboard</Link>
              <button 
                onClick={() => { onLogout(); navigate('/'); }}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link 
              to="/auth" 
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-all"
            >
              Get Started
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
