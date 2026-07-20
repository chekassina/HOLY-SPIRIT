import { motion } from "motion/react";
import { Play, Calendar, MessageSquare, ArrowRight } from "lucide-react";

interface HeroProps {
  onNavigate: (page: string) => void;
  openPrayerModal: () => void;
}

export default function HeroSection({ onNavigate, openPrayerModal }: HeroProps) {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-brand-blue-dark">
      {/* Background Image with Deep Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bannel.jpeg"
          alt="Miracle Embassy Church Sanctuary"
          className="w-full h-full object-cover object-center opacity-40 scale-105 transform hover:scale-100 transition-transform duration-[10s]"
          referrerPolicy="no-referrer"
        />
        {/* Deep blue and gold gradient overlay to guarantee text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-dark via-brand-blue-dark/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-dark/50 via-transparent to-brand-blue-dark/50" />
      </div>

      {/* Gold Light Beam Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/35 px-4 py-1.5 rounded-full text-xs font-mono text-brand-gold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
            Preaching the Gospel • Isaiah 35:1-10
          </div>

          {/* Church Title */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-tight">
            MIRACLE EMBASSY <br />
            <span className="text-brand-gold font-bold font-sans tracking-widest text-lg sm:text-2xl md:text-3xl uppercase block mt-2">
              CHURCH OF CHRIST MINISTRIES INTERNATIONAL [MECOCMI]
            </span>
          </h1>

          {/* Scriptural Welcome */}
          <p className="max-w-2xl mx-auto font-sans text-base sm:text-xl text-slate-300 leading-relaxed font-light">
            "A place where lives are transformed, destinies are restored, and the power of God is experienced."
            <span className="block mt-2 font-serif italic text-sm text-brand-gold/80">
              Join us for passionate worship, fervent prayer, sound biblical teaching, and life-changing encounters.
            </span>
          </p>

          {/* Action Buttons */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onNavigate("services")}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-gold to-brand-gold-dark hover:from-brand-gold-light hover:to-brand-gold text-brand-blue-dark font-sans font-bold rounded-sm shadow-xl shadow-brand-gold/10 hover:shadow-brand-gold/25 transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <Calendar className="w-5 h-5 text-brand-blue-dark" />
              Join Our Services
              <ArrowRight className="w-4 h-4 text-brand-blue-dark group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onNavigate("events")}
              className="w-full sm:w-auto px-8 py-4 bg-brand-blue-light/60 border border-slate-500 hover:bg-brand-blue-light hover:border-brand-gold/70 text-white font-sans font-bold rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Play className="w-5 h-5 text-brand-gold fill-brand-gold" />
              Watch Live
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={openPrayerModal}
              className="w-full sm:w-auto px-8 py-4 bg-slate-900/80 border border-brand-gold/40 text-brand-gold hover:text-white hover:bg-slate-900 hover:border-brand-gold transition-all rounded-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-5 h-5" />
              Prayer Request
            </motion.button>
          </div>
        </motion.div>

        {/* Live Broadcast Indicator Slider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-16 border-t border-slate-800/80 pt-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-3 rounded-lg bg-slate-900/30 border border-slate-800/40">
              <div className="text-2xl font-serif text-brand-gold font-bold">5:00 AM</div>
              <div className="text-xs text-slate-400 font-sans tracking-wide uppercase mt-1">Sunday Dawn Praise</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-slate-900/30 border border-slate-800/40">
              <div className="text-2xl font-serif text-brand-gold font-bold">24/7</div>
              <div className="text-xs text-slate-400 font-sans tracking-wide uppercase mt-1">Overnight Altar</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-slate-900/30 border border-slate-800/40">
              <div className="text-2xl font-serif text-brand-gold font-bold">7 Months</div>
              <div className="text-xs text-slate-400 font-sans tracking-wide uppercase mt-1">Annual Revival</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-slate-900/30 border border-slate-800/40">
              <div className="text-2xl font-serif text-brand-gold font-bold">11</div>
              <div className="text-xs text-slate-400 font-sans tracking-wide uppercase mt-1">Ordained Ministries</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Elegant Arc Bottom Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none" />
    </section>
  );
}
