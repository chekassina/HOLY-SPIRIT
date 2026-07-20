import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PASTORS } from "../data";
import { Pastor } from "../types";
import { X, Quote, ShieldCheck, Mail, ArrowRight, Check } from "lucide-react";

export default function LeadershipSection() {
  const [selectedPastor, setSelectedPastor] = useState<Pastor | null>(null);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  return (
    <div className="space-y-16 pb-24">
      {/* PAGE HERO BANNER WITH IMAGE */}
      <div className="relative h-64 sm:h-80 bg-brand-blue-dark flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1200"
          alt="Church Leadership"
          className="absolute inset-0 w-full h-full object-cover opacity-20 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50/10 via-brand-blue-dark/80 to-brand-blue-dark" />
        <div className="relative z-10 text-center space-y-2.5 px-4">
          <span className="text-xs font-mono text-brand-gold uppercase tracking-widest font-extrabold bg-brand-gold/10 px-3 py-1 rounded-sm border border-brand-gold/20">
            MINISTERIAL SHEPHERDS
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Our Church Leadership
          </h1>
          <p className="max-w-md mx-auto text-xs sm:text-sm text-slate-300 font-sans font-light">
            Meet the consecrated ministers ordained to lead our development, prayer, music, and outreach ministries.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Leadership Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-mono text-brand-gold-dark uppercase tracking-widest font-semibold">
            SHEpherds & Stewards
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-blue-dark">
            Our Shepherds
          </h2>
          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
            Meet the consecrated ministers ordained to lead our development, prayer, music, finance, and outreach ministries with integrity, holiness, and excellence.
          </p>
        </div>

      {/* Leadership Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {PASTORS.map((pastor, idx) => (
          <motion.div
            key={pastor.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            whileHover={{ y: -8 }}
            className="group bg-white rounded-sm border-l-4 border-slate-200 hover:border-brand-gold shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col h-full cursor-pointer"
            onClick={() => {
              setSelectedPastor(pastor);
              setContactSubmitted(false);
            }}
          >
            {/* Portrait Frame */}
            <div className="relative aspect-square overflow-hidden bg-slate-100">
              <img
                src={pastor.image}
                alt={pastor.name}
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-dark/80 via-brand-blue-dark/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-xs font-mono font-medium text-brand-gold uppercase flex items-center gap-1">
                  Read Profile <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* Basic Info */}
            <div className="p-5 flex-grow flex flex-col justify-between space-y-3">
              <div className="space-y-1">
                <h3 className="font-serif text-lg font-bold text-brand-blue-dark group-hover:text-brand-gold-dark transition-colors">
                  {pastor.name}
                </h3>
                <span className="inline-block px-2.5 py-1 text-xs font-mono font-bold text-brand-blue bg-slate-100 group-hover:bg-brand-gold-light/40 group-hover:text-brand-blue-dark transition-colors rounded-sm">
                  {pastor.role}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 font-sans line-clamp-2 font-light">
                {pastor.bio}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Leadership Details Modal */}
      <AnimatePresence>
        {selectedPastor && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setSelectedPastor(null);
                setContactSubmitted(false);
              }}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative bg-white text-slate-950 w-full max-w-2xl rounded-sm shadow-2xl overflow-hidden z-10 border-l-4 border-brand-gold border-y border-r border-slate-200/50"
            >
              {/* Close Button */}
              <button
                onClick={() => {
                  setSelectedPastor(null);
                  setContactSubmitted(false);
                }}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-sm bg-slate-950/75 hover:bg-slate-900 text-white flex items-center justify-center focus:outline-none transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Image Col */}
                <div className="md:col-span-5 relative h-64 md:h-full bg-slate-100">
                  <img
                    src={selectedPastor.image}
                    alt={selectedPastor.name}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                  {/* Absolute Overlay Accent */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-dark/40 to-transparent" />
                </div>

                {/* Info Col */}
                <div className="md:col-span-7 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <span className="text-xs font-mono font-bold text-brand-gold-dark uppercase tracking-widest block">
                        {selectedPastor.role}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-black text-brand-blue-dark leading-tight">
                        {selectedPastor.name}
                      </h3>
                    </div>

                    {/* Quote */}
                    {selectedPastor.quote && (
                      <div className="relative pl-6 py-2 border-l-2 border-brand-gold/60 bg-slate-50/70 italic text-slate-600 text-xs sm:text-sm font-serif">
                        <Quote className="absolute top-1 left-1.5 w-3.5 h-3.5 text-brand-gold/30 rotate-180" />
                        "{selectedPastor.quote}"
                      </div>
                    )}

                    {/* Bio */}
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans font-light">
                      {selectedPastor.bio}
                    </p>

                    {/* Responsibilities */}
                    {selectedPastor.responsibilities && (
                      <div className="space-y-2">
                        <h4 className="text-xs font-mono font-bold text-brand-blue-dark uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-100 pb-1">
                          <ShieldCheck className="w-4 h-4 text-brand-gold" />
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-1.5 pl-5 list-disc text-slate-600 text-xs sm:text-sm font-sans font-light">
                          {selectedPastor.responsibilities.map((resp, i) => (
                            <li key={i}>{resp}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Footer Connections */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <span className="text-xs font-mono text-slate-400">HSRC Stewardship Office</span>
                    
                    <AnimatePresence mode="wait">
                      {contactSubmitted ? (
                        <motion.div
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="flex items-center gap-1.5 text-xs text-emerald-600 font-bold font-sans bg-emerald-50 px-3 py-1.5 rounded-sm border border-emerald-200"
                        >
                          <Check className="w-4 h-4 shrink-0" /> Dispatch Routing Successful
                        </motion.div>
                      ) : (
                        <button
                          onClick={() => {
                            setContactSubmitted(true);
                          }}
                          className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 bg-brand-blue text-white hover:bg-brand-gold hover:text-brand-blue-dark text-xs font-mono font-bold uppercase rounded-sm transition-all cursor-pointer"
                        >
                          <Mail className="w-3.5 h-3.5" /> Contact Pastor
                        </button>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      </div>
    </div>
  );
}
