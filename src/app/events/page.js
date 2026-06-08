"use client";
import { useState, useEffect } from "react";
import { Calendar, MapPin, ChevronRight, CheckCircle2, Sparkles, X } from "lucide-react";

export default function Events() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [registeringEvent, setRegisteringEvent] = useState(null);
  const [regForm, setRegForm] = useState({ name: "", email: "", phone: "" });
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  // Countdown states
  const [timeLeft, setTimeLeft] = useState({ days: 120, hours: 14, minutes: 30, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        clearInterval(timer);
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const filters = ["All", "Conferences", "Business", "Trainings"];

  const events = [
    {
      id: 1,
      title: "Zone Conference JCON 2026",
      date: "Oct 15 - Oct 17, 2026",
      category: "Conferences",
      location: "Novotel HICC, Hyderabad",
      desc: "The premier gathering of young leaders across Zone XII to learn, network, and reward impact."
    },
    {
      id: 2,
      title: "CYE Startup Pitch Competition",
      date: "Sep 08, 2026",
      category: "Business",
      location: "T-Hub Phase 2, Hyderabad",
      desc: "Young entrepreneurs pitch their business models to industry mentors and venture capital funds."
    },
    {
      id: 3,
      title: "NALANDA Leadership Seminar",
      date: "Aug 20, 2026",
      category: "Trainings",
      location: "JCI Training Center, Jubilee Hills",
      desc: "A high-intensity training focused on public relations, public speaking, and team dynamics."
    },
    {
      id: 4,
      title: "Past: National Convention JCON",
      date: "Dec 2025 (Completed)",
      category: "Conferences",
      location: "Delhi Convention Center",
      desc: "JCI India's national convention celebrating yearly milestones and electing next year's leadership board."
    },
  ];

  const filteredEvents = selectedFilter === "All"
    ? events
    : events.filter(e => e.category === selectedFilter);

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setRegistrationSuccess(true);
    setTimeout(() => {
      setRegistrationSuccess(false);
      setRegisteringEvent(null);
      setRegForm({ name: "", email: "", phone: "" });
    }, 3000);
  };

  return (
    <div className="bg-white text-slate-800 min-h-screen relative overflow-hidden py-16">
      {/* Background Mesh Glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-[#EEF6FB]/70 blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-0 w-[500px] h-[500px] rounded-full bg-[#EEF6FB]/50 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Flagship Banner Hero */}
        <div className="glass-premium rounded-[32px] p-8 md:p-12 mb-20 bg-white border border-slate-200/50 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 shadow-md">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-jci-teal/5 blur-[100px] pointer-events-none" />

          <div className="flex flex-col gap-6 text-left max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-jci-blue text-xs font-semibold uppercase tracking-wider max-w-fit font-satoshi shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Flagship Summit</span>
            </div>
            <h2 className="font-display font-semibold text-3xl md:text-5xl text-jci-navy uppercase leading-tight tracking-tight">
              Zone Conference <br />
              <span className="text-jci-gradient">JCON 2026</span>
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed font-inter">
              Get ready for the largest gathering of startup founders, corporate administrators, and public speakers under Zone XII in Hyderabad.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 font-satoshi">
              <MapPin className="w-4 h-4 text-jci-teal" />
              <span>Novotel HICC, Hyderabad</span>
            </div>
            <div>
              <button
                onClick={() => setRegisteringEvent(events[0])}
                className="px-6 py-3.5 rounded-full bg-gradient-to-r from-jci-blue to-jci-teal text-white font-bold text-xs inline-flex items-center gap-2 hover:scale-105 transition-all shadow-md shadow-jci-blue/15 cursor-pointer"
              >
                Register Delegates Ticket
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Countdown Clock */}
          <div className="flex flex-col items-center gap-4 bg-slate-50 border border-slate-200 p-8 rounded-3xl w-full max-w-sm shadow-inner">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-satoshi">Session Starts In</span>
            <div className="grid grid-cols-4 gap-3 w-full">
              {[
                { label: "Days", val: timeLeft.days },
                { label: "Hours", val: timeLeft.hours },
                { label: "Mins", val: timeLeft.minutes },
                { label: "Secs", val: timeLeft.seconds },
              ].map((t, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-3 text-center border border-slate-200 shadow-sm">
                  <span className="font-display font-semibold text-2xl text-jci-navy block">
                    {String(t.val).padStart(2, "0")}
                  </span>
                  <span className="text-[9px] text-slate-550 uppercase font-semibold font-satoshi">{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-jci-navy uppercase mb-4">
            Upcoming Seminars & Challenges
          </h2>
          <p className="text-slate-600 font-inter">
            Filter upcoming local chapter workshops or view historical national summits.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center items-center gap-2 mb-12 overflow-x-auto pb-2 scrollbar-none">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold font-satoshi whitespace-nowrap transition-all cursor-pointer ${selectedFilter === filter
                  ? "bg-gradient-to-r from-jci-blue to-jci-teal text-white shadow-sm"
                  : "bg-white border border-slate-200 text-slate-500 hover:text-slate-800"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredEvents.map((event) => {
            const isCompleted = event.date.includes("Completed");
            return (
              <div
                key={event.id}
                className="glass-premium rounded-3xl p-8 bg-white border border-slate-200/85 hover:border-slate-350 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-jci-blue text-[10px] font-semibold uppercase tracking-wider font-satoshi">
                      {event.category}
                    </span>
                    <span className="text-slate-500 text-xs flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-jci-blue" />
                      {event.date}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-xl text-jci-navy group-hover:text-jci-blue transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{event.desc}</p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-satoshi">
                    <MapPin className="w-4 h-4 text-jci-teal" />
                    <span>{event.location}</span>
                  </div>
                  <button
                    onClick={() => setRegisteringEvent(event)}
                    disabled={isCompleted}
                    className={`px-5 py-2.5 rounded-xl font-semibold text-xs flex items-center gap-1.5 transition-all w-full sm:w-auto justify-center cursor-pointer ${isCompleted
                        ? "bg-slate-100 border border-slate-200 text-slate-400 cursor-not-allowed"
                        : "bg-jci-navy text-white hover:bg-jci-navy/95"
                      }`}
                  >
                    {isCompleted ? "Registration Closed" : "Register Now"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* EVENT REGISTRATION MODAL */}
      {registeringEvent && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 z-50 transition-opacity duration-300">
          <div className="bg-white max-w-md w-full rounded-[32px] overflow-hidden relative border border-slate-200 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              onClick={() => setRegisteringEvent(null)}
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Content */}
            <div className="p-8 md:p-10 text-left flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-jci-blue uppercase tracking-widest font-satoshi">Registration Portal</span>
                <h3 className="font-display font-semibold text-2xl text-jci-navy mt-1">
                  {registeringEvent.title}
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1.5 mt-1 font-satoshi">
                  <MapPin className="w-3.5 h-3.5 text-jci-teal" />
                  {registeringEvent.location}
                </p>
              </div>

              {registrationSuccess ? (
                <div className="py-12 text-center flex flex-col items-center gap-4">
                  <CheckCircle2 className="w-14 h-14 text-jci-blue animate-bounce" />
                  <h3 className="font-display font-semibold text-xl text-jci-navy">Registration Invoiced!</h3>
                  <p className="text-slate-550 text-sm font-inter">
                    Your candidate ticket has been registered. Detailed invitation codes have been sent to your email inbox.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleRegisterSubmit} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider font-satoshi">Full Name</label>
                    <input
                      type="text"
                      required
                      value={regForm.name}
                      onChange={(e) => setRegForm({ ...regForm, name: e.target.value })}
                      placeholder="Enter full name"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-jci-blue text-slate-800 outline-none text-sm transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider font-satoshi">Email Address</label>
                    <input
                      type="email"
                      required
                      value={regForm.email}
                      onChange={(e) => setRegForm({ ...regForm, email: e.target.value })}
                      placeholder="Enter email"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-jci-blue text-slate-800 outline-none text-sm transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider font-satoshi">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={regForm.phone}
                      onChange={(e) => setRegForm({ ...regForm, phone: e.target.value })}
                      placeholder="Enter phone number"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-jci-blue text-slate-800 outline-none text-sm transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full mt-4 py-4 rounded-xl bg-gradient-to-r from-jci-blue to-jci-teal text-white font-bold hover:opacity-90 transition-opacity cursor-pointer"
                  >
                    Confirm Free Delegate Ticket
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
