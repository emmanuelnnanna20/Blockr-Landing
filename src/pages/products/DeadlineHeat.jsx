import React from 'react';
import { Download, Timer, Check, Zap, Target, Clock, TrendingUp, Sparkles } from 'lucide-react';

export default function DeadlineHeat() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-br from-[#0a0a1a] via-[#1a1a3e] to-[#0a0a1a]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2563eb]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ef4444]/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-[#ef4444]/20 border border-[#ef4444] rounded-full text-sm text-white">
                ⏰ Feel The Heat. Meet Your Deadlines.
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
                Feel The Heat.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#ef4444]">
                  Beat The Deadline.
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Visual countdown timer with color-coded psychological urgency. Turn procrastination into action with heat that motivates you to move.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-[#2563eb] to-[#ef4444] rounded-lg font-semibold text-lg hover:shadow-xl hover:shadow-[#ef4444]/50 transition-all flex items-center justify-center group text-white">
                  Download Free
                  <Download className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </button>
                <button className="px-8 py-4 border-2 border-[#2563eb] text-white rounded-lg font-semibold text-lg hover:bg-[#2563eb]/20 transition-all">
                  See The Heat
                </button>
              </div>
            </div>
            
            <div className="relative h-[500px] flex items-center justify-center">
              {/* Heat Visualization */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] bg-gradient-to-br from-[#10b981]/30 via-[#f59e0b]/30 to-[#ef4444]/30 backdrop-blur-xl rounded-full flex flex-col items-center justify-center border-2 border-[#ef4444]/50 shadow-2xl shadow-[#ef4444]/30 animate-pulse">
                <Timer size={80} className="text-[#ef4444]" />
              </div>
              
              <div className="absolute top-[15%] left-[15%] w-16 h-16 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-2xl flex items-center justify-center shadow-lg shadow-[#10b981]/50 animate-float">
                <Check size={28} className="text-white" />
              </div>
              <div className="absolute top-[20%] right-[10%] w-16 h-16 bg-gradient-to-br from-[#f59e0b] to-[#d97706] rounded-2xl flex items-center justify-center shadow-lg shadow-[#f59e0b]/50 animate-float-delayed">
                <Clock size={28} className="text-white" />
              </div>
              <div className="absolute bottom-[20%] left-[10%] w-16 h-16 bg-gradient-to-br from-[#ef4444] to-[#dc2626] rounded-2xl flex items-center justify-center shadow-lg shadow-[#ef4444]/50 animate-float">
                <Zap size={28} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-[#0f0f1f]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Why Do We Wait<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#ef4444]">
              Until It's Too Late?
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="p-8 bg-[#1a1a2e] rounded-2xl border border-[#ef4444]/30 hover:border-[#ef4444] transition-all hover:shadow-xl hover:shadow-[#ef4444]/20">
              <div className="w-16 h-16 bg-[#ef4444]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock size={32} className="text-[#ef4444]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Underestimating Deadlines</h3>
              <p className="text-gray-400">"I have plenty of time" until suddenly you don't.</p>
            </div>
            <div className="p-8 bg-[#1a1a2e] rounded-2xl border border-[#ef4444]/30 hover:border-[#ef4444] transition-all hover:shadow-xl hover:shadow-[#ef4444]/20">
              <div className="w-16 h-16 bg-[#ef4444]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target size={32} className="text-[#ef4444]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Last-Minute Panic</h3>
              <p className="text-gray-400">Rushing at the end, sacrificing quality and sleep.</p>
            </div>
            <div className="p-8 bg-[#1a1a2e] rounded-2xl border border-[#ef4444]/30 hover:border-[#ef4444] transition-all hover:shadow-xl hover:shadow-[#ef4444]/20">
              <div className="w-16 h-16 bg-[#ef4444]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp size={32} className="text-[#ef4444]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Invisible Urgency</h3>
              <p className="text-gray-400">Deadlines feel abstract until they're breathing down your neck.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Heat System Explanation */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#0a0a1a] via-[#1a1a3e] to-[#0a0a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              The Psychology of<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] via-[#f59e0b] to-[#ef4444]">
                Visual Urgency
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your brain responds to visual cues. DeadlineHeat uses color psychology to trigger action before it's too late.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 bg-[#1a1a2e] rounded-2xl border border-[#10b981]/40 hover:border-[#10b981] transition-all hover:shadow-xl hover:shadow-[#10b981]/30">
              <div className="w-20 h-20 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-[#10b981]/50">
                <span className="text-3xl font-bold text-white">🟢</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white text-center">Green Zone</h3>
              <p className="text-gray-300 leading-relaxed text-center">
                Plenty of time. Stay calm, plan well, and make steady progress without stress.
              </p>
            </div>
            
            <div className="group p-8 bg-[#1a1a2e] rounded-2xl border border-[#f59e0b]/40 hover:border-[#f59e0b] transition-all hover:shadow-xl hover:shadow-[#f59e0b]/30">
              <div className="w-20 h-20 bg-gradient-to-br from-[#f59e0b] to-[#d97706] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-[#f59e0b]/50">
                <span className="text-3xl font-bold text-white">🟡</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white text-center">Yellow Zone</h3>
              <p className="text-gray-300 leading-relaxed text-center">
                Time is moving. Stay focused and pick up the pace. Action becomes more important.
              </p>
            </div>
            
            <div className="group p-8 bg-[#1a1a2e] rounded-2xl border border-[#ef4444]/40 hover:border-[#ef4444] transition-all hover:shadow-xl hover:shadow-[#ef4444]/30">
              <div className="w-20 h-20 bg-gradient-to-br from-[#ef4444] to-[#dc2626] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-[#ef4444]/50 animate-pulse">
                <span className="text-3xl font-bold text-white">🔴</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white text-center">Red Zone</h3>
              <p className="text-gray-300 leading-relaxed text-center">
                Urgent! The heat is on. Your brain knows it's time to move. No more delays.
              </p>
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#ef4444]">
                To Stay On Track
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group p-8 bg-[#1a1a2e] rounded-2xl border border-[#2563eb]/40 hover:border-[#2563eb] transition-all hover:shadow-xl hover:shadow-[#2563eb]/30">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-[#2563eb]/50">
                <Timer size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Dynamic Heat System</h3>
              <p className="text-gray-300 leading-relaxed">
                Watch the color change from green to yellow to red as your deadline approaches. Visual feedback that keeps urgency front of mind.
              </p>
            </div>
            
            <div className="group p-8 bg-[#1a1a2e] rounded-2xl border border-[#10b981]/40 hover:border-[#10b981] transition-all hover:shadow-xl hover:shadow-[#10b981]/30">
              <div className="w-16 h-16 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-[#10b981]/50">
                <Target size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Multiple Countdowns</h3>
              <p className="text-gray-300 leading-relaxed">
                Track multiple deadlines at once. Perfect for exams, projects, goals, and important events happening at different times.
              </p>
            </div>
            
            <div className="group p-8 bg-[#1a1a2e] rounded-2xl border border-[#f59e0b]/40 hover:border-[#f59e0b] transition-all hover:shadow-xl hover:shadow-[#f59e0b]/30">
              <div className="w-16 h-16 bg-gradient-to-br from-[#f59e0b] to-[#d97706] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-[#f59e0b]/50">
                <Sparkles size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Widget Support</h3>
              <p className="text-gray-300 leading-relaxed">
                Add DeadlineHeat widgets to your home screen for always-visible countdown timers. Never forget what's coming.
              </p>
            </div>
            
            <div className="group p-8 bg-[#1a1a2e] rounded-2xl border border-[#ef4444]/40 hover:border-[#ef4444] transition-all hover:shadow-xl hover:shadow-[#ef4444]/30">
              <div className="w-16 h-16 bg-gradient-to-br from-[#ef4444] to-[#dc2626] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-[#ef4444]/50">
                <Zap size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Instant Motivation</h3>
              <p className="text-gray-300 leading-relaxed">
                The changing heat creates psychological pressure that motivates you to act earlier. Beat procrastination naturally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#0a0a1a] via-[#1a1a3e] to-[#0a0a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Who Needs<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#ef4444]">
                DeadlineHeat?
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Students', desc: 'Track exam dates, assignment due dates, and project deadlines with visual urgency', icon: Target },
              { title: 'Professionals', desc: 'Stay on top of work projects, presentations, and client deliverables', icon: TrendingUp },
              { title: 'Goal Chasers', desc: 'Set fitness milestones, learning goals, or personal challenges with real accountability', icon: Sparkles }
            ].map((use, i) => (
              <div key={i} className="p-8 bg-[#1a1a2e] rounded-2xl border border-[#2563eb]/30 hover:border-[#2563eb] transition-all hover:shadow-xl hover:shadow-[#2563eb]/30 group">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-[#2563eb]/50">
                  <use.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{use.title}</h3>
                <p className="text-gray-300 leading-relaxed">{use.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-[#0f0f1f]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Three Steps To<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#ef4444]">
                Beat Every Deadline
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg shadow-[#2563eb]/50 text-white">1</div>
              <div className="p-8 pt-12 bg-[#1a1a2e] rounded-2xl border border-[#2563eb]/30 h-full hover:border-[#2563eb] transition-all">
                <Timer size={48} className="text-[#2563eb] mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-white">Set Your Deadline</h3>
                <p className="text-gray-300 leading-relaxed">
                  Create a countdown for any important date - exam, project, goal, or event.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#f59e0b] to-[#d97706] rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg shadow-[#f59e0b]/50 text-white">2</div>
              <div className="p-8 pt-12 bg-[#1a1a2e] rounded-2xl border border-[#f59e0b]/30 h-full hover:border-[#f59e0b] transition-all">
                <Clock size={48} className="text-[#f59e0b] mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-white">Watch The Heat</h3>
                <p className="text-gray-300 leading-relaxed">
                  The color changes from green to yellow to red as time passes. Visual urgency you can't ignore.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#ef4444] to-[#dc2626] rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg shadow-[#ef4444]/50 text-white">3</div>
              <div className="p-8 pt-12 bg-[#1a1a2e] rounded-2xl border border-[#ef4444]/30 h-full hover:border-[#ef4444] transition-all">
                <Zap size={48} className="text-[#ef4444] mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-white">Take Action</h3>
                <p className="text-gray-300 leading-relaxed">
                  The heat triggers your brain's urgency response. You act sooner, avoid panic, and finish strong.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#2563eb]/30 via-[#f59e0b]/30 to-[#ef4444]/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0a1a] opacity-80"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Never Miss Another<br />Deadline
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Download DeadlineHeat and turn visual urgency into unstoppable momentum.
          </p>
          <button className="px-12 py-5 bg-gradient-to-r from-[#2563eb] to-[#ef4444] rounded-lg font-semibold text-xl hover:shadow-2xl hover:shadow-[#ef4444]/50 transition-all inline-flex items-center group text-white">
            Download DeadlineHeat Free
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