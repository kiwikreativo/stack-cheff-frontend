import { useState } from "react";

interface PricingComparisonProps {
  selectedPlan: 'Head Chef' | 'Enterprise';
}

export default function PricingComparison({ selectedPlan }: PricingComparisonProps) {
  const [activeTab, setActiveTab] = useState<'monthly' | 'yearly'>('monthly');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardName, setCardName] = useState('');
  const [email, setEmail] = useState('');

  const plans = {
    'Head Chef': {
      price: '$20',
      period: '/mo',
      title: 'Head Chef',
      features: ['30 Boilerplates/mo', 'Standard Support', 'Public & Private Repos'],
      gradientFrom: '#667eea',
      gradientTo: '#764ba2',
    },
    'Enterprise': {
      price: '$60',
      period: '/mo',
      title: 'Enterprise',
      features: ['30 Boilerplates/mo', 'Priority Support', 'Enterprise Security'],
      gradientFrom: '#f093fb',
      gradientTo: '#f5576c',
    },
  };

  const currentPlan = plans[selectedPlan];

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    return parts.length ? parts.join(' ') : v;
  };

  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(formatCardNumber(e.target.value));
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpiry(formatExpiry(e.target.value));
  };

  const basePrice = parseInt(currentPlan.price.replace('$', '')) || 0;
  const monthlyTotal = basePrice;
  const yearlySubTotal = monthlyTotal * 12; 
  const discount = yearlySubTotal * 0.20;
  const yearlyTotal = yearlySubTotal - discount;
  
  const getSubtotal = () => {
    if (activeTab === 'yearly') {
      return '$' + yearlySubTotal.toFixed(0);
    }
    return currentPlan.price;
  };
  
  const getDiscountAmount = () => {
    if (activeTab === 'yearly') {
      return '-$' + discount.toFixed(0);
    }
    return '$0';
  };
  
  const getTotal = () => {
    if (activeTab === 'yearly') {
      return '$' + yearlyTotal.toFixed(0);
    }
    return currentPlan.price;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[rgba(199,221,235,0.8)] p-4 sm:p-8">
      <div 
        className="flex flex-col lg:flex-row w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl"
        style={{ minHeight: '600px' }}
      >
        {/* Left Card - Plan Details */}
        <div 
          className="lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between"
          style={{ 
            background: `linear-gradient(135deg, ${currentPlan.gradientFrom} 0%, ${currentPlan.gradientTo} 100%)`,
            color: 'white'
          }}
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl font-bold">{currentPlan.title}</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Popular</span>
            </div>
            
            <div className="mb-6">
              <span className="text-5xl sm:text-6xl font-bold">{getSubtotal()}</span>
              <span className="text-xl opacity-80 ml-2">{currentPlan.period}</span>
            </div>

            <ul className="space-y-3 mb-8">
              {currentPlan.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm sm:text-base">
                  <i className="fa-solid fa-check"></i>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/10 rounded-xl p-4">
            <div className="flex justify-between text-sm mb-2">
              <span>Subtotal</span>
              <span>{getSubtotal()}</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span>Discount</span>
              <span>{getDiscountAmount()}</span>
            </div>
            <div className="flex justify-between font-bold text-lg pt-2 border-t border-white/20">
              <span>Total</span>
              <span>{getTotal()}</span>
            </div>
          </div>
        </div>

        {/* Right Side - Payment Form */}
        <div className="lg:w-3/5 bg-white p-6 sm:p-8 flex flex-col">
          {/* Toggle */}
          <div className="flex justify-center mb-6">
            <div className="bg-gray-100 rounded-full p-1 flex">
              <button
                onClick={() => setActiveTab('monthly')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeTab === 'monthly' 
                    ? 'bg-[#0A2540] text-white' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setActiveTab('yearly')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeTab === 'yearly' 
                    ? 'bg-[#0A2540] text-white' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Yearly
                <span className="ml-2 text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">-20%</span>
              </button>
            </div>
          </div>

          {/* Payment Form */}
          <div className="flex-1 overflow-auto space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#667eea] focus:border-transparent transition-all"
              />
            </div>

            {/* Cardholder Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Cardholder Name</label>
              <input
                type="text"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                placeholder="John Doe"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#667eea] focus:border-transparent transition-all"
              />
            </div>

            {/* Card Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
              <div className="relative">
                <input
                  type="text"
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#667eea] focus:border-transparent transition-all"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-1">
                  <i className="fa-brands fa-cc-visa text-gray-400 text-xl"></i>
                  <i className="fa-brands fa-cc-mastercard text-gray-400 text-xl"></i>
                </div>
              </div>
            </div>

            {/* Expiry and CVV */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Expiry</label>
                <input
                  type="text"
                  value={expiry}
                  onChange={handleExpiryChange}
                  placeholder="MM/YY"
                  maxLength={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#667eea] focus:border-transparent transition-all"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                <div className="relative">
                  <input
                    type="text"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 4))}
                    placeholder="123"
                    maxLength={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#667eea] focus:border-transparent transition-all"
                  />
                  <i className="fa-solid fa-lock absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
                </div>
              </div>
            </div>

            {/* Secure Notice */}
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <i className="fa-solid fa-shield-halved text-green-500"></i>
              <span>Your payment is secure and encrypted</span>
            </div>
          </div>

          {/* Pay Button */}
          <div className="mt-6">
            <button className="w-full py-4 bg-[#667eea] hover:bg-[#5a6fd6] text-white rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-2">
              <i className="fa-solid fa-lock"></i>
              Pay {getTotal()}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}