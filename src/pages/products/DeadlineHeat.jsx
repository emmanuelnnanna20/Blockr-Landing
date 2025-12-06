// src/pages/products/DeadlineHeat.jsx
const DeadlineHeat = ({ onNavigate }) => {
  return (
    <div className="bg-white min-h-screen">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400;500;600;700;800;900&display=swap');
        * { font-family: 'Urbanist', sans-serif !important; }
      `}</style>

      {/* HERO SECTION */}
      <section className="relative pt-16 pb-16 lg:pt-24 lg:pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center relative z-10">
            <span className="inline-block px-5 py-2 bg-red-50 text-red-700 rounded-full font-semibold text-sm mb-6 border border-red-200">
              Beat Procrastination With Color
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
              Feel The Heat
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-yellow-500 to-red-600">
                Beat The Deadline
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Visual countdown timer that changes from green to red as your deadline approaches. Turn procrastination into action with real psychological urgency.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="px-10 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white text-lg font-bold rounded-full hover:scale-105 transition shadow-xl">
                Download Free
              </button>
              <button className="px-10 py-4 bg-gray-100 text-gray-900 text-lg font-bold rounded-full hover:bg-gray-200 transition border-2 border-gray-200">
                Watch The Heat
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-gray-700 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                <span className="font-semibold">Free Forever</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                <span className="font-semibold">No Credit Card</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                <span className="font-semibold">iOS, Android, Web</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-16 lg:py-24 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-white text-red-600 rounded-full font-semibold text-sm mb-4 border border-gray-200">
              ⚡ Explore Features
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Visual Urgency That Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Watch deadlines change color from green to red. Your brain knows when it's time to move.
            </p>
          </div>

          {/* Phone + Features Grid */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Features */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-4">
                  <div className="text-3xl">🟢</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Green - Calm & Planning</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Plenty of time left. Plan your approach and work steadily.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="w-14 h-14 bg-yellow-50 rounded-xl flex items-center justify-center mb-4">
                  <div className="text-3xl">🟡</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Yellow - Focus Mode</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Time to get serious. Minimize distractions and focus.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                  <div className="text-3xl">🔴</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Red - Emergency Mode</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Deadline is close! Time to move with maximum urgency.
                </p>
              </div>
            </div>

            {/* Phone Mockup - CENTER */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-full max-w-[260px]">
                <div className="relative aspect-[9/19.5] rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-gray-900">
                  <img 
                    src="/deadlineheat.png" 
                    alt="Deadline Heat App"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Features */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mb-4">
                  <div className="text-3xl">⏱️</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Multiple Deadlines</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Track multiple projects with independent color timers.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <div className="text-3xl">📱</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Home Screen Widget</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  See urgency levels at a glance on your home screen.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-4">
                  <div className="text-3xl">🔥</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Build Momentum</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Track completion streaks and build productive habits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-red-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Stop Waiting. Start Winning.
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Join thousands who never miss a deadline again.
          </p>
          <button className="px-12 py-5 bg-white text-red-600 text-xl font-black rounded-full hover:scale-105 transform transition shadow-2xl">
            Download Deadline Heat Free
          </button>
        </div>
      </section>
    </div>
  );
};

export default DeadlineHeat;