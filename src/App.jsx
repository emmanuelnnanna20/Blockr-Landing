import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, TrendingUp, List, Bell, Check, X, Menu, ArrowRight, Calendar, BarChart3, Zap } from 'lucide-react';

export default function BlockrLanding() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white">
      <style>{`
        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes spin-slower {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(-360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-spin-slower { animation: spin-slower 15s linear infinite; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 3s ease-in-out infinite 1.5s; }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a0a1a]/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                  src="/logo.png" 
                  alt="Blockr Logo" 
                  className="w-10 h-10 rounded-lg shadow-lg shadow-[#2563eb]/50 object-contain bg-white p-1"
                />
              <span className="text-2xl font-bold text-white">Blockr</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-[#2563eb] transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-300 hover:text-[#2563eb] transition-colors">How It Works</a>
              <a href="#pricing" className="text-gray-300 hover:text-[#2563eb] transition-colors">Pricing</a>
              <button className="px-6 py-2 bg-gradient-to-r from-[#2563eb] to-[#7c3aed] rounded-lg font-semibold hover:shadow-lg hover:shadow-[#2563eb]/50 transition-all text-white">
                Get Started Free
              </button>
            </div>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4 bg-[#1a1a2e] rounded-lg p-4">
              <a href="#features" className="block text-gray-300 hover:text-[#2563eb]">Features</a>
              <a href="#how-it-works" className="block text-gray-300 hover:text-[#2563eb]">How It Works</a>
              <a href="#pricing" className="block text-gray-300 hover:text-[#2563eb]">Pricing</a>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-[#2563eb] to-[#7c3aed] rounded-lg font-semibold text-white">
                Get Started Free
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-br from-[#0a0a1a] via-[#1a1a3e] to-[#0a0a1a]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2563eb]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#7c3aed]/20 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-[#2563eb]/20 border border-[#2563eb] rounded-full text-sm text-white">
                Turn Chaos Into Structured Success
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
                Master Your Time.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#7c3aed]">
                  Achieve Your Goals.
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Blockr turns your daily chaos into structured success with smart time-blocking and visual progress tracking.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-[#2563eb] to-[#7c3aed] rounded-lg font-semibold text-lg hover:shadow-xl hover:shadow-[#2563eb]/50 transition-all flex items-center justify-center group text-white">
                  Get Started Free
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </button>
                <button className="px-8 py-4 border-2 border-[#2563eb] text-white rounded-lg font-semibold text-lg hover:bg-[#2563eb]/20 transition-all">
                  See How It Works
                </button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-[#10b981]">500+</div>
                  <div className="text-sm text-gray-400">Task Lists</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#7c3aed]">10K+</div>
                  <div className="text-sm text-gray-400">Time Blocks</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#f59e0b]">95%</div>
                  <div className="text-sm text-gray-400">Completion</div>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] flex items-center justify-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border-2 border-[#2563eb]/40 rounded-full animate-spin-slow"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border-2 border-[#7c3aed]/40 rounded-full animate-spin-slower"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] bg-gradient-to-br from-[#2563eb]/30 to-[#7c3aed]/30 backdrop-blur-xl rounded-full flex flex-col items-center justify-center border-2 border-[#2563eb]/50 shadow-2xl shadow-[#2563eb]/30">
                <div className="text-5xl font-bold text-white">500+</div>
                <div className="text-sm text-gray-300 mt-2">Active Users</div>
              </div>
              <div className="absolute top-[10%] left-[20%] w-16 h-16 bg-gradient-to-br from-[#2563eb] to-[#7c3aed] rounded-2xl flex items-center justify-center shadow-lg shadow-[#2563eb]/50 animate-float">
                <Clock size={28} className="text-white" />
              </div>
              <div className="absolute top-[20%] right-[15%] w-16 h-16 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-2xl flex items-center justify-center shadow-lg shadow-[#10b981]/50 animate-float-delayed">
                <Check size={28} className="text-white" />
              </div>
              <div className="absolute bottom-[25%] left-[10%] w-16 h-16 bg-gradient-to-br from-[#f59e0b] to-[#d97706] rounded-2xl flex items-center justify-center shadow-lg shadow-[#f59e0b]/50 animate-float">
                <TrendingUp size={28} className="text-white" />
              </div>
              <div className="absolute bottom-[15%] right-[20%] w-16 h-16 bg-gradient-to-br from-[#7c3aed] to-[#6d28d9] rounded-2xl flex items-center justify-center shadow-lg shadow-[#7c3aed]/50 animate-float-delayed">
                <BarChart3 size={28} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-[#0f0f1f]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Your To-Do List Isn't the Problem.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#7c3aed]">
              It's Your System.
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="p-8 bg-[#1a1a2e] rounded-2xl border border-[#ef4444]/30 hover:border-[#ef4444] transition-all hover:shadow-xl hover:shadow-[#ef4444]/20">
              <div className="w-16 h-16 bg-[#ef4444]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <List size={32} className="text-[#ef4444]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Endless task lists with no clear action plan</h3>
              <p className="text-gray-400">Tasks pile up but nothing actually gets done.</p>
            </div>
            <div className="p-8 bg-[#1a1a2e] rounded-2xl border border-[#ef4444]/30 hover:border-[#ef4444] transition-all hover:shadow-xl hover:shadow-[#ef4444]/20">
              <div className="w-16 h-16 bg-[#ef4444]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock size={32} className="text-[#ef4444]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Days fly by without meaningful progress</h3>
              <p className="text-gray-400">You're busy but not productive.</p>
            </div>
            <div className="p-8 bg-[#1a1a2e] rounded-2xl border border-[#ef4444]/30 hover:border-[#ef4444] transition-all hover:shadow-xl hover:shadow-[#ef4444]/20">
              <div className="w-16 h-16 bg-[#ef4444]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp size={32} className="text-[#ef4444]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Constantly feeling behind and overwhelmed</h3>
              <p className="text-gray-400">Every day starts with anxiety instead of clarity.</p>
            </div>
          </div>
        </div>
      </section>

            {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-gradient-to-br from-[#0a0a1a] via-[#1a1a3e] to-[#0a0a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Turn Plans Into Action<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#7c3aed]">
                With Time Blocks
              </span>
            </h2>
            <p className="text-xl text-gray-300">Everything you need to structure your day and boost productivity</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group p-8 bg-[#1a1a2e] rounded-2xl border border-[#2563eb]/40 hover:border-[#2563eb] transition-all hover:shadow-xl hover:shadow-[#2563eb]/30">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2563eb] to-[#7c3aed] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-[#2563eb]/50">
                <Clock size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Smart Time Blocking</h3>
              <p className="text-gray-300 leading-relaxed">
                Schedule every task with specific time slots. No more vague "someday" plans. Turn your intentions into concrete appointments with yourself.
              </p>
            </div>
            <div className="group p-8 bg-[#1a1a2e] rounded-2xl border border-[#10b981]/40 hover:border-[#10b981] transition-all hover:shadow-xl hover:shadow-[#10b981]/30">
              <div className="w-16 h-16 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-[#10b981]/50">
                <BarChart3 size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Visual Progress Tracking</h3>
              <p className="text-gray-300 leading-relaxed">
                See your productivity at a glance with streaks, completion rates, and daily summaries. Watch your progress grow over time.
              </p>
            </div>
            <div className="group p-8 bg-[#1a1a2e] rounded-2xl border border-[#7c3aed]/40 hover:border-[#7c3aed] transition-all hover:shadow-xl hover:shadow-[#7c3aed]/30">
              <div className="w-16 h-16 bg-gradient-to-br from-[#7c3aed] to-[#6d28d9] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-[#7c3aed]/50">
                <List size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Flexible Task Lists</h3>
              <p className="text-gray-300 leading-relaxed">
                Create weekly, monthly, or custom-duration task lists that fit your workflow. Organize work, personal goals, or projects however you want.
              </p>
            </div>
            <div className="group p-8 bg-[#1a1a2e] rounded-2xl border border-[#f59e0b]/40 hover:border-[#f59e0b] transition-all hover:shadow-xl hover:shadow-[#f59e0b]/30">
              <div className="w-16 h-16 bg-gradient-to-br from-[#f59e0b] to-[#d97706] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-[#f59e0b]/50">
                <Bell size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Smart Reminders</h3>
              <p className="text-gray-300 leading-relaxed">
                Get notified when it's time to start your next time block. Stay on track effortlessly without constantly checking your schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 bg-[#0f0f1f]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Three Steps to<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#7c3aed]">
                Structured Success
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#2563eb] to-[#7c3aed] rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg shadow-[#2563eb]/50 text-white">1</div>
              <div className="p-8 pt-12 bg-[#1a1a2e] rounded-2xl border border-[#2563eb]/30 h-full hover:border-[#2563eb] transition-all">
                <Calendar size={48} className="text-[#2563eb] mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-white">Create Your Task List</h3>
                <p className="text-gray-300 leading-relaxed">
                  Write down everything you want to accomplish this week, month, or any timeframe that works for you.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#2563eb] to-[#7c3aed] rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg shadow-[#2563eb]/50 text-white">2</div>
              <div className="p-8 pt-12 bg-[#1a1a2e] rounded-2xl border border-[#7c3aed]/30 h-full hover:border-[#7c3aed] transition-all">
                <Clock size={48} className="text-[#7c3aed] mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-white">Block Your Time</h3>
                <p className="text-gray-300 leading-relaxed">
                  Assign specific time slots to each task. Turn intentions into appointments with yourself.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#2563eb] to-[#7c3aed] rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg shadow-[#2563eb]/50 text-white">3</div>
              <div className="p-8 pt-12 bg-[#1a1a2e] rounded-2xl border border-[#10b981]/30 h-full hover:border-[#10b981] transition-all">
                <TrendingUp size={48} className="text-[#10b981] mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-white">Track & Improve</h3>
                <p className="text-gray-300 leading-relaxed">
                  Check off completed blocks, track your progress, and watch your productivity soar over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-gradient-to-br from-[#0a0a1a] via-[#1a1a3e] to-[#0a0a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Choose Your<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#7c3aed]">
                Productivity Level
              </span>
            </h2>
            <p className="text-xl text-gray-300">Start free, upgrade when you're ready</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-8 bg-[#1a1a2e] rounded-2xl border border-gray-700 hover:border-gray-600 transition-all">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-white">Free</h3>
                <p className="text-gray-400 mb-6">Get Started</p>
                <div className="text-5xl font-bold mb-2 text-white">$0</div>
                <p className="text-gray-400">Forever</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-[#10b981] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">2 active task lists</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-[#10b981] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">5 time blocks per day</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-[#10b981] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Basic 7-day analytics</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-[#10b981] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Local storage only</span>
                </li>
                <li className="flex items-start gap-3">
                  <X size={20} className="text-gray-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-500">No notifications</span>
                </li>
              </ul>
              <button className="w-full py-3 border-2 border-[#2563eb] text-white rounded-lg font-semibold hover:bg-[#2563eb]/20 transition-all">
                Get Started
              </button>
            </div>
            <div className="p-8 bg-[#1a1a2e] rounded-2xl border-2 border-[#2563eb] relative hover:shadow-2xl hover:shadow-[#2563eb]/50 transition-all">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#2563eb] to-[#7c3aed] rounded-full text-sm font-semibold text-white shadow-lg">
                Most Popular
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-white">Monthly</h3>
                <p className="text-gray-300 mb-6">For Serious Users</p>
                <div className="text-5xl font-bold mb-2 text-white">$3.99</div>
                <p className="text-gray-400">per month</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-[#10b981] mt-1 flex-shrink-0" />
                  <span className="font-semibold text-white">Unlimited task lists</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-[#10b981] mt-1 flex-shrink-0" />
                  <span className="font-semibold text-white">Unlimited time blocks</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-[#10b981] mt-1 flex-shrink-0" />
                  <span className="font-semibold text-white">Push notifications</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-[#10b981] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Full analytics & insights</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-[#10b981] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Cloud sync & backup</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-[#10b981] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Export data (CSV/PDF)</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-gradient-to-r from-[#2563eb] to-[#7c3aed] rounded-lg font-semibold hover:shadow-lg hover:shadow-[#2563eb]/50 transition-all text-white">
                Start Free Trial
              </button>
            </div>
            <div className="p-8 bg-[#1a1a2e] rounded-2xl border border-[#f59e0b] hover:border-[#f59e0b] transition-all relative hover:shadow-xl hover:shadow-[#f59e0b]/30">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#f59e0b] to-[#d97706] rounded-full text-sm font-semibold text-white shadow-lg">
                Save 40%
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-white">Yearly</h3>
                <p className="text-gray-400 mb-6">Best Value</p>
                <div className="text-5xl font-bold mb-2 text-white">$29.99</div>
                <p className="text-gray-400">per year <span className="text-[#10b981]">($2.50/mo)</span></p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-[#10b981] mt-1 flex-shrink-0" />
                  <span className="font-semibold text-white">Everything in Monthly</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap size={20} className="text-[#f59e0b] mt-1 flex-shrink-0" />
                  <span className="font-semibold text-white">Custom themes</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap size={20} className="text-[#f59e0b] mt-1 flex-shrink-0" />
                  <span className="font-semibold text-white">Priority support</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap size={20} className="text-[#f59e0b] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Recurring task lists</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap size={20} className="text-[#f59e0b] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Widgets</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap size={20} className="text-[#f59e0b] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Early access to new features</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-gradient-to-r from-[#f59e0b] to-[#d97706] rounded-lg font-semibold hover:shadow-lg hover:shadow-[#f59e0b]/50 transition-all text-white">
                Get Yearly Plan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#2563eb]/30 to-[#7c3aed]/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0a1a] opacity-80"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Stop Planning.<br />Start Doing.
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands who've transformed their productivity with Blockr.
          </p>
          <button className="px-12 py-5 bg-gradient-to-r from-[#2563eb] to-[#7c3aed] rounded-lg font-semibold text-xl hover:shadow-2xl hover:shadow-[#2563eb]/50 transition-all inline-flex items-center group text-white">
            Download Blockr Now
            <ChevronRight className="ml-2 group-hover:translate-x-2 transition-transform" size={24} />
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

      {/* Footer */}
      <footer className="py-16 px-6 bg-[#0a0a1a] border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/logo.png" 
                  alt="Blockr Logo" 
                  className="w-10 h-10 rounded-lg shadow-lg shadow-[#2563eb]/50 object-contain bg-white p-1"
                />
                <span className="text-2xl font-bold text-white">Blockr</span>
              </div>
              <p className="text-gray-400 text-sm">
                Master your time. Achieve your goals. Transform your productivity with smart time-blocking.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-[#2563eb] transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-[#2563eb] transition-colors">Pricing</a></li>
                <li><a href="#how-it-works" className="hover:text-[#2563eb] transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-[#2563eb] transition-colors">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#2563eb] transition-colors">About</a></li>
                <li><a href="#" className="hover:text-[#2563eb] transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-[#2563eb] transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-[#2563eb] transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#2563eb] transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#2563eb] transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-[#2563eb] transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Blockr. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-[#2563eb] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#2563eb] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#2563eb] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"> 
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}