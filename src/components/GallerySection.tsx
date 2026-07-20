import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GALLERY_ITEMS } from "../data";
import { GalleryItem } from "../types";
import { Image, ZoomIn, Calendar, Tag, ArrowLeft, ArrowRight, X } from "lucide-react";

const CATEGORIES = [
  "All",
  "Sunday Worship Services",
  "Revival Meetings",
  "Prayer Conferences",
  "Evangelism Outreach",
  "Choir Ministry",
  "Community Programs"
];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filteredItems = activeCategory === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category.toLowerCase().includes(activeCategory.toLowerCase().substring(0, 10)) || item.category === activeCategory);

  return (
    <div className="space-y-16 pb-24">
      {/* PAGE HERO BANNER WITH IMAGE */}
      <div className="relative h-64 sm:h-80 bg-brand-blue-dark flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&q=80&w=1200"
          alt="Visual Witness"
          className="absolute inset-0 w-full h-full object-cover opacity-25 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50/10 via-brand-blue-dark/80 to-brand-blue-dark" />
        <div className="relative z-10 text-center space-y-2.5 px-4">
          <span className="text-xs font-mono text-brand-gold uppercase tracking-widest font-extrabold bg-brand-gold/10 px-3 py-1 rounded-sm border border-brand-gold/20">
            VISUAL WITNESS PRESERVED
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Our Photo Gallery
          </h1>
          <p className="max-w-md mx-auto text-xs sm:text-sm text-slate-300 font-sans font-light">
            Every snapshot tells a story of the Holy Spirit's presence, revival fire, and community transformation in Mbale.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Gallery Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-mono text-brand-gold-dark uppercase tracking-widest font-semibold">
            VISUAL WITNESS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-blue-dark">
            Photo Gallery
          </h2>
          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
            Witness the mighty move of God's power and love through these snapshots of our worship services, community crusades, intercessory conferences, and youth discipleship events.
          </p>
        </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4.5 py-2.5 rounded-sm font-sans text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
              activeCategory === cat
                ? "bg-brand-blue border-brand-blue text-white shadow-md"
                : "bg-white border-slate-200 text-slate-500 hover:text-brand-blue hover:border-brand-blue/30"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35 }}
              whileHover={{ y: -6 }}
              onClick={() => setLightboxItem(item)}
              className="group bg-white rounded-sm overflow-hidden shadow-md border-l-4 border-slate-200 hover:border-brand-gold hover:shadow-2xl transition-all duration-300 flex flex-col h-full cursor-pointer"
            >
              {/* Image box */}
              <div className="relative aspect-video overflow-hidden bg-slate-100 shrink-0">
                <img
                  src={item.imagePath}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay Hover details */}
                <div className="absolute inset-0 bg-brand-blue-dark/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-sm bg-brand-gold text-brand-blue-dark flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>

                {/* Date tag overlay */}
                {item.date && (
                  <div className="absolute bottom-3 left-3 bg-brand-blue-dark/85 backdrop-blur-xs px-2.5 py-1 rounded-sm text-[10px] font-mono text-slate-200 uppercase flex items-center gap-1.5 border border-slate-800">
                    <Calendar className="w-3.5 h-3.5 text-brand-gold" />
                    {item.date}
                  </div>
                )}
              </div>

              {/* Text Info */}
              <div className="p-5 flex-grow flex flex-col justify-between space-y-2">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold text-brand-gold-dark uppercase tracking-wider block">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-brand-blue-dark line-clamp-1 group-hover:text-brand-gold-dark transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 font-sans line-clamp-2 font-light">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxItem(null)}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-4xl bg-white rounded-sm overflow-hidden z-10 border-l-4 border-brand-gold border-y border-r border-slate-200/50 shadow-2xl flex flex-col md:flex-row h-auto md:max-h-[80vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxItem(null)}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-sm bg-slate-950/75 hover:bg-slate-900 text-white flex items-center justify-center transition-colors cursor-pointer focus:outline-none"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Left Column: Huge Image View */}
              <div className="md:w-7/12 bg-slate-950 flex items-center justify-center h-64 md:h-full relative">
                <img
                  src={lightboxItem.imagePath}
                  alt={lightboxItem.title}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Right Column: Descriptions & Details */}
              <div className="md:w-5/12 p-6 sm:p-8 flex flex-col justify-between space-y-6 overflow-y-auto">
                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-brand-gold-dark uppercase tracking-widest bg-brand-gold-light/25 border border-brand-gold/20 px-2.5 py-0.5 rounded-sm">
                      <Tag className="w-3.5 h-3.5" />
                      {lightboxItem.category}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-extrabold text-brand-blue-dark leading-snug">
                      {lightboxItem.title}
                    </h3>
                  </div>

                  <hr className="border-slate-100" />

                  <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                    {lightboxItem.description}
                  </p>
                </div>

                <div className="space-y-4">
                  {lightboxItem.date && (
                    <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
                      <Calendar className="w-4 h-4 text-brand-gold" />
                      Captured: {lightboxItem.date}
                    </div>
                  )}

                  {/* Encouragement snippet */}
                  <div className="text-[11px] text-slate-400 bg-slate-50 p-3 rounded-sm border border-slate-100 leading-normal font-sans">
                    This photo represents the physical and spiritual journey of HSRC. To download press assets or view our full library, contact our media office.
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <button
                      onClick={() => setLightboxItem(null)}
                      className="px-4.5 py-2.5 bg-brand-blue text-white text-xs font-mono font-bold uppercase rounded-sm hover:bg-brand-gold hover:text-brand-blue-dark transition-all w-full text-center cursor-pointer"
                    >
                      Return to Gallery
                    </button>
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
