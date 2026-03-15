export interface ServiceItem {
  name: string;
  price: string;
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
  acceptingClients?: boolean;
  bio?: string;
  phone?: string;
  suite?: string;
  instagram?: string;
  website?: string;
  bookingUrl?: string;
  hours?: string[];
  services?: ServiceCategory[];
}

export const professionals: Professional[] = [
  {
    name: "Kendra Denton",
    slug: "kendra-denton",
    initials: "KD",
    image: "/images/kendra-denton.JPG",
    imagePosition: "center 20%",
    profileImage: "/images/kendra-denton.JPG",
    role: "Beauty Professional",
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
    role: "Hairstylist & Intuitive Guide",
    acceptingClients: true,
    phone: "317.374.4477",
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
    name: "Lauren Martinez",
    slug: "lauren-martinez",
    initials: "LM",
    image: "/images/lauren-martinez.jpg",
    profileImage: "/images/profiles/lauren-martinez.jpg",
    galleryImages: ["/images/gallery/lauren-martinez-gallery.jpg"],
    role: "Massage Therapist, Esthetician & Yoga Instructor",
    acceptingClients: true,
    bio: "With over 18 years of experience as a massage therapist, 4 years as a skilled esthetician, and two decades as a dedicated yoga instructor, I am deeply committed to the art of holistic wellness. I offer a comprehensive approach to healing, specializing in techniques such as deep tissue, Swedish, hot stone therapy, myofascial release, cupping, and aromatherapy. My expertise also extends to facial massage, facial sculpting, body sculpting, and customized skincare treatments, including facials and professional waxing services. I incorporate energy work and sound healing into my sessions to support emotional balance and inner alignment. Passionate about caring for others, I am drawn to the transformative power of self-care and mind-body connection. Outside of my practice, I find inspiration in art and creativity, embracing their therapeutic qualities. I also enjoy the outdoors, fitness, and hiking, living a lifestyle that fosters balance, vitality, and personal expression.",
    phone: "765.721-5068",
    suite: "Suite #11",
    hours: ["Monday: CLOSED", "Tuesday: 10AM-3PM", "Wednesday: 5PM-8PM", "Thursday: 10AM-3PM", "Friday: 10AM-3PM", "Saturday: 5PM-8PM", "Sunday: 10AM-3PM"],
    services: [
      {
        category: "Massage (60/90 min)",
        items: [
          { name: "Relaxation Ritual", price: "$110/$155", description: "A gentle, flowing massage that melts tension, improves circulation, and promotes total body relaxation. Ideal for stress relief and deep rest." },
          { name: "Muscle Melt", price: "$130/$175", description: "Focused, therapeutic bodywork that targets chronic muscle tension and deep layers of fascia — perfect for pain relief and recovery." },
          { name: "Cleanse & Detox", price: "$100/$150", description: "A light, rhythmic massage that supports the body's detox process by stimulating lymphatic flow, reducing puffiness, and enhancing immune function. Ideal post-surgery or during cleansing phase." },
          { name: "Sacred Momma", price: "$110/$155", description: "A nurturing, supportive massage designed specifically for expectant mothers. Gentle techniques ease aches, reduce swelling, and promote relaxation during all trimesters." },
          { name: "Relax & Realign", price: "$100/$150", description: "Combines soothing massage with intuitive energy work to clear blockages, rebalance your chakras, and restore your natural flow — leaving you grounded and energetically refreshed." },
          { name: "Contour Ritual", price: "$120/$160", description: "A focused, firm-pressure massage using sculpting techniques to help tone, contour, and smooth the body. Encourages lymphatic drainage and can be combined with your wellness goals." },
        ],
      },
      {
        category: "Massage Upgrades",
        items: [
          { name: "Deep Tissue Focus", price: "$20" },
          { name: "Hot Stones", price: "$20" },
          { name: "Cupping", price: "$25" },
          { name: "Aromatherapy", price: "$10" },
          { name: "Gua Sha/Fascial Blasting", price: "$25" },
          { name: "Lymph Drainage", price: "$20" },
          { name: "Energy Work", price: "$20" },
          { name: "Headache Relief", price: "$20" },
        ],
      },
      {
        category: "Facials",
        items: [
          { name: "Everyday Glow", price: "$100", description: "A customized, deep cleansing facial designed to refresh, exfoliate and restore your natural glow. Perfect for maintaining skin health and radiance." },
          { name: "Clear Skin Reset", price: "$110", description: "Targets breakouts with this clarifying facial that soothes inflammation, deep cleans pores, and promotes a calm, clear complexion." },
          { name: "Timeless Glow", price: "$120", description: "This age-defying treatment uses firming techniques and active ingredients to smooth fine lines, boost collagen, and restore youthful radiance." },
          { name: "Hydra Glow", price: "$110", description: "Quench dry, dull skin with an intense moisture surge. This facial deeply hydrates, plumps, and revives skin for a dewy, refreshed look." },
          { name: "The Mini Refresh", price: "$70", description: "Pressed for time? This efficient, no-fuss facial delivers instant results in under 30 minutes — leaving your skin fresh, clean and glowing." },
          { name: "Back Detox Ritual", price: "$100", description: "A deep-cleansing treatment for your back that targets breakouts, uneven texture and dryness. Includes exfoliation, hot towels and hydration for smooth, radiant skin." },
        ],
      },
      {
        category: "Facial Upgrades",
        items: [
          { name: "Dermaplaning", price: "$30" },
          { name: "Facial Sculpting", price: "$25" },
          { name: "Face Lymphatic Drainage", price: "$25" },
        ],
      },
      {
        category: "Waxing",
        items: [
          { name: "Eyebrow", price: "$20" },
          { name: "Lip/Chin", price: "$12" },
          { name: "Underarm", price: "$25" },
          { name: "Arms", price: "$45 half / $45 full" },
          { name: "Legs", price: "$45 half / $70 full" },
          { name: "Bikini", price: "$40" },
          { name: "Brazilian", price: "$65" },
          { name: "Back/Chest", price: "$60" },
        ],
      },
    ],
    testimonials: [
      { quote: "I've been getting massages from Lauren for 10+ years. There's a reason I keep coming back to her! Outside of helping my body, she's also helped my soul. She's a compassionate, caring, kind person who takes great care of her clients. I've also received several facials from her and my skin always feels so soft when I leave. She's the total package when it comes to self care!", name: "Lindsey" },
      { quote: "I love Lauren's massages so much that I really hate for them to end.  Her facials are very relaxing too and my 72 year old skin feels so wonderful when she's done .-Kit Lauren truly has a gift with not just her massage, but with her energy work and ability to help your skin. Lauren is the first person to ever give me a massage that was not only effective, but relaxing as well. As a stylist who stands for 12hr days that's pretty amazing.", name: "Abby" },
      { quote: "Lauren has been mine and my partners masseuse for years. She does amazing work. Professional, kind, with a very loving energy.  She really has a special talent and skill. One massage broke me free of a migraine. One got my hip and SI joint feeling so much better. Highly recommend as a tool in anyone's self care.", name: "Sara" },
      { quote: "Lauren has been my massage therapist for a while now, she is professional and very knowledgeable. I highly recommend her!", name: "Mary" },
    ],

  },
  {
    name: "Marhia Ross",
    slug: "marhia-ross",
    initials: "MR",
    image: "/images/marhia-ross.jpg",
    profileImage: "/images/profiles/marhia-ross.jpg",
    galleryImages: ["/images/gallery/marhia-ross-gallery.jpg"],
    role: "Licensed Massage Therapist",
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
    name: "Andrea Godoy",
    slug: "andrea-godoy",
    initials: "AG",
    image: "/images/andrea-godoy.jpg",
    profileImage: "/images/profiles/andrea-godoy.jpg",
    galleryImages: ["/images/gallery/andrea-godoy-gallery.jpg"],
    role: "Lash Extension Specialist",
    acceptingClients: true,
    bio: "Hi Beauties! My name is Andrea, and I am a newly state certified lash tech ready to help you feel even more marvelous than you already are. By day, I am a bilingual pregnancy counselor, so you can bet I'll also love listening to you! Whether you are looking for a natural everyday look or something with a little extra drama, I'll work with you to create the most perfect set of lashes! I can't wait to meet you!",
    phone: "574.601.6456",
    suite: "Suite #17",
    hours: ["By appointment \u2014 contact to schedule"],
    services: [
      {
        category: "Services",
        items: [
          { name: "Classic Set", price: "$75" },
          { name: "Wet Set", price: "$85" },
          { name: "Hybrid Set", price: "$90" },
          { name: "Classic Fill", price: "$45" },
          { name: "Wet/Hybrid Fill", price: "$55" },
          { name: "Mini Fill", price: "$30" },
          { name: "Lash Removal", price: "$20" },
        ],
      },
    ],
    testimonials: [
      { quote: "I absolutely loved getting my lashes done with Andrea! She is truly one of a kind. I love my lashes just as much!", name: "Sofia" },
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
    bio: "My name is Abby Evans McGowen, and I've been doing hair for almost 6 years. I am married to my best friend of 8 years, and we have a beautiful daughter together. I am an extension and transition/correction specialist. I love everything color, and anything that is creative, fun, and alternative. I'm certified in 5 different extension methods, and excel in making the impossible possible with extensions and a little bit of magic. I truly love what I do, and I love making people feel their absolute best all while looking it as well. I'm currently accepting new color and extension clients (no stand alone haircuts) at this time. For more pictures of my work you can follow my instagram at: powerofthe_brush",
    phone: "765.978.8435",
    suite: "Suite #7",
    instagram: "@powerofthe_brush",
    hours: ["Monday: CLOSED", "Tuesday: CLOSED", "Wednesday: 11AM-7PM", "Thursday: 11AM-7PM", "Friday: CLOSED", "Saturday: CLOSED", "Sunday: CLOSED"],
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
    name: "Cindy Alvarez",
    slug: "cindy-alvarez",
    initials: "CA",
    image: "/images/cindy-alvarez.jpg",
    profileImage: "/images/profiles/cindy-alvarez.jpg",
    galleryImages: ["/images/gallery/cindy-alvarez-gallery.jpg"],
    role: "Hairstylist",
    acceptingClients: true,
    bio: "My name is Cindy Alvarez. I have been a hairstylist for 8 years. I love to keep up with the latest trends & attend many classes to continue my education. I strive to give my clients a relaxing space where they can come and unwind. Each shampoo includes a mini head massage and a cooling jade eye mask. I am Brazilian Blowout & Extension certified. Check out my Instagram @Cidalvastylist to see my work. Call, text, or email to set up an appointment!",
    phone: "317.753.6251",
    suite: "Suite #3",
    instagram: "@Cidalvastylist",
    hours: ["Monday: 9AM-2PM", "Tuesday: 9AM-5PM", "Wednesday: 9AM-5PM", "Thursday: 9AM-8PM", "Friday: 9AM-2PM", "Saturday: CLOSED", "Sunday: CLOSED"],
    services: [
      {
        category: "Haircuts",
        items: [
          { name: "Women's Haircut", price: "$60" },
          { name: "Little Girls' Haircut (7 & under)", price: "$40" },
        ],
      },
      {
        category: "Color",
        items: [
          { name: "All Over Haircolor", price: "$122 add Cut $25" },
          { name: "New Growth", price: "$96 add Cut $25" },
          { name: "Bleach & Tone", price: "$200+" },
          { name: "Full Highlight/Balayage (includes Olaplex)", price: "$220 add Cut $25" },
          { name: "Toner Refresh", price: "$65" },
          { name: "Additional Color", price: "$25" },
          { name: "Brow Tint", price: "$15" },
        ],
      },
      {
        category: "Styling",
        items: [
          { name: "Luxury Blowout", price: "$50" },
          { name: "Dry Style", price: "$35" },
          { name: "Updo", price: "$90" },
          { name: "Brazilian Blowout", price: "$250 Express $150" },
          { name: "Weft Extensions", price: "$100/row" },
          { name: "Tape In Extensions", price: "$30/sandwich" },
          { name: "I-tip & K-tip", price: "$100/pack" },
        ],
      },
      {
        category: "Wax",
        items: [
          { name: "Brow", price: "$15" },
          { name: "Lip", price: "$11" },
          { name: "Nose", price: "$20" },
          { name: "Full Face", price: "$50" },
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
    galleryImages: ["/images/gallery/dannette-clark-gallery.jpg"],
    role: "Hairstylist",
    bio: "Dannette has been in the industry for 25+ years. She has trained with some of the top stylists in her area. She believes in continuing education and has done numerous classes outside of the salon including classes for balayage with Candy Shaw, classes with Joseph DiMaggio, Sonya and Christopher Dove for Wella, color classes with Paul Mitchell the company, Davines color, Rusk, Euphora and Bennifactor just to name a few. She has also taken several industry business classes including Salon Inc.,and PSC Net. The love and passion Dannette has for the beauty industry is beyond words. She has learned over the years that the most important thing with a client is to listen and decipher what it is they want. She loves to pamper her clients and make them forget about the worries of the day. Dannette loves the transformation that she provides to a client through a cut or maybe a new color. She loves to do balayage, highlights, color and cutting.",
    phone: "317.769.2600",
    suite: "Suite #4",
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
    role: "Medical Doctor, Botox Provider",
    acceptingClients: true,
    bio: "Hi, I am Dr. Ben Petty, the newest team member of Salon on Point. I live in Zionsville with my wife Ali and my two sons Jack and Theo. I have 12 years of experience as an emergency physician, and I specialize in Botox treatments with a minimalistic and personalized approach. With an international certification from IAPAM, I am committed to the highest standards in aesthetic medicine. Let's redefine your look together! Using botox I can also help manage disruptive conditions such as TMJ, bruxism (teeth grinding), migraines and hyperhydrosis (excessive sweatiness).",
    phone: "812.554.8354",
    suite: "Suite #12",
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
    hours: ["By appointment \u2014 contact to schedule"],
    services: [
      {
        category: "Nails",
        items: [
          { name: "Gel-X full set", price: "$75" },
          { name: "Structured gel manicure", price: "$85" },
          { name: "Soak off", price: "$20" },
          { name: "Spa pedicure", price: "$65" },
          { name: "Paraffin", price: "$10" },
        ],
      },
      {
        category: "Nail Art",
        items: [
          { name: "Simple Art", price: "$15" },
          { name: "Complex", price: "$30" },
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
    hours: ["Monday: CLOSED", "Tuesday: CLOSED", "Wednesday: CLOSED", "Thursday: By Appointment", "Friday: By Appointment", "Saturday: By Appointment", "Sunday: CLOSED"],
    services: [
      {
        category: "Haircuts & Styling",
        items: [
          { name: "Women's Haircut", price: "$50" },
          { name: "Men's Haircut", price: "$32" },
          { name: "Children's Haircut", price: "$25 and up" },
          { name: "Blow-Out", price: "$30" },
          { name: "Event Hair/ Updo", price: "$75" },
        ],
      },
      {
        category: "Treatments",
        items: [
          { name: "Brazilian Blowout", price: "$160 and up" },
        ],
      },
      {
        category: "Color",
        items: [
          { name: "All Over Color & Cut", price: "$110" },
          { name: "Highlight & Cut", price: "$125" },
          { name: "Balayage & Cut", price: "$140 and up" },
        ],
      },
      {
        category: "Wax",
        items: [
          { name: "Brow", price: "$15" },
          { name: "Lip", price: "$10" },
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
    role: "Eyebrow Shaping & Threading",
    acceptingClients: true,
    bio: "Hello there! My name is Mayuri (feel free to call me May) and I have been threading eyebrows for over 12 years! I have been married for 9 years and we have a 2 year old son (my joy). I currently reside in Zionsville, IN. Threading has been a growing passion of mine and I have always wanted to open a business using the skills I have. I finally have that opportunity to keep my passion going with Salon on Point. I am excited to meet new faces and start my threading journey at this new location!",
    phone: "317.902.1925",
    suite: "Suite #1",
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
