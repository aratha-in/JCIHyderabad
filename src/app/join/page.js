"use client";
import { useState } from "react";
import { CheckCircle2, ChevronRight, ChevronLeft } from "lucide-react";

export default function Join() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: "", email: "", age: "", occupation: "", motive: "", experience: "None", sector: "Corporate" });
  const [submitted, setSubmitted] = useState(false);

  const perks = [
    { title: "Leadership Masterclasses", desc: "Gain accredited project planning and administration credentials from JCI India trainers." },
    { title: "Global Network Integration", desc: "Access the official JCI directories to connect with thousands of active business leaders globally." },
    { title: "Civic Portfolio Management", desc: "Stand for election as a local officer, managing budgets, teams, and active chapters." },
  ];

  const handleNext = () => setStep(prev => prev + 1);
  const handlePrev = () => setStep(prev => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", age: "", occupation: "", motive: "", experience: "None", sector: "Corporate" });
      setSubmitted(false);
      setStep(1);
    }, 3000);
  };

  return (
    <div className="bg-white text-slate-800 min-h-screen relative overflow-hidden py-16">
      {/* Background Mesh Glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-[#EEF6FB]/70 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#EEF6FB]/50 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-jci-blue bg-white border border-slate-200 px-4 py-2 rounded-full font-satoshi shadow-md">
            Membership Portal
          </span>
          <h1 className="font-display font-semibold text-4xl md:text-5xl text-jci-navy mt-6 mb-4 uppercase tracking-tight">
            Become a Member
          </h1>
          <p className="text-slate-500 font-inter">
            JCI membership is open to enterprising young leaders aged 18 to 40 who reside or run businesses in the Hyderabad region.
          </p>
        </div>

        {/* Journey steps indicators */}
        <div className="max-w-xl mx-auto mb-16 flex items-center justify-between relative">
          <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-slate-200 -translate-y-1/2 z-0" />
          {[
            { label: "Profile", stepNum: 1 },
            { label: "Interests", stepNum: 2 },
            { label: "Motivation", stepNum: 3 }
          ].map((s) => (
            <div key={s.stepNum} className="flex flex-col items-center gap-2 relative z-10">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-display font-semibold text-xs transition-all ${step >= s.stepNum ? "bg-gradient-to-tr from-jci-blue to-jci-teal text-white shadow-md shadow-jci-blue/20" : "bg-white border border-slate-200 text-slate-400"
                }`}>
                {s.stepNum}
              </div>
              <span className={`text-[10px] uppercase font-semibold font-satoshi ${step >= s.stepNum ? "text-jci-blue" : "text-slate-400"}`}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* Benefits & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Perks Column */}
          <div className="lg:col-span-5 flex flex-col gap-8 text-left">
            <h2 className="font-display font-semibold text-2xl text-jci-navy uppercase">Membership Benefits</h2>
            <div className="flex flex-col gap-6">
              {perks.map((perk, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-jci-teal" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-jci-navy">{perk.title}</h3>
                    <p className="text-slate-600 text-sm mt-1 leading-relaxed font-inter">{perk.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="glass-premium p-8 md:p-12 rounded-[32px] bg-white border border-slate-200 shadow-md">
              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center gap-4">
                  <CheckCircle2 className="w-14 h-14 text-jci-blue animate-bounce" />
                  <h3 className="font-display font-semibold text-xl text-jci-navy">Application Submitted!</h3>
                  <p className="text-slate-550 text-sm font-inter">
                    Our membership coordinator will contact you via email and phone to schedule a candidate interview.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                  {/* STEP 1: GENERAL PROFILE */}
                  {step === 1 && (
                    <div className="flex flex-col gap-5 text-left animate-in fade-in duration-200">
                      <h3 className="font-display font-semibold text-lg text-jci-navy">Step 1: Contact Details</h3>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-slate-655 uppercase tracking-wider font-satoshi">Full Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Enter full name"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-jci-blue text-slate-800 outline-none text-sm transition-all"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-slate-655 uppercase tracking-wider font-satoshi">Email Address</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="Enter email"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-jci-blue text-slate-800 outline-none text-sm transition-all"
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-semibold text-slate-655 uppercase tracking-wider font-satoshi">Age</label>
                          <input
                            type="number"
                            required
                            min="18"
                            max="40"
                            value={formData.age}
                            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                            placeholder="Must be 18 to 40"
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-jci-blue text-slate-800 outline-none text-sm transition-all"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-semibold text-slate-655 uppercase tracking-wider font-satoshi">Occupation</label>
                          <input
                            type="text"
                            required
                            value={formData.occupation}
                            onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                            placeholder="Student, Founder, Architect"
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-jci-blue text-slate-800 outline-none text-sm transition-all"
                          />
                        </div>
                      </div>
                      <div className="flex justify-end mt-4">
                        <button
                          type="button"
                          onClick={handleNext}
                          disabled={!formData.name || !formData.email || !formData.age || !formData.occupation}
                          className="px-6 py-3 rounded-xl bg-gradient-to-r from-jci-blue to-jci-teal text-white font-bold text-xs flex items-center gap-1.5 disabled:opacity-50 cursor-pointer"
                        >
                          Next Step
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: INTERESTS */}
                  {step === 2 && (
                    <div className="flex flex-col gap-5 text-left animate-in fade-in duration-200">
                      <h3 className="font-display font-semibold text-lg text-jci-navy">Step 2: Experience & Sector</h3>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-slate-655 uppercase tracking-wider font-satoshi">Professional Industry Sector</label>
                        <select
                          value={formData.sector}
                          onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-jci-blue text-slate-800 outline-none text-sm transition-all"
                        >
                          <option value="Corporate">Corporate / IT Sector</option>
                          <option value="Startup">Entrepreneurship / Startup Founder</option>
                          <option value="Academic">Academic / Research Student</option>
                          <option value="Social">Social Enterprise / Welfare NGO</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-slate-655 uppercase tracking-wider font-satoshi">Previous Volunteer / NGO Experience</label>
                        <select
                          value={formData.experience}
                          onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-jci-blue text-slate-800 outline-none text-sm transition-all"
                        >
                          <option value="None">No prior volunteer/NGO involvement</option>
                          <option value="1-2 Years">1 to 2 Years volunteer service</option>
                          <option value="3+ Years">3+ Years active volunteer service</option>
                        </select>
                      </div>
                      <div className="flex justify-between mt-4">
                        <button
                          type="button"
                          onClick={handlePrev}
                          className="px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-600 font-bold text-xs flex items-center gap-1.5 cursor-pointer"
                        >
                          <ChevronLeft className="w-4 h-4" />
                          Back
                        </button>
                        <button
                          type="button"
                          onClick={handleNext}
                          className="px-6 py-3 rounded-xl bg-gradient-to-r from-jci-blue to-jci-teal text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer"
                        >
                          Next Step
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 3: MOTIVATION */}
                  {step === 3 && (
                    <div className="flex flex-col gap-5 text-left animate-in fade-in duration-200">
                      <h3 className="font-display font-semibold text-lg text-jci-navy">Step 3: Personal Motivation</h3>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-slate-655 uppercase tracking-wider font-satoshi">Why do you want to join JCI Hyderabad?</label>
                        <textarea
                          required
                          value={formData.motive}
                          onChange={(e) => setFormData({ ...formData, motive: e.target.value })}
                          placeholder="Briefly state your personal leadership goals..."
                          rows="5"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-jci-blue text-slate-800 outline-none text-sm resize-none transition-all"
                        />
                      </div>
                      <div className="flex justify-between mt-4">
                        <button
                          type="button"
                          onClick={handlePrev}
                          className="px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-600 font-bold text-xs flex items-center gap-1.5 cursor-pointer"
                        >
                          <ChevronLeft className="w-4 h-4" />
                          Back
                        </button>
                        <button
                          type="submit"
                          disabled={!formData.motive}
                          className="px-8 py-3 rounded-xl bg-gradient-to-r from-jci-blue to-jci-teal text-white font-bold text-xs flex items-center gap-1.5 disabled:opacity-50 cursor-pointer"
                        >
                          Submit Application
                        </button>
                      </div>
                    </div>
                  )}

                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
