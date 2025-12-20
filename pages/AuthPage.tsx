
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserRole } from '../types';

interface AuthPageProps {
  onLogin: (role: UserRole) => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleRoleSelection = (role: UserRole) => {
    onLogin(role);
    switch (role) {
      case UserRole.ADMIN: navigate('/admin'); break;
      case UserRole.OWNER: navigate('/owner-dashboard'); break;
      case UserRole.SELLER: navigate('/seller-dashboard'); break;
      default: navigate('/');
    }
  };

  return (
    <div className="max-w-md mx-auto py-20 px-4">
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10 text-center">
        <h1 className="text-3xl font-black mb-2">Welcome Back</h1>
        <p className="text-gray-500 mb-10">Choose your account type to continue.</p>
        
        <div className="space-y-4">
          <button 
            onClick={() => handleRoleSelection(UserRole.SELLER)}
            className="w-full flex items-center justify-between p-6 bg-green-50 rounded-2xl border-2 border-transparent hover:border-green-600 transition-all group"
          >
            <div className="text-left">
              <p className="font-black text-gray-900 text-lg">I am a Seller</p>
              <p className="text-xs text-gray-500">Promote products and earn 5%</p>
            </div>
            <div className="bg-white p-2 rounded-lg shadow-sm group-hover:bg-green-600 group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </div>
          </button>

          <button 
            onClick={() => handleRoleSelection(UserRole.OWNER)}
            className="w-full flex items-center justify-between p-6 bg-blue-50 rounded-2xl border-2 border-transparent hover:border-blue-600 transition-all group"
          >
            <div className="text-left">
              <p className="font-black text-gray-900 text-lg">I am a Supplier</p>
              <p className="text-xs text-gray-500">List wholesale items for resale</p>
            </div>
            <div className="bg-white p-2 rounded-lg shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </div>
          </button>

          <button 
            onClick={() => handleRoleSelection(UserRole.ADMIN)}
            className="w-full flex items-center justify-between p-6 bg-gray-50 rounded-2xl border-2 border-transparent hover:border-gray-600 transition-all group"
          >
            <div className="text-left">
              <p className="font-black text-gray-900 text-lg">Platform Admin</p>
              <p className="text-xs text-gray-500">Manage platform operations</p>
            </div>
            <div className="bg-white p-2 rounded-lg shadow-sm group-hover:bg-gray-600 group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </div>
          </button>
        </div>

        <p className="mt-10 text-xs text-gray-400">
          By continuing, you agree to our Terms of Service. Secure login powered by Termii.
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
