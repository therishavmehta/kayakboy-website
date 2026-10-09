// Authentic data for KayakBoy Surf Club
// Direct integration with BookingSutra (https://bookingsutra.com/kayakboy-surf-club)
// Exact prices, advance deposits, tiers, and slot details.

export const BOOKINGSUTRA_CLUB_URL = "https://bookingsutra.com/kayakboy-surf-club";

export const SURF_COURSES = [
  {
    id: "cmuy8s2b300pcqfjvkowp1421",
    bsEventId: "cmuy8s2b300pcqfjvkowp1421",
    title: "1-Day Introductory Surf Lesson",
    subtitle: "First time on a surfboard? Learn ocean safety, pop-up mechanics, and ride white water in waist-deep waves.",
    tag: "Beginner Friendly",
    duration: "3 Hours",
    timing: "Daily 6:30 AM – 11:00 AM",
    price: 1750,
    advance: 750,
    venuePay: 1000,
    image: "/assets/bs_surf_1day.jpg",
    bookingUrl: "https://bookingsutra.com/kayakboy-surf-club/events/cmuy8s2b300pcqfjvkowp1421",
    perks: [
      "No swimming required (waist-deep shallow sandbar)",
      "1:2 coach-to-student ratio with certified instructors",
      "Soft-top beginner board, leash & UV rashguard included",
      "Theory, pop-up technique & assisted wave catching",
      "Clubhouse washrooms, outdoor showers & gear lockers"
    ]
  },
  {
    id: "cmuy8rwf3000hqfjvqpehe3kz",
    bsEventId: "cmuy8rwf3000hqfjvqpehe3kz",
    title: "3 Day Beginner Surfing, Stay + Wellness",
    subtitle: "Catch your own waves. 3 morning surf sessions plus 2 nights at the riverside surf club with recovery pass.",
    tag: "Weekend Immersion",
    duration: "3 Days / 2 Nights",
    timing: "Daily 6:30 AM – 11:00 AM",
    price: 7100,
    advance: 1500,
    venuePay: 5600,
    image: "/assets/bs_surf_3day.jpg",
    bookingUrl: "https://bookingsutra.com/kayakboy-surf-club/events/cmuy8rwf3000hqfjvqpehe3kz",
    tiers: [
      { name: "A/C Mixed Dorm + Wellness", total: 7100, advance: 1500, venue: 5600 },
      { name: "A/C Female Only Dorm + Wellness", total: 7600, advance: 1500, venue: 6100 },
      { name: "Private Room without Balcony (2 Pax)", total: 16000, advance: 5500, venue: 10500 },
      { name: "Private Room with Balcony (2 Pax)", total: 18500, advance: 6000, venue: 12500 }
    ],
    perks: [
      "3 guided morning surf coaching sessions",
      "2 nights riverside A/C stay (check-in after 12 PM)",
      "Wellness pass (daily ice bath & recovery)",
      "Stance refinement, wave selection & paddle power",
      "Fiber Wi-Fi, skate mini-ramp, volleyball & workspace"
    ]
  },
  {
    id: "cmuy8ryqp00awqfjv3hkls8k7",
    bsEventId: "cmuy8ryqp00awqfjv3hkls8k7",
    title: "5 Days Surfing, Stay + Wellness",
    subtitle: "Our flagship course. Progress from basic pop-ups to reading swells and riding unbroken green waves independently.",
    tag: "Flagship Course",
    duration: "5 Days / 4 Nights",
    timing: "Daily 6:30 AM – 11:00 AM",
    price: 11000,
    advance: 2500,
    venuePay: 8500,
    image: "/assets/bs_surf_5day.jpg",
    bookingUrl: "https://bookingsutra.com/kayakboy-surf-club/events/cmuy8ryqp00awqfjv3hkls8k7",
    tiers: [
      { name: "Surf Lessons Only (No Stay)", total: 7600, advance: 2500, venue: 5100 },
      { name: "A/C Mixed Dorm + Wellness", total: 11000, advance: 2500, venue: 8500 },
      { name: "A/C Female Only Dorm + Wellness", total: 12000, advance: 3000, venue: 9000 },
      { name: "Private Room without Balcony (2 Pax)", total: 25600, advance: 7000, venue: 18600 },
      { name: "Private Room with Balcony (2 Pax)", total: 30600, advance: 8000, venue: 22600 }
    ],
    perks: [
      "5 comprehensive morning surf coaching sessions",
      "4 nights riverside A/C accommodation",
      "Daily video review & biomechanics correction",
      "Green wave angling, bottom turns & generating speed",
      "Full wellness club pass (ice bath, gym & recovery lounge)"
    ]
  },
  {
    id: "cmuy8s0u600l7qfjvutfe7gqt",
    bsEventId: "cmuy8s0u600l7qfjvutfe7gqt",
    title: "7 Days Surfing, Stay + Wellness",
    subtitle: "The complete transformation. 7 surf sessions and 6 nights riverside resort stay for serious, confident surfing.",
    tag: "Complete Masterclass",
    duration: "7 Days / 6 Nights",
    timing: "Daily 6:30 AM – 11:00 AM",
    price: 15500,
    advance: 3500,
    venuePay: 12000,
    image: "/assets/bs_surf_7day.jpg",
    bookingUrl: "https://bookingsutra.com/kayakboy-surf-club/events/cmuy8s0u600l7qfjvutfe7gqt",
    tiers: [
      { name: "A/C Mixed Dorm + Wellness", total: 15500, advance: 3500, venue: 12000 },
      { name: "A/C Female Only Dorm + Wellness", total: 16500, advance: 3500, venue: 13000 }
    ],
    perks: [
      "7 surf sessions (1 lesson/day) + 6 nights resort stay",
      "Wave forecasting, marine swell reading & rip currents",
      "Intensive trimming, directional control & cutbacks",
      "Personalized coach mentoring & in-depth video feedback",
      "Unlimited wellness club access, ice baths & community vibe"
    ]
  }
];

