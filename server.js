import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const medicineDB = [
  {
    keywords: [
      "stomach pain",
      "abdominal pain",
      "stomach ache",
      "stomach cramps",
      "tummy pain",
      "tummy ache",
    ],
    category: "Stomach Pain",
    medicines: [
      {
        name: "Antacid",
        brands: "Digene, Gelusil",
        use: "Used for acidity-related stomach pain and gas",
        type: "OTC",
        warning: "If pain is severe, repeated, or sharp, consult a doctor.",
      },
      {
        name: "Drotaverine",
        brands: "Drotin",
        use: "Used for abdominal cramps",
        type: "Doctor/pharmacist advice",
        warning: "Do not use frequently without doctor advice.",
      },
    ],
    homeCare: [
      "Eat light food",
      "Avoid spicy/oily food",
      "Drink warm water",
      "Rest",
    ],
    recovery: "Mild stomach pain may improve within 1–2 days.",
  },

  {
    keywords: [
      "fever",
      "temperature",
      "body heat",
      "feverish",
      "headache",
      "body pain",
    ],
    category: "Pain, Fever, and Inflammation",
    medicines: [
      {
        name: "Paracetamol / Acetaminophen",
        brands: "Dolo 650, Calpol, Crocin, Tylenol, Parazex",
        use: "Commonly used for fever, headache, and mild-to-moderate pain",
        type: "OTC",
        warning: "Avoid overdose. Be careful in liver disease or alcohol use.",
      },
      {
        name: "Ibuprofen",
        brands: "Advil, Motrin, Brufen",
        use: "Used for fever, inflammation, and body aches",
        type: "OTC / Pharmacist advice",
        warning:
          "Avoid in stomach ulcer, kidney disease, blood thinner use, asthma sensitivity, pregnancy, or elderly risk.",
      },
    ],
    homeCare: [
      "Drink enough water",
      "Take rest",
      "Monitor temperature",
      "Avoid heavy activity",
    ],
    recovery: "Mild fever/pain usually improves in 2–3 days.",
  },

  {
    keywords: ["migraine", "severe headache"],
    category: "Migraine",
    medicines: [
      {
        name: "Paracetamol",
        brands: "Dolo 650, Crocin, Calpol",
        use: "May help mild headache",
        type: "OTC",
        warning: "If headache is severe/repeated, consult doctor.",
      },
      {
        name: "Sumatriptan",
        brands: "Imitrex",
        use: "Used for migraine headaches",
        type: "Doctor required",
        warning: "Do not self-medicate. Needs doctor advice.",
      },
    ],
    homeCare: [
      "Rest in a dark quiet room",
      "Drink water",
      "Avoid loud noise and screen time",
    ],
    recovery:
      "Mild headache may improve in hours; migraine may need doctor care.",
  },

  {
    keywords: [
      "cold",
      "sneezing",
      "runny nose",
      "blocked nose",
      "nose block",
      "allergy",
      "hay fever",
    ],
    category: "Cold and Allergy",
    medicines: [
      {
        name: "Cetirizine",
        brands: "Cetzine, Zyrtec",
        use: "Used for allergy-like cold symptoms",
        type: "OTC",
        warning: "May cause sleepiness. Avoid driving after taking it.",
      },
      {
        name: "Loratadine",
        brands: "Claritin",
        use: "Used for seasonal allergies and hay fever",
        type: "OTC",
        warning: "Consult doctor if symptoms are severe or persistent.",
      },
      {
        name: "Cold combination tablets",
        brands: "Sinarest, Wikoryl",
        use: "Used for cold, headache, blocked nose",
        type: "Pharmacist advice",
        warning:
          "May contain paracetamol. Do not combine with Dolo/Crocin without advice. Avoid in BP/heart conditions.",
      },
    ],
    homeCare: [
      "Steam inhalation",
      "Drink warm fluids",
      "Rest well",
      "Avoid cold drinks",
    ],
    recovery: "Common cold usually improves in 3–7 days.",
  },

  {
    keywords: [
      "nose pain",
      "sinus",
      "sinus pain",
      "sinusitis",
      "nasal congestion",
    ],
    category: "Nose and Sinus",
    medicines: [
      {
        name: "Saline nasal spray",
        brands: "Nasoclear, Saline Spray",
        use: "Helps nasal dryness/congestion",
        type: "OTC",
        warning:
          "Safe for most people, but consult doctor if symptoms persist.",
      },
      {
        name: "Antihistamine",
        brands: "Cetirizine, Loratadine",
        use: "May help allergy-related sneezing/runny nose",
        type: "OTC",
        warning: "Cetirizine may cause sleepiness.",
      },
    ],
    homeCare: [
      "Steam inhalation",
      "Drink warm fluids",
      "Avoid dust",
      "Use saline spray",
    ],
    recovery: "Mild nasal congestion may improve in 3–7 days.",
  },

  {
    keywords: [
      "cough",
      "dry cough",
      "wet cough",
      "throat irritation",
      "sore throat",
      "throat pain",
    ],
    category: "Cough and Throat",
    medicines: [
      {
        name: "Cough syrup / Lozenges",
        brands: "Benadryl, Honitus, Strepsils",
        use: "May help cough or throat irritation",
        type: "OTC / Pharmacist advice",
        warning:
          "Some cough syrups cause sleepiness. Avoid self-use in small children.",
      },
      {
        name: "Paracetamol",
        brands: "Dolo 650, Crocin",
        use: "May help throat pain with fever/body pain",
        type: "OTC",
        warning: "Avoid overdose and liver disease risk.",
      },
    ],
    homeCare: [
      "Warm salt water gargle",
      "Drink warm fluids",
      "Avoid smoke and dust",
    ],
    recovery: "Mild cough/throat irritation may improve in 3–7 days.",
  },

  {
    keywords: [
      "ear pain",
      "ear ache",
      "earache",
      "ear block",
      "ear wax",
      "ear itching",
    ],
    category: "Ear Problems",
    medicines: [
      {
        name: "Paracetamol",
        brands: "Dolo 650, Crocin",
        use: "May help mild ear pain",
        type: "OTC",
        warning: "Ear infection may need doctor diagnosis.",
      },
      {
        name: "Ear wax softening drops",
        brands: "Clearwax, Soliwax",
        use: "May help ear wax blockage",
        type: "Pharmacist advice",
        warning:
          "Do not use if ear discharge, injury, severe pain, or eardrum problem.",
      },
    ],
    homeCare: [
      "Do not insert earbuds deeply",
      "Keep ear dry",
      "Use warm compress externally",
    ],
    recovery:
      "Mild ear discomfort may improve in 1–3 days; infection needs doctor care.",
  },

  {
    keywords: [
      "eye pain",
      "eye irritation",
      "red eyes",
      "itchy eyes",
      "dry eyes",
      "eye burning",
      "watery eyes",
    ],
    category: "Eye Problems",
    medicines: [
      {
        name: "Lubricating eye drops",
        brands: "Refresh Tears, Systane",
        use: "Relieves dryness and mild irritation",
        type: "OTC",
        warning: "Use clean hands. Do not touch dropper tip to eye.",
      },
      {
        name: "Antihistamine eye drops",
        brands: "Olopatadine, Pataday",
        use: "May help allergic itchy/red eyes",
        type: "Pharmacist advice",
        warning:
          "Consult eye doctor if pain, vision change, or severe redness.",
      },
    ],
    homeCare: [
      "Avoid rubbing eyes",
      "Reduce screen time",
      "Use cold compress",
      "Wash eyes with clean water",
    ],
    recovery: "Mild irritation may improve in 1–2 days.",
  },

  {
    keywords: [
      "tooth pain",
      "toothache",
      "gum pain",
      "dental pain",
      "mouth pain",
    ],
    category: "Dental Problems",
    medicines: [
      {
        name: "Paracetamol",
        brands: "Dolo 650, Crocin",
        use: "May help mild dental pain temporarily",
        type: "OTC",
        warning: "Dental infection needs dentist treatment.",
      },
      {
        name: "Clove oil",
        brands: "Clove oil",
        use: "May provide temporary relief for tooth pain",
        type: "OTC / Pharmacist advice",
        warning: "Use carefully; avoid swallowing large amounts.",
      },
    ],
    homeCare: [
      "Warm salt water rinse",
      "Avoid very hot/cold foods",
      "Maintain oral hygiene",
    ],
    recovery: "Pain relief may be temporary; dental cause needs dentist.",
  },

  {
    keywords: ["mouth ulcer", "ulcer", "mouth sore", "tongue ulcer"],
    category: "Mouth Ulcer",
    medicines: [
      {
        name: "Mouth ulcer gel",
        brands: "Dologel, Zytee",
        use: "May reduce mouth ulcer discomfort",
        type: "OTC / Pharmacist advice",
        warning:
          "Consult doctor if ulcers last more than 2 weeks or repeat often.",
      },
    ],
    homeCare: ["Avoid spicy food", "Drink water", "Maintain oral hygiene"],
    recovery: "Usually improves in 7–10 days.",
  },

  {
    keywords: ["skin rash", "rash", "itching", "skin allergy", "hives"],
    category: "Skin Allergy",
    medicines: [
      {
        name: "Antihistamine",
        brands: "Cetirizine, Loratadine, Allegra",
        use: "May help itching/allergy symptoms",
        type: "OTC / Pharmacist advice",
        warning:
          "Seek urgent help if swelling of lips/face or breathing difficulty.",
      },
      {
        name: "Calamine lotion",
        brands: "Caladryl, Calamine",
        use: "Soothes itching and mild irritation",
        type: "OTC",
        warning: "Avoid applying on open wounds.",
      },
    ],
    homeCare: [
      "Avoid scratching",
      "Use cool compress",
      "Avoid suspected allergen",
    ],
    recovery: "Mild allergy/rash may improve in 1–3 days.",
  },

  {
    keywords: ["fungal infection", "ringworm", "itchy patch", "athlete foot"],
    category: "Fungal Skin Problem",
    medicines: [
      {
        name: "Antifungal cream",
        brands: "Clotrimazole, Candid",
        use: "Used for common fungal skin infections",
        type: "Pharmacist advice",
        warning:
          "Consult doctor if spreading, recurring, or near eyes/genitals.",
      },
      {
        name: "Fluconazole",
        brands: "Diflucan",
        use: "Used for specific fungal infections",
        type: "Doctor required",
        warning: "Do not self-medicate.",
      },
    ],
    homeCare: [
      "Keep area dry",
      "Avoid sharing towels",
      "Wear loose cotton clothes",
    ],
    recovery: "Mild fungal infection may take 1–2 weeks.",
  },

  {
    keywords: ["acne", "pimple", "pimples"],
    category: "Acne",
    medicines: [
      {
        name: "Benzoyl peroxide gel",
        brands: "Benzac AC",
        use: "Used for mild acne",
        type: "OTC / Pharmacist advice",
        warning: "May cause dryness/irritation. Avoid eyes/lips.",
      },
      {
        name: "Doxycycline",
        brands: "Doryx, Adoxa",
        use: "Used for some acne cases",
        type: "Doctor required",
        warning: "Antibiotic. Do not self-medicate.",
      },
    ],
    homeCare: [
      "Wash face gently",
      "Avoid squeezing pimples",
      "Use non-oily products",
    ],
    recovery: "Mild acne may improve over weeks.",
  },

  {
    keywords: ["cut", "wound", "minor injury", "scratch", "burn", "minor burn"],
    category: "Minor Wound/Burn",
    medicines: [
      {
        name: "Antiseptic solution",
        brands: "Betadine, Savlon",
        use: "Used for cleaning minor cuts/wounds",
        type: "OTC",
        warning: "Deep wounds, animal bites, or burns need medical care.",
      },
      {
        name: "Burn cream",
        brands: "Silver sulfadiazine",
        use: "Used for burns",
        type: "Doctor/pharmacist advice",
        warning: "Do not apply random creams on severe burns.",
      },
    ],
    homeCare: [
      "Wash with clean water",
      "Keep wound clean",
      "Cover with sterile dressing",
    ],
    recovery: "Minor cuts may improve in a few days; burns depend on severity.",
  },

  {
    keywords: [
      "acidity",
      "gas",
      "heartburn",
      "acid reflux",
      "gerd",
      "stomach burning",
    ],
    category: "Stomach and Digestion",
    medicines: [
      {
        name: "Antacid",
        brands: "Gelusil, Digene",
        use: "Used for acidity and gas",
        type: "OTC",
        warning: "If repeated acidity occurs, consult doctor.",
      },
      {
        name: "Omeprazole",
        brands: "Prilosec",
        use: "Used for heartburn and acid reflux",
        type: "Pharmacist/doctor advice",
        warning: "Do not use regularly without medical advice.",
      },
      {
        name: "Pantoprazole",
        brands: "Protonix, Pan 40, Pantocid",
        use: "Used for GERD and acid reflux",
        type: "Doctor/pharmacist advice",
        warning: "Frequent symptoms need doctor consultation.",
      },
    ],
    homeCare: [
      "Avoid spicy food",
      "Eat smaller meals",
      "Do not lie down immediately after food",
    ],
    recovery: "Mild acidity may improve within 1–2 days.",
  },

  {
    keywords: [
      "loose motion",
      "diarrhea",
      "vomiting",
      "dehydration",
      "stomach upset",
    ],
    category: "Diarrhea and Dehydration",
    medicines: [
      {
        name: "ORS",
        brands: "Electral, ORS packets",
        use: "Helps prevent dehydration",
        type: "OTC",
        warning: "Severe dehydration needs urgent medical care.",
      },
      {
        name: "Probiotic",
        brands: "Enterogermina, Sporolac",
        use: "May help gut recovery",
        type: "OTC / Pharmacist advice",
        warning: "Consult doctor if fever, blood in stool, or severe weakness.",
      },
      {
        name: "Loperamide",
        brands: "Imodium",
        use: "Used for diarrhea relief",
        type: "Pharmacist/doctor advice",
        warning:
          "Avoid if fever or blood in stool. Do not self-use in children.",
      },
    ],
    homeCare: ["Drink ORS", "Eat light food", "Avoid oily food", "Rest"],
    recovery: "Mild diarrhea may improve in 1–3 days.",
  },

  {
    keywords: ["constipation", "hard stool"],
    category: "Constipation",
    medicines: [
      {
        name: "Lactulose",
        brands: "Lactihep, Duphalac",
        use: "Used for constipation",
        type: "Doctor/pharmacist advice",
        warning: "Consult doctor if constipation is frequent or severe.",
      },
    ],
    homeCare: ["Drink water", "Eat fiber-rich food", "Walk daily"],
    recovery: "Mild constipation may improve in 1–3 days.",
  },

  {
    keywords: [
      "burning urine",
      "urine pain",
      "uti",
      "urinary infection",
      "frequent urination",
    ],
    category: "Urinary Problems",
    medicines: [
      {
        name: "Urine alkalizer",
        brands: "Citralka, Alkacitron",
        use: "May relieve burning urine discomfort",
        type: "Pharmacist advice",
        warning: "UTI may need urine test and antibiotics by doctor.",
      },
      {
        name: "Antibiotics",
        brands: "Ciprofloxacin, Nitrofurantoin",
        use: "Used for some UTIs",
        type: "Doctor required",
        warning: "Do not take antibiotics without prescription.",
      },
    ],
    homeCare: ["Drink water", "Do not hold urine", "Maintain hygiene"],
    recovery: "Mild irritation may improve; UTI needs doctor care.",
  },

  {
    keywords: [
      "infection",
      "bacterial infection",
      "throat infection",
      "ear infection",
      "skin infection",
    ],
    category: "Bacterial Infections",
    medicines: [
      {
        name: "Amoxicillin",
        brands: "Amoxil, Amoxible",
        use: "Used for some bacterial infections",
        type: "Doctor required",
        warning: "Antibiotic. Do not take without prescription.",
      },
      {
        name: "Azithromycin",
        brands: "Zithromax",
        use: "Used for some respiratory infections",
        type: "Doctor required",
        warning: "Antibiotic. Do not self-medicate.",
      },
      {
        name: "Metronidazole",
        brands: "Flagyl",
        use: "Used for some bacterial/parasitic infections",
        type: "Doctor required",
        warning: "Do not self-medicate.",
      },
    ],
    homeCare: [
      "Drink water",
      "Rest",
      "Do not start antibiotics without doctor advice",
    ],
    recovery: "Depends on infection type and treatment.",
    doctorRequired: true,
  },
];

