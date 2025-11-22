import React from 'react';
import { ArrowRight, Clock, Lock, Clipboard, Timer, Shield, TrendingUp, Check } from 'lucide-react';

export default function Home({ setCurrentPage }) {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-br from-[#0a0a1a] via-[#1a1a3e] to-[#0a0a1a]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2563eb]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#2563eb]/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-block px-4 py-2 bg-[#2563eb]/20 border border-[#2563eb] rounded-full text-sm text-white mb-8">
            Building digital tools to help people focus, achieve, and thrive
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white mb-6">
            Build Your Best Life.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#60a5fa]">
              One Focus at a Time.
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
            Digital tools that cut through the noise and help you focus, achieve, and thrive in an increasingly distracted world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] rounded-lg font-semibold text-lg hover:shadow-xl hover:shadow-[#2563eb]/50 transition-all flex items-center justify-center group text-white">
              Explore Our Products
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button className="px-8 py-4 border-2 border-[#2563eb] text-white rounded-lg font-semibold text-lg hover:bg-[#2563eb]/20 transition-all">
              Learn More
            </button>
          </div>

          {/* Floating Product Logos */}
          <div className="relative h-[400px] mt-20">
            <div className="absolute top-[10%] left-[20%] w-20 h-20 bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] rounded-2xl flex items-center justify-center shadow-lg shadow-[#2563eb]/50 animate-float">
              <Clock size={32} className="text-white" />
            </div>
            <div className="absolute top-[20%] right-[15%] w-20 h-20 bg-gradient-to-br from-[#00ffd4] to-[#00d4b8] rounded-2xl flex items-center justify-center shadow-lg shadow-[#00ffd4]/50 animate-float-delayed">
              <Lock size={32} className="text-black" />
            </div>
            <div className="absolute bottom-[25%] left-[15%] w-20 h-20 bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] rounded-2xl flex items-center justify-center shadow-lg shadow-[#8B5CF6]/50 animate-float">
              <Clipboard size={32} className="text-white" />
            </div>
            <div className="absolute bottom-[20%] right-[20%] w-20 h-20 bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] rounded-2xl flex items-center justify-center shadow-lg shadow-[#2563eb]/50 animate-float-delayed">
              <Timer size={32} className="text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-6 bg-[#0f0f1f]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Signal Over Noise
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We build tools based on three core principles that help you operate with clarity and purpose
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#1a1a2e] rounded-2xl border border-[#2563eb]/40 hover:border-[#2563eb] transition-all hover:shadow-xl hover:shadow-[#2563eb]/30 group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-[#2563eb]/50">
                <Shield size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Reduce Distractions</h3>
              <p className="text-gray-300 leading-relaxed">
                Cut through the digital noise and eliminate the friction that pulls you away from your priorities.
              </p>
            </div>
            
            <div className="p-8 bg-[#1a1a2e] rounded-2xl border border-[#2563eb]/40 hover:border-[#2563eb] transition-all hover:shadow-xl hover:shadow-[#2563eb]/30 group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-[#2563eb]/50">
                <TrendingUp size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Create Focus</h3>
              <p className="text-gray-300 leading-relaxed">
                Enter deeper levels of clarity, concentration, and intentional action. Guide yourself back to what truly matters.
              </p>
            </div>
            
            <div className="p-8 bg-[#1a1a2e] rounded-2xl border border-[#2563eb]/40 hover:border-[#2563eb] transition-all hover:shadow-xl hover:shadow-[#2563eb]/30 group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-[#2563eb]/50">
                <Check size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Make Progress</h3>
              <p className="text-gray-300 leading-relaxed">
                Small daily wins lead to big life transformation. Consistency beats intensity, every single time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#0a0a1a] via-[#1a1a3e] to-[#0a0a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our Suite of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#60a5fa]">Focus Tools</span>
            </h2>
            <p className="text-xl text-gray-300">Four powerful apps, one mission: help you thrive</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Blockr Card */}
            <button
              onClick={() => setCurrentPage('blockr')}
              className="group p-8 bg-[#1a1a2e] rounded-2xl border border-[#2563eb]/40 hover:border-[#2563eb] transition-all hover:shadow-xl hover:shadow-[#2563eb]/30 text-left"
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg overflow-hidden bg-white p-2">
                <img src="/favicon.png" alt="Blockr" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Blockr</h3>
              <p className="text-gray-400 mb-4">Master Your Day</p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Structure your day with time-blocking, task management, and progress tracking in one powerful app.
              </p>
              <span className="text-[#2563eb] font-semibold flex items-center">
                Learn More <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </span>
            </button>

            {/* LockNote Card */}
            <button
              onClick={() => setCurrentPage('locknote')}
              className="group p-8 bg-[#1a1a2e] rounded-2xl border border-[#00ffd4]/40 hover:border-[#00ffd4] transition-all hover:shadow-xl hover:shadow-[#00ffd4]/30 text-left"
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg overflow-hidden bg-white p-2">
                <img src="/locknote_logo.png" alt="LockNote" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">LockNote</h3>
              <p className="text-gray-400 mb-4">Secure Your Digital Life</p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Military-grade password vault with local encryption. Your credentials never leave your device.
              </p>
              <span className="text-[#00ffd4] font-semibold flex items-center">
                Learn More <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </span>
            </button>

            {/* FlashSave Card */}
            <button
              onClick={() => setCurrentPage('flashsave')}
              className="group p-8 bg-[#1a1a2e] rounded-2xl border border-[#8B5CF6]/40 hover:border-[#8B5CF6] transition-all hover:shadow-xl hover:shadow-[#8B5CF6]/30 text-left"
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg overflow-hidden bg-white p-2">
                <img src="/flash_save_logo.png" alt="FlashSave" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">FlashSave</h3>
              <p className="text-gray-400 mb-4">Never Lose Important Text</p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Intelligent clipboard history that automatically saves everything you copy for instant recall.
              </p>
              <span className="text-[#8B5CF6] font-semibold flex items-center">
                Learn More <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </span>
            </button>

            {/* DeadlineHeat Card */}
            <button
              onClick={() => setCurrentPage('deadlineheat')}
              className="group p-8 bg-[#1a1a2e] rounded-2xl border border-[#2563eb]/40 hover:border-[#2563eb] transition-all hover:shadow-xl hover:shadow-[#2563eb]/30 text-left"
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg overflow-hidden bg-white p-2">
                <img src="/deadlineheat.png" alt="DeadlineHeat" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">DeadlineHeat</h3>
              <p className="text-gray-400 mb-4">Feel The Urgency</p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Visual countdown timer with color-coded urgency to motivate action and beat procrastination.
              </p>
              <span className="text-[#2563eb] font-semibold flex items-center">
                Learn More <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 bg-[#0f0f1f]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Technology Should Serve<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#60a5fa]">
              Human Goals
            </span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-12">
            Blockr Labs exists to solve one problem: People want to do meaningful work, but modern life is filled with constant noise, interruptions, and mental overload. We create simple, powerful tools that cut through that noise and empower you to take control of your time, habits, and mental energy.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 bg-[#1a1a2e] rounded-xl border border-[#2563eb]/30">
              <div className="text-4xl font-bold text-[#2563eb] mb-2">500+</div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div className="p-6 bg-[#1a1a2e] rounded-xl border border-[#2563eb]/30">
              <div className="text-4xl font-bold text-[#2563eb] mb-2">10K+</div>
              <div className="text-gray-400">Tasks Completed</div>
            </div>
            <div className="p-6 bg-[#1a1a2e] rounded-xl border border-[#2563eb]/30">
              <div className="text-4xl font-bold text-[#2563eb] mb-2">95%</div>
              <div className="text-gray-400">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#2563eb]/30 to-[#1d4ed8]/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0a1a] opacity-80"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Start Your Focus<br />Journey Today
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands who've transformed their productivity with Blockr Labs tools.
          </p>
          <button className="px-12 py-5 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] rounded-lg font-semibold text-xl hover:shadow-2xl hover:shadow-[#2563eb]/50 transition-all inline-flex items-center group text-white">
            Download Our Apps
            <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={24} />
          </button>
        </div>
      </section>
    </div>
  );
}