export const KAYAK_TRIPS = [
  {
    id: "cmuy8s3av00qzqfjvyyu7zvp8",
    bsEventId: "cmuy8s3av00qzqfjvyyu7zvp8",
    title: "1-Hour Backwater Kayak Tour",
    subtitle: "Mulki, Udupi 1 hour kayak tour | student & group discounts",
    duration: "1 Hour",
    price: 400,
    advance: 100,
    venuePay: 300,
    studentPrice: 300,
    studentAdvance: 100,
    studentVenuePay: 200,
    schedule: "6:30 AM (Sunrise) | 7:30 AM | 9:00 AM | 11:30 AM | 3:30 PM & 4:00 PM (Sunset)",
    image: "/assets/bs_kayak_1hr.jpg",
    bookingUrl: "https://bookingsutra.com/kayakboy-surf-club/events/cmuy8s3av00qzqfjvyyu7zvp8",
    summary: "Paddle through calm Shambhavi river backwaters and mangroves around the isolated island. Free action photos included.",
    includes: "Stable sit-on-top kayak, paddle, certified life jacket, guide, free action photos",
    highlights: [
      "Student special: ₹300/person with student ID (₹100 advance)",
      "Group discount: 5% off for 5+ people, 10% off for 10+ people",
      "Calm flatwater: safe for families & non-swimmers",
      "Free high-res digital photos taken by our guides"
    ]
  },
  {
    id: "cmuy8s56o00z2qfjvie2yez8f",
    bsEventId: "cmuy8s56o00z2qfjvie2yez8f",
    title: "Wake Surfing using Motorboat",
    subtitle: "Fast-track wave riding with boat-assisted continuous wake",
    duration: "30 Mins (15m land + 15m water)",
    price: 885,
    advance: 200,
    venuePay: 685,
    schedule: "Custom morning & afternoon slots (min 2 participants)",
    image: "/assets/bs_wake_surfing.jpg",
    bookingUrl: "https://bookingsutra.com/kayakboy-surf-club/events/cmuy8s56o00z2qfjvie2yez8f",
    summary: "Ride continuous, endless boat wake waves on the calm Shambhavi river. Perfect for dialing in balance without paddling fatigue.",
    includes: "Motorboat tow, wake surfboard, impact life vest, coaching lesson",
    highlights: [
      "Total: ₹750 + 18% GST (₹885) • ₹200 advance deposit",
      "15-minute land briefing + 15-minute river tow time",
      "Requires minimum 2 participants to launch",
      "Great cross-training for ocean surfing balance"
    ]
  },
  {
    id: "cmuy8s60c00z5qfjvv3421saj",
    bsEventId: "cmuy8s60c00z5qfjvv3421saj",
    title: "Bioluminescence Kayaking",
    subtitle: "Magical night paddle through glowing blue-green waters",
    duration: "45 min – 1 Hour (Night)",
    price: 750,
    advance: 250,
    venuePay: 500,
    tag: "Seasonal (Jan–Apr)",
    schedule: "Night departure (dates & timings based on tide/moon)",
    image: "/assets/bs_bioluminescence.jpg",
    bookingUrl: "https://bookingsutra.com/kayakboy-surf-club/events/cmuy8s60c00z5qfjvv3421saj",
    summary: "Paddle under starry night skies through calm Shambhavi backwaters glowing with natural blue-green bioluminescent phytoplankton.",
    includes: "Night kayak, paddle, certified life jacket, river safety guides, dry bag",
    highlights: [
      "Active season: January to April only",
      "₹250 online advance + ₹500 on spot at check-in",
      "Calm dark river backwaters away from city glare",
      "Guided by certified river safety instructors"
    ]
  }
];

