import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ANNUAL_EVENTS } from "../data";
import { AnnualEvent } from "../types";
import { Calendar, Tag, ShieldAlert, Sparkles, Clock, Globe, ArrowRight, CheckCircle2 } from "lucide-react";

// Countdown Timer Card component
function EventCountdown({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isOver: false
  });

  useEffect(() => {
    const calculateTime = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isOver: true });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isOver: false
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  if (timeLeft.isOver) {
    return (
      <div className="text-center bg-brand-gold/10 border border-brand-gold/30 rounded-sm p-3 text-brand-gold text-xs font-semibold uppercase tracking-widest font-sans animate-pulse">
        Event Session Currently Active or Concluding
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5 justify-center md:justify-start">
        <Clock className="w-3.5 h-3.5 text-brand-gold" />
        Countdown to Encounter
      </div>
      <div className="grid grid-cols-4 gap-2.5 max-w-sm mx-auto md:mx-0">
        <div className="bg-slate-900/60 p-2 sm:p-3.5 rounded-sm border border-slate-800 text-center">
          <div className="text-xl sm:text-2xl font-serif font-extrabold text-white leading-none">
            {timeLeft.days}
          </div>
          <div className="text-[9px] font-mono font-semibold text-slate-400 uppercase tracking-wider mt-1">Days</div>
        </div>
        <div className="bg-slate-900/60 p-2 sm:p-3.5 rounded-sm border border-slate-800 text-center">
          <div className="text-xl sm:text-2xl font-serif font-extrabold text-white leading-none">
            {timeLeft.hours}
          </div>
          <div className="text-[9px] font-mono font-semibold text-slate-400 uppercase tracking-wider mt-1">Hrs</div>
        </div>
        <div className="bg-slate-900/60 p-2 sm:p-3.5 rounded-sm border border-slate-800 text-center">
          <div className="text-xl sm:text-2xl font-serif font-extrabold text-white leading-none">
            {timeLeft.minutes}
          </div>
          <div className="text-[9px] font-mono font-semibold text-slate-400 uppercase tracking-wider mt-1">Min</div>
        </div>
        <div className="bg-slate-900/60 p-2 sm:p-3.5 rounded-sm border border-slate-800 text-center">
          <div className="text-xl sm:text-2xl font-serif font-extrabold text-brand-gold leading-none">
            {timeLeft.seconds}
          </div>
          <div className="text-[9px] font-mono font-semibold text-slate-400 uppercase tracking-wider mt-1">Sec</div>
        </div>
      </div>
    </div>
  );
}

const EVENT_IMAGES: Record<string, string> = {
  e1: "https://images.unsplash.com/photo-1515162305285-0293e4767cc2?auto=format&fit=crop&q=80&w=800",
  e2: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&q=80&w=800",
  e3: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800"
};

