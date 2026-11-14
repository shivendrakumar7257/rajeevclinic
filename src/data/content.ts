export const reviews = [
  { name: "Vidya Bhushan", city: "Ranchi", condition: "Skin concerns" },
  { name: "Shambhavi Chandan", city: "Patna", condition: "Hair fall" },
  { name: "Pankaj Kumar", city: "Kolkata", condition: "Asthma" },
  { name: "Laxmi Mahato", city: "Ranchi", condition: "Patient feedback" },
  { name: "Priyanka Dey", city: "Kolkata", condition: "Filariasis" },
  { name: "Shadab Jamil", city: "Delhi", condition: "Migraine, skin & thyroid" },
].map((review) => ({ ...review, excerpt: "Patient review excerpt placeholder — replace with feedback shared with consent." }));

export const stories = [
  { title: "Skin care journey", category: "Skin", duration: "Story details to be added", note: "Shared with patient consent" },
  { title: "A personal care plan", category: "Hair", duration: "Story details to be added", note: "Shared with patient consent" },
  { title: "Ongoing follow-up", category: "Breathing", duration: "Story details to be added", note: "Shared with patient consent" },
];

export const posts = [
  { slug: "getting-ready-for-a-consultation", title: "Getting ready for your first consultation", category: "Clinic updates", date: "Clinic update", summary: "A simple guide to sharing your health history and questions with the care team.", body: "Before your consultation, note your symptoms, when they began, any changes over time, and medicines or care you currently receive. Bring relevant reports if available. Your clinician can help decide what information matters for your next steps." },
  { slug: "online-consultations", title: "What to expect from an online consultation", category: "Care guide", date: "Care guide", summary: "How a remote conversation can help the team understand your concerns.", body: "An online consultation gives you time to discuss your health history with the clinic from home. Choose a quiet place, keep relevant reports nearby, and ask the team about any next steps or follow-up arrangements." },
  { slug: "clinic-medical-camps", title: "Community health camps", category: "Community", date: "Community update", summary: "Updates from the clinic's community outreach and free medical camps.", body: "This page will share confirmed dates and details of the clinic's medical camps. Please contact the clinic for current event information and registration details." },
  { slug: "personalised-follow-up", title: "Why follow-up conversations matter", category: "Care guide", date: "Care guide", summary: "Regular check-ins help your care team understand how your needs change.", body: "Follow-up conversations give you and your clinician a chance to review new information, discuss questions, and decide whether your care plan needs attention. Continue any prescribed care unless your treating clinician advises otherwise." },
];

export const conditionCategories = ["All", "Skin", "Hair", "Breathing", "Women's health", "Child care", "Joint health", "Hormonal health", "Neurology", "General", "Allergy"];