'use client';
import { useState } from 'react';

interface ContactNewProps {
  personalData: {
    email: string;
    phone: string;
  };
}

export default function ContactNew({ personalData }: ContactNewProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-32 px-8 lg:px-16 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Section Label */}
        <div className="text-gray-400 text-sm font-mono mb-8 tracking-widest">
          // GET IN TOUCH
        </div>

        {/* Background Text */}
        <div 
          className="text-9xl font-bold mb-8 opacity-5 select-none"
          style={{
            WebkitTextStroke: '2px #e5e7eb',
            WebkitTextFillColor: 'transparent',
          }}
        >
          CONTACT
        </div>

        <h2 className="text-5xl font-bold text-gray-900 mb-4 -mt-20">Reach Me</h2>
        <p className="text-gray-600 mb-16">
          If you want to contact me, just call me or email.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="px-6 py-4 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:border-gray-900 transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="E-Mail"
              value={formData.email}
              onChange={handleChange}
              required
              className="px-6 py-4 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:border-gray-900 transition-colors"
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:border-gray-900 transition-colors"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={8}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:border-gray-900 transition-colors resize-none"
          />
          <button
            type="submit"
            className="w-full px-8 py-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Send Message
          </button>
          {status === 'success' && (
            <div className="p-4 bg-green-50 text-green-700 rounded-lg border border-green-200 text-center">
              Thank you! Your Message has been sent.
            </div>
          )}
          {status === 'error' && (
            <div className="p-4 bg-red-50 text-red-700 rounded-lg border border-red-200 text-center">
              Something went wrong, Please try again!
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