const emergencyKeywords = [
  "chest pain",
  "breathing problem",
  "difficulty breathing",
  "fainting",
  "unconscious",
  "severe bleeding",
  "seizure",
  "heart attack",
  "stroke",
  "blood vomiting",
  "severe dehydration",
  "vision loss",
  "sudden blindness",
  "severe eye pain",
  "eye injury",
  "chemical in eye",
  "face swelling",
  "lip swelling",
  "tongue swelling",
  "animal bite",
  "deep wound",
  "severe burn",
];


function removeDuplicates(array, key) {
  return [...new Map(array.map((item) => [item[key], item])).values()];
}

function getAgeWarning(age) {
  const numAge = Number(age);

  if (!age) return "Age not provided. Medicine safety depends on age.";
  if (numAge < 2)
    return "Age below 2 years: do not give medicines without pediatric doctor advice.";
  if (numAge < 12)
    return "Child age: avoid self-medication. Dose and medicine must be confirmed by pediatrician/pharmacist.";
  if (numAge >= 60)
    return "Elderly age: higher risk of side effects. Consult doctor/pharmacist before medicines.";

  return "Adult age: follow label instructions and consult doctor/pharmacist if unsure.";
}

function filterMedicinesBySafety(medicines, age, allergies, conditions) {
  const numAge = Number(age);
  const allergyText = (allergies || "").toLowerCase();
  const conditionText = (conditions || "").toLowerCase();

  return medicines.filter((med) => {
    const name = med.name.toLowerCase();
    const brands = med.brands.toLowerCase();
    const combined = `${name} ${brands}`;

    if (allergyText && combined.includes(allergyText)) return false;

    if (allergyText.includes("paracetamol") && combined.includes("paracetamol"))
      return false;
    if (allergyText.includes("dolo") && combined.includes("dolo")) return false;
    if (allergyText.includes("crocin") && combined.includes("crocin"))
      return false;
    if (allergyText.includes("ibuprofen") && combined.includes("ibuprofen"))
      return false;
    if (allergyText.includes("cetirizine") && combined.includes("cetirizine"))
      return false;
    if (allergyText.includes("sinarest") && combined.includes("sinarest"))
      return false;
    if (allergyText.includes("amoxicillin") && combined.includes("amoxicillin"))
      return false;
    if (allergyText.includes("penicillin") && combined.includes("amoxicillin"))
      return false;

    if (conditionText.includes("liver") && combined.includes("paracetamol"))
      return false;
    if (conditionText.includes("kidney") && combined.includes("ibuprofen"))
      return false;
    if (conditionText.includes("ulcer") && combined.includes("ibuprofen"))
      return false;
    if (conditionText.includes("asthma") && combined.includes("ibuprofen"))
      return false;
    if (conditionText.includes("bp") && combined.includes("sinarest"))
      return false;
    if (
      conditionText.includes("blood pressure") &&
      combined.includes("sinarest")
    )
      return false;
    if (conditionText.includes("pregnancy")) return false;

    if (numAge && numAge < 12) {
      if (med.type.toLowerCase().includes("doctor")) return false;
      if (combined.includes("sinarest")) return false;
      if (combined.includes("loperamide")) return false;
      if (combined.includes("cough syrup")) return false;
      if (combined.includes("ear wax")) return false;
    }

    if (numAge && numAge >= 60) {
      if (combined.includes("ibuprofen")) return false;
      if (combined.includes("sinarest")) return false;
    }

    return true;
  });
}

