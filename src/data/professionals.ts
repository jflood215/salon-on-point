export interface ServiceItem {
  name: string;
  price?: string;
  description?: string;
}

export interface ServiceCategory {
  category: string;
  items: ServiceItem[];
  note?: string;
}

export interface Professional {
  name: string;
  slug: string;
  initials: string;
  image?: string;
  imagePosition?: string;
  profileImage?: string;
  galleryImages?: string[];
  testimonials?: { quote: string; name: string }[];
  role?: string;
  cardTitle?: string;
  acceptingClients?: boolean;
  acceptingClientsText?: string;
  textOnly?: boolean;
  bio?: string;
  phone?: string;
  suite?: string;
  instagram?: string;
  website?: string;
  bookingUrl?: string;
  referralOnly?: boolean;
  hours?: string[];
  services?: ServiceCategory[];
}

export const professionals: Professional[] = [
  {
    name: "Katie Akers",
    slug: "katie-akers",
    initials: "KA",
    role: "Hairstylist",
    acceptingClients: true,
    bio: "Hi! I'm Katie and I've been doing hair since 2020. I truly love creating transformations that feel beautiful, effortless, and personal—especially when it comes to blonding, lived-in color, and extensions. When I'm not in the salon, you'll usually find me enjoying my favorite things: coffee, good food, concerts, and shopping. I love trying new places and exploring what's out there—whether it's a new spot for a latte or a fun night out. When it's time to chill I enjoy binge watching shows and TikTok with my fur children, Miss Kitty, Ellie and Max!",
    suite: "Suite #1",
    bookingUrl: "https://mandedaze.glossgenius.com/",
    hours: ["Monday: 1PM-9PM", "Tuesday: 1PM-9PM", "Wednesday: 1PM-9PM", "Thursday: 1PM-9PM", "Friday: 11AM-7PM", "Saturday: CLOSED", "Sunday: CLOSED"],
    services: [
      {
        category: "Cuts",
        note: "Each ManeDaze haircut includes a customized cut, relaxing wash, and signature finish. Currently specializing in medium to extra long haircuts — reach out for short or barber cuts.",
        items: [
          { name: "Signature Cut", price: "$65", description: "Designed to refresh your shape, or a trim. Ideally 1-4 inches off." },
          { name: "Transformative Cut", price: "$75", description: "A major transformation for guests ready for a bold change, dramatic reshape, or completely refreshed look, with 4+ inches off." },
          { name: "Long & Lush Cut", price: "$70", description: "Made for guests with extra long or thick hair needing additional time and detail." },
          { name: "Bang Trim", price: "$15" },
          { name: "Haircut Add-On", price: "$15+", description: "Add a haircut to any color service." },
          { name: "Fade Daze", price: "$45", description: "Existing clients only." },
        ],
      },
      {
        category: "Styling",
        items: [
          { name: "Good Hair Daze", price: "$60", description: "A luxury blowout experience — a relaxing wash and blowout with a signature finish for soft movement, volume, and shine." },
          { name: "Good Hair Daze — Long & Lush", price: "$70", description: "For guests with extra long, thick, or high density hair needing additional time and styling." },
        ],
      },
      {
        category: "Color",
        note: "Length pricing: standard / long / extra long & lush.",
        items: [
          { name: "Shine Daze", price: "$30 add-on / $105 w/ blowdry / $120 w/ haircut", description: "A glossing service to refresh, enhance and tone your existing color while adding shine and softness. Perfect for refreshing faded tones, neutralizing unwanted warmth, or maintaining your blonde between blonding appointments." },
          { name: "Root Revival", price: "$125 / $145", description: "Color applied directly to the root to blend new growth with the rest of the hair. Usually makes roots darker and is great for grey coverage, under 8 weeks of grow out. Includes blowout." },
          { name: "Color Me Daze", price: "$150 / $175 / $200", description: "An all-over, single-process color creating a seamless, even result from roots to ends. Deepen or enhance your natural color, refresh faded tones, or go for a complete transformation from rich brunette to vibrant copper or red. Includes blowout." },
          { name: "Glow Daze", price: "$165", description: "A customized foiling service adding pops of light around the hairline only, and the visible pieces that shine through in a ponytail or bun. Think subtle refresh or a touch of dimension. Includes gloss and blowdry." },
          { name: "Partial Mane Foil", price: "$195 / $210 / $230", description: "Strategically placed highlights around the hairline, part line, and crown. Perfect for maintaining blonde between full foil appointments or adding dimension to brunette hair. Does not include the underneath sections. Includes gloss and blowout." },
          { name: "Full Mane Foil", price: "$230 / $260 / $290", description: "Brightness and dimension throughout the entire head for a fully customized all-over blonde or dimensional look. Perfect for going lighter, refreshing highlights, or maintaining a bright blonde. Includes gloss and blowout." },
          { name: "Lived-In Mane", price: "$230 / $265 / $295", description: "A customized balayage-inspired service using a foilyage technique for dimensional color with seamless grow-out — ribbons of dimension, a sun-kissed refresh, or a brighter blended result, for a beautiful low maintenance finish." },
          { name: "Blonde Daze", price: "$380", description: "A transformative blonding service for guests looking to make a significant shift toward a lighter, brighter look. Perfect for those with natural or darker hair who want a major blonde transformation, especially with minimal to no existing lightness through the ends. Includes gloss and blowdry." },
          { name: "Platinum Daze", price: "$215 root revival / $340 transformation" },
        ],
      },
      {
        category: "Treatments",
        items: [
          { name: "Keratherapy", price: "$230 / $280 / $330" },
        ],
      },
      {
        category: "Waxing & Brows",
        note: "Includes consultation, precise hair removal, soothing product, and finishing touches.",
        items: [
          { name: "Brow Wax", price: "$20" },
          { name: "Lip Wax", price: "$15" },
          { name: "Chin Wax", price: "$15" },
          { name: "Brow, Lip & Chin", price: "$40" },
          { name: "Eyebrow Tint", price: "$25" },
          { name: "Brow Tint & Wax", price: "$45" },
        ],
      },
      {
        category: "Consultations",
        items: [
          { name: "Color Consultation", price: "Free", description: "Not sure what to book, or don't yet know what color you want? I'll review your hair history, current color, and your goals to create the best plan for your desired look — then together we'll choose the right color service." },
          { name: "Extension Consultation", price: "$20" },
        ],
      },
    ],
    testimonials: [
      { quote: "I've been seeing Katie for a few years now, and I happily followed her to her new salon. She's always professional, friendly, and does an amazing job every time. The new location is beautiful, convenient, and has such a welcoming atmosphere. I'm so excited for her and highly recommend Katie and her new salon to anyone looking for quality service and a great experience! Congratulations on your new venture!", name: "Isabella Anthony" },
    ],
  },
  {
    name: "Adelyn Busald",
    slug: "adelyn-busald",
    initials: "AB",
    image: "/images/adelyn-busald.jpg",
    profileImage: "/images/adelyn-busald.jpg",
    role: "Esthetician & Owner of Radiant Glow",
    cardTitle: "Esthetician",
    acceptingClients: true,
    bio: "My name is Adelyn Busald, and I am the owner of Radiant Glow. As a licensed esthetician with over two years of experience and the owner of Radiant Glow on the Go mobile spa for more than a year, I am passionate about helping clients look and feel their best. I specialize in customized facials, Aging & Acne prone skin, chemical peels, hydrojelly masks, and waxing services. I focus on enhancing natural beauty while promoting confidence and wellness. I believe how your skin looks and feels starts from the inside. Outside of the spa, I am a competition boxer, I love being with my family, spending time at the beach and lake, exploring nature, and taking walks with my German Shepard babies.",
    phone: "(317) 441-0024",
    instagram: "@radiantglow.onpoint",
    bookingUrl: "https://book.squareup.com/appointments/de32hk2jxhxmbv/location/LAKT0XG298QYX/services?buttonTextColor=ffffff&color=000000&locale=en&referrer=so",
    hours: ["Monday: 9AM-5PM", "Tuesday: 9AM-5PM", "Wednesday: 9AM-5PM", "Thursday: 9AM-5PM", "Friday: 9AM-5PM", "Saturday: 9AM-12:30PM", "Sunday: CLOSED"],
    services: [
      {
        category: "Facials & Peels",
        items: [
          { name: "Express Signature Facial", price: "$60", description: "All skin types — 30 minutes. This soothing facial is great for anyone on the go. A great pick-me-up, your skin will feel refreshed and rejuvenated without taking too much time out of your day." },
          { name: "Radiance & Glow", price: "$120", description: "Brightening accelerator mask treatment — 60 minutes. This brightening facial is designed to enhance the skin's radiance and even out the complexion. This beautiful treatment exfoliates dead skin cells, reduces the appearance of dark spots, and promotes a more luminous and even skin tone." },
          { name: "Hydrate and Firm — Lactic Peel", price: "$130", description: "Dry skin, mature skin — 60 minutes. This treatment is great for clients who want a gentle exfoliation, removing dead skin cells and promoting cell turnover. A very hydrating treatment, which is great for dry & mature skin. This peel lightens dark spots and evens out skin tone, resulting in a brighter complexion." },
          { name: "Glow and Go PHA Peel — The Zero Downtime Peel", price: "$130", description: "All skin types, including sensitive skin — 60 minutes. The perfect party peel — no downtime. A mild, hydrating peel that rejuvenates all skin types. Soothing and calming while improving the appearance of dehydrated, dull and coarse skin texture. Great service to get before a wedding, bridal shower, baby shower, the beach, & more!" },
          { name: "Anti-Aging A-Zyme Peel", price: "$175", description: "All skin concerns, excluding sensitive — 60 minutes. The powerhouse of all Ultraceuticals treatments, this peel combines potent Vitamin A (retinol) and Bromelain to soften the appearance of fine lines and wrinkles, even skin tone and plump the skin for a more youthful-looking and instantly glowing complexion." },
        ],
      },
      {
        category: "Waxing",
        items: [
          { name: "Eyebrow Wax", price: "$20" },
          { name: "Lip Wax", price: "$10" },
          { name: "Chin Wax", price: "$10" },
          { name: "Nose Wax", price: "$10" },
          { name: "Underarm Wax", price: "$25" },
          { name: "Arm Wax (Upper)", price: "$35", description: "Upper arms include everything from the elbows up to the shoulders (does not include the shoulders)." },
          { name: "Arm Wax (Lower)", price: "$35", description: "Lower arms include everything from the elbows down, including hands and fingers." },
          { name: "Arm Wax (Full)", price: "$40", description: "Includes the entire length of the arms. Also includes the hands and fingers. (Does not include shoulders.)" },
          { name: "Hand Wax", price: "$15", description: "Includes the tops of the hands and fingers." },
          { name: "Leg Wax (Upper)", price: "$50", description: "Includes the knees, upper legs, and inner thighs. (Does not include bikini line.)" },
          { name: "Leg Wax (Lower)", price: "$45", description: "Includes the knees, lower legs, feet, and toes." },
          { name: "Leg Wax (Full)", price: "$70", description: "Includes upper and lower legs. Also includes the knees, feet, and toes." },
          { name: "Bikini Wax", price: "$50" },
          { name: "Brazilian Wax", price: "$60" },
        ],
      },
      {
        category: "Enhancements & Add-Ons",
        items: [
          { name: "LED", price: "$15" },
          { name: "Hydrojelly Mask", price: "$20" },
          { name: "Advanced Peel", price: "$20" },
          { name: "Advanced Mask", price: "$20" },
          { name: "Dermaplane", price: "$40" },
          { name: "Relaxation Massage", price: "$20" },
        ],
      },
    ],
  },
  {
    name: "Amber McDowell",
    slug: "amber-mcdowell",
    initials: "AM",
    image: "/images/amber-mcdowell.jpeg",
    imagePosition: "15% 30%",
    profileImage: "/images/amber-mcdowell.jpeg",
    role: "Hairstylist",
    acceptingClients: true,
    bio: "In my chair, you feel confident and comfortable, knowing that you choose the right girl in the right place to help you achieve your hair goals.",
    suite: "Suite #16",
    instagram: "@ask_for_amber",
    website: "https://ambermcdowell.glossgenius.com",
    bookingUrl: "https://ambermcdowell.glossgenius.com",
    hours: ["Monday: CLOSED", "Tuesday: 10AM-5PM", "Wednesday: 9:30AM-5PM", "Thursday: 10AM-7PM", "Friday: 10AM-4PM", "Saturday: CLOSED", "Sunday: CLOSED"],
    services: [
      {
        category: "Color Services",
        items: [
          { name: "Custom Lightening Session", price: "$250+", description: "Custom balayage, money piece, foilayage, etc" },
          { name: "Partial Highlight", price: "$165+", description: "Crown highlight and face frame. Includes Cut and Blow out" },
          { name: "Full Highlight", price: "$250+", description: "Full head highlights. This includes the crown, face frame and nape" },
          { name: "Full Highlight/Lowlight", price: "$300+", description: "Full head highlight and lowlights. Includes cut/blowout" },
          { name: "Grey Root Touch Up", price: "$135+", description: "Root coverage only. Generally grey coverage. Cut/blowout incl." },
          { name: "Color Gloss", price: "$135+", description: "A semi or demi permanent color to make your existing color have more shine" },
        ],
      },
      {
        category: "Cut & Style Services",
        items: [
          { name: "Hair Cut", price: "$65", description: "Full Service Haircut, including Wash/Style" },
          { name: "Mens Cut", price: "$35+", description: "Mens cut. Clippers or scissors. 30 mins or less" },
          { name: "Formal Hair", price: "$85+", description: "Styled updo or formal styling service" },
          { name: "Extension Services", price: "$350+", description: "I offer and am certified in multiple extension methods" },
        ],
      },
      {
        category: "Other Services",
        items: [
          { name: "Consultation", price: "$30", description: "Initial consultation appointment" },
        ],
      },
    ],
    testimonials: [
      { quote: "I love the personal attention Amber gives her clients! She listens to me and helps me figure out the best style and color options for me! Make an appointment to see her at her new space…you won't be disappointed!", name: "Nikole" },
      { quote: "Amber always does a GREAT job with my hair. I wouldn't want to go to anyone else. 🥰", name: "Becki Bradford" },
      { quote: "Amber always makes my highlights look so natural and perfect - like my sun-kissed summer hair when I was a teen! Amber is also so kind and easy to talk to! Also, for the best highlights she charges Less than most! Amber is also very patient with my difficult schedule and welcomes me even when I come once a year!", name: "Nicole" },
      { quote: "Amber is awesome!!!", name: "Joanna Robinson" },
    ],
  },
  {
    name: "Mya Folden",
    slug: "mya-folden",
    initials: "MF",
    image: "/images/mya-folden.jpg",
    profileImage: "/images/mya-folden.jpg",
    role: "Hairstylist",
    acceptingClients: true,
    bio: "Hi, I'm Mya Folden, a passionate hairstylist dedicated to helping every guest feel confident, beautiful, and cared for. With an eye for detail and a love for creativity, I specialize in lived in color and modern cuts that bring out your best self.\n\nAt Suite Joy, it's more than just hair. It's about creating an experience where you leave feeling refreshed, empowered, and joyful. I believe in personalized care, a modern touch, and a warm, welcoming environment that feels like home.\n\nLet's make your hair dreams a reality because you deserve to shine every day!",
    phone: "765.978.8744",
    instagram: "@myafolden.hair",
    bookingUrl: "https://myafolden.glossgenius.com",
    hours: ["Monday: CLOSED", "Tuesday: 10AM-6PM", "Wednesday: 10AM-6PM", "Thursday: 10AM-6PM", "Friday: 8AM-3PM", "Saturday: 8AM-3PM", "Sunday: CLOSED"],
    services: [
      {
        category: "Cut / Blowouts",
        items: [
          { name: "Women's Haircut", price: "$50" },
          { name: "Men's Haircut", price: "$40" },
          { name: "Shampoo Blowout", price: "$45" },
          { name: "Special Event Style", price: "$85" },
        ],
      },
      {
        category: "Color Services",
        items: [
          { name: "All Over Color / Style", price: "$110" },
          { name: "All Over Color / Cut", price: "$160" },
          { name: "Color Retouch / Style", price: "$80" },
          { name: "Color Retouch / Cut", price: "$130" },
          { name: "Express Highlight / Style", price: "$80+" },
          { name: "Express Highlight / Cut", price: "$130+" },
          { name: "Crown Highlight / Cut", price: "$200+" },
          { name: "Full Highlight / Style", price: "$180+" },
          { name: "Full Highlight / Cut", price: "$230+" },
          { name: "Retouch / Express / Style", price: "$160+" },
          { name: "Retouch / Express / Cut", price: "$210+" },
          { name: "Retouch / Crown / Style", price: "$230+" },
          { name: "Retouch / Crown / Cut", price: "$280+" },
          { name: "Retouch / Full / Style", price: "$260+" },
          { name: "Retouch / Full / Cut", price: "$310+" },
        ],
      },
      {
        category: "Treatments & Add-ons",
        items: [
          { name: "Toner / Gloss", price: "$30" },
          { name: "Natural Tech Tailoring", price: "$40" },
          { name: "Beautiful Things Treatment", price: "$20" },
          { name: "Malibu Treatment", price: "$25" },
        ],
      },
      {
        category: "Eyebrow Services",
        items: [
          { name: "Eyebrow Wax", price: "$15" },
          { name: "Eyebrow Tint", price: "$20" },
          { name: "Eyebrow Wax & Tint", price: "$30" },
        ],
      },
    ],
  },
  {
    name: "Kendra Denton",
    slug: "kendra-denton",
    initials: "KD",
    image: "/images/kendra-denton.JPG",
    imagePosition: "center 20%",
    profileImage: "/images/kendra-denton.JPG",
    role: "Massage Therapist",
    bio: "With 20+ years as a Licensed Massage Therapist, 15 years as a Licensed Nail Technician and Esthetician, and 13 years as an Educator, she is a trusted expert in therapeutic bodywork and wellness. Specializing in pain management, prenatal care, sports massage, and targeted therapeutic techniques, her goal is to help clients move better, feel better, and live pain-free.",
    phone: "317-732-7037",
    bookingUrl: "https://www.massagemaven.org/appointments",
    hours: ["Monday: CLOSED", "Tuesday: 10AM-7PM", "Wednesday: CLOSED", "Thursday: CLOSED", "Friday: CLOSED", "Saturday: CLOSED", "Sunday: CLOSED"],
    services: [
      {
        category: "Services",
        items: [
          { name: "60-Min Swedish", price: "$150" },
          { name: "90-Min Swedish", price: "$225" },
          { name: "2-Hour Swedish", price: "$300" },
        ],
      },
    ],
  },
  {
    name: "Ashleigh Taylor",
    slug: "ashleigh-taylor",
    initials: "AT",
    image: "/images/ashleigh-taylor.jpg",
    profileImage: "/images/profiles/ashleigh-taylor.jpg",
    role: "Hairstylist, Intuitive Guide & Astrology",
    cardTitle: "Hairstylist & Intuitive Guide",
    acceptingClients: true,
    phone: "317.374.4477",
    instagram: "@ashleigh.taylor10",
    website: "https://ashleightaylor10.glossgenius.com/services",
    bookingUrl: "https://ashleightaylor10.glossgenius.com/services",
    hours: ["Monday: CLOSED", "Tuesday: CLOSED", "Wednesday: 9AM-5PM", "Thursday: CLOSED", "Friday: 9AM-5PM", "Saturday: CLOSED", "Sunday: CLOSED"],
    bio: "With over 25 years of experience, Ashleigh approaches hair as both an art and a ritual of self-renewal. Her work goes beyond creating beautiful hair — it is about helping clients feel aligned, confident, and fully themselves.\n\nEach service is intentionally designed to be both restorative and refined. Signature haircuts and custom color are paired with calming scalp massages and warm towels, creating a spa-like experience that nurtures both outer beauty and inner balance.\n\nWhat truly sets Ashleigh apart is her integration of Astrology and Personal Alignment. Through optional Birth Chart Readings and intuitive conversation, she invites clients to explore not only how they wish to look, but who they are becoming.\n\nWhether you are stepping into a new season of life, seeking renewal, or simply desiring a more intentional beauty experience, Ashleigh offers a space where beauty, insight, and transformation naturally unfold. ✨",
    services: [
      {
        category: "Consultations",
        items: [
          { name: "New Color & Extension Guest Consult", price: "Free", description: "All new color and extension guests begin with a complimentary consultation. I allow additional time at no charge so we can align on your goals and create a customized plan without feeling rushed. In many cases, your service may be performed the same day. Depending on your desired result and your hair's current condition, a separate appointment may be recommended." },
        ],
      },
      {
        category: "Intuitive Sessions",
        items: [
          { name: "Personal Alignment Session", price: "$175", description: "Available In-Person or Virtual. I serve as your guide — blending intuitive insight with astrological chart translation to help you understand your unique design. Together, we explore your path and purpose, natural gifts, patterns, and timing. This is a space for clarity, self-trust, and empowered decision-making." },
          { name: "Relationship Insight Session", price: "$225", description: "Available In-Person or Virtual. This session explores how your individual charts interact, helping you better understand your own needs, patterns, and purpose within the relationship — while gaining insight into your partner's perspective. Designed to foster clarity, alignment, and meaningful connection." },
        ],
      },
      {
        category: "Hair Services",
        items: [
          { name: "Renewal Blowout", price: "$65", description: "A relaxing shampoo experience paired with a soothing scalp massage and expert blow-dry styling. Designed to leave you feeling pampered, polished, and perfectly prepared for whatever your day — or special event — holds." },
          { name: "Signature Haircut", price: "$95", description: "A customized precision haircut tailored to your face shape and lifestyle. Includes a therapeutic scalp massage, warm towel ritual, and personalized styling guidance so you can confidently recreate your look at home." },
          { name: "Express Precision Cut", price: "$65", description: "A streamlined haircut designed for shorter styles or maintenance trims. Includes precision cutting without blow-dry styling. Ideal for guests maintaining a cropped or classic shape." },
          { name: "Dimensional Color Experience", price: "$125+/hr", description: "All color services are customized and billed hourly. Whether refreshing your tone, enhancing brightness, or creating dimensional highlights, each service is tailored to your hair goals. Includes a relaxing scalp massage during processing. Optional haircut and blowout available with all color services." },
        ],
      },
      {
        category: "Extensions",
        items: [
          { name: "BELLAMI Invisible Tape-Ins", price: "$125+", description: "Custom-blended BELLAMI Invisible Tape-In Extensions are designed to add length and volume while maintaining a natural, lightweight feel. Clip-in options are also available. A consultation is required. Hair is custom ordered and the cost of hair and installation will be due at your installation appointment." },
        ],
      },
      {
        category: "Lashes & Brows",
        items: [
          { name: "Temporary Lash Extensions", price: "$25", description: "Lightweight individual lashes applied strategically to add soft fullness and definition. Perfect for date nights, photos, weddings, or special events. Designed to enhance your natural beauty without the commitment of long-term extensions." },
          { name: "Brow Wax & Shape", price: "$25", description: "Precision brow waxing to clean and define the natural brow shape. Lip or chin waxing may be included if desired." },
        ],
      },
    ],
  },
  {
    name: "Monta Evans",
    slug: "monta-evans",
    initials: "ME",
    image: "/images/monta-evans.jpg",
    profileImage: "/images/profiles/monta-evans.jpg",
    role: "Certified Peak Pilates Instructor & Personal Trainer",
    cardTitle: "Pilates Instructor & Personal Trainer",
    acceptingClients: true,
    bio: "Monta Evans is a certified Peak Pilates instructor with three years of teaching experience and an ACE Certified Personal Trainer with over 25 years in the fitness industry. She is passionate about helping clients build strength, improve mobility, and achieve sustainable health and fitness goals. Monta's approach blends expert instruction with personalized support, empowering clients to feel stronger, more confident, and balanced in their bodies.",
    phone: "435.512.1291",
    suite: "Suite #4",
    hours: ["Monday: CLOSED", "Tuesday: 8AM-6PM", "Wednesday: 8AM-4PM", "Thursday: 8AM-6PM", "Friday: 8AM-NOON", "Saturday: CLOSED", "Sunday: CLOSED"],
    services: [
      {
        category: "Services",
        items: [
          { name: "60 Minute Sessions", price: "$100" },
        ],
      },
    ],
    testimonials: [
      { quote: "I have been taking Pilates classes with Monta for four years.  As a result I am stronger and more flexible.  I pay far more attention to balance and range of motion.  Monta is excellent at guiding me through the exercises and watching my form to ensure I am doing the exercise correctly and getting the most from it. The benefit of Pilates became very clear to me two years ago when I had a freak accident in which I fell down some stairs backwards  - the fall resulted in a concussion and brain bleed.  However, the injuries could have been much worse.  I feel certain my training with Pilates helped both in minimizing the injuries I had and also helped me recover more quickly than expected. I also believe Pilates is good for all ages.  I took my daughter to a class several years ago.  Now, when my daughter is in town she comes with me to Pilates with Monta.  Plus, she likes it so much that she does Pilates twice a week in Nashville, TN. I'm a believer in Pilates and in Monta.", name: "Holiday McKiernan" },
    ],

  },
  {
    name: "Shari Shaw",
    slug: "shari-shaw",
    initials: "SS",
    image: "/images/shari-shaw.jpg",
    profileImage: "/images/profiles/shari-shaw.jpg",
    galleryImages: ["/images/gallery/shari-shaw-gallery.jpg"],
    role: "Hairstylist",
    acceptingClients: true,
    bio: "Hello! My name is Shari Shaw, and I'm thrilled to be joining the talented team at Salon On Point! I spent 19 years working in the Zionsville area before taking some time to work closer to home and enjoy more time with my family. Now, after 22 years in the industry, I'm so happy to return to the area and reconnect with this amazing community. I offer a full range of services, including color, haircuts, updos, and facial waxing.I especially enjoy foiling, creating beautiful, natural highlights. What I value most about my career are the lasting relationships I've built with my clients over the years. I can't wait to meet new faces, welcome familiar ones, and help you look and feel your absolute best!",
    phone: "765.376.6236",
    suite: "Suite #13",
    hours: ["Contact for appointment times, hours vary"],
    services: [
      {
        category: "Haircutting",
        items: [
          { name: "Women", price: "$70" },
          { name: "Women Dry Cut Only", price: "$55" },
          { name: "Men", price: "$40" },
          { name: "Children (10 & under)", price: "$40" },
        ],
      },
      {
        category: "Styling",
        items: [
          { name: "Blowout & Style Only", price: "$55" },
          { name: "Updo & Special Event Styling", price: "$80" },
        ],
      },
      {
        category: "Color",
        items: [
          { name: "Color Retouch (4-10 week growth/single process)", price: "$100" },
          { name: "All Over Color", price: "$140" },
          { name: "Color with Foils", price: "$165" },
        ],
      },
      {
        category: "Highlighting",
        items: [
          { name: "Full", price: "$150 & up" },
          { name: "Partial", price: "$125 & up" },
          { name: "Face Frame 8-10 Foils", price: "$100" },
          { name: "\"Lived In\" Foil with Root Tap or Melt", price: "$165" },
          { name: "Additional Color", price: "$15" },
          { name: "Toner/Gloss add on", price: "$40" },
        ],
      },
      {
        category: "Waxing",
        items: [
          { name: "Eyebrow", price: "$20" },
          { name: "Lip", price: "$10" },
          { name: "Chin", price: "$15" },
        ],
      },
    ],
  },
  {
    name: "Marhia Ross",
    slug: "marhia-ross",
    initials: "MR",
    image: "/images/marhia-ross.jpg",
    profileImage: "/images/profiles/marhia-ross.jpg",
    galleryImages: ["/images/gallery/marhia-ross-gallery.jpg"],
    role: "Massage Therapist",
    acceptingClients: true,
    bio: "Hi, I'm Marhia Ross. I'm a Licensed Massage Therapist, and the founder of Massage Maven here in Zionsville. I've spent almost 20 years in health and wellness, working with everyone from Olympic athletes to frontline medical professionals. Still, what I love most is caring for people in my own community. I view massage as essential care for the nervous system, not a luxury. My approach combines trauma-sensitive touch, holistic practices, and intuitive care to create restorative, personalized sessions that help you feel safe, supported, and renewed. Beyond my studio, I teach at a local massage school, mentor therapists, and train spa teams. When I'm not working, I'm with my two kids, our goofy dogs, or spending time with friends and neighbors around town.",
    phone: "317-732-7037",
    instagram: "@marhiamassagemaven",
    website: "https://massagemaven.org",
    bookingUrl: "https://massagemaven.org",
    hours: ["Monday: 9AM - 6PM", "Tuesday: CLOSED", "Wednesday: 9AM- 6PM", "Thursday: 9AM - 1PM", "Friday: CLOSED", "Saturday: 9AM - NOON", "Sunday: CLOSED"],
    services: [
      {
        category: "Massage",
        items: [
          { name: "60-Min Swedish", price: "$150", description: "Gentle, flowing strokes designed to relieve tension and promote relaxation." },
          { name: "90-Min Swedish", price: "$225", description: "Extended session focused on deep relaxation and nervous system support." },
          { name: "90-Min Rock & Roll Massage", price: "$225", description: "Deep, heated therapeutic massage to increase energy and restore comfort." },
          { name: "120-Min Lomi Lomi", price: "$300", description: "Hawaiian-inspired techniques to soothe, nurture, and support overall well-being." },
          { name: "60-Min Shirodhara", price: "$175", description: "A meditative oil treatment designed to calm the mind and promote balance." },
        ],
      },
      {
        category: "Optional Enhancements",
        items: [
          { name: "Warm Bamboo, Sound Healing, Cupping, Gua-Sha, Aromatherapy, Gentle Stretching, Deep Tissue", price: "Free", description: "Available upon request. Each session is fully personalized and tailored to your individual needs." },
        ],
      },
    ],
    testimonials: [
      { quote: "Marhia was so professional and a very kind soul. She asked and made sure I understood and was comfortable with techniques before proceeding. Her massage was the first I had post back surgery 2 yrs ago. It was a very nice and soothing massage. I would recommend spoiling yourself by visiting Massage Maven and letting Marhia take your cares away just for a short time.", name: "Chrissy" },
      { quote: "Marhia is a fantastic massage therapist! I've been going to her for years and I highly recommend her!!", name: "Karen" },
      { quote: "It was a wonderful experience from beginning to end. Thank you Marhia for your gentle touch, your professionalism, and your kindness. I cannot wait to return.", name: "Claudia" },
    ],

  },
  {
    name: "Abby McGowen",
    slug: "abby-mcgowen",
    initials: "AM",
    image: "/images/abby-mcgowen.jpg",
    profileImage: "/images/profiles/abby-mcgowen.jpg",
    galleryImages: ["/images/gallery/abby-mcgowen-gallery.jpg"],
    role: "Hairstylist",
    acceptingClients: true,
    acceptingClientsText: "Accepting New Extension & Color Clients",
    bio: "My name is Abby Evans McGowen, and I've been doing hair for almost 6 years. I am married to my best friend of 8 years, and we have a beautiful daughter together. I am an extension and transition/correction specialist. I love everything color, and anything that is creative, fun, and alternative. I'm certified in 5 different extension methods, and excel in making the impossible possible with extensions and a little bit of magic. I truly love what I do, and I love making people feel their absolute best all while looking it as well. I'm currently accepting new color and extension clients (no stand alone haircuts) at this time. For more pictures of my work you can follow my instagram at: powerofthe_brush",
    phone: "765.978.8435",
    textOnly: true,
    suite: "Suite #7",
    instagram: "@powerofthe_brush",
    hours: ["Monday: CLOSED", "Tuesday: CLOSED", "Wednesday: 10AM-7PM", "Thursday: 10AM-7PM", "Friday: CLOSED", "Saturday: CLOSED", "Sunday: CLOSED"],
    services: [
      {
        category: "Extensions",
        items: [
          { name: "Extensions (per row/bag)", price: "$110" },
        ],
      },
      {
        category: "Haircuts",
        items: [
          { name: "Haircut (cut, wash, blow dry)", price: "$75" },
          { name: "Dry cut", price: "$60" },
          { name: "Curly haircut (cut, wash, diffuse style, product knowledge)", price: "$95" },
        ],
      },
      {
        category: "Color & Highlighting",
        note: "Prices are per hour",
        items: [
          { name: "Color", price: "$115" },
          { name: "Color Correction", price: "$150" },
        ],
      },
      {
        category: "Brows",
        items: [
          { name: "Brow lamination and wax", price: "$60" },
          { name: "Brow lamination, wax and tint", price: "$75" },
        ],
      },
    ],
    testimonials: [
      { quote: "It was Winter of 2022 that I had my 1st encounter with Abby. I would like to begin with Abby is a very pleasant, welcoming, kind, friendly and most importantly excellent at her profession. She is very patient and takes her time with each client and makes you feel beautiful when you leave her salon. She has transformed my hair into a masterpiece from extensions to now beautifully grown out without extensions and awesome color. I highly recommend Abby to anyone, and the compliments are amazing after I get my hair done.", name: "Mary Jo Brown" },
      { quote: "If you're looking for a talented stylist who knows what they're doing with your hair, Abby is that stylist. I have been seeing Abby for years and every time I leave her chair, I get all the compliments on how amazing my hair looks. Abby not only knows how to do hair, she talks you through the process step by step so you understand what's going on and how to best care for your hair. You always will feel comfortable and confident in her hands.", name: "Kerry Patterson" },
      { quote: "Abby has been doing my hair for over 4 years now and has easily become my favorite stylist I've had in my entire life. I have complete trust in her work and recommend every person who asks about my hair to go see her. She has also been choosing my hair color now for over 2 years and I always leave feeling and looking amazing! I get compliments EVERYWHERE I go about my hair, even my sisters in other states get questions about who my hair stylist is! I cannot brag enough about how amazing she is! No matter if you're looking for natural color, fashion colors or even extensions she kills it!! I will ALWAYS follow her to any salon and drive how ever long it takes to get in her chair!", name: "Alex Williams" },
      { quote: "Abby is the best! She is always willing to deal with whatever I throw at her, but I love that she will tell me if it's a bad idea so I don't regret anything. She always takes the time to answer my questions, whether it's about how to properly care for my own hair or my children's hair! She is hands down the most amazing stylist I have ever seen and always makes my hair look amazing!", name: "Meghan Linton" },
      { quote: "Abby has been doing my hair for at least 4 years!  I can go in and she makes me gorgeous every time! She is kind and listens to all of my requests. If I request something and she doesn't think it will work, she lets me know and offers options that would work better.", name: "Astrid Wheeler" },
    ],

  },
  {
    name: "Allison Boyer",
    slug: "allison-boyer",
    initials: "AB",
    image: "/images/allison-boyer.jpg",
    profileImage: "/images/profiles/allison-boyer.jpg",
    galleryImages: ["/images/gallery/allison-boyer-gallery.jpg"],
    role: "Esthetician",
    acceptingClients: true,
    bio: "Allison is an Esthetician and current owner of Allison Heckman Esthetics. She has been an esthetician for 10 years. Getting her start at Honors Beauty College. Completing 700+ hours and becoming certified internationally in many services such as Microdermabrasion, chemical peels, facials, massage and much more. She then went on to work for Villaggio Day Spa and Salon for almost 5 years before branching out to become a spa owner. Her favorite service to perform is the Image Vital C facial. She loves that her clients don't have to choose between relaxation and results. When not working she enjoys being a mom to her young son Landon, practicing yoga and watching or going to football games with her husband Lee.",
    phone: "317.201.5150",
    suite: "Suite #12",
    bookingUrl: "https://www.joinblvd.com/b/cleanaesthetic/widget#/visit-type",
    hours: ["Monday: CLOSED", "Tuesday: 9:30AM - 5PM", "Wednesday: 9:30AM - 2PM", "Thursday: 9:30AM - 8PM", "Friday: 9:30AM - 5PM", "Saturday: 9:00AM - 2PM", "Sunday: CLOSED"],
    services: [
      {
        category: "Waxing",
        items: [
          { name: "Eyebrows", price: "$20" },
          { name: "Chin", price: "$15" },
          { name: "Lip", price: "$15" },
          { name: "Full Face", price: "$50" },
          { name: "Underarm", price: "$25" },
          { name: "Arm", price: "$30 half / $50 full" },
          { name: "Leg", price: "$40 half / $65 full" },
          { name: "Back", price: "$30 half / $50 full" },
          { name: "Extended Bikini", price: "$55 & up" },
          { name: "Brazilian (female only)", price: "$70 & up" },
        ],
      },
      {
        category: "Facials",
        items: [
          { name: "Express Facial", price: "$55" },
          { name: "Classic Facial", price: "$80" },
          { name: "Image Signature", price: "$90" },
          { name: "Image Chemical Lift", price: "$100" },
          { name: "Image O2 Lift", price: "$125" },
          { name: "Hydrodermabrasion Facial", price: "$175" },
          { name: "Image MD Facial", price: "$90 w/ Oil-Planing $120" },
          { name: "Microdermabrasion", price: "$60 or $35 w/ facial" },
          { name: "Dermaplaning", price: "$40 or $30 w/facial" },
        ],
      },
      {
        category: "Extras",
        items: [
          { name: "Lash Tint", price: "$25" },
          { name: "Brow Tint", price: "$30" },
          { name: "Lash Lift", price: "$60 w/ Tint  $80" },
        ],
      },
    ],
  },
  {
    name: "Amber Lyons",
    slug: "amber-lyons",
    initials: "AL",
    image: "/images/amber-lyons.jpg",
    profileImage: "/images/profiles/amber-lyons.jpg",
    role: "Hairstylist, Bridal Hair & Makeup Specialist",
    cardTitle: "Hairstylist",
    bio: "Since 2006, Amber has loved being a hairstylist and sharing a few laughs with clients. With a background in Wella color she loves creating new looks and especially loves highlights in all it's forms. Amber is passionate with all things hair, but her favorites are specialty updos for wedding parties, prom and other formal events. You can view some of her work on Instagram @laroy_beauty.",
    phone: "317.413.1540",
    suite: "Suite #6",
    instagram: "@laroy_beauty",
    hours: ["Monday: CLOSED", "Tuesday: 9AM-5PM", "Wednesday: CLOSED", "Thursday: CLOSED", "Friday: 9AM-3PM", "Saturday: 9AM-2PM", "Sunday: CLOSED"],
  },
  {
    name: "Angie Shafer",
    slug: "angie-shafer",
    initials: "AS",
    image: "/images/angie-shafer.jpg",
    profileImage: "/images/profiles/angie-shafer.jpg",
    galleryImages: ["/images/gallery/angie-shafer-gallery.jpg"],
    role: "Hairstylist",
    phone: "765.891.2018",
    suite: "Suite #8",
    hours: ["Monday: 10AM-7PM", "Tuesday: 10AM-7PM", "Wednesday: 10AM-7PM", "Thursday: CLOSED", "Friday: CLOSED", "Saturday: 9AM-5PM E/O", "Sunday: CLOSED"],
    services: [
      {
        category: "Haircuts",
        items: [
          { name: "Women's Haircut", price: "$60" },
          { name: "Men's Haircut", price: "$38" },
          { name: "Children's Haircut", price: "$38" },
        ],
      },
      {
        category: "Color",
        items: [
          { name: "Haircolor", price: "$90 & up" },
          { name: "Partial Highlight", price: "$100" },
          { name: "Full Highlight", price: "$125" },
          { name: "Toner", price: "$25" },
          { name: "Olaplex", price: "$30" },
          { name: "Olaplex Treatment", price: "$60" },
        ],
      },
      {
        category: "Wax",
        items: [
          { name: "Brow", price: "$15" },
        ],
      },
    ],
    testimonials: [
      { quote: "I've been going to Angie for years and she has gotten me from shoulder length hair, to below waist length with a full head of highlights each time! She has made me very knowledgeable about how best to car my my hair type. I am incredibly thankful for her and her kind, inviting environment. Prior to Angie, I did not consistently go to a hair stylist because I was never satisfied or felt uncomfortable. Angie has changed that. I look forward to seeing her and spending the time needed to properly care for my hair.", name: "Kelcie" },
    ],

  },
  {
    name: "Cindy A. Shanks",
    slug: "cindy-shanks",
    initials: "CS",
    image: "/images/cindy-shanks.jpg",
    profileImage: "/images/profiles/cindy-shanks.jpg",
    galleryImages: ["/images/gallery/cindy-shanks-gallery.jpg"],
    role: "Hairstylist",
    acceptingClients: true,
    bio: "My name is Cindy A. Shanks. I have been a hairstylist for 11 years. I love to keep up with the latest trends & attend many classes to continue my education. I strive to give my clients a relaxing space where they can come and unwind. Each shampoo includes a mini head massage and a cooling jade eye mask. I am Brazilian Blowout and Extension certified. Check out my Instagram @c.shanks.stylist to see my work. To book an appointment click the link provided down below.",
    phone: "317.753.6251",
    suite: "Suite #3",
    instagram: "@c.shanks.stylist",
    bookingUrl: "https://book.squareup.com/appointments/63gwv1j7hkraqu/location/L8G3C8GD7EEME/services",
    hours: ["Monday: 9AM-5PM", "Tuesday: CLOSED", "Wednesday: CLOSED", "Thursday: 9AM-8PM", "Friday: 9AM-2PM", "Saturday: CLOSED", "Sunday: CLOSED"],
    services: [
      {
        category: "Haircuts",
        items: [
          { name: "Women's Haircut", price: "$75" },
        ],
      },
      {
        category: "Brazilian Blowout",
        items: [
          { name: "Brazilian Blowout", price: "$275" },
          { name: "Brazilian Blowout Express", price: "$175" },
        ],
      },
      {
        category: "Color",
        items: [
          { name: "All Over Color", price: "$155" },
          { name: "New Growth", price: "$110" },
          { name: "Bleach & Tone", price: "$200/hour" },
          { name: "Full Highlight and/or Balayage", price: "$275" },
          { name: "Toner Refresh (Gloss)", price: "$75" },
          { name: "Brow Tint", price: "$20" },
        ],
      },
      {
        category: "Styling",
        items: [
          { name: "Luxury Blowout", price: "$55" },
          { name: "Dry Style", price: "$35" },
          { name: "Updo", price: "$90" },
          { name: "Half Updo", price: "$75" },
        ],
      },
      {
        category: "Hair Extensions",
        items: [
          { name: "Wefts", price: "$150/row" },
          { name: "Tape Ins", price: "$100/pack" },
          { name: "I-Tip", price: "$150/pack" },
          { name: "K-Tip", price: "$150/pack" },
        ],
      },
    ],
  },
  {
    name: "Dannette Clark",
    slug: "dannette-clark",
    initials: "DC",
    image: "/images/dannette-clark.jpg",
    profileImage: "/images/profiles/dannette-clark.jpg",
    galleryImages: [],
    role: "Hairstylist",
    bio: "Dannette has been in the industry for 25+ years. She has trained with some of the top stylists in her area. She believes in continuing education and has done numerous classes outside of the salon including classes for balayage with Candy Shaw, classes with Joseph DiMaggio, Sonya and Christopher Dove for Wella, color classes with Paul Mitchell the company, Davines color, Rusk, Euphora and Bennifactor just to name a few. She has also taken several industry business classes including Salon Inc.,and PSC Net. The love and passion Dannette has for the beauty industry is beyond words. She has learned over the years that the most important thing with a client is to listen and decipher what it is they want. She loves to pamper her clients and make them forget about the worries of the day. Dannette loves the transformation that she provides to a client through a cut or maybe a new color. She loves to do balayage, highlights, color and cutting.",
    phone: "317-509-8819",
    suite: "Suite #4",
    bookingUrl: "https://book.squareup.com/appointments/5oumc87e8u8xpp/location/1ND6GPN4SS2ZQ/services",
    hours: ["Monday: CLOSED", "Tuesday: 10AM-4:30PM", "Wednesday: 12PM-8PM", "Thursday: CLOSED", "Friday: 8AM-12PM", "Saturday: CLOSED", "Sunday: CLOSED"],
    services: [
      {
        category: "Haircuts & Styling",
        items: [
          { name: "Women's Haircut", price: "$85" },
          { name: "Men's Haircut", price: "$53" },
          { name: "Blowout", price: "$60" },
          { name: "Special Occasion", price: "$80" },
          { name: "Bride Up-Do", price: "$90" },
        ],
      },
      {
        category: "Color",
        items: [
          { name: "Color Touch up", price: "$115" },
          { name: "Color All Over", price: "$103" },
          { name: "Full Highlight", price: "$150 & up" },
          { name: "Partial Highlight", price: "$115 & up" },
          { name: "Balayage", price: "$250 & up" },
        ],
      },
    ],
  },
  {
    name: "Dr. Ben Petty",
    slug: "dr-ben-petty",
    initials: "BP",
    image: "/images/dr-ben-petty.jpg",
    profileImage: "/images/profiles/dr-ben-petty.jpg",
    galleryImages: ["/images/gallery/dr-ben-petty-gallery.jpg"],
    role: "Concierge Botox Provider",
    acceptingClients: true,
    bio: "Hi, I am Dr. Ben Petty, the newest team member of Salon on Point. I live in Zionsville with my wife Ali and my two sons Jack and Theo. I have 12 years of experience as an emergency physician, and I specialize in Botox treatments with a minimalistic and personalized approach. With an international certification from IAPAM, I am committed to the highest standards in aesthetic medicine. Let's redefine your look together! Using botox I can also help manage disruptive conditions such as TMJ, bruxism (teeth grinding), migraines and hyperhydrosis (excessive sweatiness).",
    phone: "812.554.8354",
    suite: "Suite #12",
    bookingUrl: "https://www.clean-aesthetic.com/",
    hours: ["Monday: 8AM-5:30PM", "Tuesday: CLOSED", "Wednesday: 2:15PM-5:30PM", "Thursday: CLOSED", "Friday: CLOSED", "Saturday: 2:15PM-5:30PM", "Sunday: CLOSED"],
    testimonials: [
      { quote: "Dr. Ben was so willing to work me into his schedule! He was friendly and very professional. I appreciate the follow up and have already recommended him to family and friends.", name: "Sara E." },
      { quote: "Dr. Petty took time to talk to me about my previous Botox treatments. He analyzed my face and discussed with me which areas would benefit (and which areas would not benefit) from additional Botox treatment.", name: "Lynn H." },
      { quote: "Ben is skilled and knowledgeable, very personable, and put me at ease.", name: "Becca S." },
    ],

  },
  {
    name: "Kelly Starkey",
    slug: "kelly-starkey",
    initials: "KS",
    image: "/images/kelly-starkey.jpg",
    profileImage: "/images/profiles/kelly-starkey.jpg",
    galleryImages: ["/images/gallery/kelly-starkey-gallery.jpg"],
    role: "Nail Technician",
    acceptingClients: true,
    bio: "Hey there! My name is Kelly Starkey. I am a passionate nail artist, and I take great pride in my work. My specialties include Luminary structured manicures, Gel X nail extensions, and spa pedicures. I blend creativity with skill to create flawless designs that truly reflect your individual style. Whether you're looking for something classic or a bit more elaborate, I aim to deliver exceptional service with stunning results. When I'm not at the salon, I love traveling with my husband and spending quality time with my teenage kids. I look forward to meeting you and making your nail dreams come true!",
    phone: "765.891-9078",
    suite: "Suite #5",
    bookingUrl: "https://nothing-but-nails-by-kelly.square.site/",
    hours: ["By appointment \u2014 contact to schedule"],
    services: [
      {
        category: "Nails",
        items: [
          { name: "Gel-X full set" },
          { name: "Structured gel manicure" },
          { name: "Soak off" },
          { name: "Spa pedicure" },
          { name: "Paraffin" },
        ],
      },
      {
        category: "Nail Art",
        items: [
          { name: "Simple Art" },
          { name: "Complex" },
        ],
      },
    ],
    testimonials: [
      { quote: "LOVE my structured gel manicure with Kelly. I finally get to have beautiful long nails that are my natural length.", name: "Sofia" },
      { quote: "Kelly is amazing. She makes my nails look beautiful every time and always makes my visions come to life. She's friendly and it's so nice to have a salon where it's just you and your nail tech!", name: "Kerry" },
      { quote: "Finally found, not only an amazing nail tech, but also a wonderful person! If you want a full package experience (cute space, fun conversation, and nail art without limits), go see Kelly! You won't find anywhere better!", name: "Kayla" },
      { quote: "The best experience I've ever had at a nail salon. Kelly is amazing. I always love my nails after an appointment with her! If you're like me and prefer a more quiet setting while getting your nails done, book an appointment with her. You won't be disappointed!", name: "Coleen" },
      { quote: "Kelly is by far my favorite nail tech! She always perfects any design I send her or has the cutest ideas when I give her creative control! I love how she makes me feel like more than just a client in her chair. 10/10 recommend to everyone!!", name: "Riley" },
      { quote: "Kelly is absolutely amazing! I refer everyone I know to her! Not only is her work amazing but so is her personality, we clicked instantly! There's no one I would rather go to for my nails", name: "Haley" },
      { quote: "To say I'm thankful to find Kelly would be an understatement! I went into my first appointment with apprehension due to previous experiences but Kelly asked me questions about what I was wanting, what I felt had gone wrong previously, and even walked & talked me through each step of the process. I can't imagine going anywhere else now!", name: "Ashley" },
      { quote: "I brought my girls in for their birthday, and Kelly was so great with them! She made them feel like the princesses they are! Special memory they will have forever! Might have to make this a tradition!", name: "Shane" },
      { quote: "Kelly is the best! I feel so comfortable and have so much fun during appointments!", name: "Cheyenne" },
      { quote: "I've been going to Kelly for my nails, and I couldn't be happier with her work! She is incredibly efficient, always respectful of my time without ever compromising on quality. What sets her apart, though, is her creativity and artistry&mdash;every set she does is not only flawless but also unique and beautifully designed. Whether I come in with a clear idea or just give her free rein, she always delivers something stunning. If you're looking for a nail technician who combines skill with true artistic talent, Kelly is the one.", name: "Ashley" },
    ],

  },
  {
    name: "Jennie Haltom",
    slug: "jennie-haltom",
    initials: "JH",
    image: "/images/jennie-haltom.jpg",
    profileImage: "/images/profiles/jennie-haltom.jpg",
    galleryImages: ["/images/gallery/jennie-haltom-gallery.jpg"],
    role: "Hairstylist",
    acceptingClients: true,
    bio: "Hi! I'm Jennie! I have been a stylist for 22 years. I have 3 beautiful girls. I am so excited to join the team here at Salon on Point and meet new guests! I love my job but most of all cherish the relationship that I build with my clients. I would consider my style very natural. My number one goal is to protect the quality of your hair while giving you what you want! I really enjoy color and color transformation! I welcome women, men, and children's cuts!",
    phone: "765.366.6348",
    suite: "Suite #8",
    hours: ["Monday: CLOSED", "Tuesday: CLOSED", "Wednesday: CLOSED", "Thursday: 10AM-7PM", "Friday: 10AM-4PM", "Saturday: 9AM-3PM", "Sunday: CLOSED"],
    services: [
      {
        category: "Haircuts",
        items: [
          { name: "Women's Haircut", price: "$72" },
          { name: "Men's Haircut", price: "$40" },
          { name: "Children's Haircut", price: "$40" },
        ],
      },
      {
        category: "Color",
        items: [
          { name: "Haircolor", price: "$120" },
          { name: "Partial Foils", price: "$125" },
          { name: "Full Foils", price: "$150" },
          { name: "Toner", price: "$30" },
          { name: "Additional Color", price: "$15" },
        ],
      },
      {
        category: "Wax",
        items: [
          { name: "Brow", price: "$20" },
          { name: "Lip", price: "$15" },
          { name: "Chin", price: "$15" },
        ],
      },
    ],
    testimonials: [
      { quote: "Thank you so much for your referral to Jennie. She is extremely professional, and so fun to work with. She had a lot of great suggestions for my hair, and the end result is amazing. The color is gorgeous, and the cut feels so much better. It looked fabulous even after I washed and styled it!!!!", name: "" },
    ],

  },
  {
    name: "Leslie Gimbel",
    slug: "leslie-gimbel",
    initials: "LG",
    image: "/images/leslie-gimbel.jpg",
    profileImage: "/images/profiles/leslie-gimbel.jpg",
    role: "Hairstylist",
    bio: "Hi, for the past 12 years I've been doing hair in the Indianapolis area. My family and I moved to the neighborhood of Anson in Whitestown 5 years ago. And I am beyond excited to now be able to work right in the community we have grown to love so much. I am a very versatile stylist. I love that my clientele is made up of women, men, and children. I specialize in haircuts, and multidimensional hair color. I always keep up on the latest trends with on going education. I try to listen to my clients and achieve the style they are looking for.",
    phone: "317.703.9381",
    suite: "Suite #2",
    referralOnly: true,
    hours: ["Monday: CLOSED", "Tuesday: CLOSED", "Wednesday: CLOSED", "Thursday: By Appointment", "Friday: By Appointment", "Saturday: By Appointment", "Sunday: CLOSED"],
    services: [
      {
        category: "Haircuts & Styling",
        items: [
          { name: "Women's Haircut" },
          { name: "Men's Haircut" },
          { name: "Children's Haircut" },
          { name: "Blow-Out" },
          { name: "Event Hair/ Updo" },
        ],
      },
      {
        category: "Treatments",
        items: [
          { name: "Brazilian Blowout" },
        ],
      },
      {
        category: "Color",
        items: [
          { name: "All Over Color & Cut" },
          { name: "Highlight & Cut" },
          { name: "Balayage & Cut" },
        ],
      },
      {
        category: "Wax",
        items: [
          { name: "Brow" },
          { name: "Lip" },
        ],
      },
    ],
  },
  {
    name: "Mayuri Patel",
    slug: "mayuri-patel",
    initials: "MP",
    image: "/images/mayuri-patel.jpg",
    profileImage: "/images/profiles/mayuri-patel.jpg",
    galleryImages: ["/images/gallery/mayuri-patel-gallery.jpg"],
    role: "Eyebrow Threading",
    cardTitle: "Eyebrow Threading",
    acceptingClients: true,
    bio: "Hello there! My name is Mayuri (feel free to call me May) and I have been threading eyebrows for over 12 years! I have been married for 9 years and we have a 2 year old son (my joy). I currently reside in Zionsville, IN. Threading has been a growing passion of mine and I have always wanted to open a business using the skills I have. I finally have that opportunity to keep my passion going with Salon on Point. I am excited to meet new faces and start my threading journey at this new location!",
    phone: "317.902.1925",
    suite: "Suite #1",
    bookingUrl: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ18JnE2nfddUIqMusvP_wiv_eJxRWwwF3BhCNr1iFNF_T5cr7ZIHiS5Vcq2_BAHIA6avpVSoK-_",
    instagram: "@eye.browsbymay",
    hours: ["Monday: 4PM - 5:30PM", "Tuesday: 4PM - 5:30PM", "Wednesday: CLOSED", "Thursday: CLOSED", "Friday: 10AM -12PM", "Saturday: CLOSED", "Sunday: CLOSED"],
    services: [
      {
        category: "Threading",
        items: [
          { name: "Eyebrows", price: "$15" },
          { name: "Upper Lip", price: "$10" },
          { name: "Forehead", price: "$10" },
          { name: "Chin", price: "$10" },
          { name: "Unibrow", price: "$7" },
          { name: "Sideburns", price: "$10" },
          { name: "Full Face", price: "$50" },
        ],
      },
    ],
  },
  {
    name: "Miss Molly",
    slug: "miss-molly",
    initials: "MM",
    image: "/images/miss-molly.jpg",
    profileImage: "/images/profiles/miss-molly.jpg",
    galleryImages: ["/images/gallery/miss-molly-gallery.jpg"],
    role: "Psychic Medium",
    bio: "Specializing in Tarot cards, communicating with passed loved ones, channeling, and energy healing.",
    phone: "623.695.3828",
    hours: ["Guest visits \u2014 contact for availability"],
    services: [
      {
        category: "Services",
        items: [
          { name: "ONE HOUR READING", price: "$85" },
          { name: "VIRTUAL", price: "$75" },
        ],
      },
    ],
  },
  {
    name: "Sofia Flood",
    slug: "sofia-flood",
    initials: "SF",
    image: "/images/sofia-flood.jpg",
    profileImage: "/images/profiles/sofia-flood.jpg",
    galleryImages: ["/images/gallery/sofia-flood-gallery.jpg"],
    role: "Hairstylist & Salon Owner",
    bio: "21 years of experience doing what I love. People often ask if I ever get tired of doing hair and my answer is always \"no\". It is my strength to understand and capture the natural beauty in every color, texture and length.",
    phone: "317.603.2623",
    instagram: "@sofia.onpoint",
    hours: ["Monday: 9AM - 5PM", "Tuesday: CLOSED", "Wednesday: 9AM - 5PM", "Thursday: 9AM - 5PM", "Friday: CLOSED", "Saturday: CLOSED", "Sunday: CLOSED"],
    services: [
      {
        category: "Haircuts & Styling",
        items: [
          { name: "Haircut", price: "$150" },
        ],
      },
      {
        category: "Color",
        items: [
          { name: "Color", price: "$200" },
        ],
      },
    ],
    testimonials: [
      { quote: "I highly recommend Sofia if you are looking for a stylist that is both knowledgeable and personable. She took time to understand my hair goals from color and length to desired style and was able to deliver exactly what I was looking for. Her sweet personality only adds to an already positive experience.", name: "Melanie" },
    ],

  },
  {
    name: "Tarah Fye",
    slug: "tarah-fye",
    initials: "TF",
    image: "/images/tarah-fye.jpg",
    profileImage: "/images/profiles/tarah-fye.jpg",
    role: "Hairstylist",
    bio: "Hairstylist since 2009 experienced in providing professional salon services, with attention to detail, in a relaxing stress free environment.",
    phone: "317.460.4620",
    suite: "Suite #2",
    hours: ["Monday: CLOSED", "Tuesday: CLOSED", "Wednesday: CLOSED", "Thursday: 11am to 7pm", "Friday: 8am to 3pm", "Saturday: 8am to 3pm", "Sunday: CLOSED"],
    services: [
      {
        category: "Haircuts & Styling",
        items: [
          { name: "Women's Haircut", price: "$55" },
          { name: "Men's Haircut", price: "$45" },
          { name: "Children's Haircut (under 10)", price: "$25" },
          { name: "Blow-Out", price: "$40" },
        ],
      },
      {
        category: "Treatments",
        items: [
          { name: "Olaplex", price: "$50" },
          { name: "Olaplex Color Add In", price: "$10 to $50" },
        ],
      },
      {
        category: "Color",
        items: [
          { name: "Retouch", price: "$60" },
          { name: "All Over Color", price: "$75" },
          { name: "Partial Foil", price: "$75" },
          { name: "Full Foil", price: "$95" },
          { name: "Base Break", price: "$50" },
          { name: "Extra Color", price: "$15" },
        ],
      },
      {
        category: "Wax",
        items: [
          { name: "Brow", price: "$15" },
          { name: "Brow & Lip", price: "$22" },
          { name: "Lip", price: "$10" },
        ],
      },
    ],
  },
];

export const services = [
  "Hair", "Skin", "Massage", "Botox", "Lashes", "Brows", "Nails", "Pilates"
];
