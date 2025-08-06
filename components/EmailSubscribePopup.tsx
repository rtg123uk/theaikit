import React, { useState } from 'react';

export default function EmailSubscribePopup() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Handle form submission: AJAX POST to /api/subscribe, show thank you on success
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setSuccess(true);
        setEmail('');
      } else {
        setError(data.error || 'There was a problem subscribing. Please try again.');
      }
    } catch {
      setError('There was a problem subscribing. Please try again.');
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        className="fixed z-[9999] bottom-6 right-6 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 font-semibold text-base focus:outline-none focus:ring-2 focus:ring-indigo-400"
        onClick={() => { setOpen(true); setSuccess(false); setEmail(''); setError(''); }}
        aria-label="Subscribe to newsletter"
      >
        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m4 4V8" /></svg>
        Subscribe
      </button>
      {/* Popup */}
      {open && (
        <div className="fixed inset-0 z-popup flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-sm w-full text-center relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 p-2 rounded-full"
              aria-label="Close popup"
            >
              ×
            </button>
            {success ? (
              <>
                <h3 className="text-2xl font-bold text-green-600 mb-2">Thank you!</h3>
                <p className="text-gray-700">You have been subscribed.</p>
              </>
            ) : (
              <form
                className="space-y-4"
                onSubmit={handleSubmit}
              >
                <h3 className="text-xl font-bold mb-2">Start the Journey now</h3>
                <p className="text-gray-600 mb-4">Download your free <b>The 7 Most Profitable Niches for Selling AI Services</b> to start your journey.</p>
                <label htmlFor="EMAIL" className="block text-left font-semibold text-gray-700 mb-1">Enter your email address to subscribe</label>
                <input
                  type="email"
                  id="EMAIL"
                  name="EMAIL"
                  autoComplete="off"
                  placeholder="you@email.com"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                {error && <div className="text-red-600 text-sm">{error}</div>}
                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-semibold transition-all"
                >
                  Subscribe
                </button>
                <p className="text-xs text-gray-400 mt-2">We respect your privacy. Unsubscribe at any time.</p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
} 