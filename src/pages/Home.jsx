// src/pages/Home.jsx — MOBILE RESPONSIVE VERSION
const Home = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-white">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400;500;600;700;800;900&display=swap');
        * { font-family: 'Urbanist', sans-serif !important; }
      `}</style>

      <section className="relative min-h-screen overflow-hidden">
        {/* Blue gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600" />

        {/* White card container - covers full screen, no blue visible */}
        <div className="relative z-10 min-h-screen flex flex-col px-0 sm:px-0 py-0">
          <div className="bg-white sm:rounded-none shadow-none mx-0 py-16 sm:py-20 lg:py-24 flex-1 flex flex-col justify-center">

            <div className="max-w-5xl mx-auto px-4 sm:px-12 lg:px-20 relative">

              {/* Floating Cards - Visible on all screens, repositioned to not block text */}

              {/* Top Left Card (Deep Work) - Shifted more left */}
              <div className="absolute -left-3 sm:-left-8 md:-left-12 -top-8 sm:top-0 md:top-8 lg:top-12 w-24 sm:w-40 md:w-48 lg:w-56 bg-gray-50/95 backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-xl md:shadow-2xl p-2 sm:p-3 md:p-4 lg:p-5 -rotate-6 z-20">
                <div className="flex items-start gap-1.5 sm:gap-2 md:gap-3">
                  <div className="flex -space-x-1 sm:-space-x-1.5 md:-space-x-2">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 rounded-full bg-blue-600 border border-white sm:border-2"></div>
                    <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 rounded-full bg-indigo-500 border border-white sm:border-2"></div>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-[8px] sm:text-[10px] md:text-xs lg:text-sm leading-tight">Deep Work</div>
                    <div className="text-[6px] sm:text-[8px] md:text-[10px] lg:text-xs text-gray-500">0 of 5 • Today</div>
                  </div>
                </div>
              </div>

              {/* Top Right Card (Project Launch) - Shifted even more right */}
              <div className="absolute -right-10 sm:-right-16 md:-right-20 -top-4 sm:top-4 md:top-16 lg:top-20 w-28 sm:w-44 md:w-52 lg:w-64 bg-gray-50/95 backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-xl md:shadow-2xl p-2 sm:p-3 md:p-4 lg:p-5 rotate-3 z-20">
                <div className="text-[8px] sm:text-[10px] md:text-xs lg:text-sm font-bold text-gray-900 mb-0.5 sm:mb-1 leading-tight">Project Launch</div>
                <div className="text-[6px] sm:text-[8px] md:text-[10px] lg:text-xs text-gray-600 mb-1 sm:mb-1.5 md:mb-2">Dec 15</div>
                <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
                  <div className="flex-1 h-1 sm:h-1.5 md:h-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
                  <span className="text-[6px] sm:text-[8px] md:text-[10px] lg:text-xs font-bold text-blue-600">5 days</span>
                </div>
              </div>

              {/* Bottom Left Card - Small on mobile, larger on desktop */}
              <div className="absolute -left-1 sm:left-4 md:left-8 -bottom-8 sm:-bottom-4 md:-bottom-6 lg:-bottom-8 w-24 sm:w-36 md:w-44 lg:w-52 bg-gray-50/95 backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-xl md:shadow-2xl p-2 sm:p-3 md:p-4 lg:p-5 -rotate-3 z-20">
                <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-lg sm:rounded-xl bg-blue-600 flex items-center justify-center">
                    <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-[8px] sm:text-[10px] md:text-xs lg:text-sm leading-tight">Vault</div>
                    <div className="text-[6px] sm:text-[8px] md:text-[10px] lg:text-xs text-gray-500">256-bit</div>
                  </div>
                </div>
              </div>

              {/* Bottom Right Card - Only on larger screens */}
              <div className="hidden sm:block absolute -right-2 md:-right-4 -bottom-4 md:-bottom-6 w-36 md:w-44 lg:w-52 bg-gray-50/95 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl p-3 md:p-4 lg:p-5 rotate-6 z-20">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-lg md:rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-[10px] md:text-xs lg:text-sm leading-tight">Tasks Done</div>
                    <div className="text-[8px] md:text-[10px] lg:text-xs text-gray-500">12 today</div>
                  </div>
                </div>
              </div>

              {/* Main Content - Optimized for mobile with bigger text */}
              <div className="text-center pt-8 sm:pt-12 pb-8 sm:pb-0 relative z-10">
                <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 leading-[1.05] mb-5 sm:mb-6">
                  Manage Your
                  <br />
                  <span className="relative inline-block mt-1 sm:mt-2">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                      Productivity
                    </span>
                    <svg className="absolute -bottom-1 sm:-bottom-3 left-0 w-full h-3 sm:h-5" viewBox="0 0 400 20" preserveAspectRatio="none">
                      <path d="M5 15 Q 200 5 395 15" stroke="#3b82f6" strokeWidth="6" fill="none" strokeLinecap="round" />
                    </svg>
                  </span>
                </h1>

                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-2">
                  Building digital tools to help people focus, achieve, and thrive
                </p>

                <button
                  onClick={() => onNavigate('products')}
                  className="w-full sm:w-auto px-10 sm:px-12 py-5 sm:py-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg sm:text-xl font-bold rounded-2xl sm:rounded-full hover:scale-105 transform transition shadow-2xl inline-flex items-center justify-center gap-3"
                >
                  <span>Explore Our Apps</span>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>

                <div className="mt-8 sm:mt-12 flex items-center justify-center gap-2 sm:gap-3">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
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