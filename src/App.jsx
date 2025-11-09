import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, TrendingUp, List, Bell, Check, X, Menu, ArrowRight, Calendar, BarChart3, Zap } from 'lucide-react';

function Nav({ isScrolled, mobileMenuOpen, setMobileMenuOpen }) {
  return (
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
            <a href="#roadmap" className="text-gray-300 hover:text-[#2563eb] transition-colors">Roadmap</a>
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
            <a href="#roadmap" className="block text-gray-300 hover:text-[#2563eb]">Roadmap</a>
            <button className="w-full px-6 py-3 bg-gradient-to-r from-[#2563eb] to-[#7c3aed] rounded-lg font-semibold text-white">
              Get Started Free
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-br from-[#0a0a1a] via-[#1a1a3e] to-[#0a0a1a]">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2563eb]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#7c3aed]/20 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-[#10b981]/20 border border-[#10b981] rounded-full text-sm text-white">
              100% Free • No Subscriptions • Best Productivity App
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
              Master Your Time.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#7c3aed]">
                Achieve Your Goals.
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              The best productivity app for achieving your goals. Create task lists for any duration (yearly, monthly, weekly, or custom), manage daily tasks, and assign time blocks to ensure you stay on track. Intuitive, structured, and completely free.
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
  );
}

function ProblemSection() {
  return (
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
  );
}

function FeaturesSection() {
  return (
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
              Create task lists for any duration - yearly goals, monthly plans, weekly sprints, or even 3-day challenges. Plus daily task management to keep you focused on what matters today.
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
  );
}

function HowItWorksSection() {
  return (
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
  );
}

function RoadmapSection() {
  return (
    <section id="roadmap" className="py-20 px-6 bg-gradient-to-br from-[#0a0a1a] via-[#1a1a3e] to-[#0a0a1a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Our Vision:<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#7c3aed]">
              Building the Future of Productivity
            </span>
          </h2>
          <p className="text-xl text-gray-300">Blockr is 100% free while we validate market fit. Here's where we're heading</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-8 bg-[#1a1a2e] rounded-2xl border-2 border-[#10b981] relative hover:shadow-2xl hover:shadow-[#10b981]/50 transition-all">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#10b981] to-[#059669] rounded-full text-sm font-semibold text-white shadow-lg">
              Now Available
            </div>
            <div className="text-center mb-8 mt-4">
              <h3 className="text-2xl font-bold mb-2 text-white">Current Version</h3>
              <p className="text-gray-300 mb-6">Free Forever</p>
              <div className="text-5xl font-bold mb-2 text-white">$0</div>
              <p className="text-[#10b981] font-semibold">100% Free</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Check size={20} className="text-[#10b981] mt-1 flex-shrink-0" />
                <span className="font-semibold text-white">Unlimited task lists (any duration)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-[#10b981] mt-1 flex-shrink-0" />
                <span className="font-semibold text-white">Daily task management</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-[#10b981] mt-1 flex-shrink-0" />
                <span className="font-semibold text-white">Time block scheduling</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-[#10b981] mt-1 flex-shrink-0" />
                <span className="text-gray-300">Progress tracking & analytics</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-[#10b981] mt-1 flex-shrink-0" />
                <span className="text-gray-300">Local storage (encrypted)</span>
              </li>
            </ul>
            <button className="w-full py-3 bg-gradient-to-r from-[#10b981] to-[#059669] rounded-lg font-semibold hover:shadow-lg hover:shadow-[#10b981]/50 transition-all text-white">
              Download Now
            </button>
          </div>
          <div className="p-8 bg-[#1a1a2e] rounded-2xl border border-[#2563eb]/40 hover:border-[#2563eb] transition-all hover:shadow-xl hover:shadow-[#2563eb]/30">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2 text-white">Phase 2</h3>
              <p className="text-gray-300 mb-6">Coming Soon</p>
              <div className="text-3xl font-bold mb-2 text-[#2563eb]">Next Level</div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Zap size={20} className="text-[#2563eb] mt-1 flex-shrink-0" />
                <span className="font-semibold text-white">Cloud sync & backup</span>
              </li>
              <li className="flex items-start gap-3">
                <Zap size={20} className="text-[#2563eb] mt-1 flex-shrink-0" />
                <span className="font-semibold text-white">Push notifications</span>
              </li>
              <li className="flex items-start gap-3">
                <Zap size={20} className="text-[#2563eb] mt-1 flex-shrink-0" />
                <span className="font-semibold text-white">Desktop apps (Mac/Windows)</span>
              </li>
              <li className="flex items-start gap-3">
                <Zap size={20} className="text-[#2563eb] mt-1 flex-shrink-0" />
                <span className="text-gray-300">Browser extensions</span>
              </li>
              <li className="flex items-start gap-3">
                <Zap size={20} className="text-[#2563eb] mt-1 flex-shrink-0" />
                <span className="text-gray-300">Team collaboration features</span>
              </li>
              <li className="flex items-start gap-3">
                <Zap size={20} className="text-[#2563eb] mt-1 flex-shrink-0" />
                <span className="text-gray-300">Advanced analytics dashboard</span>
              </li>
            </ul>
          </div>
          <div className="p-8 bg-[#1a1a2e] rounded-2xl border border-[#7c3aed]/40 hover:border-[#7c3aed] transition-all hover:shadow-xl hover:shadow-[#7c3aed]/30">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2 text-white">Phase 3</h3>
              <p className="text-gray-300 mb-6">The Vision</p>
              <div className="text-3xl font-bold mb-2 text-[#7c3aed]">Enterprise Ready</div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Zap size={20} className="text-[#7c3aed] mt-1 flex-shrink-0" />
                <span className="text-gray-300">Custom integrations (Slack, Teams)</span>
              </li>
              <li className="flex items-start gap-3">
                <Zap size={20} className="text-[#7c3aed] mt-1 flex-shrink-0" />
                <span className="text-gray-300">API for developers</span>
              </li>
              <li className="flex items-start gap-3">
                <Zap size={20} className="text-[#7c3aed] mt-1 flex-shrink-0" />
                <span className="text-gray-300">Enterprise team management</span>
              </li>
              <li className="flex items-start gap-3">
                <Zap size={20} className="text-[#7c3aed] mt-1 flex-shrink-0" />
                <span className="font-semibold text-white">AI-powered scheduling</span>
              </li>
              <li className="flex items-start gap-3">
                <Zap size={20} className="text-[#7c3aed] mt-1 flex-shrink-0" />
                <span className="font-semibold text-white">Smart recommendations</span>
              </li>
              <li className="flex items-start gap-3">
                <Zap size={20} className="text-[#7c3aed] mt-1 flex-shrink-0" />
                <span className="font-semibold text-white">Notion-level features</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We're building Blockr to become the most powerful productivity platform in the world. While we validate market fit and gather feedback, enjoy all features completely free. Premium tiers will be introduced as we roll out advanced features.
          </p>
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
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
  );
}

function Footer({ setShowPrivacyPolicy }) {
  return (
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
              <li><a href="#roadmap" className="hover:text-[#2563eb] transition-colors">Roadmap</a></li>
              <li><a href="#how-it-works" className="hover:text-[#2563eb] transition-colors">How It Works</a></li>
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
              <li><button onClick={() => setShowPrivacyPolicy(true)} className="hover:text-[#2563eb] transition-colors">Privacy Policy</button></li>
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
  );
}

function PrivacyPolicyModal({ showPrivacyPolicy, setShowPrivacyPolicy }) {
  return (
    showPrivacyPolicy && (
      <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <div className="bg-[#1a1a2e] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[#2563eb]/30">
          <div className="sticky top-0 bg-[#1a1a2e] border-b border-gray-700 p-6 flex justify-between items-center z-10">
            <h2 className="text-3xl font-bold text-white">Blockr Privacy Policy</h2>
            <button onClick={() => setShowPrivacyPolicy(false)} className="text-gray-400 hover:text-white transition-colors">
              <X size={28} />
            </button>
          </div>
          <div className="p-6 text-gray-300 space-y-6">
            <p className="text-sm text-gray-400">Last updated: November 08, 2025</p>
           
            <div>
              <h3 className="text-xl font-bold text-white mb-3">1. Introduction</h3>
              <p>Blockr is a minimalist time-blocking app designed to help you plan and execute your day with focus and discipline. This Privacy Policy explains how Blockr handles your information, including data collected for advertising purposes via Google AdMob.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">2. Data We Collect</h3>
              <p className="mb-3">Blockr is primarily local, but uses Google AdMob to serve ads, which may collect limited data for advertising.</p>
              <p className="font-semibold text-white mb-2">Data Collected by Blockr (Local Only):</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-white">Task lists, daily tasks, and time blocks:</strong> Stored locally on your device using Hive (encrypted local database).</li>
                <li><strong className="text-white">User preferences (e.g., name, theme):</strong> Stored locally.</li>
                <li><strong className="text-white">No personal identifiers</strong> (e.g., email, phone) are collected or transmitted.</li>
              </ul>
              <p className="font-semibold text-white mt-4 mb-2">Data Collected by AdMob:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-white">Device ID:</strong> Used for ad personalization and frequency capping.</li>
                <li><strong className="text-white">Demographic information:</strong> Inferred categories (e.g., age range, interests) for targeted ads.</li>
                <li><strong className="text-white">App usage data:</strong> Basic interactions to measure ad performance (e.g., views, clicks).</li>
                <li><strong className="text-white">IP address and location:</strong> Approximate location for ad relevance (no precise GPS).</li>
              </ul>
              <p className="mt-3">AdMob data is processed by Google and not shared with us. We do not access or store it.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">3. How We Use Data</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-white">Local data:</strong> Only for app functionality (e.g., displaying your tasks).</li>
                <li><strong className="text-white">AdMob data:</strong> Solely for serving personalized ads and analytics. No data is used for other purposes.</li>
              </ul>
              <p className="mt-3 font-semibold text-white">We do not:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Sell data to third parties.</li>
                <li>Use data for profiling beyond ads.</li>
                <li>Share data with analytics services.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">4. Data Sharing</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-white">Local data:</strong> Never shared.</li>
                <li><strong className="text-white">AdMob data:</strong> Shared only with Google (AdMob provider) as required for ad serving.</li>
              </ul>
              <p className="mt-3">No data is shared with other third parties.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">5. Permissions</h3>
              <p className="mb-2">Blockr requests:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-white">Internet permission:</strong> For loading AdMob ads.</li>
                <li>No other permissions (e.g., no camera, microphone, contacts).</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">6. Third-Party Services</h3>
              <p className="mb-2">Blockr uses:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-white">Google AdMob:</strong> For banner and interstitial ads. See Google's AdMob Privacy Policy.</li>
                <li><strong className="text-white">Flutter (by Google):</strong> Open-source framework.</li>
                <li><strong className="text-white">Hive:</strong> Local database.</li>
                <li><strong className="text-white">Google Fonts (Poppins):</strong> Loaded at build time.</li>
              </ul>
              <p className="mt-3">These services may collect data as described in their policies.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">7. Children's Privacy (COPPA Compliance)</h3>
              <p className="mb-2">Blockr is not intended for children under 13. Ads are served to mixed audiences, but we do not knowingly collect data from children.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>No COPPA-targeted ads.</li>
                <li>If you're under 13, do not use this app.</li>
                <li>Parents: Contact us to request data deletion.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">8. Interest-Based Advertising</h3>
              <p className="mb-2">AdMob may serve personalized ads based on:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Device IDs.</li>
                <li>Inferred demographics.</li>
              </ul>
              <p className="mt-3 font-semibold text-white">Opt-out options:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-white">Android:</strong> Go to Settings &gt; Google &gt; Ads &gt; Opt out of Ads Personalization.</li>
                <li><strong className="text-white">App settings:</strong> Disable personalized ads (if implemented in future updates).</li>
                <li>Visit Google Ads Settings for more control.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">9. Data Retention & Deletion</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-white">Local data:</strong> Stored until you delete it (via app settings or uninstall).</li>
                <li><strong className="text-white">AdMob data:</strong> Managed by Google; retained per their policies. We have no control.</li>
              </ul>
              <p className="mt-3">To delete local data: Use "Clear All Data" in Settings.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">10. Security</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Local data is encrypted via Hive.</li>
                <li>AdMob uses Google's security standards.</li>
                <li>We do not transmit sensitive data.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">11. Changes to This Policy</h3>
              <p>We may update this policy for new features or legal requirements. Changes will be notified in-app.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">12. Contact Us</h3>
              <p>Questions? Email: <a href="mailto:support@orelith.dev" className="text-[#2563eb] hover:underline">support@orelith.dev</a></p>
              <p className="mt-3 text-sm text-gray-400">Developed with Flutter by Orelith.dev</p>
              <p className="text-sm text-gray-400">Your privacy matters. Ads fund development transparently.</p>
            </div>
          </div>
          <div className="sticky bottom-0 bg-[#1a1a2e] border-t border-gray-700 p-6">
            <button onClick={() => setShowPrivacyPolicy(false)} className="w-full py-3 bg-gradient-to-r from-[#2563eb] to-[#7c3aed] rounded-lg font-semibold hover:shadow-lg hover:shadow-[#2563eb]/50 transition-all text-white">
              Close
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default function BlockrLanding() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

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
      <Nav 
        isScrolled={isScrolled} 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />
      <Hero />
      <ProblemSection />
      <FeaturesSection />
      <HowItWorksSection />
      <RoadmapSection />
      <FinalCTASection />
      <Footer setShowPrivacyPolicy={setShowPrivacyPolicy} />
      <PrivacyPolicyModal 
        showPrivacyPolicy={showPrivacyPolicy} 
        setShowPrivacyPolicy={setShowPrivacyPolicy} 
      />
    </div>
  );
}