export default function EventsSection() {
  const [selectedEvent, setSelectedEvent] = useState<AnnualEvent | null>(null);
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <div className="space-y-16 pb-24">
      {/* PAGE HERO BANNER WITH IMAGE */}
      <div className="relative h-64 sm:h-80 bg-brand-blue-dark flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1200"
          alt="Annual Events"
          className="absolute inset-0 w-full h-full object-cover opacity-25 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50/10 via-brand-blue-dark/80 to-brand-blue-dark" />
        <div className="relative z-10 text-center space-y-2.5 px-4">
          <span className="text-xs font-mono text-brand-gold uppercase tracking-widest font-extrabold bg-brand-gold/10 px-3 py-1 rounded-sm border border-brand-gold/20">
            CONSECRATED CONVENTIONS
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Our Annual Conventions
          </h1>
          <p className="max-w-md mx-auto text-xs sm:text-sm text-slate-300 font-sans font-light">
            Plan your year around HSRC's life-changing assemblies, national conferences, and international fastings.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Events Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-mono text-brand-gold-dark uppercase tracking-widest font-semibold">
            SACRED APPOINTMENTS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-blue-dark">
            Annual Conventions
          </h2>
          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
            Plan your year around our primary life-changing national assemblies. Mark your calendars, enter into prayer, and prepare for divine visitations.
          </p>
        </div>

        {/* Events Row Layout */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {ANNUAL_EVENTS.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-slate-950 text-white rounded-sm border-l-4 border-brand-gold border-y border-r border-slate-800/60 overflow-hidden shadow-xl hover:shadow-2xl hover:border-brand-gold/30 transition-all duration-300 relative group flex flex-col md:flex-row min-h-[300px]"
            >
              {/* Event Background Image Accent */}
              <img
                src={EVENT_IMAGES[event.id]}
                alt={event.title}
                className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-overlay pointer-events-none group-hover:scale-105 transition-transform duration-[6s]"
                referrerPolicy="no-referrer"
              />

              {/* Background Gradient / Fire Theme Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${event.bgGradient} opacity-85 mix-blend-multiply z-0`} />

              {/* Event Header Left Block (Visual Accent) */}
              <div className="md:w-5/12 p-8 sm:p-10 relative z-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-800/75 bg-slate-950/20 backdrop-blur-xs">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-1.5 bg-brand-gold/25 border border-brand-gold/30 text-brand-gold px-3 py-1 rounded-sm text-xs font-mono font-bold uppercase tracking-wider">
                  <Calendar className="w-3.5 h-3.5" />
                  {event.dates}
                </span>
                
                <h3 className="font-serif text-2xl sm:text-3xl font-black text-white leading-tight">
                  {event.title}
                </h3>
              </div>

              {/* Theme description */}
              {event.theme && (
                <div className="pt-4 border-t border-slate-800/80 space-y-1">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest flex items-center gap-1">
                    <Tag className="w-3.5 h-3.5 text-brand-gold" />
                    Prophetic Theme
                  </div>
                  <div className="font-serif font-extrabold italic text-brand-gold text-lg leading-tight">
                    "{event.theme}"
                  </div>
                </div>
              )}
            </div>

            {/* Event Details & Live Countdown Right Block */}
            <div className="md:w-7/12 p-8 sm:p-10 relative z-10 flex flex-col justify-between space-y-6">
              <div className="space-y-3.5">
                <div className="text-xs font-mono font-bold text-brand-gold uppercase tracking-widest flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-brand-gold animate-spin-slow" />
                  Convention Mandate
                </div>
                <p className="text-slate-300 text-xs sm:text-base leading-relaxed font-sans font-light">
                  {event.description}
                </p>
                <p className="text-slate-400 text-xs font-sans italic">
                  {event.durationDetails}
                </p>
              </div>

              {/* Countdown Component */}
              <div className="pt-6 border-t border-slate-800/80 flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
                <EventCountdown targetDate={event.countdownDate} />

                <button
                  onClick={() => {
                    setSelectedEvent(event);
                    setIsRegistered(false);
                  }}
                  className="w-full md:w-auto px-5 py-3 bg-brand-gold text-brand-blue-dark font-sans font-bold text-xs tracking-wider uppercase rounded-sm hover:bg-white hover:text-brand-blue transition-all flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
                >
                  Register / Info
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Event Details Informational Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setSelectedEvent(null);
                setIsRegistered(false);
              }}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-white text-slate-950 w-full max-w-lg rounded-sm shadow-2xl p-6 sm:p-8 z-10 border-l-4 border-brand-gold border-y border-r border-slate-200/50 space-y-6"
            >
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-brand-gold-dark uppercase tracking-widest block">
                    {selectedEvent.dates}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-brand-blue-dark leading-tight">
                    {selectedEvent.title}
                  </h3>
                </div>
                <button
                  onClick={() => {
                    setSelectedEvent(null);
                    setIsRegistered(false);
                  }}
                  className="text-slate-400 hover:text-slate-600 focus:outline-none cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg>
                </button>
              </div>

              <AnimatePresence mode="wait">
                {isRegistered ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="space-y-6 py-4"
                  >
                    <div className="bg-brand-gold-light/25 border border-brand-gold/30 p-5 rounded-sm text-center space-y-3">
                      <CheckCircle2 className="w-10 h-10 text-brand-gold-dark mx-auto animate-bounce" />
                      <h4 className="font-serif font-black text-brand-blue-dark text-lg">Attendance Confirmed!</h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-sans">
                        A provisional attendance permit has been registered for you under reference: <span className="font-mono font-bold text-brand-blue-dark">HSRC-{Date.now().toString().substring(7)}</span>. Special notifications and guide bulletins will be made active at the pulpit and the corporate announcement channels. Prepare for God's fire!
                      </p>
                    </div>

                    <div className="flex justify-center">
                      <button
                        onClick={() => {
                          setSelectedEvent(null);
                          setIsRegistered(false);
                        }}
                        className="px-6 py-2.5 bg-brand-blue hover:bg-brand-gold hover:text-brand-blue-dark text-white text-xs font-bold uppercase rounded-sm transition-colors cursor-pointer"
                      >
                        Exit Directory
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    className="space-y-6"
                  >
                    <div className="p-4 bg-brand-gold-light/20 rounded-sm border border-brand-gold/15 space-y-1">
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider flex items-center gap-1">
                        <Tag className="w-3.5 h-3.5 text-brand-gold-dark" /> Prophetic Theme
                      </span>
                      <p className="font-serif font-extrabold italic text-brand-blue-dark">
                        "{selectedEvent.theme}"
                      </p>
                    </div>

                    <div className="space-y-3.5 font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                      <p>{selectedEvent.description}</p>
                      <p className="font-semibold text-brand-blue-dark bg-slate-50 p-3 rounded-sm border border-slate-100 flex items-center gap-2">
                        <Globe className="w-4 h-4 text-brand-gold shrink-0" />
                        Accommodation & Transport provisions are active for international visitors.
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <button
                        onClick={() => setSelectedEvent(null)}
                        className="px-4 py-2 border border-slate-200 text-slate-600 text-xs font-bold uppercase rounded-sm hover:bg-slate-50 transition-colors cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => {
                          setIsRegistered(true);
                        }}
                        className="px-6 py-2.5 bg-brand-blue text-white text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-brand-gold hover:text-brand-blue-dark transition-all cursor-pointer"
                      >
                        Confirm Attendance Permit
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      </div>
    </div>
  );
}
