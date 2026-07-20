import { Pastor, ServiceSchedule, AltarNight, AnnualEvent, Ministry, GalleryItem } from "./types";

export const PASTORS: Pastor[] = [
  {
    id: "p_geoffrey",
    name: "Apostle Kwolesebwa Geoffrey",
    role: "Presiding Apostle & Founder",
    bio: "Apostle Kwolesebwa Geoffrey is the General Overseer of Miracle Embassy Church of Christ Ministries International [MECOCMI]. Anointed with apostolic fire, he travels extensively to preach the uncompromised cross, leading massive revivals and delivering souls from darkness.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400",
    quote: "To preach the gospel to all nations and transform the world under the true knowledge of Jesus Christ.",
    responsibilities: [
      "General spiritual oversight of the global ministries",
      "Pioneering crusades and global missionary deployments",
      "Mentoring pastoral networks and national leaders"
    ]
  },
  {
    id: "p_esther",
    name: "Pastor Kwolesebwa Esther",
    role: "Co-Founder & Presiding Pastor",
    bio: "Pastor Kwolesebwa Esther is the co-founder and Presiding Pastor of MECOCMI. A dedicated intercessor and counselor, she leads our prayer altars, youth mentorship initiatives, and community projects with absolute grace.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400",
    quote: "Fanning the flames of prayer, holy living, and community transformation across the nations.",
    responsibilities: [
      "Directing intercessory groups and corporate altar watches",
      "Upholding general congregation care, counseling, and logistics",
      "Coordinating church project implementations"
    ]
  },
  {
    id: "p1",
    name: "Pastor Nandako Zerida",
    role: "Project Director",
    bio: "Pastor Nandako Zerida leads our church expansion projects and community enhancement initiatives with visionary zeal, ensuring our ministries have the structural support needed to impact nations.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=400",
    quote: "Building physical and spiritual structures that serve as portals of God's glory in this generation.",
    responsibilities: [
      "Church development planning and site expansion",
      "Community upliftment and humanitarian projects",
      "Strategic alignment of structural resources with spiritual vision"
    ]
  },
  {
    id: "p2",
    name: "Pastor Wambette Saul",
    role: "Media Director",
    bio: "Pastor Wambette Saul oversees our digital frontier, directing live broadcasts, media production, and internet ministries to beam the light of Christ to all corners of the globe.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=400",
    quote: "Beaming the uncompromised Word and revival fire across the digital highways to the ends of the earth.",
    responsibilities: [
      "Managing live streaming, sound production, and video broadcasts",
      "Directing social media outreach and website content",
      "Training and equipping the church media and technology team"
    ]
  },
  {
    id: "p3",
    name: "Pastor Nambozo Zam",
    role: "Director of Prayer & Intercession",
    bio: "Pastor Nambozo Zam carries a heavy burden for the altar of prayer, spearheading continuous prayer chains, intense intercessory nights, and fasting programs to keep the spiritual atmosphere charged.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=400&h=400",
    quote: "A prayerless church is a powerless church. We build on our knees to stand tall in the Spirit.",
    responsibilities: [
      "Coordinating the church's 24/7 intercession and altar nights",
      "Organizing corporate fasting programs and spiritual retreats",
      "Mentoring intercessors in spiritual warfare and deep supplication"
    ]
  },
  {
    id: "p4",
    name: "Pastor Kitutu Joshua",
    role: "Youth Pastor",
    bio: "Pastor Kitutu Joshua is a passionate mentor dedicated to raising a radical, holy, and purpose-driven generation of young people who are unashamed of the Gospel.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400",
    quote: "Empowering young men and women to walk in holiness and step into their divine redemptive destinies.",
    responsibilities: [
      "Overseeing youth services, cell groups, and mentorship camps",
      "Discipling students and young professionals in biblical leadership",
      "Fostering creative and holy expression in the youth ministry"
    ]
  },
  {
    id: "p5",
    name: "Pastor Destiny Isaac",
    role: "Missions Director",
    bio: "Pastor Destiny Isaac leads the apostolic sending and planting arm of the church, taking the message of the cross to unreached territories and organizing impactful missionary trips.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400",
    quote: "Our field is the world, and our commission is clear: go into all the world and preach the Gospel.",
    responsibilities: [
      "Coordinating church-planting programs and foreign missions",
      "Organizing community surveys and rural missionary outreach",
      "Providing training and resources for short-term and long-term missionaries"
    ]
  },
  {
    id: "p6",
    name: "Pastor Magoola Mansoor",
    role: "Finance Director",
    bio: "Pastor Magoola Mansoor manages the financial stewardship of the house of God with meticulous integrity, overseeing budgeting, reporting, and resource distribution to advance the Kingdom.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400",
    quote: "Faithfulness in little brings abundance in the Kingdom. We steward with absolute holiness and transparency.",
    responsibilities: [
      "Financial planning, internal auditing, and budgeting",
      "Ensuring accountability and transparency across all departments",
      "Advising the board on strategic investment of kingdom resources"
    ]
  },
  {
    id: "p7",
    name: "Pastor Miracle Alex",
    role: "Sanitation Director",
    bio: "Pastor Miracle Alex ensures that the sanctuary and facilities are kept pristine and welcoming, believing that outward order and cleanliness reflect internal holiness and respect for the house of God.",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=400&h=400",
    quote: "Cleanliness is a visual testimony of the order and beauty of the Kingdom of Heaven.",
    responsibilities: [
      "Maintaining the overall cleanliness and hygiene of the church campus",
      "Leading and mobilizing volunteers for sanitation drives",
      "Ensuring environmental health and safety during mass assemblies"
    ]
  },
  {
    id: "p8",
    name: "Pastor Mukisa Ibra",
    role: "Ushering Director",
    bio: "Pastor Mukisa Ibra manages the welcoming gates of our sanctuary, cultivating an atmosphere of warm hospitality, safety, and order for everyone stepping into the presence of God.",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=400&h=400",
    quote: "Better is one day in your courts than a thousand elsewhere. We welcome you to experience God.",
    responsibilities: [
      "Training ushering and protocol teams in guest relations",
      "Maintaining order, seating arrangements, and safety in services",
      "Creating seamless integration processes for first-time visitors"
    ]
  },
  {
    id: "p9",
    name: "Pastor Kainza Nusula",
    role: "Mobilization Director",
    bio: "Pastor Kainza Nusula drives member engagement, bringing together our massive congregation for major conferences, crusades, and joint revival initiatives.",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400&h=400",
    quote: "An army must be gathered and unified before it can march. We mobilize the saints for spiritual warfare.",
    responsibilities: [
      "Coordinating mobilization strategies for crusades and conferences",
      "Managing communication channels across cells and networks",
      "Organizing large-scale community outreach gatherings"
    ]
  },
  {
    id: "p10",
    name: "Pastor Wolukhu Michael",
    role: "Evangelism Director",
    bio: "Pastor Wolukhu Michael is an evangelistic flame, training believers in personal evangelism and leading powerful street crusades to rescue souls from the clutches of darkness.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400",
    quote: "The harvest is truly white, and we must work while it is day. Every soul is worth our sacrifice.",
    responsibilities: [
      "Leading weekly street evangelism and soul-winning crusades",
      "Developing evangelistic curricula and training church members",
      "Coordinating follow-up teams to integrate new converts"
    ]
  },
  {
    id: "p11",
    name: "Pastor Namemba Catherine",
    role: "Choir Director",
    bio: "Pastor Namemba Catherine is a dedicated worshiper who raises prophetic vocalists and instrumentalists, cultivating a sound of pure praise that opens up portals of spiritual awakening.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400",
    quote: "We do not just sing songs; we release a sound from the throne room that breaks chains.",
    responsibilities: [
      "Leading and training the Praise & Worship teams and Choir",
      "Directing music selection, orchestration, and vocal harmonies",
      "Fostering spiritual depth and consecration among choir members"
    ]
  }
];

