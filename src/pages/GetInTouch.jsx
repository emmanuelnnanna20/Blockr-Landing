// src/pages/GetInTouch.jsx
import { useState } from 'react';

const GetInTouch = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    try {
      const response = await fetch('https://formspree.io/f/xpwvlegl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400;500;600;700;800;900&display=swap');
        * { font-family: 'Urbanist', sans-serif !important; }
      `}</style>

      <section className="relative min-h-screen overflow-hidden">
        {/* Blue background — tiny edges only */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600" />

        {/* Wide white card */}
        <div className="relative z-10 min-h-screen flex flex-col justify-start px-4 sm:px-6 pt-0 pb-12 sm:pt-0 sm:pb-16">
          <div className="bg-white rounded-none sm:rounded-[40px] shadow-2xl mx-0 sm:mx-4 md:mx-8 lg:mx-12 xl:mx-20 2xl:mx-32 py-16 sm:py-16 lg:py-20 min-h-[calc(100vh-5rem)]">

            <div className="max-w-4xl mx-auto px-6 sm:px-12 lg:px-16 relative">

              {/* Floating Cards — Decorative Elements */}
              <div className="hidden xs:block">
                {/* Top Left Card */}
                <div className="absolute -left-2 top-4 sm:-left-6 sm:top-8 lg:top-12 w-32 sm:w-48 lg:w-56 bg-gray-50 rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-2xl p-2.5 sm:p-4 -rotate-6 opacity-90 sm:opacity-100">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-blue-600 flex items-center justify-center">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-[10px] sm:text-sm leading-tight">New Message</div>
                      <div className="text-[8px] sm:text-xs text-gray-500">Just now</div>
                    </div>
                  </div>
                </div>

                {/* Top Right Card */}
                <div className="absolute -right-2 top-8 sm:-right-6 sm:top-16 lg:top-24 w-36 sm:w-52 lg:w-60 bg-gray-50 rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-2xl p-2.5 sm:p-4 rotate-3 opacity-90 sm:opacity-100">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="flex -space-x-1 sm:-space-x-2">
                      <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-blue-600 border border-white sm:border-2 flex items-center justify-center text-white text-[8px] sm:text-xs font-bold">A</div>
                      <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-indigo-500 border border-white sm:border-2 flex items-center justify-center text-white text-[8px] sm:text-xs font-bold">B</div>
                      <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-purple-500 border border-white sm:border-2 flex items-center justify-center text-white text-[8px] sm:text-xs font-bold">C</div>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-[10px] sm:text-sm leading-tight">Response 24h</div>
                      <div className="text-[8px] sm:text-xs text-gray-500">Guaranteed</div>
                    </div>
                  </div>
                </div>

                {/* Bottom Left Card */}
                <div className="absolute left-2 -bottom-4 sm:left-8 sm:-bottom-6 lg:-bottom-8 w-32 sm:w-48 lg:w-52 bg-gray-50 rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-2xl p-2.5 sm:p-4 -rotate-3 opacity-90 sm:opacity-100">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                    </svg>
                    <div>
                      <div className="font-bold text-gray-900 text-[10px] sm:text-sm leading-tight">Quick Reply</div>
                      <div className="text-[8px] sm:text-xs text-gray-500">Always here</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="text-center pt-12 sm:pt-8 mb-8 sm:mb-12">
                <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-4 sm:mb-6">
                  Get In
                  <span className="relative inline-block ml-2 sm:ml-3">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                      Touch
                    </span>
                    <svg className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-4 sm:h-5" viewBox="0 0 400 20" preserveAspectRatio="none">
                      <path d="M5 15 Q 200 5 395 15" stroke="#3b82f6" strokeWidth="6" fill="none" strokeLinecap="round"/>
                    </svg>
                  </span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-2 sm:px-4">
                  Have a question or feedback? We'd love to hear from you. Drop us a message!
                </p>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 max-w-2xl mx-auto">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm sm:text-base font-bold text-gray-900 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:outline-none transition text-sm sm:text-base"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm sm:text-base font-bold text-gray-900 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:outline-none transition text-sm sm:text-base"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-sm sm:text-base font-bold text-gray-900 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:outline-none transition text-sm sm:text-base"
                    placeholder="How can we help?"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm sm:text-base font-bold text-gray-900 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:outline-none transition resize-none text-sm sm:text-base"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-base sm:text-lg font-bold rounded-full hover:scale-105 transform transition shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {status === 'success' && (
                  <div className="p-4 bg-green-50 border-2 border-green-200 rounded-2xl">
                    <div className="flex items-center gap-3">
                      <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <p className="text-green-800 font-semibold text-sm sm:text-base">
                        Message sent successfully! We'll get back to you soon.
                      </p>
                    </div>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 bg-red-50 border-2 border-red-200 rounded-2xl">
                    <div className="flex items-center gap-3">
                      <svg className="w-6 h-6 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                      </svg>
                      <p className="text-red-800 font-semibold text-sm sm:text-base">
                        Oops! Something went wrong. Please try again.
                      </p>
                    </div>
                  </div>
                )}
              </form>

              {/* Contact Info */}
              <div className="mt-10 sm:mt-12 pt-8 sm:pt-10 border-t-2 border-gray-100">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm sm:text-base">
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-semibold">24h Response Time</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                    <span className="font-semibold">support@yourapp.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInTouch;