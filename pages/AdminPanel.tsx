
import React from 'react';
import { ADMIN_NAME, ADMIN_EMAIL, ADMIN_PHONE } from '../constants';

const AdminPanel: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-10 bg-green-900 text-white rounded-[2.5rem] p-12 flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-800 rounded-full -translate-y-1/2 translate-x-1/2 opacity-20 blur-3xl"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center space-x-2 bg-green-800 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span>Live Admin Status</span>
          </div>
          <h1 className="text-5xl font-black mb-2 tracking-tighter">Control Center</h1>
          <p className="text-green-200 text-lg">System Operator: <span className="text-white font-bold">{ADMIN_NAME}</span></p>
          <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold">
            <div className="bg-white/10 px-4 py-2 rounded-xl backdrop-blur-sm">📧 {ADMIN_EMAIL}</div>
            <div className="bg-white/10 px-4 py-2 rounded-xl backdrop-blur-sm">📞 {ADMIN_PHONE}</div>
          </div>
        </div>
        <div className="mt-12 md:mt-0 text-center md:text-right relative z-10">
          <p className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-green-400">₦1,245,000</p>
          <p className="text-green-300 text-sm font-bold mt-2">Accumulated Platform Profits (5%)</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Verification Queue */}
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-8 border-b border-gray-50 flex items-center justify-between">
            <h2 className="text-2xl font-black text-gray-900">Payout Requests</h2>
            <div className="flex space-x-2">
              <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-xs font-black uppercase">12 Pending</span>
              <span className="bg-gray-100 text-gray-500 px-4 py-1.5 rounded-full text-xs font-black uppercase">24 History</span>
            </div>
          </div>
          <div className="divide-y divide-gray-50">
            {[
              { name: 'Emeka Obi', method: 'PAYSTACK', info: 'Access Bank • 0098273615', amount: 25000, time: '2h ago' },
              { name: 'Sarah Ahmed', method: 'OPAY', info: 'Wallet: 09063676131', amount: 12000, time: '4h ago' },
              { name: 'Chinonso Eze', method: 'PAYPAL', info: 'Paypal: chinonso@global.com', amount: 85000, time: '5h ago' },
              { name: 'Tunde Afolabi', method: 'PAYSTACK', info: 'GTBank • 2038475629', amount: 4500, time: '6h ago' },
              { name: 'Ifeoluwa Ade', method: 'OPAY', info: 'Wallet: 08123456789', amount: 30000, time: '8h ago' },
            ].map((req, idx) => (
              <div key={idx} className="p-8 flex items-center justify-between hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-lg ${
                    req.method === 'PAYSTACK' ? 'bg-blue-100 text-blue-600' : 
                    req.method === 'OPAY' ? 'bg-green-100 text-green-600' : 
                    'bg-indigo-100 text-indigo-600'
                  }`}>
                    {req.method === 'PAYSTACK' ? '🏦' : req.method === 'OPAY' ? '📱' : '🌎'}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <p className="font-black text-gray-900">{req.name}</p>
                      <span className="text-[10px] font-black px-2 py-0.5 rounded-md border border-gray-200 text-gray-400">{req.method}</span>
                    </div>
                    <p className="text-sm text-gray-500 font-medium">{req.info}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="text-right">
                    <p className="text-xl font-black text-green-600">₦{req.amount.toLocaleString()}</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{req.time}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="bg-gray-900 text-white px-5 py-2.5 rounded-xl text-sm font-black hover:bg-green-600 transition shadow-md">Approve</button>
                    <button className="bg-white border-2 border-gray-100 text-red-500 hover:bg-red-50 p-2.5 rounded-xl transition">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-6 bg-gray-50 text-center">
            <button className="text-sm font-bold text-gray-500 hover:text-green-600 transition">Load More Requests</button>
          </div>
        </div>

        {/* Quick Actions & System Health */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-black mb-6 flex items-center">
              <span className="mr-2">📈</span> Platform Metrics
            </h3>
            <div className="space-y-6">
              {[
                { label: 'Active Sellers', value: '1,245', color: 'bg-green-500' },
                { label: 'Active Suppliers', value: '89', color: 'bg-blue-500' },
                { label: 'Today Orders', value: '142', color: 'bg-orange-500' },
                { label: 'Avg Commission', value: '₦4,200', color: 'bg-indigo-500' },
              ].map((stat, i) => (
                <div key={i} className="flex justify-between items-center group">
                  <div className="flex items-center">
                    <div className={`w-1.5 h-1.5 rounded-full ${stat.color} mr-3 group-hover:scale-150 transition-transform`}></div>
                    <span className="text-gray-500 text-sm font-bold">{stat.label}</span>
                  </div>
                  <span className="font-black text-gray-900">{stat.value}</span>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 bg-gray-50 border-2 border-dashed border-gray-200 text-gray-400 py-3 rounded-2xl text-xs font-black uppercase hover:border-gray-400 hover:text-gray-600 transition">Generate PDF Report</button>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-600 to-blue-700 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700"></div>
            <h3 className="text-xl font-black mb-2 relative z-10">Marketplace Health</h3>
            <p className="text-indigo-100 text-sm mb-6 relative z-10 leading-relaxed">Platform performance is at 99.9%. Payment split logic is executing optimally across Paystack & OPay gateways.</p>
            <button className="w-full bg-white/20 hover:bg-white/30 text-white py-3 rounded-2xl text-sm font-black transition relative z-10 border border-white/20">System Diagnostics</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