export const WEEKLY_SCHEDULE: ServiceSchedule[] = [
  {
    id: "s1",
    day: "Monday",
    program: "Evening Service",
    time: "5:00 PM – 8:00 PM",
    description: "An explosive evening of prayer, biblical foundation teachings, and dynamic fellowship.",
    iconName: "Flame"
  },
  {
    id: "s2",
    day: "Tuesday",
    program: "Evening Service",
    time: "5:00 PM – 8:00 PM",
    description: "Specialized Bible study and deliverance focus to restore lives through the power of God's Word.",
    iconName: "BookOpen"
  },
  {
    id: "s3",
    day: "Wednesday",
    program: "Evening Service",
    time: "5:00 PM – 8:00 PM",
    description: "Mid-week communion, intense intercessory prayer, and restoration service.",
    iconName: "Heart"
  },
  {
    id: "s4",
    day: "Thursday",
    program: "Evening Service",
    time: "5:00 PM – 8:00 PM",
    description: "Anointed prophetic service focusing on dynamic warfare prayer and divine guidance.",
    iconName: "Compass"
  },
  {
    id: "s5",
    day: "Friday",
    program: "Evening Service",
    time: "5:00 PM – 8:00 PM",
    description: "Preparing our hearts for the weekend with heavy worship, testimony sharing, and deep altar calls.",
    iconName: "Music"
  },
  {
    id: "s6",
    day: "Saturday",
    program: "Choir Practice",
    time: "As Scheduled",
    description: "A consecrated time for vocal preparation, spiritual tuning, and praise ministry rehearsal.",
    iconName: "Mic"
  },
  {
    id: "s7",
    day: "Sunday",
    program: "General Worship Service",
    time: "5:00 AM – 2:00 PM",
    description: "Our grand weekly encounter! Featuring powerful intercession, prophetic praise, heavy preaching, and miracles.",
    iconName: "Sun"
  }
];

