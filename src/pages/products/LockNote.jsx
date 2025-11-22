import React from 'react';
import { Download, Lock, Shield, Check, Target, Zap, ArrowRight } from 'lucide-react';

export default function LockNote() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-br from-[#0a0a1a] via-[#001a1a] to-[#0a0a1a]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00ffd4]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00ffd4]/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-[#00ffd4]/20 border border-[#00ffd4] rounded-full text-sm text-white">
                🔒 Your Privacy First
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
                Your Memory Is Great.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffd4] to-[#00d4b8]">
                  But LockNote Is Better.
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Secure your passwords and credentials with military-grade encryption. All stored locally on your device for maximum privacy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-[#00ffd4] to-[#00d4b8] text-black rounded-lg font-semibold text-lg hover:shadow-xl hover:shadow-[#00ffd4]/50 transition-all flex items-center justify-center group">
                  Download Free
                  <Download className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </button>
                <button className="px-8 py-4 border-2 border-[#00ffd4] text-white rounded-lg font-semibold text-lg hover:bg-[#00ffd4]/20 transition-all">
                  Learn More
                </button>
              </div>
            </div>
            
            <div className="relative h-[500px] flex items-center justify-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] bg-gradient-to-br from-[#00ffd4]/30 to-[#00d4b8]/30 backdrop-blur-xl rounded-full flex flex-col items-center justify-center border-2 border-[#00ffd4]/50 shadow-2xl shadow-[#00ffd4]/30">
                <Lock size={80} className="text-[#00ffd4]" />
              </div>
              
              <div className="absolute top-[15%] left-[15%] w-16 h-16 bg-gradient-to-br from-[#00ffd4] to-[#00d4b8] rounded-2xl flex items-center justify-center shadow-lg shadow-[#00ffd4]/50 animate-float">
                <Shield size={28} className="text-black" />
              </div>
              <div className="absolute top-[20%] right-[10%] w-16 h-16 bg-gradient-to-br from-[#00ffd4] to-[#00d4b8] rounded-2xl flex items-center justify-center shadow-lg shadow-[#00ffd4]/50 animate-float-delayed">
                <Check size={28} className="text-black" />
              </div>
              <div className="absolute bottom-[20%] left-[10%] w-16 h-16 bg-gradient-to-br from-[#00ffd4] to-[#00d4b8] rounded-2xl flex items-center justify-center shadow-lg shadow-[#00ffd4]/50 animate-float">
                <Lock size={28} className="text-black" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-[#0f0f1f]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Password Chaos<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffd4] to-[#00d4b8]">
              Ends Here
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="p-8 bg-[#1a1a2e] rounded-2xl border border-[#ef4444]/30 hover:border-[#ef4444] transition-all hover:shadow-xl hover:shadow-[#ef4444]/20">
              <div className="w-16 h-16 bg-[#ef4444]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Lock size={32} className="text-[#ef4444]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Weak, Reused Passwords</h3>
              <p className="text-gray-400">Using the same password everywhere puts all your accounts at risk.</p>
            </div>
            <div className="p-8 bg-[#1a1a2e] rounded-2xl border border-[#ef4444]/30 hover:border-[#ef4444] transition-all hover:shadow-xl hover:shadow-[#ef4444]/20">
              <div className="w-16 h-16 bg-[#ef4444]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target size={32} className="text-[#ef4444]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Lost Credentials</h3>
              <p className="text-gray-400">Forgot that password again? Waste time resetting instead of working.</p>
            </div>
            <div className="p-8 bg-[#1a1a2e] rounded-2xl border border-[#ef4444]/30 hover:border-[#ef4444] transition-all hover:shadow-xl hover:shadow-[#ef4444]/20">
              <div className="w-16 h-16 bg-[#ef4444]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield size={32} className="text-[#ef4444]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Privacy Concerns</h3>
              <p className="text-gray-400">Cloud password managers can be hacked. Your data isn't truly yours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security First Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#0a0a1a] via-[#001a1a] to-[#0a0a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Your Privacy Is<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffd4] to-[#00d4b8]">
                  Protected
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We believe your sensitive data should remain exactly that - yours. LockNote is built with privacy as the foundation.
              </p>
              
              <div className="space-y-5 mb-8">
                {['No internet permission required', 'No data collection or tracking', 'Everything stays on your device', 'No third-party sharing'].map((feature, i) => (
                  <div key={i} className="flex items-center space-x-4 group">
                    <div className="w-10 h-10 bg-[#00ffd4] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Check className="w-6 h-6 text-black" strokeWidth={3} />
                    </div>
                    <span className="text-lg font-semibold text-white">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-[#1a1a2e] rounded-2xl border-2 border-[#00ffd4]/30">
                <div className="flex items-start space-x-4">
                  <Shield className="w-8 h-8 text-[#00ffd4] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-2">100% Offline Security</h4>
                    <p className="text-gray-300">Your credentials never touch the internet. Everything happens locally on your device for complete peace of mind.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-[500px] flex items-center justify-center">
              <div className="w-[300px] h-[500px] bg-[#1a1a2e] rounded-[3rem] border-8 border-[#00ffd4]/30 shadow-2xl shadow-[#00ffd4]/30 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-[#0a0a1a] to-[#001a1a] p-6 flex flex-col items-center justify-center">
                  <Lock size={80} className="text-[#00ffd4] mb-6" />
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#00ffd4] mb-2">256-bit</div>
                    <div className="text-gray-300">Encryption</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-[#0f0f1f]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Everything You Need<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffd4] to-[#00d4b8]">
                Nothing You Don't
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group p-8 bg-[#1a1a2e] rounded-2xl border border-[#00ffd4]/40 hover:border-[#00ffd4] transition-all hover:shadow-xl hover:shadow-[#00ffd4]/30">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00ffd4] to-[#00d4b8] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-[#00ffd4]/50">
                <Lock size={32} className="text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Military-Grade Encryption</h3>
              <p className="text-gray-300 leading-relaxed">
                Your credentials are protected with industry-standard encryption algorithms that keep your data secure.
              </p>
            </div>
            
            <div className="group p-8 bg-[#1a1a2e] rounded-2xl border border-[#00ffd4]/40 hover:border-[#00ffd4] transition-all hover:shadow-xl hover:shadow-[#00ffd4]/30">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00ffd4] to-[#00d4b8] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-[#00ffd4]/50">
                <Target size={32} className="text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Organized Categories</h3>
              <p className="text-gray-300 leading-relaxed">
                Sort your credentials into Personal, Social, Work, Banking, and Entertainment for easy access.
              </p>
            </div>
            
            <div className="group p-8 bg-[#1a1a2e] rounded-2xl border border-[#00ffd4]/40 hover:border-[#00ffd4] transition-all hover:shadow-xl hover:shadow-[#00ffd4]/30">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00ffd4] to-[#00d4b8] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-[#00ffd4]/50">
                <Shield size={32} className="text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Local Storage Only</h3>
              <p className="text-gray-300 leading-relaxed">
                Your data never leaves your device. No cloud sync means maximum security and complete privacy.
              </p>
            </div>
            
            <div className="group p-8 bg-[#1a1a2e] rounded-2xl border border-[#00ffd4]/40 hover:border-[#00ffd4] transition-all hover:shadow-xl hover:shadow-[#00ffd4]/30">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00ffd4] to-[#00d4b8] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-[#00ffd4]/50">
                <Zap size={32} className="text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Quick Access</h3>
              <p className="text-gray-300 leading-relaxed">
                Easily copy credentials when you need them without compromising security. Fast and efficient.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#0a0a1a] via-[#001a1a] to-[#0a0a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Simple & Secure<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffd4] to-[#00d4b8]">
                In Four Steps
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '1', title: 'Add Credentials', desc: 'Input platform name, password, and categorize your credentials with optional notes.', icon: Lock },
              { num: '2', title: 'Organize & Secure', desc: 'Your data is encrypted and organized by categories for easy access.', icon: Shield },
              { num: '3', title: 'Access When Needed', desc: 'Quickly retrieve your credentials with copy functionality for easy use.', icon: Zap },
              { num: '4', title: 'Manage & Update', desc: 'Edit or delete credentials as your needs change over time.', icon: Check }
            ].map((step, i) => (
              <div key={i} className="relative text-center group">
                <div className="relative z-10">
                  <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-all duration-300 relative border-4 border-[#00ffd4]">
                    <div className="text-4xl font-extrabold text-[#00ffd4]">{step.num}</div>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00ffd4] to-[#00d4b8] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#00ffd4]/50">
                    <step.icon size={32} className="text-black" />
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
      <section className="py-20 px-6 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#00ffd4] rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#00ffd4] rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Get LockNote Today
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Available on both iOS and Android. Free forever with no hidden costs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group flex items-center justify-center space-x-3 bg-white text-black px-10 py-5 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-[#00ffd4]/50 transform hover:scale-105">
              <Download className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs opacity-70">Download on the</div>
                <div className="font-bold text-lg">App Store</div>
              </div>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group flex items-center justify-center space-x-3 bg-[#00ffd4] text-black px-10 py-5 rounded-xl hover:bg-[#00e5c4] transition-all duration-300 shadow-2xl hover:shadow-[#00ffd4]/50 transform hover:scale-105">
              <Download className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs opacity-90">Get it on</div>
                <div className="font-bold text-lg">Google Play</div>
              </div>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="mt-12 flex items-center justify-center space-x-8 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-[#00ffd4]" />
              <span className="font-medium">Free Forever</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-[#00ffd4]" />
              <span className="font-medium">100% Private</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}