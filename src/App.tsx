import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Flame,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  MessageSquare,
  Gift,
  BookOpen,
  Calendar,
  Users,
  Image as ImageIcon
} from "lucide-react";

// Import custom sections
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import EventsSection from "./components/EventsSection";
import MinistriesSection from "./components/MinistriesSection";
import LeadershipSection from "./components/LeadershipSection";
import GallerySection from "./components/GallerySection";
import InteractionCenter from "./components/InteractionCenter";

// Import custom database/data
import { GALLERY_ITEMS } from "./data";

type PageID = "home" | "about" | "services" | "events" | "ministries" | "leadership" | "gallery" | "interaction";

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageID>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll handler to style header dynamically on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Quick helper to scroll to top smoothly on page transition
  const navigateTo = (page: PageID) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="app-root" className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-brand-gold/30 selection:text-brand-blue-dark">
      
      {/* FLOATING WHATSAPP PRAYER BADGE */}
      <motion.a
        href="https://wa.me/256701445588"
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center border border-white/20"
        title="Connect on WhatsApp for Prayer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.742.002-2.602-.101-5.05-1.961-6.91-1.86-1.86-4.315-2.887-6.918-2.889-5.437 0-9.862 4.37-9.866 9.743-.001 1.77.494 3.497 1.433 5.03L2.961 21.07l4.685-1.715z"/>
        </svg>
      </motion.a>

      {/* HEADER NAVBAR */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b-4 border-brand-gold-dark/95 ${
          scrolled
            ? "bg-brand-blue-dark/95 backdrop-blur-md py-3 shadow-lg"
            : "bg-brand-blue-dark/65 backdrop-blur-xs py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo Frame */}
          <div
            onClick={() => navigateTo("home")}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-sm overflow-hidden border border-brand-gold/30 bg-white p-0.5 shrink-0 flex items-center justify-center">
              <img
                src="/logo.jpeg"
                alt="Holy Spirit Revival Church Logo"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="font-serif text-base sm:text-lg font-black text-white tracking-wide uppercase group-hover:text-brand-gold transition-colors block leading-none">
                HOLY SPIRIT
              </span>
              <span className="font-sans text-[10px] font-bold text-brand-gold uppercase tracking-widest leading-none">
                REVIVAL CHURCH
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {(
              [
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "services", label: "Worship & Altar" },
                { id: "events", label: "Conventions" },
                { id: "ministries", label: "Our Ministries" },
                { id: "leadership", label: "Leadership" },
                { id: "gallery", label: "Gallery" }
              ] as const
            ).map((link) => (
              <button
                key={link.id}
                onClick={() => navigateTo(link.id as PageID)}
                className={`font-sans text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer relative py-1 ${
                  currentPage === link.id
                    ? "text-brand-gold"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {link.label}
                {currentPage === link.id && (
                  <motion.div
                    layoutId="nav_underline"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-brand-gold"
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Contact / Prayer CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => navigateTo("interaction")}
              className="px-5 py-2.5 bg-gradient-to-r from-brand-gold to-brand-gold-dark hover:from-brand-gold-light text-brand-blue-dark font-sans font-bold text-xs uppercase tracking-wider rounded-sm transition-all shadow-md shadow-brand-gold/15 cursor-pointer flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-brand-blue-dark" />
              Prayer Wall & Giving
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-slate-300 hover:text-white focus:outline-none cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* MOBILE DRAWER MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[60px] z-30 bg-brand-blue-dark border-b border-brand-gold/25 p-6 shadow-2xl lg:hidden flex flex-col gap-4"
          >
            {(
              [
                { id: "home", label: "Home", desc: "Welcome & Vision" },
                { id: "about", label: "About HSRC", desc: "Who We Are & Faith" },
                { id: "services", label: "Worship & Altar Programs", desc: "Weekly Schedules & Altar nights" },
                { id: "events", label: "Conventions", desc: "Annual Revival details" },
                { id: "ministries", label: "Our Ministries", desc: "Departments of service" },
                { id: "leadership", label: "Church Leadership", desc: "Ordained Pastors" },
                { id: "gallery", label: "Photo Gallery", desc: "Visual Witnesses" },
                { id: "interaction", label: "Prayer Wall & Giving", desc: "Contact, Give & Intercede" }
              ] as const
            ).map((link) => (
              <button
                key={link.id}
                onClick={() => navigateTo(link.id as PageID)}
                className={`text-left p-3 rounded-xl border transition-all cursor-pointer ${
                  currentPage === link.id
                    ? "bg-brand-gold/10 border-brand-gold/30 text-brand-gold"
                    : "bg-slate-900/40 border-slate-800/40 text-slate-300 hover:bg-slate-900 hover:text-white"
                }`}
              >
                <div className="text-xs font-bold uppercase tracking-wider font-sans">{link.label}</div>
                <div className="text-[10px] text-slate-400 font-sans mt-0.5">{link.desc}</div>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* SPACE FILLER FOR FIXED NAVBAR */}
      <div className="h-[76px] bg-brand-blue-dark shrink-0" />

      {/* DYNAMIC PAGE VIEWS CONTAINER WITH ROUTING */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
          >
            {currentPage === "home" && (
              <div className="space-y-4">
                {/* Hero section */}
                <HeroSection onNavigate={(p) => navigateTo(p as PageID)} openPrayerModal={() => navigateTo("interaction")} />

                {/* vision & values grid summarized on home */}
                <div className="bg-white py-16">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-5">
                      <span className="text-xs font-mono text-brand-gold-dark uppercase tracking-widest font-bold">FOUNDATIONAL INTENT</span>
                      <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-blue-dark">Our Divine Call</h2>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        Holy Spirit Revival Church stands as an apostolic beacon committed to Raising a Generation that walks in deep holiness, uncompromised prayer, and spiritual revival.
                      </p>
                      
                      <div className="space-y-4 pt-2">
                        <div className="flex gap-3.5 p-4 rounded-sm border-l-4 border-brand-gold bg-brand-gold-light/25 border-y border-r border-slate-100 shadow-sm">
                          <div className="w-10 h-10 rounded-sm bg-brand-gold/20 text-brand-gold-dark flex items-center justify-center font-bold text-sm shrink-0">V</div>
                          <div>
                            <h4 className="font-serif font-bold text-brand-blue-dark text-sm sm:text-base">Our Vision</h4>
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">To raise a generation that knows God, walks in holiness, and impacts nations through the power of the Holy Spirit.</p>
                          </div>
                        </div>

                        <div className="flex gap-3.5 p-4 rounded-sm border-l-4 border-brand-gold bg-brand-gold-light/25 border-y border-r border-slate-100 shadow-sm">
                          <div className="w-10 h-10 rounded-sm bg-brand-gold/20 text-brand-gold-dark flex items-center justify-center font-bold text-sm shrink-0">M</div>
                          <div>
                            <h4 className="font-serif font-bold text-brand-blue-dark text-sm sm:text-base">Our Mission</h4>
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">To preach the Gospel of Jesus Christ, disciple believers, restore broken lives through prayer, and prepare the Church for the return of Christ.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Interactive quick schedule summary */}
                    <div className="bg-brand-blue-dark text-white p-6 sm:p-10 rounded-sm border-l-4 border-brand-gold relative overflow-hidden shadow-2xl">
                      <div className="absolute top-0 right-0 w-36 h-36 bg-brand-gold/5 rounded-full blur-2xl" />
                      <div className="space-y-6 relative z-10">
                        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                          <h3 className="font-serif text-lg font-bold text-white uppercase tracking-tight">Weekly Schedule</h3>
                          <span className="text-[10px] font-mono font-bold text-brand-gold uppercase tracking-widest bg-brand-gold/10 px-2 py-0.5 rounded-sm">ALTAR ACTIVE</span>
                        </div>
                        <div className="space-y-3 text-xs sm:text-sm">
                          <div className="flex justify-between items-center py-2 border-b border-slate-800/60">
                            <span className="font-bold text-slate-400 w-24">MON – FRI</span>
                            <span className="text-slate-200 font-medium">Evening Service</span>
                            <span className="text-brand-gold font-mono">5:00 PM – 8:00 PM</span>
                          </div>
                          
                          <div className="flex justify-between items-center py-2 border-b border-slate-800/60">
                            <span className="font-bold text-slate-400 w-24">DAILY</span>
                            <span className="text-slate-200 font-medium">Overnight Watches</span>
                            <span className="text-brand-gold font-mono">8:00 PM – 6:00 AM</span>
                          </div>

                          <div className="flex justify-between items-center py-3 bg-slate-900/90 px-4 rounded-sm shadow-lg border-l-4 border-brand-gold">
                            <span className="font-black text-brand-gold w-24 uppercase tracking-wider">SUNDAY</span>
                            <span className="text-white font-bold">General Worship</span>
                            <span className="text-brand-gold font-mono font-bold">5:00 AM – 2:00 PM</span>
                          </div>
                        </div>
                        <div className="pt-4 flex justify-end">
                          <button
                            onClick={() => navigateTo("services")}
                            className="text-xs font-mono font-bold text-brand-gold hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                          >
                            Explore Altar Calendar ➔
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 6 Images Showcase on Home page */}
                <div className="bg-slate-50 py-20 border-t border-slate-150">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                    <div className="text-center space-y-4 max-w-2xl mx-auto">
                      <span className="text-xs font-mono text-brand-gold-dark uppercase tracking-widest font-bold">
                        REVIVAL IN PICTURES
                      </span>
                      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-blue-dark">
                        Visual Witness Highlights
                      </h2>
                      <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
                        Witness the mighty move of God's power and love. These 6 highlights capture our worship services, community crusades, intercessory conferences, and leadership mentorships.
                      </p>
                    </div>

                    {/* Image Grid of the 6 Gallery Items */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {GALLERY_ITEMS.map((item) => (
                        <motion.div
                          key={item.id}
                          whileHover={{ y: -6 }}
                          onClick={() => navigateTo("gallery")}
                          className="group bg-white rounded-sm overflow-hidden shadow-md border-l-4 border-slate-200 hover:border-brand-gold hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer"
                        >
                          <div className="relative aspect-video overflow-hidden bg-slate-100 shrink-0">
                            <img
                              src={item.imagePath}
                              alt={item.title}
                              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                              referrerPolicy="no-referrer"
                            />
                            {/* Category overlay */}
                            <div className="absolute top-3 left-3 bg-brand-blue-dark/80 backdrop-blur-xs px-2.5 py-1 rounded-sm text-[9px] font-mono font-bold text-brand-gold uppercase tracking-wider border border-slate-800/30">
                              {item.category}
                            </div>
                          </div>
                          
                          <div className="p-5 flex-grow flex flex-col justify-between space-y-3">
                            <div className="space-y-1">
                              <h3 className="font-serif text-base sm:text-lg font-bold text-brand-blue-dark line-clamp-1 group-hover:text-brand-gold-dark transition-colors">
                                {item.title}
                              </h3>
                              <p className="text-xs text-slate-500 font-sans line-clamp-2 leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                            <span className="text-xs font-mono font-bold text-brand-blue uppercase tracking-widest pt-2 flex items-center gap-1 hover:text-brand-gold-dark transition-colors">
                              View in Full Gallery ➔
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {currentPage === "about" && <AboutSection />}
            {currentPage === "services" && <ServicesSection />}
            {currentPage === "events" && <EventsSection />}
            {currentPage === "ministries" && <MinistriesSection />}
            {currentPage === "leadership" && <LeadershipSection />}
            {currentPage === "gallery" && <GallerySection />}
            {currentPage === "interaction" && <InteractionCenter />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* RESPONSIVE FOOTER */}
      <footer className="bg-brand-blue-dark text-slate-400 py-16 border-t border-slate-800 relative overflow-hidden shrink-0">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue-dark/50 via-slate-950 to-brand-blue-dark opacity-90 z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand/Slogan Col */}
          <div className="md:col-span-4 space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-8 h-8 rounded-lg overflow-hidden border border-brand-gold/30 bg-white p-0.5 shrink-0 flex items-center justify-center">
                <img
                  src="/logo.jpeg"
                  alt="Holy Spirit Revival Church Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-serif text-base font-bold text-white uppercase tracking-wider block">
                HSRC UGANDA
              </span>
            </div>
            
            <p className="font-serif italic text-sm sm:text-base text-slate-300">
              "Reviving Lives, Transforming Communities, and Advancing the Kingdom of God."
            </p>

            <div className="text-xs text-slate-500 font-sans leading-normal pt-2">
              All Scripture quotations are taken from the Holy Bible, ESV® / KJV, upholding the supreme and inerrant authority of God's word.
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-4 text-center md:text-left font-sans text-xs sm:text-sm">
            <h4 className="text-white font-serif font-bold text-base border-b border-slate-800 pb-1.5 inline-block">
              Navigation Menu
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => navigateTo("home")} className="hover:text-brand-gold transition-colors cursor-pointer">
                  Welcome Home
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo("about")} className="hover:text-brand-gold transition-colors cursor-pointer">
                  Statement of Faith
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo("services")} className="hover:text-brand-gold transition-colors cursor-pointer">
                  Weekly Worship Schedule
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo("events")} className="hover:text-brand-gold transition-colors cursor-pointer">
                  Annual conventions
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo("ministries")} className="hover:text-brand-gold transition-colors cursor-pointer">
                  Serve in Ministries
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo("leadership")} className="hover:text-brand-gold transition-colors cursor-pointer">
                  Ordained Pastors
                </button>
              </li>
            </ul>
          </div>

          {/* Ministries Foot Column */}
          <div className="md:col-span-2 space-y-4 text-center md:text-left font-sans text-xs sm:text-sm hidden md:block">
            <h4 className="text-white font-serif font-bold text-base border-b border-slate-800 pb-1.5 inline-block">
              Key Ministries
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>Prayer & Intercession</li>
              <li>Youth Ministry</li>
              <li>Worship & Choir</li>
              <li>Evangelism Outreach</li>
              <li>Missions Ministry</li>
              <li>Media & Broadcast</li>
            </ul>
          </div>

          {/* Contact coordinates Column */}
          <div className="md:col-span-3 space-y-4 text-center md:text-left font-sans text-xs sm:text-sm">
            <h4 className="text-white font-serif font-bold text-base border-b border-slate-800 pb-1.5 inline-block">
              Headquarters
            </h4>
            <div className="space-y-3.5 text-slate-400">
              <div className="flex items-start gap-2 justify-center md:justify-start">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>Mbale Cathedral Avenue, Plot 42, Mbale City, Uganda</span>
              </div>
              <div className="flex items-start gap-2 justify-center md:justify-start">
                <Phone className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span className="font-mono">+256 701 445588</span>
              </div>
              <div className="flex items-start gap-2 justify-center md:justify-start">
                <Mail className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>office@hsrc.org</span>
              </div>
            </div>
          </div>
        </div>

        {/* Absolute Copyright lines */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800/80 text-center text-slate-500 font-sans text-xs relative z-10">
          <div>
            &copy; {new Date().getFullYear()} Holy Spirit Revival Church. All Rights Reserved. Crafted with absolute devotion.
          </div>
          <div className="mt-1 text-[10px] text-slate-600 flex items-center justify-center gap-1">
            <span>Regulated by Uganda Ministry Council & HSRC Elders Panel</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