export const PRO_ACADEMY = [
  {
    level: "Level 1",
    title: "Coastal Kayaking Basics",
    duration: "3 Days",
    price: 12000,
    summary: "Bracing, ocean wave reading, self-rescue, sit-on-top wave surfing."
  },
  {
    level: "Level 2",
    title: "Eskimo Roll & Sea Surf",
    duration: "3 Days",
    price: 13000,
    summary: "Eskimo roll, sculling, sit-in spraydeck kayaks, marine forecast reading."
  },
  {
    level: "Level 3",
    title: "Advanced Sea Navigation",
    duration: "3 Days",
    price: 13000,
    summary: "Edging, open green wave surfing, rough water group rescue."
  },
  {
    level: "Masterclass",
    title: "Guru Mentorship",
    duration: "3 Days",
    price: 9000,
    summary: "1-on-1 ocean immersion with Sushant (Malabar River Fest medalist)."
  }
];

export const CAMPUS_FACILITIES = [
  { title: "Ice Bath", note: "Daily 11:30 AM – 1:30 PM", icon: "Snowflake" },
  { title: "Surf Gym", note: "Weights & pull-up rigs", icon: "Dumbbell" },
  { title: "Skate Ramp", note: "Carver surf-skate boards", icon: "Activity" },
  { title: "Co-Working & Wi-Fi", note: "Desks with power & fiber internet", icon: "Wifi" },
  { title: "Volleyball & Slackline", note: "Sand court by the river", icon: "Users" },
  { title: "Outdoor Cafe", note: "Fresh coastal meals & coffee", icon: "Coffee" }
];

export const PRESS_ITEMS = [
  { name: "The Better India", logo: "/assets/press_better_india.jpg", link: "https://www.thebetterindia.com/143017/kayakboy-startup-bihar-karnataka/" },
  { name: "Bangalore Mirror", logo: "/assets/press_bangalore_mirror.png", link: "https://bangaloremirror.indiatimes.com/bangalore/others/dream-run-on-a-kayak-27-year-old-sushant-wraps-up-eight-day-expedition-through-coastal-karnataka/articleshow/64310165.cms" },
  { name: "Times of India", logo: "/assets/press_toi.png", link: "https://timesofindia.indiatimes.com/city/mangaluru/from-karwar-to-kudla-he-came-in-a-kayak/articleshow/64243268.cms" },
  { name: "LBB", logo: "/assets/press_lbb.png", link: "https://lbb.in/bangalore/mulki-adventure-school-karnataka/" }
];

export const FAQS = [
  {
    q: "Do I need to know swimming?",
    a: "No. Beginner surf lessons are conducted in shallow, waist-deep water on a sandy bed with instructors next to you. All kayakers wear certified high-buoyancy life jackets."
  },
  {
    q: "Can I work remotely while learning to surf?",
    a: "Yes. Surf sessions run 6:30 AM – 11:00 AM. After sessions, guests use our shaded riverside workspace with fast fiber Wi-Fi and power outlets."
  },
  {
    q: "What are the dorm and room options?",
    a: "We have air-conditioned mixed dorms, dedicated female-only dorms, private A/C rooms with or without balconies, and riverside stays."
  },
  {
    q: "How does payment work?",
    a: "You pay a booking advance deposit online via BookingSutra. Settle the remaining balance at check-in via UPI. We do not accept cash."
  },
  {
    q: "How do I reach Mulki?",
    a: "We are located at River Shambhavi in Mulki, Karnataka (30 km north of Mangalore / 30 km south of Udupi). Auto-rickshaws are easily available from Mulki Bus Stand (1.5 km) and Mulki Railway Station (5.5 km)."
  }
];
