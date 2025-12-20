
import React from 'react';
import { ADMIN_NAME, ADMIN_EMAIL, ADMIN_PHONE } from '../constants';

const AdminPanel: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-10 bg-green-900 text-white rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2">Admin Control Center</h1>
          <p className="text-green-200">System Operator: <span className="text-white font-bold uppercase tracking-widest text-sm">{ADMIN_NAME}</span></p>
          <div className="mt-4 flex space-x-4 text-xs font-semibold">
            <span>Email: {ADMIN_EMAIL}</span>
            <span>Phone: {ADMIN_PHONE}</span>
          </div>
        </div>
        <div className="mt-8 md:mt-0 text-center md:text-right">
          <p className="text-5xl font-black">₦1,245,000</p>
          <p className="text-green-300 text-sm font-bold">Total Platform Commission (5%)</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Verification Queue */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-50 flex items-center justify-between">
            <h2 className="text-xl font-bold">Pending Payout Requests</h2>
            <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-bold">12 Active</span>
          </div>
          <div className="divide-y divide-gray-50">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="p-6 flex items-center justify-between hover:bg-gray-50">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">U{item}</div>
                  <div>
                    <p className="font-bold">Emeka Obi</p>
                    <p className="text-xs text-gray-500">Access Bank • 0098273615</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="font-bold text-green-600">₦25,000</p>
                    <p className="text-[10px] text-gray-400">Requested 2h ago</p>
                  </div>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-green-700">Approve</button>
                  <button className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="font-bold mb-4">Quick Stats</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-50">
                <span className="text-gray-500 text-sm">Active Sellers</span>
                <span className="font-bold">1,245</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-50">
                <span className="text-gray-500 text-sm">Active Suppliers</span>
                <span className="font-bold">89</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-50">
                <span className="text-gray-500 text-sm">Total Orders</span>
                <span className="font-bold">12,402</span>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-xl">
            <h3 className="font-bold mb-2">Marketplace Health</h3>
            <p className="text-blue-100 text-sm mb-4">Everything is running smoothly. Last backup was 2 hours ago.</p>
            <button className="w-full bg-white/20 hover:bg-white/30 text-white py-2 rounded-lg text-sm font-bold transition">View System Logs</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
