export type Condition = { name: string; slug: string; category: string; summary: string };

export const conditions: Condition[] = [
  { name: "Acne", slug: "acne", category: "Skin", summary: "A consultation can explore your skin history, current symptoms, and individual care needs." },
  { name: "Allergy", slug: "allergy", category: "Allergy", summary: "Discuss symptom patterns, possible triggers, and your wider health history with a clinician." },
  { name: "Alopecia", slug: "alopecia", category: "Hair", summary: "A clinician can review the pattern of hair loss and factors relevant to your health." },
  { name: "Arthritis", slug: "arthritis", category: "Joint health", summary: "Care begins with a discussion of your symptoms, diagnosis, and current treatment." },
  { name: "Asthma", slug: "asthma", category: "Breathing", summary: "Respiratory concerns need appropriate medical assessment and ongoing care planning." },
  { name: "Autism support", slug: "autism", category: "Child care", summary: "Families can discuss supportive care alongside established developmental services." },
  { name: "Dandruff", slug: "dandruff", category: "Hair", summary: "A consultation can consider scalp symptoms and factors that may affect your skin." },
  { name: "Eczema", slug: "eczema", category: "Skin", summary: "Discuss the history of skin symptoms and your existing care with a practitioner." },
  { name: "Filariasis", slug: "filariasis", category: "General", summary: "This condition requires qualified medical assessment and care coordination." },
  { name: "Hair fall", slug: "hair-fall", category: "Hair", summary: "A case review may consider the timing, pattern, and wider health context of hair fall." },
  { name: "Hemangioma", slug: "hemangioma", category: "Skin", summary: "A qualified clinician should assess any changing or concerning skin growth." },
  { name: "Hypothyroidism", slug: "hypothyroidism", category: "Hormonal health", summary: "Discuss your symptoms and existing thyroid monitoring with a qualified clinician." },
  { name: "Migraine", slug: "migraine", category: "Neurology", summary: "A consultation can review headache patterns, history, and current medical care." },
  { name: "PCOD / PCOS", slug: "pcod", category: "Women's health", summary: "Care discussions may include your symptoms, history, and existing clinician guidance." },
  { name: "Psoriasis", slug: "psoriasis", category: "Skin", summary: "A practitioner can review your skin history and coordinate with your existing care." },
  { name: "Piles", slug: "piles", category: "General", summary: "Share your symptoms with a qualified clinician to discuss suitable next steps." },
  { name: "Sinusitis", slug: "sinusitis", category: "Breathing", summary: "A consultation can explore recurring sinus symptoms and your medical history." },
  { name: "Vitiligo", slug: "vitiligo", category: "Skin", summary: "Discuss skin changes and any diagnosis with a qualified healthcare professional." },
  { name: "Warts", slug: "warts", category: "Skin", summary: "A clinician can assess skin changes and discuss appropriate care options." },
  { name: "Thyroid concerns", slug: "thyroid", category: "Hormonal health", summary: "Share your test history and current thyroid care during a consultation." },
  { name: "Asthma & allergies", slug: "asthma-allergies", category: "Breathing", summary: "Review your respiratory history and current management with a qualified clinician." },
  { name: "Child care", slug: "child-care", category: "Child care", summary: "Parents can discuss a child's health history and care needs with the clinic." },
  { name: "Skin concerns", slug: "skin-concerns", category: "Skin", summary: "A personal consultation helps the team understand your symptoms and care history." },
  { name: "Hair concerns", slug: "hair-concerns", category: "Hair", summary: "Discuss hair and scalp symptoms with a clinician familiar with your health history." },
  { name: "Joint pain", slug: "joint-pain", category: "Joint health", summary: "A consultation can review your symptoms alongside any diagnosis and current care." },
  { name: "Chronic cough", slug: "chronic-cough", category: "Breathing", summary: "Ongoing cough should be assessed by a qualified medical professional." },
  { name: "Digestive concerns", slug: "digestive-concerns", category: "General", summary: "Share symptom patterns and relevant medical history during a consultation." },
  { name: "Sleep concerns", slug: "sleep-concerns", category: "General", summary: "A clinician can discuss your sleep history and related health concerns." },
  { name: "Women's health", slug: "womens-health", category: "Women's health", summary: "Talk through your symptoms and existing medical care in a confidential consultation." },
  { name: "Childhood allergies", slug: "childhood-allergies", category: "Child care", summary: "Parents can discuss a child's symptoms and medical history with the clinic." },
];

export const featuredConditions = ["Skin concerns", "Hair fall", "Thyroid concerns", "Asthma & allergies", "Migraine", "PCOD / PCOS", "Child care", "Autism support"];

export const getCondition = (slug: string) => conditions.find((condition) => condition.slug === slug);