export const ALTAR_NIGHTS: AltarNight[] = [
  {
    id: "an1",
    groupName: "Weekly Assigned Intercession",
    days: "Monday – Thursday",
    time: "8:00 PM – 6:00 AM",
    audience: "Assigned Members (2 nights per week)",
    description: "Members are placed into designated altar units. Each member is assigned two permanent overnight watches per week, keeping the fire on the altar burning continually.",
    scriptureRef: "Leviticus 6:13 - 'The fire must be kept burning on the altar continuously; it must not go out.'"
  },
  {
    id: "an2",
    groupName: "General Altar Night",
    days: "Friday",
    time: "8:00 PM – 6:00 AM",
    audience: "All Church Members (Compulsory)",
    description: "A mandatory, church-wide overnight assembly for spiritual warfare, corporate breakthrough, deep worship, and ministerial laying of hands.",
    scriptureRef: "Acts 12:5 - 'So Peter was kept in prison, but the church was earnestly praying to God for him.'"
  },
  {
    id: "an3",
    groupName: "Pastoral Intercessory Watch",
    days: "Saturday",
    time: "8:00 PM – 6:00 AM",
    audience: "Ordained Pastors Exclusively",
    description: "Reserved exclusively for our ordained pastors to seek God on behalf of the ministry, receive prophetic direction, and prepare for Sunday's release.",
    scriptureRef: "Hebrews 13:17 - 'They keep watch over you as those who must give an account.'"
  },
  {
    id: "an4",
    groupName: "Worshipers & Leaders Altar Night",
    days: "Sunday",
    time: "8:00 PM – 6:00 AM",
    audience: "All Members & Ministry Leaders",
    description: "A time of sweet incense, thanksgiving, and consecration for all members and ministry leaders to seal Sunday's blessings and prepare for the week.",
    scriptureRef: "Revelation 8:4 - 'The smoke of the incense, together with the prayers of God's people, went up before God.'"
  }
];

