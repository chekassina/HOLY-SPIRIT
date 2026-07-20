import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PrayerRequest, ContactMessage, Donation } from "../types";
import {
  Send,
  Flame,
  Heart,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Gift,
  Coins,
  ChevronRight,
  MessageSquare,
  DollarSign,
  QrCode,
  Compass
} from "lucide-react";

// Initial Preset Prayers to kickstart the prayer board
const INITIAL_PRAYERS: PrayerRequest[] = [
  {
    id: "pr1",
    name: "Sister Brenda Nabwire",
    request: "Fervently requesting financial breakthrough and healing for my elderly mother struggling with cancer.",
    date: "July 19, 2026",
    intercessionsCount: 24,
    hasIntercededByUser: false
  },
  {
    id: "pr2",
    name: "Brother Saul Wekesa",
    request: "Pray for divine guidance as I embark on my rural evangelism outreach mission this coming weekend. Let doors be opened.",
    date: "July 18, 2026",
    intercessionsCount: 18,
    hasIntercededByUser: false
  },
  {
    id: "pr3",
    name: "Anoymous Family",
    request: "Asking for restoration of peace, mutual love, and unity in our household. Let every broken bond be mended by the Holy Spirit.",
    date: "July 17, 2026",
    intercessionsCount: 42,
    hasIntercededByUser: false
  }
];