function detectSeverity(symptoms, age) {
  const text = symptoms.toLowerCase();
  const numAge = Number(age);
  let score = 0;

  if (emergencyKeywords.some((word) => text.includes(word))) score += 5;
  if (text.includes("blood")) score += 4;
  if (text.includes("high fever")) score += 3;
  if (text.includes("severe pain")) score += 3;
  if (text.includes("continuous vomiting")) score += 3;
  if (text.includes("fever")) score += 1;
  if (text.includes("cough")) score += 1;
  if (text.includes("cold")) score += 1;
  if (text.includes("headache")) score += 1;
  if (text.includes("body pain")) score += 1;
  if (text.includes("loose motion") || text.includes("diarrhea")) score += 1;
  if (
    text.includes("eye pain") ||
    text.includes("ear pain") ||
    text.includes("tooth pain")
  )
    score += 1;

  if (numAge && numAge < 5) score += 2;
  if (numAge && numAge >= 60) score += 2;

  if (score >= 5) return "severe";
  if (score >= 3) return "moderate";
  return "mild";
}
// 🔥 ADD HERE (after your helper functions)

function normalizeSymptoms(input) {
  const text = input.toLowerCase();

  let keywords = [];

  // 👁 Eye detection
  if (text.includes("eye") || text.includes("eyes")) {
    if (text.includes("pain") || text.includes("hurting")) {
      keywords.push("eye pain");
    }
    if (text.includes("red")) {
      keywords.push("red eyes");
    }
    if (text.includes("itch")) {
      keywords.push("itchy eyes");
    }
    if (text.includes("dry") || text.includes("laptop") || text.includes("screen")) {
      keywords.push("dry eyes");
    }
  }

  // 🤒 Fever
  if (text.includes("fever") || text.includes("temperature")) {
    keywords.push("fever");
  }

  // 🤧 Cold
  if (text.includes("cold") || text.includes("sneezing") || text.includes("runny nose")) {
    keywords.push("cold");
  }

  // 🤕 Headache
  if (text.includes("headache") || text.includes("head pain")) {
    keywords.push("headache");
  }

  return keywords;
}



