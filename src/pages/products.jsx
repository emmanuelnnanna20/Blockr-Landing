// src/pages/Products.jsx
const Products = ({ onNavigate }) => {
  const products = [
    {
      name: "Blockr",
      tagline: "Master Your Time Block by Block",
      description: "Time-blocking made simple",
      banner: "/banners/blockr-banner.png",
      rating: "4.8",
      link: "blockr"
    },
    {
      name: "LockNote",
      tagline: "Your Passwords Deserve Better",
      description: "Military-grade encryption",
      banner: "/banners/locknote-banner.png",
      rating: "4.9",
      link: "locknote"
    },
    {
      name: "Deadline Heat",
      tagline: "Feel The Heat Beat The Deadline",
      description: "Visual urgency tracker",
      banner: "/banners/deadlineheat-banner.png",
      rating: "4.7",
      link: "deadlineheat"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20 sm:pt-24 pb-16 sm:pb-32 px-4 sm:px-6">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@600;700;800;900&display=swap');
        * { font-family: 'Urbanist', sans-serif !important; }
      `}</style>

      {/* Header */}
      <div className="text-center mb-12 sm:mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 leading-tight mb-4">
          Our Apps
        </h1>
        <p className="mt-4 sm:mt-6 text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto px-4">
          Beautiful tools that help you focus, protect, and win.
        </p>
      </div>

      {/* App Store Style Cards */}
      <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
        {products.map((app, index) => (
          <div
            key={app.name}
            className="relative overflow-hidden rounded-3xl sm:rounded-[0.6rem] shadow-xl bg-white hover:shadow-2xl transition-all duration-300"
          >
            {/* Banner Image */}
            <button
              onClick={() => onNavigate(app.link)}
              className="w-full block focus:outline-none group"
            >
              <div className="relative aspect-[16/9] sm:aspect-[2.2/1] w-full overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
                <img
                  src={app.banner}
                  alt={`${app.name} preview`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.classList.add('flex', 'items-center', 'justify-center');
                    e.target.parentElement.innerHTML = `
                      <div class="text-center">
                        <div class="text-6xl sm:text-8xl font-black text-gray-300 mb-4">${app.name}</div>
                        <div class="text-xl sm:text-2xl font-bold text-gray-400">${app.tagline}</div>
                      </div>
                    `;
                  }}
                />
              </div>
            </button>

            {/* Bottom Info Section */}
            <div className="px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-3 sm:gap-4">
              {/* Left Side - Icon + Info */}
              <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                {/* App Icon */}
                <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl shadow-lg overflow-hidden">
                  <img
                    src={`/${app.link}.png`}
                    alt={`${app.name} icon`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 truncate">
                    {app.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 truncate">
                    {app.description}
                  </p>
                  <div className="flex items-center gap-1 mt-0.5 sm:mt-1">
                    <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <span className="text-xs sm:text-sm font-semibold text-gray-700">{app.rating}</span>
                  </div>
                </div>
              </div>

              {/* Right Side - See More Button */}
              <button
                onClick={() => onNavigate(app.link)}
                className="flex-shrink-0 px-5 sm:px-7 py-2 sm:py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-900 text-sm sm:text-base font-bold rounded-full transition-all hover:scale-105"
              >
                See More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="text-center mt-16 sm:mt-24 text-gray-600 px-4">
        <p className="text-sm sm:text-base lg:text-lg">
          Available on iOS & Android • Free to start
        </p>
      </div>
    </div>
  );
};

export default Products;