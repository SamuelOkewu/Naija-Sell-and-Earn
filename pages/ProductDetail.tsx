
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../constants';
import { User, UserRole } from '../types';

interface ProductDetailProps {
  user: User | null;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ user }) => {
  const { id } = useParams<{ id: string }>();
  const product = MOCK_PRODUCTS.find(p => p.id === id);
  const [copied, setCopied] = useState(false);

  if (!product) return <div className="p-20 text-center">Product not found</div>;

  const affiliateLink = `${window.location.origin}/#/product/${product.id}?ref=${user?.id || 'guest'}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(affiliateLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
    }).format(amount);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left: Image */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
          <img src={product.image} alt={product.name} className="w-full aspect-square object-cover" />
        </div>

        {/* Right: Info */}
        <div className="flex flex-col justify-center">
          <nav className="flex space-x-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-green-600">Home</Link>
            <span>/</span>
            <span className="text-gray-600">{product.category}</span>
          </nav>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
          <p className="text-gray-500 text-lg mb-8 leading-relaxed">{product.description}</p>
          
          <div className="bg-green-50 p-6 rounded-2xl border border-green-100 mb-8 flex items-center justify-between">
            <div>
              <p className="text-xs text-green-600 uppercase font-bold tracking-widest mb-1">Product Price</p>
              <p className="text-3xl font-black text-gray-900">{formatCurrency(product.price)}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-green-600 uppercase font-bold tracking-widest mb-1">Your Commission</p>
              <p className="text-3xl font-black text-green-600">{formatCurrency(product.commission)}</p>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            {user?.role === UserRole.SELLER ? (
              <>
                <button 
                  onClick={copyToClipboard}
                  className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all shadow-lg ${copied ? 'bg-green-100 text-green-700' : 'bg-green-600 text-white hover:bg-green-700'}`}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                  <span>{copied ? 'Link Copied!' : 'Copy My Seller Link'}</span>
                </button>
                <p className="text-xs text-center text-gray-400">Share this link to earn {formatCurrency(product.commission)} per sale.</p>
              </>
            ) : (
              <Link 
                to="/checkout"
                className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold text-lg text-center shadow-lg hover:bg-black transition-all"
              >
                Buy Now
              </Link>
            )}
            
            {!user && (
              <Link to="/auth" className="text-center text-green-600 font-semibold hover:underline mt-4">
                Login as Seller to earn commission on this product
              </Link>
            )}
          </div>

          <div className="mt-12 pt-12 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
            <div className="p-4 bg-gray-50 rounded-xl">
              <p className="text-xs text-gray-400 mb-1">Stock Available</p>
              <p className="text-lg font-bold">{product.stock} Units</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl">
              <p className="text-xs text-gray-400 mb-1">Market Source</p>
              <p className="text-lg font-bold">Lagos Main Market</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