export default function InteractionCenter() {
  const [activeTab, setActiveTab] = useState<"prayer" | "giving" | "contact">("prayer");

  // State for Prayer Board
  const [prayers, setPrayers] = useState<PrayerRequest[]>([]);
  const [prayerForm, setPrayerForm] = useState({ name: "", request: "", isAnonymous: false });
  const [prayerSuccess, setPrayerSuccess] = useState(false);

  // State for Giving
  const [givingAmount, setGivingAmount] = useState<string>("50000"); // Standard Shilling amount or Dollars
  const [givingCategory, setGivingCategory] = useState<Donation["category"]>("Tithe");
  const [givingName, setGivingName] = useState("");
  const [givingNotes, setGivingNotes] = useState("");
  const [donations, setDonations] = useState<Donation[]>([]);
  const [givingSuccess, setGivingSuccess] = useState(false);

  // State for Contact Form
  const [contactForm, setContactForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [contactMessages, setContactMessages] = useState<ContactMessage[]>([]);
  const [contactSuccess, setContactSuccess] = useState(false);

  // State for newsletter
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  // Load and Save Local Storage safely
  useEffect(() => {
    const cachedPrayers = localStorage.getItem("hsrc_prayers");
    if (cachedPrayers) {
      setPrayers(JSON.parse(cachedPrayers));
    } else {
      setPrayers(INITIAL_PRAYERS);
      localStorage.setItem("hsrc_prayers", JSON.stringify(INITIAL_PRAYERS));
    }

    const cachedDonations = localStorage.getItem("hsrc_donations");
    if (cachedDonations) {
      setDonations(JSON.parse(cachedDonations));
    }

    const cachedMessages = localStorage.getItem("hsrc_messages");
    if (cachedMessages) {
      setContactMessages(JSON.parse(cachedMessages));
    }
  }, []);

  // Submit new prayer request
  const handlePrayerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prayerForm.request) return;

    const newPrayer: PrayerRequest = {
      id: "pr_" + Date.now(),
      name: prayerForm.isAnonymous ? "Anonymous Brethren" : (prayerForm.name || "Anonymous Brethren"),
      request: prayerForm.request,
      date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
      intercessionsCount: 1,
      hasIntercededByUser: false
    };

    const updatedPrayers = [newPrayer, ...prayers];
    setPrayers(updatedPrayers);
    localStorage.setItem("hsrc_prayers", JSON.stringify(updatedPrayers));

    setPrayerForm({ name: "", request: "", isAnonymous: false });
    setPrayerSuccess(true);
    setTimeout(() => setPrayerSuccess(false), 4000);
  };

  // Click 'Amen' / 'Intercede'
  const handleIntercede = (id: string) => {
    const updatedPrayers = prayers.map(p => {
      if (p.id === id) {
        const alreadyDone = p.hasIntercededByUser;
        return {
          ...p,
          intercessionsCount: p.intercessionsCount + (alreadyDone ? -1 : 1),
          hasIntercededByUser: !alreadyDone
        };
      }
      return p;
    });

    setPrayers(updatedPrayers);
    localStorage.setItem("hsrc_prayers", JSON.stringify(updatedPrayers));
  };

  // Submit giving
  const handleGivingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amountNum = parseFloat(givingAmount);
    if (isNaN(amountNum) || amountNum <= 0) return;

    const newDonation: Donation = {
      id: "don_" + Date.now(),
      name: givingName || "Anonymous Steward",
      amount: amountNum,
      category: givingCategory,
      date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
      note: givingNotes
    };

    const updatedDonations = [newDonation, ...donations];
    setDonations(updatedDonations);
    localStorage.setItem("hsrc_donations", JSON.stringify(updatedDonations));

    setGivingName("");
    setGivingNotes("");
    setGivingSuccess(true);
    setTimeout(() => setGivingSuccess(false), 5000);
  };

  // Submit Contact Form
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.message) return;

    const newMessage: ContactMessage = {
      id: "msg_" + Date.now(),
      name: contactForm.name,
      email: contactForm.email,
      phone: contactForm.phone,
      message: contactForm.message,
      date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
    };

    const updatedMessages = [newMessage, ...contactMessages];
    setContactMessages(updatedMessages);
    localStorage.setItem("hsrc_messages", JSON.stringify(updatedMessages));

    setContactForm({ name: "", email: "", phone: "", message: "" });
    setContactSuccess(true);
    setTimeout(() => setContactSuccess(false), 4000);
  };

  // Submit Newsletter
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSuccess(true);
    setNewsletterEmail("");
    setTimeout(() => setNewsletterSuccess(false), 4000);
  };

  return (
    <div className="space-y-16 pb-24">
      {/* PAGE HERO BANNER WITH IMAGE */}
      <div className="relative h-64 sm:h-80 bg-brand-blue-dark flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1445445290350-18a3b86e0b5b?auto=format&fit=crop&q=80&w=1200"
          alt="Prayer and Fellowship"
          className="absolute inset-0 w-full h-full object-cover opacity-25 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50/10 via-brand-blue-dark/80 to-brand-blue-dark" />
        <div className="relative z-10 text-center space-y-2.5 px-4">
          <span className="text-xs font-mono text-brand-gold uppercase tracking-widest font-extrabold bg-brand-gold/10 px-3 py-1 rounded-sm border border-brand-gold/20">
            PULSE OF THE SANCTUARY
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Intercessory & Giving Center
          </h1>
          <p className="max-w-md mx-auto text-xs sm:text-sm text-slate-300 font-sans font-light">
            Share prayer requests, partner with our physical crusades through online giving, or reach out directly to the pulpit.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Tab Switcher */}
      <div className="flex justify-center border-b border-slate-200 max-w-lg mx-auto pb-px">
        <div className="flex gap-4">
          <button
            onClick={() => setActiveTab("prayer")}
            className={`px-4 py-3 font-serif text-sm sm:text-base font-bold transition-all relative cursor-pointer ${
              activeTab === "prayer" ? "text-brand-blue" : "text-slate-400 hover:text-slate-600"
            }`}
          >
            <span className="flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-brand-gold" />
              Prayer Wall
            </span>
            {activeTab === "prayer" && (
              <motion.div layoutId="interactTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold" />
            )}
          </button>
          <button
            onClick={() => setActiveTab("giving")}
            className={`px-4 py-3 font-serif text-sm sm:text-base font-bold transition-all relative cursor-pointer ${
              activeTab === "giving" ? "text-brand-blue" : "text-slate-400 hover:text-slate-600"
            }`}
          >
            <span className="flex items-center gap-1.5">
              <Gift className="w-4 h-4 text-brand-gold" />
              Online Giving
            </span>
            {activeTab === "giving" && (
              <motion.div layoutId="interactTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold" />
            )}
          </button>
          <button
            onClick={() => setActiveTab("contact")}
            className={`px-4 py-3 font-serif text-sm sm:text-base font-bold transition-all relative cursor-pointer ${
              activeTab === "contact" ? "text-brand-blue" : "text-slate-400 hover:text-slate-600"
            }`}
          >
            <span className="flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-brand-gold" />
              Contact & Directions
            </span>
            {activeTab === "contact" && (
              <motion.div layoutId="interactTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold" />
            )}
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          {/* TAB 1: PRAYER REQUESTS BOARD */}
          {activeTab === "prayer" && (
            <motion.div
              key="prayer_wall"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10"
            >
              {/* Form Col */}
              <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-sm border border-slate-150 border-l-4 border-brand-gold shadow-xl space-y-6 h-fit">
                <div className="space-y-1.5">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-blue-dark flex items-center gap-2">
                    <Flame className="w-5 h-5 text-brand-gold" />
                    Submit Prayer Request
                  </h3>
                  <p className="text-xs text-slate-500 font-sans">
                    Your prayer requests are received by our dedicated "Prayer & Intercession" department led by Pastor Nambozo Zam. We stand with you!
                  </p>
                </div>

                <AnimatePresence mode="wait">
                  {prayerSuccess ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="bg-brand-gold-light/25 border border-brand-gold/30 p-5 rounded-sm text-center space-y-3"
                    >
                      <CheckCircle2 className="w-8 h-8 text-brand-gold-dark mx-auto animate-bounce" />
                      <h4 className="font-serif font-bold text-brand-blue-dark">Request Laid on Altar!</h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-sans">
                        Your request has been published to our corporate prayer board and submitted directly to the intercessors' continuous evening watch lists. Let God answer by fire!
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handlePrayerSubmit} className="space-y-4">
                      <div className="space-y-1">
                        <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Your Name (Optional)</label>
                        <input
                          type="text"
                          disabled={prayerForm.isAnonymous}
                          placeholder={prayerForm.isAnonymous ? "Anonymous" : "Enter your name"}
                          value={prayerForm.name}
                          onChange={(e) => setPrayerForm({ ...prayerForm, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-sm border border-slate-200 text-xs sm:text-sm font-sans focus:outline-none focus:ring-1 focus:ring-brand-gold focus:border-brand-gold disabled:bg-slate-50"
                        />
                      </div>

                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="isAnonymous"
                          checked={prayerForm.isAnonymous}
                          onChange={(e) => setPrayerForm({ ...prayerForm, isAnonymous: e.target.checked })}
                          className="rounded border-slate-300 text-brand-blue focus:ring-brand-gold cursor-pointer"
                        />
                        <label htmlFor="isAnonymous" className="text-xs text-slate-500 font-sans cursor-pointer select-none">
                          Submit this request anonymously
                        </label>
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Prayer Burden / Request</label>
                        <textarea
                          required
                          rows={4}
                          placeholder="What is your request? Be specific, and we will pray in agreement."
                          value={prayerForm.request}
                          onChange={(e) => setPrayerForm({ ...prayerForm, request: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-sm border border-slate-200 text-xs sm:text-sm font-sans focus:outline-none focus:ring-1 focus:ring-brand-gold focus:border-brand-gold"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3 bg-brand-blue text-white hover:bg-brand-gold hover:text-brand-blue-dark font-sans font-bold text-xs uppercase tracking-wider rounded-sm transition-all cursor-pointer flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        Lay on the Altar
                      </button>
                    </form>
                  )}
                </AnimatePresence>
              </div>

              {/* Altar Prayer Board List */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <h3 className="font-serif text-lg font-bold text-brand-blue-dark flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-brand-gold" />
                    Altar Prayer Board
                  </h3>
                  <span className="text-[10px] font-mono font-bold bg-slate-100 text-slate-500 px-2.5 py-1 rounded-sm uppercase">
                    {prayers.length} Active Petitions
                  </span>
                </div>

                <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin">
                  {prayers.map((prayer) => (
                    <motion.div
                      key={prayer.id}
                      layout
                      className="bg-white p-5 rounded-sm border-l-4 border-brand-gold border-y border-r border-slate-150 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-4"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-serif font-bold text-xs sm:text-sm text-brand-blue-dark">
                            {prayer.name}
                          </span>
                          <span className="text-[9px] font-mono text-slate-400">
                            {prayer.date}
                          </span>
                        </div>
                        <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed">
                          "{prayer.request}"
                        </p>
                      </div>

                      {/* Prayer agreement buttons */}
                      <div className="flex items-center justify-between pt-3.5 border-t border-slate-50">
                        <span className="text-[10px] font-mono text-slate-400 uppercase">
                          Agreement Fire Watch
                        </span>

                        <button
                          onClick={() => handleIntercede(prayer.id)}
                          className={`px-3 py-1.5 rounded-sm text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer transition-all ${
                            prayer.hasIntercededByUser
                              ? "bg-brand-gold/25 border border-brand-gold text-brand-blue-dark font-extrabold shadow-xs"
                              : "bg-slate-50 hover:bg-brand-gold-light/25 border border-slate-100 text-slate-500 hover:text-brand-gold-dark"
                          }`}
                        >
                          <Flame className={`w-4 h-4 ${prayer.hasIntercededByUser ? "text-brand-gold-dark animate-pulse fill-brand-gold-dark" : "text-slate-400"}`} />
                          {prayer.hasIntercededByUser ? "Interceding" : "Agree in Prayer"} ({prayer.intercessionsCount})
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: ONLINE GIVING */}
          {activeTab === "giving" && (
            <motion.div
              key="giving"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10"
            >
              {/* Giving Explanation Left */}
              <div className="lg:col-span-5 bg-brand-blue-dark text-white p-6 sm:p-8 rounded-sm border-l-4 border-brand-gold flex flex-col justify-between space-y-8 relative overflow-hidden">
                <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-48 h-48 bg-brand-gold/5 rounded-full blur-2xl" />
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-sm bg-brand-gold/15 text-brand-gold flex items-center justify-center">
                    <Coins className="w-6 h-6 text-brand-gold" />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-black text-white leading-tight">
                    Stewardship & Covenant Partnerships
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans font-light">
                    "Honor the Lord with your wealth and with the firstfruits of all your produce; then your barns will be filled with plenty..." 
                    <span className="block mt-2 font-serif italic text-brand-gold">Proverbs 3:9-10</span>
                  </p>
                  <p className="text-xs text-slate-400 font-sans">
                    Your financial support empowers us to run continuous community sanitation drives, plant uncompromised missions, feed community groups, and broadcast revival fire globally.
                  </p>
                </div>

                {/* Alternative QR / Account details */}
                <div className="bg-slate-900/60 p-4 rounded-sm border border-slate-800 space-y-2.5">
                  <div className="flex items-center gap-2">
                    <QrCode className="w-4 h-4 text-brand-gold" />
                    <span className="text-[10px] font-mono uppercase text-brand-gold-light tracking-wider font-bold">Mobile Money & Bank transfer</span>
                  </div>
                  <div className="space-y-1 text-slate-300 text-xs font-mono">
                    <div>MTN Mobile Money: <span className="text-white font-bold">+256 701 445588</span></div>
                    <div>Airtel Money: <span className="text-white font-bold">+256 772 334455</span></div>
                    <div>Bank: Standbic Uganda • Account: <span className="text-white font-bold font-sans">9030022244455</span></div>
                  </div>
                </div>
              </div>

              {/* Giving Form Right */}
              <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-sm border border-slate-150 border-l-4 border-brand-gold shadow-xl">
                <AnimatePresence mode="wait">
                  {givingSuccess ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="p-8 text-center space-y-5"
                    >
                      <div className="w-16 h-16 rounded-sm bg-brand-gold-light/40 flex items-center justify-center text-brand-gold-dark mx-auto animate-bounce border border-brand-gold/30">
                        <Gift className="w-8 h-8" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-serif text-2xl font-black text-brand-blue-dark">Thank You For Your Seed!</h4>
                        <p className="text-xs sm:text-sm text-slate-500 font-sans max-w-sm mx-auto leading-relaxed">
                          Your donation has been completed and registered with absolute integrity under our Finance Office headed by Pastor Magoola Mansoor. We pray a 100-fold revival return over your seed!
                        </p>
                      </div>
                      <div className="inline-block bg-slate-50 border border-slate-100 px-4 py-2 rounded-sm text-xs font-mono text-slate-400">
                        Transaction Ref: <span className="text-slate-800 font-bold">HSRC-TXN-{Date.now().toString().substring(6)}</span>
                      </div>
                      <div className="pt-4">
                        <button
                          onClick={() => setGivingSuccess(false)}
                          className="px-6 py-2.5 bg-brand-blue hover:bg-brand-gold hover:text-brand-blue-dark text-white text-xs font-bold uppercase rounded-sm transition-colors cursor-pointer"
                        >
                          Give Another Seed
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleGivingSubmit} className="space-y-6">
                      <div className="space-y-1.5">
                        <h3 className="font-serif text-lg font-bold text-brand-blue-dark flex items-center gap-1.5">
                          <Coins className="w-5 h-5 text-brand-gold" /> Secure Covenant Giving
                        </h3>
                        <p className="text-xs text-slate-400 font-sans">
                          State your partnership seed amount. Recommended tithing and general missions targets can be typed directly.
                        </p>
                      </div>

                      {/* Giving Categories */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {(["Tithe", "Thanksgiving", "Revival Mission", "Community Aid"] as const).map((cat) => (
                          <button
                            key={cat}
                            type="button"
                            onClick={() => setGivingCategory(cat)}
                            className={`px-3 py-2.5 rounded-sm border font-sans text-xs font-bold text-center transition-all cursor-pointer ${
                              givingCategory === cat
                                ? "bg-brand-blue border-brand-blue text-white shadow-md"
                                : "bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100 hover:text-brand-blue"
                            }`}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>

                      {/* Amount Input */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Partnership Seed Amount (UGX / USD)</label>
                          <div className="relative">
                            <span className="absolute left-3 top-2.5 text-xs font-bold text-slate-400 font-mono">UGX</span>
                            <input
                              type="number"
                              required
                              min="1000"
                              placeholder="e.g. 50000"
                              value={givingAmount}
                              onChange={(e) => setGivingAmount(e.target.value)}
                              className="w-full pl-12 pr-3.5 py-2.5 rounded-sm border border-slate-200 text-xs sm:text-sm font-sans font-bold focus:outline-none focus:ring-1 focus:ring-brand-gold focus:border-brand-gold"
                            />
                          </div>
                        </div>

                        {/* Steward Name */}
                        <div className="space-y-1">
                          <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Giver Name (Optional)</label>
                          <input
                            type="text"
                            placeholder="e.g. Samuel Okello"
                            value={givingName}
                            onChange={(e) => setGivingName(e.target.value)}
                            className="w-full px-3.5 py-2.5 rounded-sm border border-slate-200 text-xs sm:text-sm font-sans focus:outline-none focus:ring-1 focus:ring-brand-gold focus:border-brand-gold"
                          />
                        </div>
                      </div>

                      {/* Calculations notice */}
                      {givingCategory === "Tithe" && !isNaN(parseFloat(givingAmount)) && parseFloat(givingAmount) > 0 && (
                        <div className="bg-brand-gold-light/20 p-3.5 rounded-sm border border-brand-gold/15 text-xs text-brand-blue-dark font-sans flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-brand-gold-dark shrink-0" />
                          <span>This tithe seed represents a 10% firstfruits portion of a <span className="font-bold font-mono">{(parseFloat(givingAmount) * 10).toLocaleString()} UGX</span> income blessing. May God multiply it.</span>
                        </div>
                      )}

                      {/* Payment Card Inputs (Simulated) */}
                      <div className="p-4 bg-slate-50 border border-slate-100 rounded-sm space-y-3">
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-bold">Secure Card Processing (Simulated Integration)</span>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <input
                            type="text"
                            required
                            placeholder="Card Number"
                            defaultValue="4111 2222 3333 4444"
                            className="sm:col-span-2 px-3 py-2 rounded-sm border border-slate-200 text-xs font-mono bg-white focus:outline-none"
                          />
                          <input
                            type="text"
                            required
                            placeholder="MM/YY"
                            defaultValue="12/28"
                            className="px-3 py-2 rounded-sm border border-slate-200 text-xs font-mono bg-white focus:outline-none"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3 bg-brand-blue text-white hover:bg-brand-gold hover:text-brand-blue-dark font-sans font-bold text-xs uppercase tracking-wider rounded-sm transition-all cursor-pointer flex items-center justify-center gap-2"
                      >
                        <Coins className="w-4.5 h-4.5" />
                        Release partnership Seed of {parseFloat(givingAmount).toLocaleString() || "0"} UGX
                      </button>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}

          {/* TAB 3: CONTACT & DIRECTIONS */}
          {activeTab === "contact" && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10"
            >
              {/* Info Column */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-1.5">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-blue-dark">
                    Join Us in His Presence
                  </h3>
                  <p className="text-xs text-slate-500 font-sans leading-relaxed">
                    We welcome all visitors, seekers, and neighboring residents to experience God's fire at any of our weekly assemblies.
                  </p>
                </div>

                {/* Directory Contacts Card */}
                <div className="bg-white p-6 rounded-sm border border-slate-150 border-l-4 border-brand-gold shadow-xl space-y-4 font-sans text-xs sm:text-sm">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-sm bg-brand-gold-light/45 text-brand-gold-dark flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 stroke-brand-gold-dark" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Physical Address</span>
                      <p className="font-semibold text-brand-blue-dark leading-snug">
                        Holy Spirit Revival Church, Plot 42, Cathedral Avenue, Mbale City, Uganda
                      </p>
                    </div>
                  </div>

                  <hr className="border-slate-50" />

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-sm bg-brand-gold-light/45 text-brand-gold-dark flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 stroke-brand-gold-dark" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Call & WhatsApp Contact</span>
                      <p className="font-semibold text-brand-blue-dark font-sans leading-normal">
                        WhatsApp: +256 701 445588 <br />
                        Office Phone: +256 772 334455
                      </p>
                    </div>
                  </div>

                  <hr className="border-slate-50" />

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-sm bg-brand-gold-light/45 text-brand-gold-dark flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 stroke-brand-gold-dark" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Email Channels</span>
                      <p className="font-semibold text-brand-blue-dark leading-snug">
                        Administration: office@hsrc.org <br />
                        Prayer Board: intercession@hsrc.org
                      </p>
                    </div>
                  </div>
                </div>

                {/* Google Maps Visual Indicator Placeholder */}
                <div className="relative h-44 rounded-sm overflow-hidden border-l-4 border-brand-gold border-y border-r border-slate-200 bg-slate-100 flex flex-col justify-end p-4 shadow-sm group">
                  <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/10 transition-colors z-10" />
                  
                  {/* Mock beautiful map graphic backdrop */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-15" />
                  <div className="absolute inset-0 bg-sky-950/20 z-0 flex items-center justify-center">
                    <Compass className="w-16 h-16 text-brand-gold/25 animate-spin-slow" />
                  </div>
                  
                  <div className="relative z-20 space-y-0.5">
                    <span className="text-[10px] font-mono font-bold text-brand-gold uppercase tracking-wider block">Google Maps Coordinates</span>
                    <span className="font-serif font-bold text-sm text-white block">Mbale Cathedral Area, Eastern Uganda</span>
                    <button
                      onClick={() => {
                        window.open("https://maps.google.com/?q=Mbale+Uganda", "_blank");
                      }}
                      className="text-[10px] font-sans font-bold text-slate-300 hover:text-brand-gold flex items-center gap-1 cursor-pointer mt-1"
                    >
                      Open in External Maps <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Form Column */}
              <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-sm border border-slate-150 border-l-4 border-brand-gold shadow-xl">
                <AnimatePresence mode="wait">
                  {contactSuccess ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="p-8 text-center space-y-4"
                    >
                      <div className="w-12 h-12 rounded-sm bg-emerald-100 flex items-center justify-center text-emerald-600 mx-auto animate-bounce">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <div className="space-y-1.5">
                        <h4 className="font-serif text-lg font-bold text-brand-blue-dark">Message Sent Safely!</h4>
                        <p className="text-xs text-slate-500 font-sans max-w-sm mx-auto leading-relaxed">
                          Thank you for reaching out to Holy Spirit Revival Church. Your communication has been dispatched to our Mobilization Director, Pastor Kainza Nusula. We will respond promptly.
                        </p>
                      </div>
                      <button
                        onClick={() => setContactSuccess(false)}
                        className="px-5 py-2 text-xs bg-brand-blue hover:bg-brand-gold hover:text-brand-blue-dark text-white font-bold rounded-sm transition-colors cursor-pointer"
                      >
                        Send Another message
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleContactSubmit} className="space-y-4">
                      <div className="space-y-1">
                        <h3 className="font-serif text-lg font-bold text-brand-blue-dark flex items-center gap-2">
                          <MessageSquare className="w-5 h-5 text-brand-gold" />
                          Send Contact Inquiry
                        </h3>
                        <p className="text-xs text-slate-400 font-sans">
                          Use this form to coordinate visits, conferences, group hospitality requests, or to ask administrative questions.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Full Name</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. John Wandera"
                            value={contactForm.name}
                            onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-sm border border-slate-200 text-xs sm:text-sm font-sans focus:outline-none focus:ring-1 focus:ring-brand-gold focus:border-brand-gold"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Email Address</label>
                          <input
                            type="email"
                            required
                            placeholder="e.g. john@domain.com"
                            value={contactForm.email}
                            onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-sm border border-slate-200 text-xs sm:text-sm font-sans focus:outline-none focus:ring-1 focus:ring-brand-gold focus:border-brand-gold"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Phone / WhatsApp Number</label>
                        <input
                          type="text"
                          placeholder="e.g. +256 701 445588"
                          value={contactForm.phone}
                          onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-sm border border-slate-200 text-xs sm:text-sm font-sans focus:outline-none focus:ring-1 focus:ring-brand-gold focus:border-brand-gold"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Your Message</label>
                        <textarea
                          required
                          rows={4}
                          placeholder="Please describe your enquiry in detail..."
                          value={contactForm.message}
                          onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-sm border border-slate-200 text-xs sm:text-sm font-sans focus:outline-none focus:ring-1 focus:ring-brand-gold focus:border-brand-gold"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3 bg-brand-blue hover:bg-brand-gold hover:text-brand-blue-dark text-white font-sans font-bold text-xs uppercase tracking-wider rounded-sm transition-all cursor-pointer flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        Dispatch Message
                      </button>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* FOOTER NEWSLETTER CARD */}
      <div className="bg-white border-l-4 border-brand-gold border-y border-r border-slate-200/50 rounded-sm p-6 sm:p-10 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden mt-12">
        <div className="space-y-1.5 text-center md:text-left">
          <span className="text-[10px] font-mono font-bold text-brand-gold-dark uppercase tracking-widest block">
            STAY IGNITED IN DEVOTION
          </span>
          <h4 className="font-serif text-lg sm:text-xl font-extrabold text-brand-blue-dark leading-snug">
            Subscribe to Newsletter & Bulletins
          </h4>
          <p className="text-xs text-slate-500 font-sans max-w-md">
            Receive weekly theological devotionals, spiritual counsel, altar assignment reminders, and national event updates.
          </p>
        </div>

        <div className="w-full md:w-auto shrink-0">
          <AnimatePresence mode="wait">
            {newsletterSuccess ? (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-brand-gold/15 border border-brand-gold/30 p-3.5 rounded-sm text-xs font-sans text-brand-gold-dark font-bold text-center"
              >
                ✓ Registered! Weekly bullet lists will follow.
              </motion.div>
            ) : (
              <form
                onSubmit={handleNewsletterSubmit}
                className="flex flex-col sm:flex-row gap-2 w-full md:w-[350px]"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-grow px-3.5 py-2.5 rounded-sm border border-slate-200 text-xs sm:text-sm font-sans bg-white focus:outline-none focus:ring-1 focus:ring-brand-gold focus:border-brand-gold"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-brand-blue text-white text-xs font-sans font-bold uppercase tracking-wider rounded-sm hover:bg-brand-gold hover:text-brand-blue-dark transition-all cursor-pointer whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}
          </AnimatePresence>
        </div>
      </div>
      </div>
    </div>
  );
}
