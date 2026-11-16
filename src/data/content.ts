export type GoogleReview = {
  name: string;
  city: string;
  condition: string;
  excerpt: string;
  rating: number;
  timeAgo: string;
  avatar: string;
  verified: boolean;
};

export const reviews: GoogleReview[] = [
  {
    name: "Rajesh Sharma",
    city: "Ranchi Center",
    condition: "Chronic Skin Allergy & Eczema",
    excerpt:
      "Dr. Rajeev took ample time to listen to my 4-year health chronology. After 3 months of customized remedies, my skin itchiness and flare-ups reduced by over 90% without any steroid dependency. Highly grateful!",
    rating: 5,
    timeAgo: "2 weeks ago",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    verified: true,
  },
  {
    name: "Priya Patel",
    city: "Patna Center",
    condition: "PCOD & Hormonal Health",
    excerpt:
      "I was struggling with irregular cycles and severe fatigue. Dr. Rajeev's holistic homeopathic care normalized my health naturally. The medicine delivery from ABHI Homeo Hall is prompt and hassle-free.",
    rating: 5,
    timeAgo: "3 weeks ago",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80",
    verified: true,
  },
  {
    name: "Amit Banerjee",
    city: "Kolkata OPD",
    condition: "Asthma & Dust Allergy",
    excerpt:
      "Exceptional clinical care. My chronic wheezing and seasonal asthma attacks have reduced remarkably. The doctor explains the root cause clearly and provides genuine guidance.",
    rating: 5,
    timeAgo: "1 month ago",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
    verified: true,
  },
  {
    name: "Sunita Verma",
    city: "Delhi Center",
    condition: "Child Recurrent Tonsillitis",
    excerpt:
      "My 7-year-old daughter used to get fever and throat infections every 15 days. The She & Child Care department helped boost her immunity gently. She is now healthy and active!",
    rating: 5,
    timeAgo: "1 month ago",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80",
    verified: true,
  },
  {
    name: "Vikram Malhotra",
    city: "Delhi Center",
    condition: "Migraine & Neurological Stress",
    excerpt:
      "I suffered from throbbing unilateral migraines for nearly 5 years. Dr. Rajeev's individualized constitutional approach brought me tremendous relief within weeks. Modern clinic setup and very courteous staff.",
    rating: 5,
    timeAgo: "2 months ago",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80",
    verified: true,
  },
  {
    name: "Ananya Sen",
    city: "Kolkata OPD",
    condition: "Severe Hair Fall & Alopecia",
    excerpt:
      "Consulted at the Kolkata clinic. The detailed questionnaire and holistic remedies arrested my hair thinning completely. Now seeing noticeable regrowth. Highly recommend Dr. Rajeev's clinic!",
    rating: 5,
    timeAgo: "2 months ago",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
    verified: true,
  },
  {
    name: "Dr. Alok Mishra",
    city: "Ranchi Center",
    condition: "Joint Pain & Arthritis",
    excerpt:
      "As a retired academician, knee pain had severely limited my mobility. The homeopathic formulations provided remarkable joint relief without stomach irritation or painkiller reliance.",
    rating: 5,
    timeAgo: "3 months ago",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
    verified: true,
  },
  {
    name: "Meenakshi Iyer",
    city: "Patna Center",
    condition: "Autism Guidance & Child Care",
    excerpt:
      "Dr. Rajeev's autism guidance manual and thoughtful consultation gave our family immense direction and peace of mind. He treats every child with deep warmth, patience, and clinical insight.",
    rating: 5,
    timeAgo: "3 months ago",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80",
    verified: true,
  },
];

export type PatientStory = {
  id: string;
  title: string;
  patientName: string;
  age: string;
  city: string;
  category: string;
  condition: string;
  duration: string;
  image: string;
  beforeCondition: string;
  afterOutcome: string;
  quote: string;
  clinicalApproach: string;
  milestones: string[];
  verified: boolean;
  doctor: string;
  rating: number;
  note: string;
};