export const ANNUAL_EVENTS: AnnualEvent[] = [
  {
    id: "e1",
    title: "Holy Spirit Revival",
    dates: "June 1 – January 3",
    theme: "7 Months • 31 Weeks • 217 Days",
    durationDetails: "An extraordinary season of consecutive prayer, global fasting, daily revivals, prophetic deliverance, and soul harvesting.",
    description: "This is our signature global revival program designed to set lives ablaze. For seven months, the sanctuary is open 24/7. It is marked by national prayer assemblies, international guest ministers, healing crusades, and deep theological equipping sessions.",
    bgGradient: "from-brand-blue to-brand-blue-dark",
    countdownDate: "2027-06-01T00:00:00"
  },
  {
    id: "e2",
    title: "Mystery Night",
    dates: "Every Last Friday of April",
    theme: "Deep Worship & Divine Encounters",
    durationDetails: "One night of incredible prophetic manifestations, miraculous healing, and deep worship.",
    description: "Mystery Night is an annual gathering where we venture into the deep mysteries of God through worship, revelation, and the laying on of hands. Thousands gather to seek physical healing, spiritual release, and break generational patterns.",
    bgGradient: "from-purple-950 via-indigo-950 to-brand-blue-dark",
    countdownDate: "2027-04-30T20:00:00"
  },
  {
    id: "e3",
    title: "Yahweh Night",
    dates: "Every Last Friday of October",
    theme: "Thanksgiving, Prophecy & Presence",
    durationDetails: "Our premium annual thanksgiving convocation, celebrating God's goodness.",
    description: "Yahweh Night is our massive end-of-year milestone gathering. We lift up a sound of praise with unified choruses of thousands, offer up corporate thanks for victories, and receive prophetic declarations for the coming calendar year.",
    bgGradient: "from-amber-950 via-slate-900 to-brand-blue-dark",
    countdownDate: "2026-10-30T20:00:00"
  }
];

