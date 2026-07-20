import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MINISTRIES } from "../data";
import { Ministry } from "../types";
import { Flame, Sparkles, Music, Compass, Globe, Video, Users, Layers, Megaphone, DollarSign, Check, Mail, Clock } from "lucide-react";

const getMinistryIcon = (name: string, className: string = "w-6 h-6") => {
  switch (name) {
    case "Flame": return <Flame className={className} />;
    case "Sparkles": return <Sparkles className={className} />;
    case "Music": return <Music className={className} />;
    case "Compass": return <Compass className={className} />;
    case "Globe": return <Globe className={className} />;
    case "Video": return <Video className={className} />;
    case "Users": return <Users className={className} />;
    case "Layers": return <Layers className={className} />;
    case "Megaphone": return <Megaphone className={className} />;
    case "DollarSign": return <DollarSign className={className} />;
    default: return <Sparkles className={className} />;
  }
};

export default function MinistriesSection() {
  const [selectedMinistry, setSelectedMinistry] = useState<Ministry | null>(null);
  const [joinForm, setJoinForm] = useState({ name: "", email: "", phone: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleJoinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!joinForm.name || !joinForm.email || !joinForm.phone) return;
    
    // Simulate API Submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setSelectedMinistry(null);
      setJoinForm({ name: "", email: "", phone: "" });
    }, 3500);
  };

  return (
    <div className="space-y-16 pb-24">
      {/* PAGE HERO BANNER WITH IMAGE */}
      <div className="relative h-64 sm:h-80 bg-brand-blue-dark flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1469571486090-c5ff29097385?auto=format&fit=crop&q=80&w=1200"
          alt="Our Ministries"
          className="absolute inset-0 w-full h-full object-cover opacity-25 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50/10 via-brand-blue-dark/80 to-brand-blue-dark" />
        <div className="relative z-10 text-center space-y-2.5 px-4">
          <span className="text-xs font-mono text-brand-gold uppercase tracking-widest font-extrabold bg-brand-gold/10 px-3 py-1 rounded-sm border border-brand-gold/20">
            ARMS OF KINGDOM SERVICE
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Our Vital Ministries
          </h1>
          <p className="max-w-md mx-auto text-xs sm:text-sm text-slate-300 font-sans font-light">
            The Body of Christ is diverse and active. Explore our 11 ministries and find where your spiritual gifts align.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Ministries Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-mono text-brand-gold-dark uppercase tracking-widest font-semibold">
            Spiritual Arms of service
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-blue-dark">
            Our Ministries
          </h2>
          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
            The Body of Christ is active and diverse. Explore our 11 vital ministries, find where your spiritual gifts align, and step forward to serve the Kingdom.
          </p>
        </div>

      {/* Ministries Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MINISTRIES.map((m, idx) => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.04 }}
            whileHover={{ y: -6 }}
            className="bg-white p-6 sm:p-8 rounded-sm border-l-4 border-slate-200 hover:border-brand-gold hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-4">
              {/* Ministry Card Header */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-sm bg-brand-gold-light/35 text-brand-gold-dark flex items-center justify-center shrink-0">
                  {getMinistryIcon(m.iconName, "w-6 h-6 stroke-brand-gold-dark")}
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-brand-blue-dark leading-tight">
                    {m.name}
                  </h3>
                  <p className="text-xs text-slate-400 font-sans mt-0.5">
                    Led by: <span className="font-medium text-slate-600">{m.leader}</span>
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-500 font-sans leading-relaxed line-clamp-3">
                {m.description}
              </p>

              {/* Key Highlights Focus */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {m.focus.slice(0, 3).map((f, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-mono font-bold bg-slate-50 border border-slate-100 text-slate-500 px-2.5 py-0.5 rounded-sm"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions Footer */}
            <div className="pt-6 mt-6 border-t border-slate-50 flex items-center justify-between">
              <span className="text-[10px] font-mono text-slate-400 uppercase flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {m.schedule.split(" ")[0]} Meeting
              </span>

              <button
                onClick={() => setSelectedMinistry(m)}
                className="text-xs font-mono font-bold text-brand-blue hover:text-brand-gold-dark transition-all flex items-center gap-1 cursor-pointer"
              >
                Explore & Join
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Explore and Join Ministry Modal */}
      <AnimatePresence>
        {selectedMinistry && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMinistry(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-white text-slate-950 w-full max-w-xl rounded-sm shadow-2xl overflow-hidden z-10 border-l-4 border-brand-gold border-y border-r border-slate-200/50 p-6 sm:p-8 space-y-6"
            >
              {/* Header inside modal */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-sm bg-brand-gold-light/35 text-brand-gold-dark flex items-center justify-center shrink-0">
                    {getMinistryIcon(selectedMinistry.iconName, "w-6 h-6 stroke-brand-gold-dark")}
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-brand-gold-dark uppercase tracking-wider">
                      HSRC Ministry Directory
                    </span>
                    <h3 className="font-serif text-2xl font-black text-brand-blue-dark leading-tight">
                      {selectedMinistry.name}
                    </h3>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedMinistry(null)}
                  className="text-slate-400 hover:text-slate-600 focus:outline-none cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg>
                </button>
              </div>

              {/* General details */}
              <div className="space-y-4 font-sans text-xs sm:text-sm">
                <p className="text-slate-600 leading-relaxed">
                  {selectedMinistry.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 border-t border-b border-slate-100 py-4 my-2">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Ministry Overseer</span>
                    <span className="font-semibold text-brand-blue-dark text-sm">{selectedMinistry.leader}</span>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Meeting Times</span>
                    <span className="font-semibold text-brand-blue-dark text-sm flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-brand-gold shrink-0" /> {selectedMinistry.schedule}
                    </span>
                  </div>
                </div>

                {/* Focus List */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono font-bold text-brand-blue-dark uppercase tracking-widest block">Primary Focuses</span>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedMinistry.focus.map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-slate-600">
                        <Check className="w-4 h-4 text-brand-gold shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Join Interactive Form */}
              <div className="border-t border-slate-100 pt-5 space-y-4">
                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-brand-blue-dark text-base">Join This Ministry</h4>
                  <p className="text-xs text-slate-400 font-sans">Submit your contact info and the department coordinators will reach out with training schedules.</p>
                </div>

                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-sm text-center space-y-2"
                    >
                      <div className="w-8 h-8 rounded-sm bg-emerald-500 text-white flex items-center justify-center mx-auto animate-bounce">
                        <Check className="w-5 h-5" />
                      </div>
                      <h5 className="font-semibold text-sm">Join Request Submitted!</h5>
                      <p className="text-xs text-emerald-600">May God bless your willingness to serve. Pastor {selectedMinistry.leader.split(" ")[1]} or their team will contact you shortly.</p>
                    </motion.div>
                  ) : (
                    <motion.form
                      onSubmit={handleJoinSubmit}
                      className="space-y-3"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={joinForm.name}
                          onChange={(e) => setJoinForm({ ...joinForm, name: e.target.value })}
                          className="w-full px-3.5 py-2 rounded-sm border border-slate-200 text-xs sm:text-sm font-sans focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/20"
                        />
                        <input
                          type="email"
                          required
                          placeholder="Your Email"
                          value={joinForm.email}
                          onChange={(e) => setJoinForm({ ...joinForm, email: e.target.value })}
                          className="w-full px-3.5 py-2 rounded-sm border border-slate-200 text-xs sm:text-sm font-sans focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/20"
                        />
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="tel"
                          required
                          placeholder="Phone/WhatsApp"
                          value={joinForm.phone}
                          onChange={(e) => setJoinForm({ ...joinForm, phone: e.target.value })}
                          className="flex-grow px-3.5 py-2 rounded-sm border border-slate-200 text-xs sm:text-sm font-sans focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/20"
                        />
                        <button
                          type="submit"
                          className="px-5 py-2 bg-brand-blue text-white text-xs font-sans font-bold uppercase tracking-wider rounded-sm hover:bg-brand-gold hover:text-brand-blue-dark transition-all cursor-pointer"
                        >
                          Submit Request
                        </button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      </div>
    </div>
  );
}
