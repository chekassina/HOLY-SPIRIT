import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { WEEKLY_SCHEDULE, ALTAR_NIGHTS } from "../data";
import { Flame, BookOpen, Heart, Compass, Music, Mic, Sun, Clock, Users, Shield, CalendarDays } from "lucide-react";

// Helper to get matching icons
const getIcon = (name: string, className: string = "w-5 h-5") => {
  switch (name) {
    case "Flame": return <Flame className={className} />;
    case "BookOpen": return <BookOpen className={className} />;
    case "Heart": return <Heart className={className} />;
    case "Compass": return <Compass className={className} />;
    case "Music": return <Music className={className} />;
    case "Mic": return <Mic className={className} />;
    case "Sun": return <Sun className={className} />;
    default: return <Flame className={className} />;
  }
};

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<"services" | "altar">("services");
  const [selectedDay, setSelectedDay] = useState<string>("Sunday");

  const currentDayService = WEEKLY_SCHEDULE.find(s => s.day === selectedDay) || WEEKLY_SCHEDULE[6];

  return (
    <div className="space-y-16 pb-24">
      {/* PAGE HERO BANNER WITH IMAGE */}
      <div className="relative h-64 sm:h-80 bg-brand-blue-dark flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1515162305285-0293e4767cc2?auto=format&fit=crop&q=80&w=1200"
          alt="Worship Services"
          className="absolute inset-0 w-full h-full object-cover opacity-25 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50/10 via-brand-blue-dark/80 to-brand-blue-dark" />
        <div className="relative z-10 text-center space-y-2.5 px-4">
          <span className="text-xs font-mono text-brand-gold uppercase tracking-widest font-extrabold bg-brand-gold/10 px-3 py-1 rounded-sm border border-brand-gold/20">
            ENTERING HIS GATES WITH PRAISE
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Worship & Altar Assemblies
          </h1>
          <p className="max-w-md mx-auto text-xs sm:text-sm text-slate-300 font-sans font-light">
            "My house shall be called a house of prayer for all nations." Discover our weekly schedules and continuous watches.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-mono text-brand-gold-dark uppercase tracking-widest font-semibold">
            WORSHIP & SUPPLICATION
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-blue-dark">
            Worship & Altar Schedules
          </h2>
          <p className="font-sans text-slate-600 text-sm sm:text-base">
            "My house will be called a house of prayer for all nations." Join our weekly public services or plug into our continuous consecrated overnight altar assemblies.
          </p>
        </div>

      {/* Tab Controls */}
      <div className="flex justify-center">
        <div className="bg-slate-100 p-1.5 rounded-sm border border-slate-200/60 inline-flex items-center gap-1 shadow-inner">
          <button
            onClick={() => setActiveTab("services")}
            className={`px-6 py-2.5 rounded-sm font-sans text-sm font-bold transition-all cursor-pointer ${
              activeTab === "services"
                ? "bg-brand-blue text-white shadow-md"
                : "text-slate-500 hover:text-brand-blue"
            }`}
          >
            <span className="flex items-center gap-2">
              <CalendarDays className="w-4 h-4" />
              Weekly Services Schedule
            </span>
          </button>
          <button
            onClick={() => setActiveTab("altar")}
            className={`px-6 py-2.5 rounded-sm font-sans text-sm font-bold transition-all cursor-pointer ${
              activeTab === "altar"
                ? "bg-brand-blue text-white shadow-md"
                : "text-slate-500 hover:text-brand-blue"
            }`}
          >
            <span className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-brand-gold animate-pulse" />
              Altar Night Program
            </span>
          </button>
        </div>
      </div>

      {/* Main Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === "services" ? (
          <motion.div
            key="services"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          >
            {/* Weekday Selector Timelines */}
            <div className="lg:col-span-4 space-y-3">
              <h3 className="font-serif text-lg font-bold text-brand-blue-dark mb-4 border-b border-slate-200 pb-2 flex items-center gap-2">
                <Clock className="w-4.5 h-4.5 text-brand-gold" />
                Select a Day
              </h3>
              <div className="flex lg:flex-col overflow-x-auto gap-2.5 pb-3 lg:pb-0 scrollbar-none snap-x">
                {WEEKLY_SCHEDULE.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedDay(s.day)}
                    className={`snap-center shrink-0 lg:shrink px-5 py-3.5 rounded-sm border font-sans text-sm font-bold transition-all text-left flex items-center justify-between gap-4 cursor-pointer min-w-[130px] ${
                      selectedDay === s.day
                        ? "bg-white border-brand-gold border-l-4 shadow-md text-brand-blue-dark ring-2 ring-brand-gold/10"
                        : "bg-slate-50 border-slate-200 border-l-4 border-l-slate-300 text-slate-600 hover:bg-slate-100 hover:text-brand-blue"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className={`p-1.5 rounded-sm ${selectedDay === s.day ? "bg-brand-gold/15 text-brand-gold-dark" : "bg-slate-200/50 text-slate-500"}`}>
                        {getIcon(s.iconName, "w-4 h-4")}
                      </span>
                      {s.day}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400 shrink-0 hidden md:inline">
                      {s.day === "Sunday" ? "General" : "Evening"}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Service Detailed View */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedDay}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-sm p-6 sm:p-10 border border-slate-100 border-l-4 border-brand-gold shadow-2xl relative overflow-hidden h-full flex flex-col justify-between"
                >
                  {/* Backdrop glowing logo */}
                  <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 w-64 h-64 opacity-5 pointer-events-none">
                    <Flame className="w-full h-full text-brand-gold" />
                  </div>

                  <div className="space-y-6">
                    {/* Schedule Header Badge */}
                    <div className="flex items-center justify-between flex-wrap gap-4 border-b border-slate-100 pb-5">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-sm bg-brand-gold/15 text-brand-gold-dark flex items-center justify-center">
                          {getIcon(currentDayService.iconName, "w-7 h-7")}
                        </div>
                        <div>
                          <span className="text-xs font-mono text-brand-gold-dark uppercase tracking-widest font-bold">
                            {currentDayService.day} Program
                          </span>
                          <h4 className="font-serif text-2xl sm:text-3xl font-extrabold text-brand-blue-dark">
                            {currentDayService.program}
                          </h4>
                        </div>
                      </div>
                      
                      <div className="bg-brand-blue-light/10 border border-brand-blue-light/20 text-brand-blue-light px-4 py-2 rounded-sm text-xs sm:text-sm font-semibold flex items-center gap-2">
                        <Clock className="w-4.5 h-4.5 text-brand-gold" />
                        {currentDayService.time}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="font-sans text-slate-600 text-sm sm:text-lg leading-relaxed font-light">
                      {currentDayService.description}
                    </p>

                    {/* What to expect guidelines */}
                    <div className="space-y-3">
                      <h5 className="text-xs font-mono font-bold text-brand-blue-dark uppercase tracking-wider">
                        Service Experience & Details
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div className="flex items-start gap-2.5 p-3.5 rounded-sm bg-slate-50 border border-slate-100 border-l-2 border-brand-gold">
                          <Sun className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                          <div className="space-y-0.5">
                            <h6 className="text-xs font-semibold text-brand-blue-dark font-sans">Passion Worship</h6>
                            <p className="text-xs text-slate-500 font-sans">Anointed live music by HSRC Choir</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2.5 p-3.5 rounded-sm bg-slate-50 border border-slate-100 border-l-2 border-brand-gold">
                          <BookOpen className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                          <div className="space-y-0.5">
                            <h6 className="text-xs font-semibold text-brand-blue-dark font-sans">Uncompromising Word</h6>
                            <p className="text-xs text-slate-500 font-sans">Sound theological teachings from senior pastors</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2.5 p-3.5 rounded-sm bg-slate-50 border border-slate-100 border-l-2 border-brand-gold">
                          <Flame className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                          <div className="space-y-0.5">
                            <h6 className="text-xs font-semibold text-brand-blue-dark font-sans">Altar Ministry</h6>
                            <p className="text-xs text-slate-500 font-sans">Individual prayer & laying of hands</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2.5 p-3.5 rounded-sm bg-slate-50 border border-slate-100 border-l-2 border-brand-gold">
                          <Users className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                          <div className="space-y-0.5">
                            <h6 className="text-xs font-semibold text-brand-blue-dark font-sans">Fellowship Hour</h6>
                            <p className="text-xs text-slate-500 font-sans">Connect with brethren and leaders after service</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Encouragement Footer */}
                  <div className="mt-8 border-t border-slate-100 pt-5 text-slate-400 text-xs font-sans text-center">
                    All general services are hosted in the main auditorium. Childcare/Sunday school provisions are fully active on Sundays.
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        ) : (
          /* ALTAR PROGRAM WATCH GRID */
          <motion.div
            key="altar"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            {/* Introductory notice */}
            <div className="bg-brand-blue-dark text-slate-200 p-6 sm:p-8 rounded-sm border-l-4 border-brand-gold border-y border-r border-slate-800/80 flex flex-col md:flex-row items-center gap-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-2xl" />
              <div className="w-14 h-14 rounded-sm bg-brand-gold/15 flex items-center justify-center shrink-0">
                <Flame className="w-8 h-8 text-brand-gold animate-bounce" />
              </div>
              <div className="space-y-1.5 text-center md:text-left flex-grow">
                <h4 className="font-serif text-lg sm:text-xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
                  Continuous Altar Intercession
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  The HSRC Altar Ministry is the heartbeat of our spiritual breakthroughs. Every single week, members are assigned to standard overnight watches, keeping the spiritual engine burning to release healing and community transformation.
                </p>
              </div>
              <div className="bg-brand-gold text-brand-blue-dark font-sans font-bold text-xs px-4 py-2.5 rounded-sm tracking-wider uppercase shrink-0">
                Compulsory General Night: Friday
              </div>
            </div>

            {/* Grid of Altar Watches */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ALTAR_NIGHTS.map((altar, idx) => (
                <div
                  key={altar.id}
                  className="bg-white p-6 sm:p-8 rounded-sm border-l-4 border-brand-gold border-y border-r border-slate-100 hover:border-brand-gold/50 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    {/* Altar Badge & Header */}
                    <div className="flex items-start justify-between flex-wrap gap-3 border-b border-slate-50 pb-4">
                      <div>
                        <span className="text-xs font-mono text-brand-gold-dark uppercase tracking-widest font-bold">
                          {altar.days} Watch
                        </span>
                        <h4 className="font-serif text-xl font-extrabold text-brand-blue-dark mt-0.5">
                          {altar.groupName}
                        </h4>
                      </div>
                      <div className="bg-brand-blue/5 text-brand-blue px-3 py-1.5 rounded-sm text-xs font-semibold flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-brand-gold" />
                        {altar.time}
                      </div>
                    </div>

                    {/* Specific Audience Target */}
                    <div className="flex items-center gap-2 text-xs font-sans text-slate-500 font-semibold bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-sm">
                      <Users className="w-4 h-4 text-brand-gold shrink-0" />
                      Target Attendance: <span className="text-brand-blue-dark">{altar.audience}</span>
                    </div>

                    {/* Description */}
                    <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {altar.description}
                    </p>
                  </div>

                  {/* Scripture Witness Quote Box */}
                  {altar.scriptureRef && (
                    <div className="bg-brand-gold-light/20 p-3.5 rounded-sm border border-brand-gold/15 text-xs font-serif italic text-brand-blue-dark/95 pl-4 relative">
                      <div className="absolute top-0 bottom-0 left-0 w-1 bg-brand-gold rounded-l-sm" />
                      {altar.scriptureRef}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </div>
  );
}
