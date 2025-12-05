// src/pages/Products.jsx
const Products = ({ onNavigate }) => {
  const products = [
    {
      name: "Blockr",
      tagline: "Master Your Time",
      banner: "/banners/blockr-banner.png",     // place your beautiful banners here
      link: "blockr"
    },
    {
      name: "LockNote",
      tagline: "Secure Your Credentials",
      banner: "/banners/locknote-banner.png",
      link: "locknote"
    },
    {
      name: "Deadline Heat",
      tagline: "Beat Procrastination",
      banner: "/banners/deadlineheat-banner.png",
      link: "deadlineheat"
    }
  ];

  const handleNavigate = (link) => {
    onNavigate(link);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-32 px-6">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@600;700;800;900&display=swap');
        * { font-family: 'Urbanist', sans-serif; }
      `}</style>

      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
          Our Apps
        </h1>
        <p className="mt-6 text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto">
          Beautiful tools that help you focus, protect, and win.
        </p>
      </div>

      {/* App Store Style - Vertical Hero Cards */}
      <div className="max-w-5xl mx-auto space-y-20">
        {products.map((app) => (
          <button
            key={app.name}
            onClick={() => handleNavigate(app.link)}
            className="w-full group block focus:outline-none"
          >
            <div className="relative overflow-hidden rounded-4xl shadow-2xl bg-white transition-all duration-500 hover:shadow-3xl">
              
              {/* Big Banner Image */}
              <div className="relative aspect-[2.1/1] w-full overflow-hidden bg-gray-100">
                <img
                  src={app.banner}
                  alt={`${app.name} app preview`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                {/* Optional subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Text Section Below */}
              <div className="px-10 py-12 sm:py-14 text-left flex items-center justify-between">
                <div>
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900">
                    {app.name}
                  </h2>
                  <p className="mt-3 text-xl sm:text-2xl font-semibold text-blue-600">
                    {app.tagline}
                  </p>
                </div>

                {/* See More / Get */}
                <div className="flex items-center">
                  <span className="text-xl font-bold text-gray-700 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                    See More
                    <svg className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7"/>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Footer Note */}
      <div className="text-center mt-24 text-gray-600">
        <p className="text-lg">Available on iOS & Android • Free to start</p>
      </div>
    </div>
  );
};

export default Products;