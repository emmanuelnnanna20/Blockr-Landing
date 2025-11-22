import React from 'react';
import { Download, Clipboard, Check, Zap, Target, Shield, Clock, Sparkles } from 'lucide-react';

export default function FlashSave() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-br from-[#0a0a1a] via-[#1a0a2e] to-[#0a0a1a]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#8B5CF6]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#A78BFA]/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-[#8B5CF6]/20 border border-[#8B5CF6] rounded-full text-sm text-white">
                📋 Never Lose What You Copy
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
                Never Lose<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA]">
                  What You Copy. Ever.
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Your intelligent clipboard history. Automatically saves everything you copy for instant recall. Perfect for writers, students, researchers, and multitaskers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9] rounded-lg font-semibold text-lg hover:shadow-xl hover:shadow-[#8B5CF6]/50 transition-all flex items-center justify-center group text-white">
                  Download Free
                  <Download className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </button>
                <button className="px-8 py-4 border-2 border-[#8B5CF6] text-white rounded-lg font-semibold text-lg hover:bg-[#8B5CF6]/20 transition-all">
                  See It In Action
                </button>
              </div>
            </div>
            
            <div className="relative h-[500px] flex items-center justify-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] bg-gradient-to-br from-[#8B5CF6]/30 to-[#A78BFA]/30 backdrop-blur-xl rounded-full flex flex-col items-center justify-center border-2 border-[#8B5CF6]/50 shadow-2xl shadow-[#8B5CF6]/30">
                <Clipboard size={80} className="text-[#8B5CF6]" />
              </div>
              
              <div className="absolute top-[15%] left-[15%] w-16 h-16 bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] rounded-2xl flex items-center justify-center shadow-lg shadow-[#8B5CF6]/50 animate-float">
                <Check size={28} className="text-white" />
              </div>
              <div className="absolute top-[20%] right-[10%] w-16 h-16 bg-gradient-to-br from-[#A78BFA] to-[#8B5CF6] rounded-2xl flex items-center justify-center shadow-lg shadow-[#A78BFA]/50 animate-float-delayed">
                <Zap size={28} className="text-white" />
              </div>
              <div className="absolute bottom-[20%] left-[10%] w-16 h-16 bg-gradient-to-br from-[#6D28D9] to-[#8B5CF6] rounded-2xl flex items-center justify-center shadow-lg shadow-[#6D28D9]/50 animate-float">
                <Sparkles size={28} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-[#0f0f1f]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Stop Losing<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA]">
              Important Text
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="p-8 bg-[#1a1a2e] rounded-2xl border border-[#ef4444]/30 hover:border-[#ef4444] transition-all hover:shadow-xl hover:shadow-[#ef4444]/20">
              <div className="w-16 h-16 bg-[#ef4444]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clipboard size={32} className="text-[#ef4444]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Accidentally Overwriting Clipboard</h3>
              <p className="text-gray-400">Copy something important, then lose it when you copy something else.</p>
            </div>
            <div className="p-8 bg-[#1a1a2e] rounded-2xl border border-[#ef4444]/30 hover:border-[#ef4444] transition-all hover:shadow-xl hover:shadow-[#ef4444]/20">
              <div className="w-16 h-16 bg-[#ef4444]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target size={32} className="text-[#ef4444]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">No History To Look Back</h3>
              <p className="text-gray-400">Need that text you copied 5 minutes ago? It's gone forever.</p>
            </div>
            <div className="p-8 bg-[#1a1a2e] rounded-2xl border border-[#ef4444]/30 hover:border-[#ef4444] transition-all hover:shadow-xl hover:shadow-[#ef4444]/20">
              <div className="w-16 h-16 bg-[#ef4444]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock size={32} className="text-[#ef4444]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Wasting Time Re-Finding Content</h3>
              <p className="text-gray-400">Spend valuable minutes searching for text you already copied once.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#0a0a1a] via-[#1a0a2e] to-[#0a0a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Smart Clipboard<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA]">
                That Works For You
              </span>
            </h2>
            <p className="text-xl text-gray-300">Automatic saving, instant recall, complete control</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group p-8 bg-[#1a1a2e] rounded-2xl border border-[#8B5CF6]/40 hover:border-[#8B5CF6] transition-all hover:shadow-xl hover:shadow-[#8B5CF6]/30">
              <div className="w-16 h-16 bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-[#8B5CF6]/50">
                <Zap size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Auto-Detect & Save</h3>
              <p className="text-gray-300 leading-relaxed">
                FlashSave detects copied text instantly and saves it automatically. No manual saving required—just copy and it's saved.
              </p>
            </div>
            
            <div className="group p-8 bg-[#1a1a2e] rounded-2xl border border-[#A78BFA]/40 hover:border-[#A78BFA] transition-all hover:shadow-xl hover:shadow-[#A78BFA]/30">
              <div className="w-16 h-16 bg-gradient-to-br from-[#A78BFA] to-[#8B5CF6] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-[#A78BFA]/50">
                <Clipboard size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Complete History</h3>
              <p className="text-gray-300 leading-relaxed">
                Access everything you've ever copied in one organized list. Scroll through your clipboard history anytime.
              </p>
            </div>
            
            <div className="group p-8 bg-[#1a1a2e] rounded-2xl border border-[#6D28D9]/40 hover:border-[#6D28D9] transition-all hover:shadow-xl hover:shadow-[#6D28D9]/30">
              <div className="w-16 h-16 bg-gradient-to-br from-[#6D28D9] to-[#8B5CF6] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-[#6D28D9]/50">
                <Check size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Quick Recall & Reuse</h3>
              <p className="text-gray-300 leading-relaxed">
                Tap any saved item to instantly copy it back to your clipboard. Reuse text snippets with one tap.
              </p>
            </div>
            
            <div className="group p-8 bg-[#1a1a2e] rounded-2xl border border-[#8B5CF6]/40 hover:border-[#8B5CF6] transition-all hover:shadow-xl hover:shadow-[#8B5CF6]/30">
              <div className="w-16 h-16 bg-gradient-to-br from-[#8B5CF6] to-[#A78BFA] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-[#8B5CF6]/50">
                <Target size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Manual Delete Control</h3>
              <p className="text-gray-300 leading-relaxed">
                Keep what you need, delete what you don't. Full control over your clipboard history with easy deletion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-6 bg-[#0f0f1f]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Perfect For<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA]">
                Every Workflow
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Writers', desc: 'Save quotes, references, and research snippets without losing track', icon: Sparkles },
              { title: 'Students', desc: 'Keep lecture notes, definitions, and study materials organized', icon: Target },
              { title: 'Researchers', desc: 'Manage citations, data, and sources across multiple documents', icon: Shield },
              { title: 'Multitaskers', desc: 'Juggle multiple projects without losing important copied content', icon: Zap }
            ].map((use, i) => (
              <div key={i} className="p-6 bg-[#1a1a2e] rounded-2xl border border-[#8B5CF6]/30 hover:border-[#8B5CF6] transition-all hover:shadow-xl hover:shadow-[#8B5CF6]/30 group">
                <div className="w-14 h-14 bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <use.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{use.title}</h3>
                <p className="text-gray-400 text-sm">{use.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#0a0a1a] via-[#1a0a2e] to-[#0a0a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              So Simple<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA]">
                It Just Works
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '1', title: 'Copy Anything', desc: 'Copy text from any app, website, or document as you normally would.', icon: Clipboard },
              { num: '2', title: 'Auto-Save', desc: 'FlashSave detects and saves it automatically in the background.', icon: Zap },
              { num: '3', title: 'Browse History', desc: 'Open FlashSave anytime to see everything you\'ve copied.', icon: Target },
              { num: '4', title: 'Reuse Instantly', desc: 'Tap any item to copy it back and paste wherever you need it.', icon: Check }
            ].map((step, i) => (
              <div key={i} className="relative text-center group">
                <div className="relative z-10">
                  <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-all duration-300 relative border-4 border-[#8B5CF6]">
                    <div className="text-4xl font-extrabold text-[#8B5CF6]">{step.num}</div>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#8B5CF6]/50">
                    <step.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#8B5CF6]/30 to-[#6D28D9]/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0a1a] opacity-80"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Never Lose Text Again
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Download FlashSave and transform your clipboard into a powerful productivity tool.
          </p>
          <button className="px-12 py-5 bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9] rounded-lg font-semibold text-xl hover:shadow-2xl hover:shadow-[#8B5CF6]/50 transition-all inline-flex items-center group text-white">
            Download FlashSave Free
            <Download className="ml-2 group-hover:translate-x-2 transition-transform" size={24} />
          </button>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
            <div className="px-6 py-3 bg-black rounded-lg flex items-center gap-3 hover:bg-gray-900 transition-all cursor-pointer">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs text-gray-300">Download on the</div>
                <div className="text-sm font-semibold text-white">App Store</div>
              </div>
            </div>
            <div className="px-6 py-3 bg-black rounded-lg flex items-center gap-3 hover:bg-gray-900 transition-all cursor-pointer">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs text-gray-300">GET IT ON</div>
                <div className="text-sm font-semibold text-white">Google Play</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}