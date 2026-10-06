// Concise, authentic data for KayakBoy Surf Club
// Retains all actual prices, tiers, and specs from kayakboy.in & ticketshifu.com without fluff.

export const SURF_COURSES = [
  {
    id: "surf-1-day",
    title: "1-Day Intro Surf",
    subtitle: "First time on a surfboard? Learn fundamentals in warm, waist-deep waves.",
    tag: "Beginner Friendly",
    duration: "2.5 Hours",
    timing: "7:00 AM – 9:30 AM",
    price: 1750,
    advance: 750,
    venuePay: 1000,
    image: "/assets/surfing_one_day_intro.jpg",
    ticketShifuUrl: "https://ticketshifu.com/tickets/one-day-surfing-mulki-india",
    perks: [
      "No swimming required (shallow sandbar)",
      "Board, leash & rashguard included",
      "Wave reading, safety & pop-up coaching",
      "Clubhouse shower & washroom access"
    ]
  },
  {
    id: "surf-3-day",
    title: "3-Day Surf + Stay",
    subtitle: "Catch your own waves. 3 morning sessions plus 2 nights at the riverside club.",
    tag: "Weekend Trip",
    duration: "3 Days / 2 Nights",
    timing: "Daily 6:30 AM – 9:30 AM",
    price: 7100,
    advance: 1500,
    venuePay: 5600,
    image: "/assets/three_days_beginner_surfing.jpg",
    ticketShifuUrl: "https://ticketshifu.com/tickets/udupi-surfing",
    tiers: [
      { name: "A/C Mixed Dorm", total: 7100, advance: 1500, venue: 5600 },
      { name: "Private Room", total: 16000, advance: 5500, venue: 10500 },
      { name: "Private Room (Balcony)", total: 18500, advance: 6000, venue: 12500 }
    ],
    perks: [
      "3 guided morning surf sessions",
      "2 nights A/C accommodation",
      "Daily technique review",
      "Ice bath, gym, skate ramp & Wi-Fi"
    ]
  },
  {
    id: "surf-5-day",
    title: "5-Day Surf Immersion",
    subtitle: "Our flagship course. Progress from basic pop-ups to riding unbroken green waves.",
    tag: "Most Recommended",
    duration: "5 Days / 4 Nights",
    timing: "Daily 6:30 AM – 9:30 AM",
    price: 11000,
    advance: 2500,
    venuePay: 8500,
    image: "/assets/five_days_surfing.jpg",
    ticketShifuUrl: "https://ticketshifu.com/tickets/udupi-mangalore-surfing",
    tiers: [
      { name: "A/C Mixed Dorm", total: 11000, advance: 2500, venue: 8500 },
      { name: "A/C Female Dorm", total: 12000, advance: 3000, venue: 9000 },
      { name: "Private Room", total: 25600, advance: 7000, venue: 18600 },
      { name: "Private Room (Balcony)", total: 30600, advance: 8000, venue: 22600 }
    ],
    perks: [
      "5 guided surf sessions + daily video analysis",
      "4 nights A/C stay + remote work setup",
      "Green wave selection & turning technique",
      "Free access to ice bath, gym & skate ramp"
    ]
  }
];

export const KAYAK_TRIPS = [
  {
    id: "kayak-intro",
    title: "Island Paddle",
    duration: "2 Hours (4 km)",
    price: 500,
    advance: 100,
    schedule: "6:00 AM | 9:00 AM | 3:30 PM",
    image: "/assets/intro_kayak.jpg",
    summary: "Paddle around the isolated Shambhavi river island, take a swim dip, and catch the sunset.",
    includes: "Kayak, paddle, lifejacket, guide"
  },
  {
    id: "kayak-explore",
    title: "Explore & Overnight Camp",
    duration: "2 Days / 1 Night (20 km)",
    price: 2700,
    advance: 800,
    schedule: "Departs 9:00 AM",
    image: "/assets/explore_kayak.jpg",
    summary: "Paddle upriver to our private 2-acre estate. Camp overnight with woodfired pizza and campfire.",
    includes: "Kayak gear, tent stay, dinner & breakfast, dry bag"
  },
  {
    id: "kayak-challenger",
    title: "Challenger 20 km",
    duration: "Full Day (20 km)",
    price: 2000,
    advance: 600,
    schedule: "7:00 AM – 6:00 PM",
    image: "/assets/challenge_kayak.png",
    summary: "Full-day backwater endurance paddle to Palimar Dam with traditional coastal home lunch.",
    includes: "Expedition kayak, snacks, local lunch, guide"
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
    a: "Yes. Surf sessions run 6:30 AM – 9:30 AM. After 10:00 AM, guests use our shaded riverside workspace with fast Wi-Fi and power outlets."
  },
  {
    q: "What are the dorm and room options?",
    a: "We have air-conditioned mixed dorms (8–14 beds with personal lockers and attached baths), a female-only dorm, private A/C rooms, and riverside tents."
  },
  {
    q: "How does payment work?",
    a: "Pay a deposit online to hold your spot. Settle the remaining balance at check-in via UPI. We do not accept cash."
  },
  {
    q: "How do I reach Mulki?",
    a: "We are in Mulki, Karnataka (30 km north of Mangalore / 30 km south of Udupi). Auto-rickshaws are easily available from Mulki Bus Stand (1.5 km) and Mulki Railway Station (5.5 km)."
  }
];