app.post("/healthmate", (req, res) => {
  const { symptoms, age, allergies, conditions } = req.body;

  if (!symptoms) {
    return res.status(400).json({ error: "Please enter symptoms" });
  }

  const text = symptoms.toLowerCase();
  const severity = detectSeverity(symptoms, age);
  const isEmergency = emergencyKeywords.some((word) => text.includes(word));

  if (isEmergency || severity === "severe") {
    return res.json({
      emergency: true,
      severity,
      message:
        "Your symptoms may be serious. Seek immediate medical help or visit the nearest hospital. Do not rely only on AI advice.",
    });
  }

  // const matches = medicineDB.filter((item) =>
  //   item.keywords.some((keyword) => text.includes(keyword)),
  // );
  // 🔥 Convert sentence → smart keywords
const detectedKeywords = normalizeSymptoms(symptoms);

// 🔥 Smart matching
const matches = medicineDB.filter((item) =>
  item.keywords.some(
    (keyword) =>
      text.includes(keyword) || detectedKeywords.includes(keyword)
  )
);

  if (matches.length === 0) {
    return res.json({
      emergency: false,
      severity,
      medicines: [
        {
          name: "General advice needed",
          brands: "No safe medicine suggestion",
          use: "Your symptoms need more details",
          type: "Doctor/pharmacist advice",
          warning: "Consult a doctor/pharmacist before taking medicine.",
        },
      ],
      homeCare: ["Drink water", "Take rest", "Monitor symptoms"],
      recovery: "Recovery time depends on the cause.",
      warnings: [
        getAgeWarning(age),
        `Severity: ${severity.toUpperCase()}`,
        `Allergies: ${allergies || "None mentioned"}`,
        `Existing conditions: ${conditions || "None mentioned"}`,
        "Do not take random medicines without proper advice.",
      ],
      doctor: [
        "If symptoms worsen",
        "If symptoms continue for more than 2–3 days",
        "If chest pain, breathing difficulty, fainting, or severe weakness occurs",
      ],
      disclaimer:
        "This is general information, not a prescription. Consult a qualified doctor/pharmacist.",
    });
  }

  let medicines = removeDuplicates(
    matches.flatMap((item) => item.medicines),
    "name",
  );
  medicines = filterMedicinesBySafety(medicines, age, allergies, conditions);

  if (medicines.length === 0) {
    medicines = [
      {
        name: "No safe OTC medicine suggestion",
        brands: "Because of age/allergy/existing condition",
        use: "Please consult a doctor/pharmacist",
        type: "Doctor/pharmacist advice",
        warning:
          "Your entered age, allergy, or condition may make common medicines unsafe.",
      },
    ];
  }

  const homeCare = [...new Set(matches.flatMap((item) => item.homeCare))];
  const recovery = matches.map((item) => item.recovery).join(" / ");
  const hasDoctorRequired = matches.some((item) => item.doctorRequired);

  res.json({
    emergency: false,
    severity,
    medicines,
    homeCare,
    recovery,
    warnings: [
      getAgeWarning(age),
      `Severity: ${severity.toUpperCase()}`,
      severity === "moderate"
        ? "Moderate risk detected. Monitor symptoms closely."
        : "Mild condition detected. Home care may be enough if symptoms do not worsen.",
      `Allergies: ${allergies || "None mentioned"}`,
      `Existing conditions: ${conditions || "None mentioned"}`,
      "Do not mix medicines with the same ingredient.",
      "Avoid self-medication in pregnancy, children, elderly people, or chronic diseases.",
      hasDoctorRequired
        ? "Some medicines shown are prescription-only and require doctor consultation."
        : "Use OTC medicines only as per label/pharmacist advice.",
    ],
    doctor: [
      "If symptoms are severe",
      "If symptoms do not improve in expected time",
      "If you have chest pain, breathing difficulty, fainting, or severe weakness",
      "If you have diabetes, BP, heart disease, kidney/liver disease, pregnancy, or symptoms in eye/ear/dental areas",
    ],
    disclaimer:
      "This is general OTC information, not a prescription. Consult a doctor/pharmacist before taking medicines.",
  });
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});
