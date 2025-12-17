// src/pages/ProductDetail.jsx
import { useState } from 'react';

const ProductDetail = ({ productId, onNavigate }) => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxImage, setLightboxImage] = useState('');

    // Product data configuration
    const productData = {
        blockr: {
            name: "Blockr",
            tagline: "Master Your Time Block by Block",
            category: "Time-Blocking App",
            banner: "/banners/blockr-banner.png",
            screenshotsBanner: "/banners/blockr-banner.png",
            description: `Blockr is the ultimate time-blocking productivity app designed to help you transform your intentions into meaningful action. In a world full of distractions, Blockr gives you the power to take control of your schedule and maximize every hour of your day.

Whether you're a student balancing coursework, a professional managing multiple projects, or an entrepreneur building your empire, Blockr provides the structure you need to stay focused and productive.

With Blockr, you can create flexible time blocks for any duration — yearly goals, monthly objectives, weekly plans, or daily tasks. Assign specific tasks to each block and watch your productivity soar as you check off completed items with visual progress tracking.

Our smart reminder system ensures you never miss a beat. Get notified when blocks start, track your completion rates, build powerful streaks, and celebrate your productivity wins. The beautiful daily dashboard gives you a clear overview of your commitments each morning, while intuitive visual schedules let you see your entire day at a glance.`,
            androidLink: "https://play.google.com/store/apps/details?id=com.orelithdev.blockr",
            iosLink: null
        },
        locknote: {
            name: "LockNote",
            tagline: "Your Passwords Deserve Better",
            category: "Password Manager",
            banner: "/banners/locknote-banner.png",
            screenshotsBanner: "/banners/locknote-banner.png",
            description: `LockNote is a military-grade encrypted password vault that prioritizes your privacy above all else. Unlike cloud-based password managers that store your sensitive data on remote servers, LockNote keeps everything securely stored on your device — and only your device.

In an age of data breaches and privacy concerns, LockNote offers a refreshing approach to password security. Your passwords, notes, and sensitive information are encrypted using AES-256 encryption, the same standard used by governments and military organizations worldwide.

We believe in zero-knowledge security. This means we never see your data — not even we can access your passwords. There are no cloud servers to hack, no tracking, and no compromises on your privacy.

LockNote features biometric unlock support for quick, secure access using your fingerprint or Face ID. The one-tap copy feature lets you copy passwords instantly without exposing them on screen. Organize your passwords by category for easy management, and rest easy knowing your digital life is protected by the strongest encryption available.`,
            androidLink: "https://play.google.com/store/apps/details?id=com.orelithdev.locknoteapp",
            iosLink: null
        },
        deadlineheat: {
            name: "Deadline Heat",
            tagline: "Feel The Heat, Beat The Deadline",
            category: "Visual Deadline Tracker",
            banner: "/banners/deadlineheat-banner.png",
            screenshotsBanner: "/banners/deadlineheat-banner.png",
            description: `Deadline Heat is a revolutionary visual countdown timer that harnesses the power of color psychology to help you beat procrastination and meet every deadline with confidence.

The concept is simple yet powerful: as your deadline approaches, the timer changes color from a calm green to an urgent red. This visual cue triggers a psychological response that naturally motivates you to take action. No more last-minute panic — Deadline Heat keeps you aware of time passing in a way that's impossible to ignore.

Green means you have plenty of time to plan and work steadily. Yellow signals it's time to focus and minimize distractions. Red indicates emergency mode — maximum urgency required. This intuitive color system works with your brain's natural response to visual cues, making productivity feel effortless.

Track multiple projects with independent color timers, use the home screen widget to see urgency levels at a glance, and build momentum by tracking completion streaks. Deadline Heat turns the stress of deadlines into a motivating force that propels you toward success.`,
            androidLink: "https://play.google.com/store/apps/details?id=com.blockrlabs.deaadlineheat",
            iosLink: null
        }
    };

    const product = productData[productId] || productData.blockr;

    const openLightbox = (imageSrc) => {
        setLightboxImage(imageSrc);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        setLightboxImage('');
    };

    return (
        <div className="min-h-screen bg-white">
            <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400;500;600;700;800;900&display=swap');
        * { font-family: 'Urbanist', sans-serif !important; }
      `}</style>

            {/* Lightbox Modal */}
            {lightboxOpen && (
                <div
                    className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-pointer"
                    onClick={closeLightbox}
                >
                    <button
                        className="absolute top-4 right-4 text-white text-4xl font-light hover:text-gray-300 transition"
                        onClick={closeLightbox}
                    >
                        ×
                    </button>
                    <img
                        src={lightboxImage}
                        alt="Full size view"
                        className="max-w-full max-h-full object-contain rounded-lg"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}

            <section className="relative min-h-screen overflow-hidden">
                {/* Blue gradient background - hidden by white */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600" />

                {/* White card container - covers full screen, no blue visible */}
                <div className="relative z-10 min-h-screen flex flex-col px-0 py-0">
                    <div className="bg-white mx-0 py-16 sm:py-20 lg:py-24 flex-1">

                        <div className="max-w-4xl mx-auto px-4 sm:px-12 lg:px-16">

                            {/* Category Badge */}
                            <div className="text-center mb-6">
                                <span className="inline-block px-5 py-2 bg-blue-50 text-blue-700 rounded-full font-semibold text-sm border border-blue-200">
                                    {product.category}
                                </span>
                            </div>

                            {/* Title */}
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 text-center leading-[1.05] mb-4">
                                {product.name}
                            </h1>
                            <p className="text-xl sm:text-2xl text-center font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text mb-8">
                                {product.tagline}
                            </p>

                            {/* Banner Image */}
                            <div className="relative aspect-[16/10] sm:aspect-[2/1] w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl bg-gradient-to-br from-blue-100 to-purple-100 mb-10">
                                <img
                                    src={product.banner}
                                    alt={`${product.name} banner`}
                                    className="w-full h-full object-cover object-center"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.parentElement.classList.add('flex', 'items-center', 'justify-center');
                                        e.target.parentElement.innerHTML = `
                      <div class="text-center p-8">
                        <div class="text-5xl sm:text-7xl font-black text-gray-300 mb-4">${product.name}</div>
                        <div class="text-xl sm:text-2xl font-bold text-gray-400">${product.tagline}</div>
                      </div>
                    `;
                                    }}
                                />
                            </div>

                            {/* Download Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                                <a
                                    href={product.androidLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-bold rounded-full hover:scale-105 transition shadow-xl inline-flex items-center justify-center gap-3"
                                >
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.523 2.047a.5.5 0 0 0-.27.086L3.606 10.85a1 1 0 0 0 0 1.7l13.647 8.717a.5.5 0 0 0 .77-.42V2.553a.5.5 0 0 0-.5-.506zM14.47 8.12l1.73 1.73-1.73 1.73V8.12zm0 5.46l1.73 1.73-1.73 1.73v-3.46z" />
                                    </svg>
                                    <span>Download for Android</span>
                                </a>
                                {/* iOS button - disabled/inactive */}
                                <div
                                    className="px-8 py-4 bg-gray-200 text-gray-400 text-lg font-bold rounded-full cursor-not-allowed shadow-lg border-2 border-gray-300 inline-flex items-center justify-center gap-3"
                                >
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                    </svg>
                                    <span>iOS Coming Soon</span>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="bg-gray-50 rounded-3xl p-6 sm:p-10 mb-10">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">About {product.name}</h2>
                                <div className="text-gray-600 text-base sm:text-lg leading-relaxed">
                                    {product.description.split('\n\n').map((paragraph, index) => (
                                        <p key={index} className="mb-4 last:mb-0">{paragraph}</p>
                                    ))}
                                </div>
                            </div>

                            {/* Screenshots Banner - Clickable */}
                            <div className="mb-10">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-6">App Screenshots</h2>
                                <div
                                    className="relative aspect-[16/10] sm:aspect-[2/1] w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl bg-gradient-to-br from-gray-100 to-gray-200 cursor-pointer hover:shadow-2xl transition-shadow"
                                    onClick={() => openLightbox(product.screenshotsBanner)}
                                >
                                    <img
                                        src={product.screenshotsBanner}
                                        alt={`${product.name} screenshots`}
                                        className="w-full h-full object-cover object-center"
                                        onError={(e) => {
                                            e.target.parentElement.classList.add('flex', 'items-center', 'justify-center');
                                            e.target.parentElement.innerHTML = `
                        <div class="text-center p-8">
                          <div class="text-4xl sm:text-5xl font-bold text-gray-400 mb-2">App Screenshots</div>
                          <div class="text-lg text-gray-500">Coming Soon</div>
                        </div>
                      `;
                                        }}
                                    />
                                    {/* Click to view overlay */}
                                    <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors flex items-center justify-center">
                                        <div className="opacity-0 hover:opacity-100 transition-opacity bg-black/50 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                            Click to view full size
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Back Button */}
                            <div className="text-center">
                                <button
                                    onClick={() => onNavigate('products')}
                                    className="text-gray-600 hover:text-gray-900 font-semibold inline-flex items-center gap-2 transition"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                    Back to All Products
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductDetail;
