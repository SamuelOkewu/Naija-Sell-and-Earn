
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Landing from './pages/Landing';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import AdminPanel from './pages/AdminPanel';
import OwnerDashboard from './pages/OwnerDashboard';
import SellerDashboard from './pages/SellerDashboard';
import AuthPage from './pages/AuthPage';
import { User, UserRole } from './types';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  // Persistence simulation
  useEffect(() => {
    const savedUser = localStorage.getItem('nse_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (role: UserRole) => {
    const mockUser: User = {
      id: `user-${role.toLowerCase()}`,
      name: role === UserRole.ADMIN ? "Samuel Owoicho" : `Mock ${role}`,
      email: role === UserRole.ADMIN ? "okewusamuelowoicho@gmail.com" : `${role.toLowerCase()}@example.com`,
      phone: "+2349063676131",
      role: role,
      balance: 25000,
      pendingBalance: 5000,
    };
    setUser(mockUser);
    localStorage.setItem('nse_user', JSON.stringify(mockUser));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('nse_user');
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header user={user} onLogout={handleLogout} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/product/:id" element={<ProductDetail user={user} />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/auth" element={<AuthPage onLogin={handleLogin} />} />
            
            {/* Protected Routes */}
            <Route 
              path="/admin" 
              element={user?.role === UserRole.ADMIN ? <AdminPanel /> : <Navigate to="/auth" />} 
            />
            <Route 
              path="/owner-dashboard" 
              element={user?.role === UserRole.OWNER ? <OwnerDashboard /> : <Navigate to="/auth" />} 
            />
            <Route 
              path="/seller-dashboard" 
              element={user?.role === UserRole.SELLER ? <SellerDashboard /> : <Navigate to="/auth" />} 
            />
            
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <footer className="bg-white border-t py-8">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-gray-500">&copy; 2024 Naija Sell and Earn. Built by Okewu Samuel Owoicho.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
