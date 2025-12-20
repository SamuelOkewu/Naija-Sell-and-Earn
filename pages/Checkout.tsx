
import React, { useState } from 'react';

const Checkout: React.FC = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="bg-gray-900 p-8 text-white flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Checkout</h1>
          <div className="flex space-x-2">
            {[1, 2].map((i) => (
              <div key={i} className={`w-10 h-1.5 rounded-full ${step >= i ? 'bg-green-500' : 'bg-gray-700'}`}></div>
            ))}
          </div>
        </div>

        <div className="p-10">
          {step === 1 ? (
            <div className="space-y-6">
              <h2 className="text-xl font-bold mb-6">Shipping Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <input type="text" placeholder="Full Name" className="w-full bg-gray-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-green-600" />
                <input type="email" placeholder="Email Address" className="w-full bg-gray-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-green-600" />
                <input type="tel" placeholder="Phone Number" className="w-full bg-gray-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-green-600" />
                <select className="w-full bg-gray-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-green-600">
                  <option>Lagos</option>
                  <option>Abuja</option>
                  <option>Port Harcourt</option>
                  <option>Kano</option>
                </select>
                <div className="md:col-span-2">
                  <textarea placeholder="Complete Delivery Address" rows={3} className="w-full bg-gray-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-green-600"></textarea>
                </div>
              </div>
              <button onClick={() => setStep(2)} className="w-full bg-green-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition shadow-lg">
                Continue to Payment
              </button>
            </div>
          ) : (
            <div className="text-center space-y-8">
              <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                <p className="text-gray-500 mb-1">Total to Pay</p>
                <p className="text-4xl font-black text-gray-900">₦25,000</p>
              </div>

              <div>
                <p className="text-sm font-bold text-gray-400 uppercase mb-4">Select Payment Method</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {['Paystack', 'Flutterwave', 'OPay', 'Card'].map((method) => (
                    <button key={method} className="flex flex-col items-center p-4 bg-gray-50 rounded-2xl border-2 border-transparent hover:border-green-600 hover:bg-white transition group">
                      <div className="w-10 h-10 bg-white rounded-full mb-2 flex items-center justify-center shadow-sm group-hover:bg-green-600 group-hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
                      </div>
                      <span className="text-xs font-bold text-gray-700">{method}</span>
                    </button>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => alert("Payment logic triggered! Split calculation: \n90% -> Owner Bank \n5% -> Admin Balance \n5% -> Seller Dashboard")}
                className="w-full bg-green-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition shadow-lg flex items-center justify-center space-x-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                <span>Complete Payment Securely</span>
              </button>
              
              <p className="text-xs text-gray-400">Transactions are encrypted and secured. Instant split payments managed by Naija Sell and Earn.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
