import { motion } from "motion/react";
import { Award, BookOpen, Shield, Flame, Compass, Heart, CheckCircle2, HeartHandshake } from "lucide-react";
import { useState } from "react";

const STATEMENT_OF_FAITH = [
  {
    title: "We believe in one true God",
    description: "Manifested eternally in three persons: the Father, the Son, and the Holy Spirit—creator and sustainer of all things.",
    scripture: "Deuteronomy 6:4, Matthew 28:19"
  },
  {
    title: "We believe Jesus Christ is Lord and Savior",
    description: "His virgin birth, sinless life, atoning death on the cross, bodily resurrection, ascension to heaven, and eventual return.",
    scripture: "John 1:1, Philippians 2:9-11"
  },
  {
    title: "We believe the Bible is God's inspired Word",
    description: "The infallible, authoritative guide for Christian faith and conduct, inspired by the Holy Spirit.",
    scripture: "2 Timothy 3:16, 2 Peter 1:21"
  },
  {
    title: "We believe in the Holy Spirit",
    description: "His indwelling presence, empowerment for holy living, spiritual gifts, and active regeneration of the repentant believer.",
    scripture: "Acts 1:8, Romans 8:11"
  },
  {
    title: "We believe in salvation through Jesus Christ",
    description: "A free gift of grace received through sincere faith, repentance from sin, and confession of Jesus Christ as Savior.",
    scripture: "Ephesians 2:8-9, Romans 10:9-10"
  },
  {
    title: "We believe in the second coming of Christ",
    description: "The personal, physical return of Jesus Christ in power and glory to gather His bride and establish His eternal reign.",
    scripture: "1 Thessalonians 4:16-17, Revelation 19:11-16"
  },
  {
    title: "We believe in eternal life",
    description: "The bodily resurrection of all souls—the saved to eternal communion in heaven with God, and the unsaved to eternal judgment.",
    scripture: "John 3:16, Revelation 20:12-15"
  }
];

const CORE_VALUES = [
  {
    title: "Christ-Centered Worship",
    description: "We lift up Jesus as the focal point of all our adoration, praise, and ministerial activities.",
    icon: Flame,
    color: "from-amber-500 to-amber-600"
  },
  {
    title: "Prayer",
    description: "Fervent, unwavering communication with God as the foundation of our spiritual authority.",
    icon: Compass,
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Holiness",
    description: "Pursuing purity of heart and conduct, separated from worldliness to serve as holy vessels.",
    icon: Shield,
    color: "from-brand-gold to-brand-gold-dark"
  },
  {
    title: "Evangelism",
    description: "Taking the Gospel to streets, marketplaces, and institutions with a passion for saving souls.",
    icon: MegaphoneIcon, // Fallback icon
    color: "from-indigo-500 to-indigo-600"
  },
  {
    title: "Love",
    description: "Demonstrating the unconditional, self-sacrificing love of Christ to members and the broader community.",
    icon: Heart,
    color: "from-rose-500 to-rose-600"
  },
  {
    title: "Integrity",
    description: "Upholding absolute honesty, transparency, and biblical morality in both secret and public life.",
    icon: Award,
    color: "from-emerald-500 to-emerald-600"
  },
  {
    title: "Excellence",
    description: "Honoring God by offering Him our absolute best service, planning, and professional execution.",
    icon: BookOpen,
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Discipleship",
    description: "Intentionally mentoring, equipping, and raising believers to walk as mature duplicators of Christ.",
    icon: CheckCircle2,
    color: "from-cyan-500 to-cyan-600"
  },
  {
    title: "Service",
    description: "Humbly meeting practical needs, washing the feet of saints, and uplifting the broken-hearted.",
    icon: HeartHandshake,
    color: "from-teal-500 to-teal-600"
  }
];

// Simple inline Megaphone implementation as custom or standard icon
function MegaphoneIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m18 8-6 4 6 4V8Z" />
      <path d="M22 12h-4" />
      <path d="M2 10h10v4H2v-4Z" />
      <path d="M12 12v5a2 2 0 0 1-2 2H8" />
    </svg>
  );
}

