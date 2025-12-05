// src/pages/Home.jsx — FULL FINAL CODE
const Home = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-white">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400;500;600;700;800;900&display=swap');
        * { font-family: 'Urbanist', sans-serif !important; }
      `}</style>

      <section className="relative min-h-screen overflow-hidden">
        {/* Blue background — tiny edges only */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600" />

        {/* Wide white card */}
        <div className="relative z-10 min-h-screen flex flex-col justify-center px-4 sm:px-6">
          <div className="bg-white rounded-none sm:rounded-[40px] shadow-2xl mx-2 sm:mx-4 md:mx-8 lg:mx-12 xl:mx-20 2xl:mx-32 py-16 sm:py-20 lg:py-24">

            <div className="max-w-5xl mx-auto px-6 sm:px-12 lg:px-20 relative">

              {/* Floating Cards — Responsive on Mobile */}
              <div className="block">
                {/* Left Card */}
                <div className="absolute -left-3 sm:-left-6 top-16 sm:top-24 lg:top-48 w-48 sm:w-56 lg:w-64 bg-gray-50 rounded-3xl shadow-2xl p-4 sm:p-5 -rotate-6">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-blue-600 border-2 border-white"></div>
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-indigo-500 border-2 border-white"></div>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-xs sm:text-sm">Deep Work Session</div>
                      <div className="text-xs text-gray-500">Task • 0 of 5 • Today</div>
                    </div>
                  </div>
                </div>

                {/* Right Card */}
                <div className="absolute -right-3 sm:-right-6 top-32 sm:top-48 lg:top-64 w-52 sm:w-64 lg:w-72 bg-gray-50 rounded-3xl shadow-2xl p-4 sm:p-5 rotate-3">
                  <div className="text-xs sm:text-sm font-bold text-gray-900 mb-1">Project Launch</div>
                  <div className="text-xs text-gray-600 mb-2">Dec 15</div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
                    <span className="text-xs font-bold text-blue-600">5 days</span>
                  </div>
                </div>

                {/* Bottom Card */}
                <div className="absolute left-4 sm:left-8 -bottom-4 sm:-bottom-6 lg:-bottom-8 w-44 sm:w-52 lg:w-56 bg-gray-50 rounded-3xl shadow-2xl p-4 sm:p-5 -rotate-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-xs sm:text-sm">Password Vault</div>
                      <div className="text-xs text-gray-500">256-bit encrypted</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="text-center pt-8 sm:pt-12">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 leading-tight mb-6">
                  Manage Your<br className="sm:hidden" />
                  <span className="relative inline-block ml-3 sm:ml-4">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                      Productivity
                    </span>
                    <svg className="absolute -bottom-3 left-0 w-full h-5" viewBox="0 0 400 20" preserveAspectRatio="none">
                      <path d="M5 15 Q 200 5 395 15" stroke="#3b82f6" strokeWidth="6" fill="none" strokeLinecap="round"/>
                    </svg>
                  </span>
                </h1>

                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed px-4">
                  Building digital tools to help people focus, achieve, and thrive
                </p>

                <button
                  onClick={() => onNavigate('products')}
                  className="px-10 sm:px-12 py-5 sm:py-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg sm:text-xl font-bold rounded-full hover:scale-105 transform transition shadow-2xl inline-flex items-center gap-3"
                >
                  <span>Explore Our Apps</span>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>

                <div className="mt-12 flex items-center justify-center gap-3">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <span className="text-gray-700 font-semibold text-sm sm:text-base">
                    Trusted by 10,000+ users worldwide
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;