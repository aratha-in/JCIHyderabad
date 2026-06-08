"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setContactForm({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="bg-white text-slate-800 min-h-screen relative overflow-hidden py-16">
      {/* Background Mesh Glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-[#EEF6FB]/70 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#EEF6FB]/50 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-jci-blue bg-white border border-slate-200 px-4 py-2 rounded-full font-satoshi shadow-md">
            Get In Touch
          </span>
          <h1 className="font-display font-semibold text-4xl md:text-5xl text-jci-navy mt-6 mb-4 uppercase tracking-tight">
            Contact JCI Hyderabad
          </h1>
          <p className="text-slate-500 font-inter">
            Have questions about candidate recruitment, sponsorships, or local events? Fill out the contact form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Floating Info Details */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <h2 className="font-display font-semibold text-2xl text-jci-navy uppercase mb-2">Office Details</h2>
            {[
              { Icon: MapPin, title: "LOM Headquarters", desc: "JCI Hyderabad Office, Jubilee Hills Rd Number 36, Hyderabad, Telangana 500033", color: "text-jci-blue" },
              { Icon: Phone, title: "Call Us", desc: "+91 40 1234 5678", color: "text-jci-teal" },
              { Icon: Mail, title: "Official Support Email", desc: "info@jcihyderabad.org", color: "text-jci-blue" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="glass-premium p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-slate-350 hover:-translate-y-1 transition-all duration-300 flex gap-4 group shadow-sm hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-tr group-hover:from-jci-blue group-hover:to-jci-teal transition-all">
                  <item.Icon className={`w-5 h-5 ${item.color} group-hover:text-white`} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-jci-navy group-hover:text-jci-blue transition-colors">{item.title}</h3>
                  <p className="text-slate-600 text-sm mt-1 leading-relaxed font-inter">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form Card */}
          <div className="lg:col-span-7">
            <div className="glass-premium p-8 md:p-12 rounded-[32px] bg-white border border-slate-200 shadow-md relative">
              {submitted ? (
                <div className="py-24 text-center flex flex-col items-center gap-4">
                  <CheckCircle2 className="w-16 h-16 text-jci-blue animate-bounce" />
                  <h3 className="font-display font-semibold text-2xl text-jci-navy">Message Logged!</h3>
                  <p className="text-slate-500 text-sm font-inter">
                    Thank you for contacting us. A board secretary will reply to your email address shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider font-satoshi">Full Name</label>
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      placeholder="Enter name"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-jci-blue text-slate-800 outline-none text-sm transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider font-satoshi">Email Address</label>
                    <input
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      placeholder="Enter email"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-jci-blue text-slate-800 outline-none text-sm transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider font-satoshi">Your Message</label>
                    <textarea
                      required
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      placeholder="Describe your inquiry..."
                      rows="5"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-jci-blue text-slate-800 outline-none text-sm resize-none transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full mt-4 py-4 rounded-xl bg-gradient-to-r from-jci-blue to-jci-teal text-white font-bold flex items-center justify-center gap-2 transition-all hover:opacity-90 cursor-pointer"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
