
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MOCK_PRODUCTS } from '../constants';

const data = [
  { name: 'Mon', sales: 4000 },
  { name: 'Tue', sales: 3000 },
  { name: 'Wed', sales: 2000 },
  { name: 'Thu', sales: 2780 },
  { name: 'Fri', sales: 1890 },
  { name: 'Sat', sales: 2390 },
  { name: 'Sun', sales: 3490 },
];

const SellerDashboard: React.FC = () => {
  const [showPayoutModal, setShowPayoutModal] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Seller Dashboard</h1>
          <p className="text-gray-500">Welcome back, Partner.</p>
        </div>
        <button 
          onClick={() => setShowPayoutModal(true)}
          className="bg-green-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-green-700 transition shadow-md"
        >
          Request Payout
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500 mb-1">Total Earnings</p>
          <p className="text-3xl font-black text-gray-900">₦125,400</p>
          <div className="mt-2 text-xs text-green-600 font-bold">+12% from last week</div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500 mb-1">Pending Balance</p>
          <p className="text-3xl font-black text-orange-500">₦12,500</p>
          <div className="mt-2 text-xs text-gray-400">Locked until delivery complete</div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500 mb-1">Link Clicks</p>
          <p className="text-3xl font-black text-gray-900">2,842</p>
          <div className="mt-2 text-xs text-blue-600 font-bold">4.2% conversion rate</div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Earnings Chart */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold mb-6">Earnings Overview</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip cursor={{fill: '#f9fafb'}} />
                <Bar dataKey="sales" fill="#16a34a" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Hot Products */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold mb-6">High Commission Items</h2>
          <div className="space-y-4">
            {MOCK_PRODUCTS.slice(0, 5).map((p) => (
              <div key={p.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition cursor-pointer">
                <div className="flex items-center space-x-4">
                  <img src={p.image} className="w-12 h-12 rounded-lg object-cover" />
                  <div>
                    <p className="font-bold text-gray-900">{p.name}</p>
                    <p className="text-xs text-gray-500">Earn ₦{p.commission.toLocaleString()}</p>
                  </div>
                </div>
                <button className="text-green-600 font-bold text-sm">Get Link</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Payout Modal Mockup */}
      {showPayoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl w-full max-w-md p-8 shadow-2xl scale-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Request Payout</h3>
              <button onClick={() => setShowPayoutModal(false)} className="text-gray-400 hover:text-gray-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
            <div className="mb-6">
              <p className="text-sm text-gray-500 mb-2">Withdrawal Amount</p>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold">₦</span>
                <input type="number" placeholder="5,000" className="w-full bg-gray-50 border-none p-4 pl-10 rounded-xl text-xl font-black focus:ring-2 focus:ring-green-600" />
              </div>
              <p className="text-xs text-gray-400 mt-2">Minimum withdrawal: ₦5,000</p>
            </div>
            <div className="space-y-4 mb-8">
              <input type="text" placeholder="Bank Name" className="w-full bg-gray-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-green-600" />
              <input type="text" placeholder="Account Number" className="w-full bg-gray-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-green-600" />
              <input type="text" placeholder="Account Name" className="w-full bg-gray-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-green-600" />
            </div>
            <button className="w-full bg-green-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition">
              Confirm Withdrawal
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SellerDashboard;
