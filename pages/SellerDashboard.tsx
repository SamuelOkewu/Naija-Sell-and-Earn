
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

type PayoutMethod = 'PAYSTACK' | 'OPAY' | 'PAYPAL';

const SellerDashboard: React.FC = () => {
  const [showPayoutModal, setShowPayoutModal] = useState(false);
  const [payoutMethod, setPayoutMethod] = useState<PayoutMethod>('PAYSTACK');

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Seller Dashboard</h1>
          <p className="text-gray-500">Welcome back, Partner.</p>
        </div>
        <button 
          onClick={() => setShowPayoutModal(true)}
          className="bg-green-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-green-700 transition shadow-md flex items-center space-x-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>Withdraw Earnings</span>
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

      {/* Payout Modal */}
      {showPayoutModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-in fade-in duration-300">
          <div className="bg-white rounded-[2.5rem] w-full max-w-lg p-10 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-3xl font-black text-gray-900">Withdraw Funds</h3>
                <p className="text-gray-500 text-sm mt-1">Select your preferred payout method</p>
              </div>
              <button 
                onClick={() => setShowPayoutModal(false)} 
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-200 hover:text-gray-600 transition"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>

            {/* Payout Method Tabs */}
            <div className="flex p-1.5 bg-gray-100 rounded-2xl mb-8">
              {[
                { id: 'PAYSTACK', label: 'Bank (Paystack)', icon: '🏦' },
                { id: 'OPAY', label: 'OPay Wallet', icon: '📱' },
                { id: 'PAYPAL', label: 'PayPal', icon: '🌎' }
              ].map((method) => (
                <button
                  key={method.id}
                  onClick={() => setPayoutMethod(method.id as PayoutMethod)}
                  className={`flex-1 flex flex-col items-center py-3 px-2 rounded-xl text-xs font-bold transition-all ${payoutMethod === method.id ? 'bg-white text-green-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  <span className="text-xl mb-1">{method.icon}</span>
                  {method.label}
                </button>
              ))}
            </div>

            <div className="space-y-6">
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">Withdrawal Amount</label>
                <div className="relative">
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 font-black text-2xl text-gray-400">₦</span>
                  <input type="number" defaultValue="10000" className="w-full bg-gray-50 border-2 border-gray-100 p-5 pl-12 rounded-2xl text-2xl font-black focus:border-green-600 focus:ring-0 transition-all outline-none" />
                </div>
                <div className="flex justify-between mt-2 px-1">
                  <span className="text-xs text-gray-400">Available: ₦125,400</span>
                  <span className="text-xs text-red-400 font-medium">Min: ₦5,000</span>
                </div>
              </div>

              <div className="space-y-4">
                {payoutMethod === 'PAYSTACK' && (
                  <>
                    <select className="w-full bg-gray-50 border-2 border-gray-100 p-4 rounded-xl focus:border-green-600 outline-none transition font-medium">
                      <option>Select Bank</option>
                      <option>Access Bank</option>
                      <option>GTBank</option>
                      <option>Zenith Bank</option>
                      <option>United Bank for Africa (UBA)</option>
                      <option>Kuda Bank</option>
                    </select>
                    <input type="text" placeholder="Account Number" className="w-full bg-gray-50 border-2 border-gray-100 p-4 rounded-xl focus:border-green-600 outline-none transition font-medium" />
                    <input type="text" placeholder="Account Name (Auto-verified)" className="w-full bg-gray-100 border-none p-4 rounded-xl text-gray-400 italic font-medium cursor-not-allowed" readOnly />
                  </>
                )}

                {payoutMethod === 'OPAY' && (
                  <>
                    <div className="bg-green-50 p-4 rounded-xl flex items-center space-x-3 mb-2">
                      <span className="text-lg">💡</span>
                      <p className="text-xs text-green-800 leading-tight">Instant transfers to OPay wallets are processed using your registered phone number.</p>
                    </div>
                    <input type="tel" placeholder="OPay Phone Number" className="w-full bg-gray-50 border-2 border-gray-100 p-4 rounded-xl focus:border-green-600 outline-none transition font-medium" />
                  </>
                )}

                {payoutMethod === 'PAYPAL' && (
                  <>
                    <input type="email" placeholder="PayPal Email Address" className="w-full bg-gray-50 border-2 border-gray-100 p-4 rounded-xl focus:border-green-600 outline-none transition font-medium" />
                    <p className="text-[10px] text-center text-gray-400 px-4">Withdrawals to PayPal are converted at current market rates and may incur processing fees.</p>
                  </>
                )}
              </div>

              <button 
                onClick={() => {
                  alert(`Payout request submitted via ${payoutMethod}!`);
                  setShowPayoutModal(false);
                }}
                className="w-full bg-green-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-green-700 hover:shadow-xl transition-all shadow-lg active:scale-95"
              >
                Request ₦10,000 Payout
              </button>
            </div>
            
            <p className="mt-6 text-[10px] text-center text-gray-400 flex items-center justify-center space-x-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path></svg>
              <span>Secure payouts powered by Naija Sell and Earn infrastructure.</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SellerDashboard;