export const stories: PatientStory[] = [
  {
    id: "story-autism-spectrum",
    title: "Breakthrough in Speech & Sensory Regulation in Autism Spectrum",
    patientName: "Aarav S. (Caregiver: Sneha S.)",
    age: "6 yrs",
    city: "Ranchi Center",
    category: "Child care",
    condition: "Autism Spectrum Disorder & Speech Delay",
    duration: "6 Months Care Protocol",
    image: "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?auto=format&fit=crop&w=800&q=80",
    beforeCondition: "Non-verbal communication, intense sensory overload in public, frequent hyperactivity and meltdowns.",
    afterOutcome: "Consistent eye contact, 60+ functional vocabulary words, peaceful sleep cycles, and successful transition into mainstream school.",
    quote: "Dr. Rajeev did not just give medicine; he gave our entire family hope and an actionable daily sensory routine. Aarav is now laughing, interacting, and expressing his thoughts.",
    clinicalApproach: "Constitutional Carcinosinum & Baryta Carb combined with Dr. Rajeev's proprietary Autism Guidance Manual protocol.",
    milestones: [
      "Month 1: Calmer bedtime routine & reduced sensory aggression",
      "Month 3: Spontaneous eye contact & repeating two-word phrases",
      "Month 6: Interactive play and entering kindergarten with confidence",
    ],
    verified: true,
    doctor: "Dr. Rajeev Kumar (Specialized Child Care Board)",
    rating: 5,
    note: "Shared with parental consent · Documented clinical case review",
  },
  {
    id: "story-chronic-eczema",
    title: "Complete Resolution of 4-Year Steroid-Dependent Chronic Eczema",
    patientName: "Rajesh K.",
    age: "38 yrs",
    city: "Ranchi Center",
    category: "Skin",
    condition: "Severe Flexural Eczema & Pruritus",
    duration: "4 Months Care Protocol",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    beforeCondition: "Severe, bleeding erythematous lesions on elbows, wrists, and hands; continuous burning itch dependent on topical corticosteroids.",
    afterOutcome: "Over 95% complete epidermal clearance, normal skin texture restored, zero steroid rebound after stopping all creams.",
    quote: "I was trapped in a vicious cycle of steroid creams: clear for 3 days, then flare up twice as bad. Dr. Rajeev cured it from the inside out.",
    clinicalApproach: "Constitutional Sulphur 200CH followed by Graphites & pure German Calendula external soothing wash from ABHI Homeo Hall.",
    milestones: [
      "Week 3: Intense itching and burning reduced by 50%",
      "Month 2: Cracking and bleeding stopped; skin moisture restored",
      "Month 4: Full epidermal regeneration with zero recurrence at 1-year follow-up",
    ],
    verified: true,
    doctor: "Dr. Rajeev Kumar & Dermatology Panel",
    rating: 5,
    note: "Shared with patient consent · Verified clinic case study",
  },
  {
    id: "story-kidney-stone",
    title: "Spontaneous 11mm Renal Calculus Expulsion Without Surgery",
    patientName: "Manoj P.",
    age: "42 yrs",
    city: "Patna Center",
    category: "General",
    condition: "11mm Left Ureteric Kidney Stone",
    duration: "6 Weeks Targeted Protocol",
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=800&q=80",
    beforeCondition: "Severe recurrent loin-to-groin colic, hematuria, diagnosed with an obstructing 11mm stone advised for emergency laser lithotripsy.",
    afterOutcome: "Painless fragmentation and expulsion of the calculus within 38 days; repeat ultrasound confirmed clear renal calyces and ureter.",
    quote: "The hospital told me surgery was my only option. Dr. Rajeev's German tinctures dissolved the stone smoothly without a single surgical cut or hospital admission.",
    clinicalApproach: "German Berberis Vulgaris Q, Lycopodium Clavatum 200CH, and Sarsaparilla Q with hydration guidance.",
    milestones: [
      "Week 1: Renal colic spasms stopped; urine cleared of microscopic blood",
      "Week 4: Fragmented calculus particles passed naturally in urine",
      "Week 6: USG confirmed 100% stone clearance with zero hydronephrosis",
    ],
    verified: true,
    doctor: "Dr. Rajeev Kumar & Patna OPD Team",
    rating: 5,
    note: "Shared with patient consent · Pre- and post-USG reports on record",
  },
  {
    id: "story-alopecia-hair-fall",
    title: "Dense Follicular Regrowth in Severe Alopecia Areata",
    patientName: "Neha T.",
    age: "26 yrs",
    city: "Kolkata OPD",
    category: "Hair",
    condition: "Alopecia Areata (Multifocal Scalp Patches)",
    duration: "5 Months Regimen",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    beforeCondition: "Two large coin-shaped bald patches on crown and parietal scalp, rapidly expanding with high daily hair shed.",
    afterOutcome: "Active follicular stimulation, fine vellus hair sprouted at 6 weeks, progressing to full pigmented terminal hair coverage.",
    quote: "Losing hair in chunks at 26 was psychologically painful. Dr. Rajeev's calm reassurance and remedies gave me my natural hair back completely.",
    clinicalApproach: "Fluoricum Acidum 200CH, Phosphorus, and localized German Jaborandi Q restorative hair application.",
    milestones: [
      "Month 1: Active patch expansion halted; shedding normalized",
      "Month 2: Fine baby hair visible under trichoscopy",
      "Month 5: Complete hair density restored; no patchy recurrence",
    ],
    verified: true,
    doctor: "Dr. Rajeev Kumar & Kolkata Clinical Team",
    rating: 5,
    note: "Shared with patient consent · Trichoscopy photographic tracking",
  },
  {
    id: "story-bronchial-asthma",
    title: "Inhaler De-Escalation & Breath Restoration in Chronic Asthma",
    patientName: "Amit B.",
    age: "51 yrs",
    city: "Delhi Center",
    category: "Breathing",
    condition: "Severe Chronic Bronchial Asthma",
    duration: "6 Months Support",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    beforeCondition: "Daily reliance on steroid inhalers (2-3 puffs/day), night-time wheezing, unable to climb two flights of stairs without gasping.",
    afterOutcome: "Steroid inhalers tapered off under medical supervision; lung capacity markedly improved, able to walk 3 km daily comfortably.",
    quote: "I lived in fear of cold weather and pollution. Today, my lungs feel clear, my nighttime coughing has vanished, and my inhaler is packed away.",
    clinicalApproach: "Arsenicum Iodatum 200CH, Blatta Orientalis Q, and Natrum Sulphuricum for environmental dampness sensitivity.",
    milestones: [
      "Month 1: Night-time wheezing episodes dropped from daily to once weekly",
      "Month 3: Inhaler frequency reduced by 75%; improved exercise tolerance",
      "Month 6: Normal spirometry peak flow without any maintenance inhaler",
    ],
    verified: true,
    doctor: "Dr. Rajeev Kumar & Delhi NCR Desk",
    rating: 5,
    note: "Shared with patient consent · Spirometry monitoring on record",
  },
  {
    id: "story-pcod-hormonal-reversal",
    title: "Natural Cycle Regularization & Ovarian Cyst Resolution in PCOD",
    patientName: "Priya P.",
    age: "29 yrs",
    city: "Patna Center",
    category: "Women's health",
    condition: "Polycystic Ovarian Disease (PCOD) & Metabolic Stress",
    duration: "5 Months Holistic Care",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
    beforeCondition: "Delayed cycles (every 70-90 days), multiple bilateral peripheral cysts on ultrasound, severe hormonal acne and lethargy.",
    afterOutcome: "Ultrasound confirmed total disappearance of cysts; predictable 29-day cycle restored, healthy BMI and clear complexion.",
    quote: "Conventional doctors said I would need synthetic hormones indefinitely. Dr. Rajeev addressed the underlying endocrine imbalance naturally.",
    clinicalApproach: "Pulsatilla Nigricans 200CH, Sepia Officinalis, and individualized bio-chemic tissue salts from ABHI Homeo Hall.",
    milestones: [
      "Month 2: Menstrual cycle arrived naturally without contraceptive pills",
      "Month 3: Facial cystic acne and chronic fatigue drastically improved",
      "Month 5: Pelvic USG showed normal ovarian morphology bilaterally",
    ],
    verified: true,
    doctor: "Dr. Rajeev Kumar & Women's Health Clinic",
    rating: 5,
    note: "Shared with patient consent · Pre- and post-pelvic USG verified",
  },
  {
    id: "story-knee-osteoarthritis",
    title: "Mobility & Cartilage Relief in Grade-3 Bilateral Knee Arthritis",
    patientName: "Dr. Alok Mishra (Retd. Academician)",
    age: "67 yrs",
    city: "Ranchi Center",
    category: "Joint health",
    condition: "Severe Bilateral Knee Osteoarthritis",
    duration: "6 Months Joint Regimen",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    beforeCondition: "Severe morning stiffness, crepitus, unable to walk >100 meters without sharp pain; advised bilateral knee replacement surgery.",
    afterOutcome: "80% reduction in joint pain, stopped daily NSAID painkillers, able to climb stairs and take morning walks of up to 2 km independently.",
    quote: "As a professor, staying immobilized was painful. Dr. Rajeev's homeopathic medicines saved me from surgical knee replacement and protected my kidneys.",
    clinicalApproach: "Rhus Toxicodendron 200CH, Calcarea Fluorica 6X, and Symphytum Officinale for periosteal and ligament strength.",
    milestones: [
      "Month 1: Morning stiffness reduced; eliminated NSAID painkiller dependence",
      "Month 3: Joint crepitus softened; walking endurance increased to 800m",
      "Month 6: Independent 2km morning walks resumed; surgery averted",
    ],
    verified: true,
    doctor: "Dr. Rajeev Kumar & Rheumatology Team",
    rating: 5,
    note: "Shared with patient consent · Clinical mobility evaluation verified",
  },
  {
    id: "story-chronic-migraine",
    title: "Eliminating Debilitating Unilateral Migraines & Cluster Headaches",
    patientName: "Vikram Malhotra",
    age: "35 yrs",
    city: "Delhi Center",
    category: "Neurology",
    condition: "Chronic Throbbing Migraine with Visual Aura",
    duration: "3 Months Guided Care",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    beforeCondition: "3 to 4 debilitating attacks every week with vomiting and photophobia, leading to chronic analgesic overuse and work leaves.",
    afterOutcome: "Attacks completely ceased; zero headache episodes over 8 consecutive months, restful sleep and improved mental focus.",
    quote: "I used to spend days in dark rooms with blinding headaches. After 3 months of Dr. Rajeev's treatment, I haven't had a single migraine.",
    clinicalApproach: "Spigelia Anthelmia 200CH, Belladonna for acute throbbing, followed by constitutional Natrum Muriaticum 1M.",
    milestones: [
      "Week 2: Acute headache severity decreased from 9/10 to 4/10",
      "Month 1: Frequency dropped from 4 attacks/week to 1 mild episode/month",
      "Month 3: Total freedom from migraines; discontinued all analgesics",
    ],
    verified: true,
    doctor: "Dr. Rajeev Kumar & Neurology Board",
    rating: 5,
    note: "Shared with patient consent · Documented headache diary",
  },
  {
    id: "story-allergic-rhinitis",
    title: "Long-Term Relief from Chronic Allergic Rhinitis & Morning Sneezing",
    patientName: "Sunita Verma",
    age: "41 yrs",
    city: "Delhi Center",
    category: "Allergy",
    condition: "Perennial Allergic Rhinitis & Sinusitis",
    duration: "4 Months Desensitization",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
    beforeCondition: "Continuous bouts of 30-40 morning sneezes, watery eyes, chronic post-nasal drip, and recurring frontal sinus headaches.",
    afterOutcome: "Sneezing fits completely arrested; sinuses clear on X-ray, able to withstand cold morning air and dust without any antihistamines.",
    quote: "I took antihistamines daily for over 6 years which made me drowsy. Homeopathy gave me lasting immunity and a clear nose every morning.",
    clinicalApproach: "Allium Cepa 200CH, Sabadilla, and constitutional Psorinum for seasonal and perennial allergy desensitization.",
    milestones: [
      "Month 1: Morning sneezing bouts reduced from 40 to under 5",
      "Month 2: Sinus frontal congestion and headache disappeared",
      "Month 4: Full seasonal transition without any allergy flares",
    ],
    verified: true,
    doctor: "Dr. Rajeev Kumar & ENT Care Panel",
    rating: 5,
    note: "Shared with patient consent · Clinical allergy follow-up verified",
  },
  {
    id: "story-pediatric-tonsillitis",
    title: "Avoiding Tonsillectomy in Severe Pediatric Recurrent Tonsillitis",
    patientName: "Ananya Sen (Mother: Debjani S.)",
    age: "7 yrs",
    city: "Kolkata OPD",
    category: "Child care",
    condition: "Chronic Hypertrophic Tonsillitis & Adenoids",
    duration: "4 Months Immune Protocol",
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80",
    beforeCondition: "Grade-3 kissing tonsils causing snoring, mouth-breathing, and monthly fever spikes requiring heavy antibiotics.",
    afterOutcome: "Tonsils regressed to normal grade-1 size; snoring stopped completely, zero antibiotic courses for over 18 months.",
    quote: "Two ENTs said surgical removal was mandatory. Dr. Rajeev's sweet little pills saved my daughter from surgery and built her natural strength.",
    clinicalApproach: "Baryta Carbonica 200CH, Calcarea Phosphorica 6X, and Agraphis Nutans for adenoid shrinkage.",
    milestones: [
      "Month 1: No fever flare-up; throat redness and pain subsided",
      "Month 2: Snoring reduced significantly; mouth-breathing ceased",
      "Month 4: ENT confirmed normal tonsillar size; surgery canceled",
    ],
    verified: true,
    doctor: "Dr. Rajeev Kumar & She & Child Care Clinic",
    rating: 5,
    note: "Shared with parental consent · ENT clinical records confirmed",
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  summary: string;
  body: string;
};

export const posts: BlogPost[] = [
  {
    slug: "constitutional-homeopathy-skin-allergies",
    title: "How Constitutional Homeopathy Treats Root Causes in Chronic Skin Allergies",
    category: "Clinical Guidance",
    date: "November 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&h=440&q=80",
    summary: "Discover why suppressing chronic eczema, urticaria, or fungal itchiness with temporary steroid creams often leads to relapses, and how individualized homeopathy restores epidermal balance.",
    body: "Chronic dermatological conditions are rarely just skin-deep; they often reflect an overburdened immune system or deep constitutional imbalance. Classical homeopathy focuses on understanding individual susceptibility, triggers, and family health chronology rather than just applying temporary topical suppressants. With customized constitutional remedies from ABHI Homeo Hall, patients experience a gradual, sustained reduction in itching, redness, and flare-up frequency.",
  },
  {
    slug: "gentle-pediatric-wellness-immunity",
    title: "Gentle Pediatric Wellness: Building Natural Childhood Immunity Without Harsh Drugs",
    category: "She & Child Care",
    date: "November 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=700&h=440&q=80",
    summary: "Explore safe, side-effect-free homeopathic protocols for recurrent pediatric colds, tonsillitis, chronic adenoids, and allergic coughs in infants and growing children.",
    body: "Children's developing immune systems need supportive nurturing rather than frequent rounds of strong antibiotics for self-limiting viral coughs and throat irritations. Dr. Rajeev's She & Child Care protocols use sweet, gentle homeopathic remedies that children take willingly. These remedies stimulate natural defense mechanisms, helping reduce the frequency of school absences and seasonal infections.",
  },
  {
    slug: "holistic-approach-pcod-hormonal-balance",
    title: "Understanding PCOD & Hormonal Health: A Natural Homeopathic Approach",
    category: "Women's Wellness",
    date: "October 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=700&h=440&q=80",
    summary: "Learn how targeted constitutional remedies assist in normalizing menstrual cycles, managing ovarian cysts, and balancing metabolism without artificial hormone therapy.",
    body: "Polycystic Ovarian Disease (PCOD) and metabolic irregularities affect millions of women across India. Synthetic hormone pills only induce artificial withdrawal bleeding without addressing underlying follicular cysts or insulin resistance. Homeopathic constitutional prescribing evaluates emotional stress, physical cravings, sleep cycles, and metabolic patterns to stimulate ovarian function naturally.",
  },
  {
    slug: "getting-ready-for-a-consultation",
    title: "Getting Ready for Your First Clinic OPD Consultation",
    category: "Clinic Updates",
    date: "October 2026",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=700&h=440&q=80",
    summary: "A practical checklist of previous diagnostic reports, prescription timelines, and symptom observations to bring to your appointment.",
    body: "Before your consultation at our Ranchi, Patna, Kolkata, or Delhi clinic, organize your previous medical prescriptions, blood tests, and imaging scans chronologically. Take note of any specific food intolerances, weather sensitivities, and when your symptoms feel better or worse. This helps our clinical doctors prescribe remedies with pinpoint accuracy.",
  },
];

export const conditionCategories = [
  "All",
  "Skin",
  "Child care",
  "General",
  "Hair",
  "Breathing",
  "Women's health",
  "Joint health",
  "Neurology",
  "Allergy",
];
