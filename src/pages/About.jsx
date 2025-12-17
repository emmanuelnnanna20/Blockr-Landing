// src/pages/About.jsx
const About = ({ onNavigate }) => {
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
                <div className="relative z-10 min-h-screen flex flex-col px-0 py-0">
                    <div className="bg-white mx-0 py-12 sm:py-16 lg:py-20 flex-1">

                        <div className="max-w-4xl mx-auto px-4 sm:px-12 lg:px-16">

                            {/* Hero Section */}
                            <div className="text-center mb-12 sm:mb-16 mt-16 sm:mt-20">
                                <span className="inline-block px-5 py-2 bg-blue-50 text-blue-700 rounded-full font-semibold text-sm mb-6 border border-blue-200">
                                    Our Story
                                </span>
                                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.05] mb-6">
                                    About
                                    <span className="relative inline-block ml-2 sm:ml-3">
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                            Blockr Labs
                                        </span>
                                        <svg className="absolute -bottom-1 sm:-bottom-3 left-0 w-full h-3 sm:h-5" viewBox="0 0 400 20" preserveAspectRatio="none">
                                            <path d="M5 15 Q 200 5 395 15" stroke="#3b82f6" strokeWidth="6" fill="none" strokeLinecap="round" />
                                        </svg>
                                    </span>
                                </h1>
                                <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                    We're on a mission to help people take control of their lives through beautifully crafted productivity software.
                                </p>
                            </div>

                            {/* Mission Section */}
                            <div className="mb-12 sm:mb-16">
                                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-6 sm:p-10 border border-blue-100">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Our Mission</h2>
                                            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                                                Empowering individuals and teams to achieve their full potential
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                        At Blockr Labs, we believe that everyone deserves access to powerful tools that help them manage their time, protect their digital lives, and achieve their goals. We're not just building apps — we're creating companions for your journey toward a more productive, organized, and fulfilling life.
                                    </p>
                                </div>
                            </div>

                            {/* What We Build Section */}
                            <div className="mb-12 sm:mb-16">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">What We Build</h2>
                                <div className="grid sm:grid-cols-3 gap-6">
                                    {/* Productivity Tools */}
                                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                                        <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-4">
                                            <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">Productivity Tools</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            Apps that help you manage time, track goals, and stay focused on what matters most.
                                        </p>
                                    </div>

                                    {/* Career Advancement */}
                                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                                        <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center mb-4">
                                            <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">Career Growth</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            Tools designed to help professionals excel in their careers and unlock new opportunities.
                                        </p>
                                    </div>

                                    {/* Business Solutions */}
                                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                                        <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center mb-4">
                                            <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">Business Solutions</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            Software that helps businesses drive sales, streamline operations, and achieve growth.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Our Values Section */}
                            <div className="mb-12 sm:mb-16">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">Our Values</h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50">
                                        <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                                            <span className="text-white text-xl">🎯</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 mb-1">User-First Design</h3>
                                            <p className="text-gray-600 text-sm">Every feature we build starts with understanding our users' real needs.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50">
                                        <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center flex-shrink-0">
                                            <span className="text-white text-xl">🔒</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 mb-1">Privacy Matters</h3>
                                            <p className="text-gray-600 text-sm">We believe your data belongs to you, and we build our apps accordingly.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50">
                                        <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center flex-shrink-0">
                                            <span className="text-white text-xl">✨</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 mb-1">Beautiful Simplicity</h3>
                                            <p className="text-gray-600 text-sm">Powerful features wrapped in elegant, easy-to-use interfaces.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50">
                                        <div className="w-10 h-10 rounded-xl bg-green-600 flex items-center justify-center flex-shrink-0">
                                            <span className="text-white text-xl">🚀</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 mb-1">Continuous Innovation</h3>
                                            <p className="text-gray-600 text-sm">We're always pushing boundaries to deliver better solutions.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Founder Section */}
                            <div className="mb-12 sm:mb-16">
                                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 sm:p-10 text-white">
                                    <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                                        <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                                            <span className="text-4xl sm:text-5xl">👨‍💻</span>
                                        </div>
                                        <div className="text-center sm:text-left">
                                            <h2 className="text-2xl sm:text-3xl font-bold mb-2">Meet the Founder</h2>
                                            <h3 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-3">Emmanuel Nnanna</h3>
                                            <p className="text-gray-300 leading-relaxed mb-4">
                                                A passionate software developer and entrepreneur dedicated to building tools that make a real difference in people's lives. Emmanuel founded Blockr Labs with a simple vision: create software that empowers people to achieve more.
                                            </p>
                                            <a
                                                href="https://www.emmanuelnnanna.xyz"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition"
                                            >
                                                <span>Visit Personal Website</span>
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media Section */}
                            <div className="mb-12 sm:mb-16 text-center">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Connect With Us</h2>
                                <p className="text-gray-600 mb-8">Follow our journey and stay updated on new releases</p>
                                <div className="flex justify-center gap-4 sm:gap-6">
                                    {/* Twitter/X */}
                                    <a
                                        href="https://x.com/blockrlab"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-14 h-14 rounded-2xl bg-gray-900 hover:bg-gray-800 flex items-center justify-center transition-colors group"
                                    >
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    </a>
                                    {/* LinkedIn */}
                                    <a
                                        href="https://www.linkedin.com/company/blockrlabs/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-14 h-14 rounded-2xl bg-blue-700 hover:bg-blue-600 flex items-center justify-center transition-colors"
                                    >
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>
                                    {/* Instagram */}
                                    <a
                                        href="https://www.instagram.com/blockrlabs?igsh=MWQxa2w4enkwcWpweg=="
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 hover:opacity-90 flex items-center justify-center transition-opacity"
                                    >
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* Explore Apps CTA */}
                            <div className="text-center">
                                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 sm:p-12">
                                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to Boost Your Productivity?</h2>
                                    <p className="text-blue-100 mb-8 text-lg">
                                        Discover our suite of powerful apps designed to help you achieve more.
                                    </p>
                                    <button
                                        onClick={() => onNavigate('products')}
                                        className="px-10 py-5 bg-white text-blue-600 text-lg font-bold rounded-full hover:scale-105 transform transition shadow-2xl inline-flex items-center gap-3"
                                    >
                                        <span>Explore Our Apps</span>
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