export default function AboutSection() {
  const [activeFaithIndex, setActiveFaithIndex] = useState<number | null>(null);

  return (
    <div className="space-y-24 pb-24">
      {/* PAGE HERO BANNER WITH IMAGE */}
      <div className="relative h-64 sm:h-80 bg-brand-blue-dark flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&q=80&w=1200"
          alt="About Holy Spirit Revival Church"
          className="absolute inset-0 w-full h-full object-cover opacity-25 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50/10 via-brand-blue-dark/80 to-brand-blue-dark" />
        <div className="relative z-10 text-center space-y-2.5 px-4">
          <span className="text-xs font-mono text-brand-gold uppercase tracking-widest font-extrabold bg-brand-gold/10 px-3 py-1 rounded-sm border border-brand-gold/20">
            CONSECRATED TO HIS GLORY
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Our Legacy of Revival
          </h1>
          <p className="max-w-md mx-auto text-xs sm:text-sm text-slate-300 font-sans font-light">
            Empowered by prayer, holiness, and the absolute authority of the scriptures in Mbale City, Uganda.
          </p>
        </div>
      </div>

      {/* SECTION 1: WHO WE ARE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-block px-3 py-1 rounded bg-brand-gold/15 border border-brand-gold/30 text-xs font-mono text-brand-gold-dark uppercase tracking-widest font-semibold">
              ABOUT THE CHURCH
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-blue-dark leading-tight">
              Who We Are
            </h2>
            <p className="text-slate-600 font-sans leading-relaxed text-base sm:text-lg">
              Miracle Embassy Church of Christ Ministries International (MECOCMI) is a spirit-filled Christian ministry dedicated to preaching the uncompromised Gospel of Jesus Christ and manifesting His revival power across Mbale City, Uganda, and the entire world.
            </p>
            <p className="text-slate-600 font-sans leading-relaxed text-base sm:text-lg">
              Empowered by prayer, holiness, and the absolute authority of the scriptures, MECOCMI is committed to winning souls to Jesus Christ, discipling them, and establishing physical and spiritual community projects that demonstrate the love and order of God's Kingdom.
            </p>
            
            {/* Visual Quote Banner */}
            <div className="border-l-4 border-brand-gold bg-brand-gold-light/20 p-5 rounded-r-sm">
              <p className="font-serif italic text-brand-blue-dark font-medium text-lg">
                "Jesus Christ is the same yesterday, today and forever."
              </p>
              <p className="text-xs font-mono font-bold text-brand-gold-dark mt-1 text-right">— Hebrews 13:8</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Elegant framed image container */}
            <div className="absolute inset-0 bg-brand-gold rounded-sm transform translate-x-3 translate-y-3 -z-10" />
            <div className="bg-brand-blue-dark text-white p-8 sm:p-12 rounded-sm shadow-2xl border-l-4 border-brand-gold relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-gold/10 rounded-full blur-2xl" />
              <div className="space-y-8 relative z-10">
                {/* Vision Box */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-sm bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center text-brand-gold font-serif text-xl font-bold">V</div>
                    <h3 className="font-serif text-2xl font-semibold text-brand-gold">Our Vision</h3>
                  </div>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed pl-13 font-sans">
                    To preach the gospel to all nations and transform the world under the true knowledge of Jesus Christ according to the scriptures.
                  </p>
                  <p className="text-slate-400 text-xs font-mono pl-13 flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5" /> Isaiah 35:1-10
                  </p>
                </div>

                <hr className="border-slate-800" />

                {/* Mission Box */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-sm bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center text-brand-gold font-serif text-xl font-bold">M</div>
                    <h3 className="font-serif text-2xl font-semibold text-brand-gold">Our Mission</h3>
                  </div>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed pl-13 font-sans">
                    To win souls to Jesus Christ, disciple them and they disciple the world.
                  </p>
                </div>

                <hr className="border-slate-800" />

                {/* Goals Box */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-sm bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center text-brand-gold font-serif text-xl font-bold">G</div>
                    <h3 className="font-serif text-2xl font-semibold text-brand-gold">Our Goals</h3>
                  </div>
                  <ul className="text-slate-300 text-xs sm:text-sm leading-relaxed pl-13 font-sans list-disc space-y-2">
                    <li>To establish church branches.</li>
                    <li>To set-up church projects e.g. theological colleges, Schools, Institutions, Universities, radio stations and TV stations.</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: STATEMENT OF FAITH */}
      <section className="bg-brand-blue-dark py-20 text-white relative overflow-hidden">
        {/* Background Bible/Prayer Image Accent */}
        <img
          src="https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&q=80&w=1200"
          alt="Spiritual Backdrop"
          className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay scale-105 pointer-events-none animate-pulse-slow"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue-dark via-brand-blue to-brand-blue-dark opacity-95" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4">
            <span className="text-xs font-mono text-brand-gold uppercase tracking-widest font-semibold">FOUNDATIONS OF TRUTH</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Statement of Faith</h2>
            <p className="max-w-xl mx-auto text-slate-300 text-sm sm:text-base">
              Rooted in the eternal truths of the scriptures, our statement of faith underpins all our teachings, services, and outreach endeavors.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 max-w-3xl mx-auto">
            {STATEMENT_OF_FAITH.map((faith, idx) => {
              const isOpen = activeFaithIndex === idx;
              return (
                <div
                  key={idx}
                  className="border border-slate-800 bg-slate-950/40 rounded-sm overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setActiveFaithIndex(isOpen ? null : idx)}
                    className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-slate-900/40 transition-colors focus:outline-none cursor-pointer"
                  >
                    <span className="font-serif font-semibold text-base sm:text-lg text-slate-200 flex items-center gap-3">
                      <span className="text-brand-gold font-mono text-sm">0{idx + 1}.</span>
                      {faith.title}
                    </span>
                    <span className={`text-brand-gold transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>
                    </span>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-slate-400 space-y-3 border-t border-slate-900/60 font-sans pl-12">
                      <p>{faith.description}</p>
                      <div className="inline-flex items-center gap-1.5 bg-brand-gold/10 text-brand-gold border border-brand-gold/20 px-2.5 py-0.5 rounded-sm text-xs font-mono">
                        <BookOpen className="w-3.5 h-3.5" />
                        Scriptural Witness: {faith.scripture}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: CORE VALUES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <span className="text-xs font-mono text-brand-gold-dark uppercase tracking-widest font-semibold">OUR UNCOMPROMISING STAND</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-blue-dark">Core Values</h2>
          <p className="max-w-xl mx-auto text-slate-600 text-sm sm:text-base font-sans">
            These represent our behavioral culture and standard guidelines that define how we carry out our ministerial commission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_VALUES.map((val, idx) => {
            const IconComponent = val.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-sm shadow-xl border-l-4 border-slate-200 hover:border-brand-gold transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-sm bg-brand-gold-light/35 text-brand-gold-dark flex items-center justify-center`}>
                    <IconComponent className="w-6 h-6 stroke-brand-gold-dark" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-brand-blue-dark">{val.title}</h3>
                  <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed">{val.description}</p>
                </div>
                <div className="pt-4 flex items-center justify-between border-t border-slate-50 mt-4">
                  <span className="text-xs font-mono text-slate-400 uppercase">Value #0{idx + 1}</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
