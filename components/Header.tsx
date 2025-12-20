
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { User, UserRole } from '../types';
import { APP_NAME } from '../constants';

interface HeaderProps {
  user: User | null;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getDashboardPath = () => {
    if (!user) return '/auth';
    switch (user.role) {
      case UserRole.ADMIN: return '/admin';
      case UserRole.OWNER: return '/owner-dashboard';
      case UserRole.SELLER: return '/seller-dashboard';
      default: return '/';
    }
  };

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-200">
              <span className="text-white font-black text-xl">N</span>
            </div>
            <span className="text-xl font-black tracking-tighter text-gray-900 hidden xs:block">{APP_NAME}</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`text-sm font-bold transition-colors ${location.pathname === '/' ? 'text-green-600' : 'text-gray-500 hover:text-gray-900'}`}>Home</Link>
            {user ? (
              <>
                <Link to={getDashboardPath()} className={`text-sm font-bold transition-colors ${location.pathname.includes('dashboard') || location.pathname === '/admin' ? 'text-green-600' : 'text-gray-500 hover:text-gray-900'}`}>My Dashboard</Link>
                <button 
                  onClick={() => { onLogout(); navigate('/'); }}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2 rounded-xl text-sm font-bold transition-all"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link 
                to="/auth" 
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-green-100 hover:shadow-xl transition-all"
              >
                Sign In
              </Link>
            )}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-white pt-20 px-6 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="space-y-6">
            <Link to="/" className="block text-2xl font-black text-gray-900" onClick={closeMenu}>Home</Link>
            {user ? (
              <>
                <Link to={getDashboardPath()} className="block text-2xl font-black text-gray-900" onClick={closeMenu}>Dashboard</Link>
                <div className="pt-6 border-t border-gray-100">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{user.name}</p>
                      <p className="text-sm text-gray-500 uppercase font-black text-[10px] tracking-widest">{user.role}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => { onLogout(); navigate('/'); closeMenu(); }}
                    className="w-full bg-red-50 text-red-600 py-4 rounded-2xl font-black"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <Link 
                to="/auth" 
                onClick={closeMenu}
                className="block w-full bg-green-600 text-white py-4 rounded-2xl font-black text-center shadow-lg shadow-green-100"
              >
                Sign In / Get Started
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
