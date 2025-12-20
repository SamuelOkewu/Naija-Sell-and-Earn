
import React from 'react';
import { MOCK_PRODUCTS } from '../constants';

const OwnerDashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Owner Dashboard</h1>
          <p className="text-gray-500">Alaba Market Outlet #42</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-white px-6 py-3 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
            <p className="text-xs text-gray-400 font-bold uppercase">Total Revenue (90%)</p>
            <p className="text-2xl font-black text-gray-900">₦2,840,000</p>
          </div>
          <button className="bg-gray-900 text-white px-8 py-3 rounded-2xl font-bold hover:bg-black transition shadow-lg">
            + Add Product
          </button>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-8 border-b border-gray-50">
          <h2 className="text-xl font-bold">Inventory & Performance</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 text-xs uppercase text-gray-400 tracking-widest">
                <th className="px-8 py-4">Product</th>
                <th className="px-8 py-4">Price</th>
                <th className="px-8 py-4">Stock</th>
                <th className="px-8 py-4">Sales</th>
                <th className="px-8 py-4">Revenue</th>
                <th className="px-8 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {MOCK_PRODUCTS.slice(0, 8).map((p) => (
                <tr key={p.id} className="hover:bg-gray-50 transition">
                  <td className="px-8 py-6">
                    <div className="flex items-center space-x-4">
                      <img src={p.image} className="w-12 h-12 rounded-lg object-cover" />
                      <span className="font-bold text-gray-900">{p.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-gray-600 font-medium">₦{p.price.toLocaleString()}</td>
                  <td className="px-8 py-6">
                    <div className="flex items-center space-x-2">
                      <span className={`w-2 h-2 rounded-full ${p.stock < 15 ? 'bg-red-500' : 'bg-green-500'}`}></span>
                      <span className="font-bold">{p.stock} Units</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 font-bold">42</td>
                  <td className="px-8 py-6 text-green-600 font-black">₦{(p.price * 42 * 0.9).toLocaleString()}</td>
                  <td className="px-8 py-6">
                    <button className="text-blue-600 font-bold hover:underline">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OwnerDashboard;