export const MINISTRIES: Ministry[] = [
  {
    id: "m1",
    name: "Prayer & Intercession",
    leader: "Pastor Nambozo Zam",
    description: "The engine room of the church. This ministry maintains the continuous fire on the altar, coordinates overnight prayer groups, and intercedes for the spiritual needs of members and nations.",
    focus: ["24/7 Altar Nights", "Fasting Mobilization", "Crisis Intercession", "Healing Lines"],
    schedule: "Daily Watches (8:00 PM - 6:00 AM)",
    email: "embassychristiancollege2015@gmail.com",
    iconName: "Flame"
  },
  {
    id: "m2",
    name: "Youth Ministry",
    leader: "Pastor Kitutu Joshua",
    description: "Discipling, mentoring, and gathering young people to walk in holiness, discover their purpose, and excel in every sector of life with uncompromised faith.",
    focus: ["Weekly Youth Gatherings", "Academic Excellence Seminars", "Creative Arts", "Mentorship"],
    schedule: "Saturdays at 2:00 PM",
    email: "embassychristiancollege2015@gmail.com",
    iconName: "Sparkles"
  },
  {
    id: "m3",
    name: "Worship & Choir Ministry",
    leader: "Pastor Namemba Catherine",
    description: "Ministers of the tabernacle of praise. They lead the congregation in prophetic, deep praise and worship, and release spiritually saturated musical arrangements.",
    focus: ["Praise & Worship Team", "HSRC Mass Choir", "Instrumental Excellence", "Songwriting"],
    schedule: "Saturdays at 4:00 PM",
    email: "embassychristiancollege2015@gmail.com",
    iconName: "Music"
  },
  {
    id: "m4",
    name: "Evangelism Ministry",
    leader: "Pastor Wolukhu Michael",
    description: "The vanguard of the Great Commission. Moving out into streets, neighborhoods, and market centers to passionately preach the cross and bring souls into discipleship.",
    focus: ["Street Crusades", "Personal Evangelism Training", "Prison & Hospital Outreach", "New Converts Care"],
    schedule: "Thursdays at 3:00 PM",
    email: "embassychristiancollege2015@gmail.com",
    iconName: "Compass"
  },
  {
    id: "m5",
    name: "Missions Ministry",
    leader: "Pastor Destiny Isaac",
    description: "Responsible for planting new church altars, supporting rural missionaries, and planning global outreaches to unreached regions.",
    focus: ["Church Planting", "Missionary Care & Support", "Cross-Cultural Outreaches", "Resource Mobilization"],
    schedule: "First Saturday of the Month",
    email: "embassychristiancollege2015@gmail.com",
    iconName: "Globe"
  },
  {
    id: "m6",
    name: "Media Ministry",
    leader: "Pastor Wambette Saul",
    description: "Using cutting-edge tech and broadcasting to stream the Gospel. Responsible for live video, audio, social media, photography, and online portals.",
    focus: ["Web & App Development", "Live Stream Broadcasting", "Video/Audio Editing", "Social Media Outreach"],
    schedule: "As Scheduled (Service Days)",
    email: "embassychristiancollege2015@gmail.com",
    iconName: "Video"
  },
  {
    id: "m7",
    name: "Ushers Ministry",
    leader: "Pastor Mukisa Ibra",
    description: "Hosting the congregation with premium comfort, maintaining order, and executing strategic service protocols with excellence and a royal smile.",
    focus: ["Guest Welcoming", "Seating & Orderly Flow", "Venue Preparation", "Safety Protocol"],
    schedule: "Sundays at 4:30 AM",
    email: "embassychristiancollege2015@gmail.com",
    iconName: "Users"
  },
  {
    id: "m8",
    name: "Projects Ministry",
    leader: "Pastor Nandako Zerida",
    description: "Designing, constructing, and overseeing the structural expansion of the church's global footprint, facilities, and physical structures.",
    focus: ["Sanctuary Construction", "Land Acquisition", "Engineering & Design", "Community Infrastructure"],
    schedule: "Tuesdays at 2:00 PM",
    email: "embassychristiancollege2015@gmail.com",
    iconName: "Layers"
  },
  {
    id: "m9",
    name: "Mobilization Ministry",
    leader: "Pastor Kainza Nusula",
    description: "Bringing the masses together, coordinating regional cell networks, and organizing major conference logistics with precision and efficiency.",
    focus: ["Cell Networks (Home Altars)", "Event Attendance Mobilization", "Transportation Logistics", "Publicity Campaigns"],
    schedule: "Wednesdays at 4:00 PM",
    email: "embassychristiancollege2015@gmail.com",
    iconName: "Megaphone"
  },
  {
    id: "m10",
    name: "Finance Ministry",
    leader: "Pastor Magoola Mansoor",
    description: "Stewarding God's tithes and offerings with absolute accountability, designing budgets, and ensuring financial compliance across all networks.",
    focus: ["Financial Audit & Control", "Strategic Budgeting", "Stewardship Teaching", "Welfare Fund Management"],
    schedule: "Mondays at 3:00 PM",
    email: "embassychristiancollege2015@gmail.com",
    iconName: "DollarSign"
  },
  {
    id: "m11",
    name: "Sanitation Ministry",
    leader: "Pastor Miracle Alex",
    description: "Cultivating beautiful and hygienic spaces. They ensure the sanctuary and surrounds are maintained as clean, sanitary vessels for God's presence.",
    focus: ["Sanctuary Cleanliness", "Facilities Beautification", "Waste Management", "Hygiene Supplies Control"],
    schedule: "Saturdays at 7:00 AM",
    email: "embassychristiancollege2015@gmail.com",
    iconName: "Sparkles"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Sunday General Worship Service",
    category: "Sunday Worship Services",
    imagePath: "/images/fa1.jpeg",
    description: "An incredible atmosphere of deep prophetic praise and divine miracles during our Sunday service.",
    date: "July 2026"
  },
  {
    id: "g2",
    title: "Holy Spirit Revival Launch",
    category: "Revival Meetings",
    imagePath: "/images/fa2.jpeg",
    description: "Opening night of our 7-month intense revival fire meeting. The sanctuary was packed to capacity.",
    date: "June 2026"
  },
  {
    id: "g3",
    title: "Intercessory Prayer Watch",
    category: "Prayer Conferences",
    imagePath: "/images/fa3.jpeg",
    description: "Dozens laying flat at the altar, seeking the face of God during an intense Friday night watch.",
    date: "May 2026"
  },
  {
    id: "g4",
    title: "City Evangelism Campaign",
    category: "Evangelism Outreach",
    imagePath: "/images/fa4.jpeg",
    description: "Our dedicated soul-winners preaching the Gospel and distributing food to families in the community.",
    date: "April 2026"
  },
  {
    id: "g5",
    title: "Mass Choir Ministry In Performance",
    category: "Choir Ministry",
    imagePath: "/images/fa5.jpeg",
    description: "The HSRC mass choir releasing a new anointed sound of worship under royal stage lights.",
    date: "July 2026"
  },
  {
    id: "g6",
    title: "Youth Leadership Mentorship",
    category: "Community Programs / Youth Events",
    imagePath: "/images/fa6.jpeg",
    description: "Pastor Kitutu Joshua and our youth leaders conducting a discipleship workshop for teens.",
    date: "June 2026"
  }
];
