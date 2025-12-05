// src/pages/products/Blockr.jsx
const Blockr = ({ onNavigate }) => {
  return (
    <div className="bg-white min-h-screen">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400;500;600;700;800;900&display=swap');
        * { font-family: 'Urbanist', sans-serif !important; }
      `}</style>

      {/* HERO SECTION — FULL WHITE, NO EXTRA CONTAINER */}
      <section className="relative pt-20 sm:pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">

          {/* Main Hero Content */}
          <div className="text-center relative z-20">
            <span className="inline-block px-6 py-3 bg-blue-100 text-blue-700 rounded-full font-bold text-base sm:text-lg mb-6 sm:mb-8">
              Time-Blocking App
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 leading-tight mb-6 sm:mb-8">
              Master Your Time
              <br />
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Block by Block
                </span>
                <svg className="absolute -bottom-2 sm:-bottom-4 left-0 w-full" height="20" viewBox="0 0 400 20">
                  <path d="M5 15 Q 200 5 395 15" stroke="#2563eb" strokeWidth="8" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-600 mb-10 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
              Turn intentions into action. Create task lists, assign time blocks, and watch your productivity soar with visual progress tracking.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12 sm:mb-16">
              <button className="w-full sm:w-auto px-10 sm:px-12 py-5 sm:py-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg sm:text-xl font-bold rounded-full hover:scale-105 transform transition shadow-2xl">
                Download Free
              </button>
              <button className="w-full sm:w-auto px-10 sm:px-12 py-5 sm:py-6 bg-gray-100 text-gray-900 text-lg sm:text-xl font-bold rounded-full hover:bg-gray-200 transition border-2 border-gray-200">
                Watch Demo
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-gray-700 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                <span className="font-semibold">Free Forever</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                <span className="font-semibold">No Credit Card</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                <span className="font-semibold">iOS, Android, Web</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION — WITH PHONE MOCKUP AND FLOATING CARDS */}
      <section className="py-20 sm:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-6">
              Everything You Need
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto px-4">
              Powerful features to structure your day and achieve your goals
            </p>
          </div>

          {/* Phone Mockup + Floating Feature Cards */}
          <div className="relative">
            {/* Phone Mockup - Center */}
            <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-lg z-10">
              <div className="relative aspect-[9/19] rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden shadow-2xl border-[6px] sm:border-8 border-gray-900">
                <video 
                  src="/blockrapp.mp4" 
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating Feature Cards - Desktop Only (Large Screens) */}
            <div className="hidden xl:block">
              {/* Top Left Card */}
              <div className="absolute -left-4 top-12 w-72 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl shadow-2xl p-6 -rotate-6 border border-blue-100 hover:scale-105 transition-transform">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-gray-900">Flexible Time Blocks</h3>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">Create blocks for any duration - yearly, monthly, weekly, daily, or custom</p>
              </div>

              {/* Top Right Card */}
              <div className="absolute -right-4 top-20 w-72 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl shadow-2xl p-6 rotate-6 border border-purple-100 hover:scale-105 transition-transform">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-gray-900">Progress Tracking</h3>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">Monitor completion rates, build streaks, and celebrate productivity wins</p>
              </div>

              {/* Middle Left Card */}
              <div className="absolute -left-8 top-80 w-64 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl shadow-2xl p-6 -rotate-3 border border-green-100 hover:scale-105 transition-transform">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-gray-900">Smart Reminders</h3>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">Get notified when blocks start so you never miss a beat</p>
              </div>

              {/* Middle Right Card */}
              <div className="absolute -right-12 top-96 w-64 bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl shadow-2xl p-6 rotate-3 border border-orange-100 hover:scale-105 transition-transform">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-amber-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-gray-900">Daily Dashboards</h3>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">Start each day with clear overview of tasks and commitments</p>
              </div>

              {/* Bottom Left Card */}
              <div className="absolute left-8 bottom-20 w-64 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl shadow-2xl p-6 -rotate-6 border border-indigo-100 hover:scale-105 transition-transform">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-gray-900">Visual Schedules</h3>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">See your entire day at a glance with intuitive visual layouts</p>
              </div>

              {/* Bottom Right Card */}
              <div className="absolute right-12 bottom-12 w-64 bg-gradient-to-br from-red-50 to-rose-50 rounded-3xl shadow-2xl p-6 rotate-6 border border-red-100 hover:scale-105 transition-transform">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-rose-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-gray-900">Goal Timelines</h3>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">Set long-term goals and track progress with visual timelines</p>
              </div>
            </div>

            {/* Mobile/Tablet Grid View */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:hidden gap-6 sm:gap-8 mt-12 sm:mt-20">
              {[
                { 
                  title: 'Flexible Time Blocks', 
                  desc: 'Create blocks for any duration - yearly, monthly, weekly, daily, or custom',
                  gradient: 'from-blue-50 to-indigo-50',
                  iconGradient: 'from-blue-600 to-indigo-600',
                  border: 'border-blue-100',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                },
                { 
                  title: 'Progress Tracking', 
                  desc: 'Monitor completion rates, build streaks, and celebrate productivity wins',
                  gradient: 'from-purple-50 to-pink-50',
                  iconGradient: 'from-purple-600 to-pink-600',
                  border: 'border-purple-100',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                },
                { 
                  title: 'Smart Reminders', 
                  desc: 'Get notified when time blocks start so you never miss a beat',
                  gradient: 'from-green-50 to-emerald-50',
                  iconGradient: 'from-green-600 to-emerald-600',
                  border: 'border-green-100',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                },
                { 
                  title: 'Daily Dashboards', 
                  desc: 'Start each day with clear overview of tasks and time commitments',
                  gradient: 'from-orange-50 to-amber-50',
                  iconGradient: 'from-orange-600 to-amber-600',
                  border: 'border-orange-100',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                },
                { 
                  title: 'Visual Schedules', 
                  desc: 'See your entire day at a glance with intuitive visual layouts',
                  gradient: 'from-indigo-50 to-blue-50',
                  iconGradient: 'from-indigo-600 to-blue-600',
                  border: 'border-indigo-100',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                },
                { 
                  title: 'Goal Timelines', 
                  desc: 'Set long-term goals and track progress with visual timelines',
                  gradient: 'from-red-50 to-rose-50',
                  iconGradient: 'from-red-600 to-rose-600',
                  border: 'border-red-100',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                },
              ].map((f, i) => (
                <div key={i} className={`bg-gradient-to-br ${f.gradient} rounded-3xl p-6 sm:p-8 hover:shadow-2xl transition-all group border ${f.border}`}>
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${f.iconGradient} rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}>
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {f.icon}
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-2 sm:mb-3">{f.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-32 px-6 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 px-4">
            Ready to Transform Your Productivity?
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl mb-10 sm:mb-12 opacity-90 px-4">
            Join thousands who have mastered their time with Blockr
          </p>
          <button className="w-full sm:w-auto px-12 sm:px-16 py-6 sm:py-7 bg-white text-blue-600 text-xl sm:text-2xl font-black rounded-full hover:scale-105 transform transition shadow-2xl">
            Start Time Blocking Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default Blockr;