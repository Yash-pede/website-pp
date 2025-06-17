import { GiStarsStack } from "react-icons/gi";
import { CgPill } from "react-icons/cg";
import { BiSolidOffer } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { TfiAlarmClock } from "react-icons/tfi";
import { RiMailSendFill,RiCustomerService2Fill } from "react-icons/ri";
import { IoIosContact,IoIosChatbubbles,IoIosMail } from "react-icons/io";
import { FaFacebook, FaLinkedin, FaYoutube,FaPhoneAlt,FaShoppingCart, FaTruck } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const products = [
  {
    name: "AZEEPURE-200",
    price: "Rs. 95.00",
    composition: "Azithromycin Oral Suspension IP",
    hightlights: [
      "Upper Respiratory Tract Infections",
      "Acute Otitis Media",
      "Skin & Soft Tissue Infections",
      "Typhoid",
      "Bacterial Diarrhea",
    ],
    uses: [
      "Azithromycin is used to treat a wide variety of bacterial infections. It is a macrolide-type antibiotic. It works by stopping the growth of bacteria. This medication will not work for viral infections (such as common cold, flu). Unnecessary use or misuse of any antibiotic can lead to its decreased effectiveness.",
    ],
    howToUse: [
      "- Take this medicine by mouth. Follow the directions on the prescription label.",
      "- For the suspension already mixed by the pharmacist: Shake well before using. This medicine can be taken with food or on an empty stomach. If the medicine upsets your stomach, take it with food.",
      "- For the 1 gram single dose packet: This medicine can be taken with food or on an empty stomach. Empty the contents of a single dose packet into two ounces of water (about one quarter of a full glass).",
      "- Mix and drink all the mixture at once. Add another two ounces of water to the glass, mix well and drink all of it, to make sure you take the full dose.",
    ],
  },
  {
    name: "CVPURE-625",
    price: "Rs. 195.00",
    composition: "Amoxycillin & Potassium Clavulanate Tablet IP",
    hightlights: [
      "Bronchitis",
      "Acute Sinusitis",
      "Post surgical Infections",
      "Bone and joint infections",
      "Skin Infection]",
    ],
    uses: [
      "CVPURE 625 is a penicillin-type of antibiotic that helps your body fight infections caused by bacteria. It is used to treat infections of the lungs (e.g., pneumonia), ear, nasal sinus, urinary tract, skin and soft tissue.",
    ],
    howToUse: [
      "- Broad spectrum combination proving optimum efficacy against both gram positive & gram negative organisms",
      "- Highly active against staphylococcoi, E coli, Haemophilus influenza & klebsiella pneumonia.",
      "- Amoxicillin and Claulvanic Acid extends broad spectrum coverage against beta lactamase stains.",
      "- Achieve superior clinical cure rates compared to clotrimoxazole in UTI.",
    ],
  },
  {
    name: "Purepanta-DSR",
    price: "Rs. 99.00",
    composition:
      "Pantoprazole Gastro-resistant & Domperidone Prolonged-release Capsule IP ",
    hightlights: [
      "Reflux Oesophagitis",
      "Gastritis/Non ulcer Dyspepsia",
      "Gastric/Duodenal ulcer",
      "NSAID/Indused Dyspepsia",
      "Bloating/Fullness/Belching",
    ],
    uses: [
      "It is used in the treatment of gastrointestinal reflux disease, not responding to pantoprazole alone. This condition leads to acid regurgitating from the stomach into the food pipe, causing heartburn, chest discomfort or acidity.",
    ],
    howToUse: [
      "- A potent gastric acid inhibitor that blocks the final stage of acid secretion.",
      "- A potent dopamine receptor blocker improves GI tract motility.",
      "- Facilitates the movement of acid contents further down in the duodenum, jejunum & ileum.",
      "- Promotes contraction of gut wall.",
      "- Quickly relieves heart burn & acid belching.",
    ],
  },
  {
    name: "CIFIPURE-LB",
    price: "Rs. 125.00",
    composition: "Cefixime & Latic Acid Bacillus Dispersible Tablets",
    hightlights: [
      "Bronchitis",
      "Otisis media",
      "Tosillitis",
      "Pharyngitis",
      "Gonorrhea",
      "UTI",
    ],
    uses: [
      "This medication is an oral cephalosporin (third generation) antibiotic, prescribed for gonorrhea, tonsillitis and pharyngitis. It works by fighting against the bacteria in the body.",
    ],
    howToUse: [
      "- Cefixime works to harm the bacteria and fight the infection.",
      "- It works by preventing the formation of the bacterial protective covering which is essential for the survival of bacteria in the human body.",
      "- Lactobacillus is a live micro-organism which restores the balance of good bacteria in the intestine that may get upset with antibiotic use or due to intestinal infections.",
    ],
  },
  {
    name: "PAINPURE-AQ",
    price: "Rs. 21.50",
    composition: "Diclofenac Sodium Injection IP",
    hightlights: [
      "Mild to moderate pain",
      "Swelling",
      "Stiffness",
      "Acute musculoskeletal injuries",
      "Joint pain",
    ],
    uses: [
      "Diclofenac Sodium Injection belongs to a group of medicines called nonsteroidal anti-inflammatory drugs (NSAIDs). It is used for short-term relief of pain, inflammation, and swelling. It works by blocking chemical messengers in the brain that tell us we have pain.",
    ],
    howToUse: [
      "- Diclofenac sodium is a phenylacetic acid derivative that is a white to off-white, virtually odorless, crystalline powder.",
      "- Diclofenac sodium is freely soluble in methanol, soluble in ethanol, and practically insoluble in chloroform and in dilute acid.",
      "- Diclofenac sodium is sparingly soluble in water.",
    ],
  },
  {
    name: "PAINPURE-SP",
    price: "Rs. 99.50",
    composition: "Aceclofenac, Paracetamol & Serrationpeptidase Tablets",
    hightlights: [
      "Headache",
      "Mild migraine",
      "Musculoskeletal pain",
      "Inflammation",
    ],
    uses: [
      "Painpure -SP is a non-steroidal anti-inflammatory drug (NSAID), and Paracetamol is an antipyretic (fever reducer). They work by blocking the release of certain chemical messengers in the brain that cause pain and fever. Serratiopeptidase is an enzyme which works by breaking down abnormal proteins at the site of inflammation and promotes healing.",
    ],
    howToUse: [
      "- You have been prescribed this combination medicine for relieving pain and inflammation.",
      "- Take it with food to avoid getting an upset stomach.",
      "- Avoid consuming alcohol when taking Aceclofenac + Paracetamol + Serratiopeptidase as it may cause excessive drowsiness and increase the risk of liver damage.",
      "- Do not take it with any other medicine containing acetaminophen (drugs for pain/fever or cough-and-cold) without asking your doctor first.",
    ],
  },
  {
    name: "MULTIPRIDE C+",
    price: "Rs. 90.00",
    composition: "Vitamin C, Zinc Sulphate & Vitamin D3 Chewable Tablets",
    hightlights: [
      "Gain Immunity",
      "Healthy and glowing skin",
      "Antioxidant",
      "Lowers your risk of infections and inflammation",
      "Restores the body pool of ascorbic acid",
    ],
    uses: [
      "It is used to help growth and good health. It is used to stop or treat vitamin C deficiency. It is used to lower the urines pH.",
    ],
    howToUse: [
      "-Take with or without food. Take with food if it causes an upset stomach.",
      "- Take with a full glass of water. Mix powder with water and drink.",
      "- Chew or crush well. Mix crushed tablet with food. Do not swallow it whole.",
    ],
  },
  {
    name: "Offpride-oz",
    price: "Rs. 116.00",
    composition: "Ofloxacin 200mg + Ornidazole 500mg",
    hightlights: [
      "Diabetic and decubitus Infection",
      "Aspiration Pnuemonia",
      "Surgical wound Infections",
      "Orofacial and dental infections",
      "Skin and soft tissue Infection",
    ],
    uses: [
      "Offpride tablet is used in the treatment of bacterial & parasitic infections. It is used to treat gastrointestinal infections such as acute diarrhea or dysentery, gynecological infections, lung infections and urinary infections.",
    ],
    howToUse: [
      "- Ofloxacin works by preventing the bacterial cells from dividing and repairing, thereby killing the bacteria.",
      "- Ornidazole kills parasites and anaerobic bacteria that cause infections by damaging their DNA. Together, they treat your infection effectively.",
    ],
  },
  {
    name: "Multipride 5G",
    price: "Rs. 189.00",
    composition:
      "Sofgel Capsule of Omega-3 Fatty Acids, Green Tea Extract, Ginko Biboba, Ginseng, Grape Seed Extract, Garlic Oil, Antioxidant, Vitamins, Minerals & Trace Elements",
    hightlights: [
      "High Oxidative Stress",
      "Anorexia",
      "Cachexia Functional Fatigue",
      "Diabetes Obesity",
      "Dyslipidemia Cardiovascular Complications",
    ],
    uses: [
      "Reduces the risk of coronary outcomes and overall mortality",
      "Strengthens the immune system action",
      "Used to alleviate symptoms of age related cognitive impairment",
      "Reduces risk of cardiovascular diseases",
    ],
    howToUse: [
      "- You have been prescribed this combination medicine for relieving pain and inflammation.",
      "- Take it with food to avoid getting an upset stomach.",
      "- Avoid consuming alcohol when taking Aceclofenac + Paracetamol + Serratiopeptidase as it may cause excessive drowsiness and increase the risk of liver damage.",
      "- Do not take it with any other medicine containing acetaminophen (drugs for pain/fever or cough-and-cold) without asking your doctor first.",
    ],
  },
  {
    name: "Multipride Syrup",
    price: "Rs. 145.00",
    composition:
      "Cyanocobalamin Lycopene, Multivitamin, Multiminerals & Antioxidants Syrup in Advanced Formula",
    hightlights: [
      "Convalescence",
      "Vitamin Deficiencies",
      "Macular Degenration",
      "CVS/CNS Disorder",
      "Diabetes",
      "Post Operative",
    ],
    uses: [
      "Prevents Free radicals damage",
      "Promote good muscle tone of digestive system",
      "Enhance Immune system of body",
      "Promotes regenration of degenrating nerve terminals & provides neuronal protections",
    ],
    howToUse: [
      "- You have been prescribed this combination medicine for relieving pain and inflammation.",
      "- Take it with food to avoid getting an upset stomach.",
      "- Avoid consuming alcohol when taking Aceclofenac + Paracetamol + Serratiopeptidase as it may cause excessive drowsiness and increase the risk of liver damage.",
      "- Do not take it with any other medicine containing acetaminophen (drugs for pain/fever or cough-and-cold) without asking your doctor first.",
    ],
  },
  {
    name: "Multipride Drops",
    price: "Rs. 59.00",
    composition: "Multivitamin & Multiminerals with DHA",
    hightlights: [
      "Improve Concentration Level",
      "Promotes Visual Function",
      "Health Brain Development",
      "Imoprove I.Q. Level",
    ],
    uses: [
      "Convenient and Easy-To-Use. It can be consumed directly or in conjunction with food. You can mix it into fruit juice, cereal, milk, or other chilled or room temperature foods to increase your child's acceptance, as DHA has a peculiar marine odor. Idea for 3 months and above.",
      "Supports Cognitive Health and Learning. It also helps improve behavior and mood",
      "Overall Development of Kids: Single source of all the Multivitamins",
      "Delivers 100% of the Daily Value of essential vitamins and minerals, including vitamins A, B and D",
    ],
    howToUse: [
      "- You have been prescribed this combination medicine for relieving pain and inflammation.",
      "- Take it with food to avoid getting an upset stomach.",
      "- Avoid consuming alcohol when taking Aceclofenac + Paracetamol + Serratiopeptidase as it may cause excessive drowsiness and increase the risk of liver damage.",
      "- Do not take it with any other medicine containing acetaminophen (drugs for pain/fever or cough-and-cold) without asking your doctor first.",
    ],
  },
  {
    name: "Cifipure-0",
    price: "Rs. 95.00",
    composition: "Cefixime & Ofloxacin Tablets",
    hightlights: [
      "Broad-spectrum antibiotic for a wide range of bacterial infections",
      "Effective against respiratory, urinary, and gastrointestinal infections",
      "Rapid bacteriological eradication",
      "Suitable for mild to severe infections",
    ],
    uses: [
      "- Treatment of respiratory tract infections (e.g., bronchitis, pneumonia)",
      "- Used for urinary tract infections (UTIs)",
      "- Effective in typhoid fever",
      "- Helps treat skin and soft tissue infections",
      "- Prescribed for ear, sinus, and throat infections",
      "- Useful in certain sexually transmitted infections (e.g., gonorrhea)",
      "- Can be used for gastrointestinal infections like traveler's diarrhea",
    ],
    howToUse: [
      "- Take the tablet exactly as prescribed by your doctor.",
      "- Swallow whole with water; do not chew, crush, or break.",
      "- Can be taken with or without food, but taking with food may help reduce stomach upset.",
      "- Complete the full course even if you start feeling better.",
      "- Do not skip doses or stop early to avoid antibiotic resistance.",
      "- If you experience severe diarrhea, rash, swelling, or difficulty breathing, stop use and consult your doctor immediately.",
    ],
  },
  {
    name: "Gestopride 200SR",
    price: "Rs. 95.00",
    composition:
      "Natural Micronized Progesterone Sustained Release Tablets 200 mg",
    hightlights: [
      "Supports hormone balance in women",
      "Helps maintain pregnancy in women with progesterone deficiency",
      "Sustained release formulation for prolonged effect",
      "Bioidentical hormone for better absorption and fewer side effects",
    ],
    uses: [
      "- Used for hormone replacement therapy in women with progesterone deficiency",
      "- Helps support early pregnancy in women with a history of recurrent miscarriage or infertility",
      "- Prescribed for menstrual disorders such as irregular periods or amenorrhea",
      "- Used in assisted reproductive technology (ART) protocols to support embryo implantation",
      "- May be used to treat premenstrual syndrome (PMS) or premenstrual dysphoric disorder (PMDD)",
    ],
    howToUse: [
      "- Take the tablet exactly as prescribed by your doctor, usually once daily.",
      "- Swallow whole with water; do not crush or chew the tablet.",
      "- It is best taken at the same time each day to maintain consistent hormone levels.",
      "- Can be taken with or without food.",
      "- Do not stop taking the medicine abruptly without consulting your doctor.",
      "- Inform your doctor if you experience unusual vaginal bleeding, severe headache, or vision changes.",
    ],
  },
  {
    name: "Enofer-XT",
    price: "Rs. 95.00",
    composition:
      "Ferrous Asparto Glycinate, Methylcobalamin & L-Methylfolate Tablets",
    hightlights: [
      "Advanced iron supplement with enhanced absorption",
      "Supports healthy red blood cell formation",
      "Helps prevent and treat iron deficiency anemia",
      "Contains active forms of Vitamin B12 and folate for better efficacy",
    ],
    uses: [
      "- Used for the treatment and prevention of iron deficiency anemia",
      "- Supports management of anemia during pregnancy and lactation",
      "- Helps in cases of nutritional deficiencies related to iron, Vitamin B12, and folate",
      "- Aids in improving energy levels and reducing fatigue caused by anemia",
      "- Beneficial for individuals with poor dietary intake or increased nutritional requirements",
    ],
    howToUse: [
      "- Take the tablet exactly as prescribed by your doctor, usually once daily.",
      "- Swallow whole with water; do not crush or chew the tablet.",
      "- It is best taken after meals to minimize stomach upset.",
      "- Avoid taking with tea, coffee, or dairy products as they may reduce absorption.",
      "- Do not exceed the recommended dose.",
      "- Inform your doctor if you experience persistent stomach upset, allergic reactions, or unusual symptoms.",
    ],
  },
  {
    name: "Multipride Injection",
    price: "Rs. 95.00",
    composition:
      "Methylcobalamin, Pyridoxine, Nicotinamide & D-Panthenol Injection",
    hightlights: [
      "Rich combination of essential B vitamins",
      "Supports nerve health and regeneration",
      "Helps improve energy metabolism",
      "Aids in the treatment of vitamin B-complex deficiencies",
    ],
    uses: [
      "- Used for the treatment of vitamin B12 and B-complex deficiencies",
      "- Supports management of peripheral neuropathy and nerve pain",
      "- Helps in the treatment of anemia caused by vitamin B12 deficiency",
      "- Useful in cases of general weakness, fatigue, and poor nutrition",
      "- Can be used as adjunct therapy in neurological disorders",
    ],
    howToUse: [
      "- This injection should be administered by a healthcare professional only.",
      "- The dose and frequency will be determined by your doctor based on your condition.",
      "- Do not self-administer or adjust the dose without medical advice.",
      "- Inform your doctor if you have any allergies or are on other medications.",
      "- Report any side effects such as pain at the injection site, rash, or dizziness to your doctor immediately.",
    ],
  },
  {
    name: "Koral-Fort",
    price: "Rs. 95.00",
    composition:
      "Coral Calcium, Cyanocobalamin, L-Methylfolate, Vitamin B6, DHA & Vitamin D3 Tablets",
    hightlights: [
      "Comprehensive blend for bone and nerve health",
      "Supports healthy brain and cognitive development",
      "Promotes optimal calcium and vitamin D3 absorption",
      "Helps maintain cardiovascular and immune system function",
    ],
    uses: [
      "- Used for the prevention and treatment of calcium and vitamin D3 deficiencies",
      "- Supports bone strength and density, reducing the risk of osteoporosis",
      "- Aids in the management of vitamin B12 and folate deficiencies",
      "- Helps improve nerve function and supports neurological health",
      "- Beneficial for pregnant and lactating women to support fetal and maternal health",
      "- Promotes overall growth and development in children and adults",
    ],
    howToUse: [
      "- Take the tablet exactly as prescribed by your doctor, usually once daily.",
      "- Swallow whole with water; do not crush or chew the tablet.",
      "- Best taken after meals to enhance absorption and reduce stomach upset.",
      "- Do not exceed the recommended dose.",
      "- Inform your doctor if you are pregnant, breastfeeding, or taking other supplements or medications.",
      "- Report any unusual symptoms or allergic reactions to your healthcare provider promptly.",
    ],
  },
  {
    name: "Purepanta-IV",
    price: "Rs. 95.00",
    composition: "Pantoprazole for Injection",
    hightlights: [
      "Proton pump inhibitor for rapid acid suppression",
      "Effective in treating acid-related stomach and esophagus conditions",
      "Provides quick relief from gastric acidity and heartburn",
      "Suitable for use in hospitalized or critically ill patients",
    ],
    uses: [
      "- Used for the treatment of gastroesophageal reflux disease (GERD) and erosive esophagitis",
      "- Helps in managing Zollinger-Ellison syndrome and other conditions involving excessive stomach acid production",
      "- Provides relief from symptoms of acid reflux, such as heartburn and indigestion",
      "- Used in the prevention and treatment of stress ulcers in hospitalized patients",
      "- Can be used as part of combination therapy for Helicobacter pylori eradication",
    ],
    howToUse: [
      "- This injection should be administered by a healthcare professional only.",
      "- The dose and frequency will be determined by your doctor based on your medical condition.",
      "- Do not self-administer or adjust the dose without consulting your doctor.",
      "- Inform your healthcare provider about any allergies or current medications before receiving the injection.",
      "- Report any side effects such as rash, swelling, or difficulty breathing to your doctor immediately.",
    ],
  },
  {
    name: "GERD-RAFT",
    price: "Rs. 95.00",
    composition:
      "Sodium Alginate, Sodium Bicarbonate, Calcium Carbonate Oral Suspension",
    hightlights: [
      "Provides rapid relief from heartburn and acid reflux",
      "Forms a protective raft over stomach contents to prevent acid backflow",
      "Neutralizes excess stomach acid",
      "Suitable for use in GERD, indigestion, and related symptoms",
    ],
    uses: [
      "- Used for the symptomatic relief of gastroesophageal reflux disease (GERD)",
      "- Helps manage heartburn, acid indigestion, and sour stomach",
      "- Provides quick relief from symptoms caused by excessive stomach acid",
      "- Can be used after meals and at bedtime for ongoing protection",
      "- Suitable for adults and children as directed by a doctor",
    ],
    howToUse: [
      "- Shake the bottle well before use.",
      "- Take the oral suspension exactly as prescribed by your doctor or as directed on the label.",
      "- Usually taken after meals and at bedtime for best results.",
      "- Measure the dose carefully using a measuring cup or spoon.",
      "- Do not exceed the recommended dose.",
      "- Inform your doctor if symptoms persist or worsen, or if you experience any allergic reactions.",
    ],
  },
  {
    name: "PureCough-LS",
    price: "Rs. 95.00",
    composition: "Ambroxol Hcl, Levosalbutamol & Guaiphenesin Syrup",
    hightlights: [
      "Triple-action formula for effective cough relief",
      "Helps loosen and clear mucus from the airways",
      "Relieves chest congestion and eases breathing",
      "Suitable for both adults and children (as directed by a doctor)",
    ],
    uses: [
      "- Used for the treatment of productive (wet) cough associated with respiratory tract infections",
      "- Helps in the management of conditions like bronchitis, asthma, and chronic obstructive pulmonary disease (COPD)",
      "- Aids in loosening and expelling thick mucus from the lungs",
      "- Provides relief from chest congestion and facilitates easier breathing",
      "- Can be used as supportive therapy in upper and lower respiratory tract infections",
    ],
    howToUse: [
      "- Shake the bottle well before each use.",
      "- Take the syrup exactly as prescribed by your doctor or as mentioned on the label.",
      "- Use a proper measuring cup or spoon to ensure accurate dosing.",
      "- Can be taken with or without food.",
      "- Do not exceed the recommended dose.",
      "- Inform your doctor if you experience any side effects such as allergic reactions, palpitations, or persistent cough.",
    ],
  },
  {
    name: "ZYDINE",
    price: "Rs. 95.00",
    composition: "Fungal Diastase, Pepsin & B-Complex Syrup",
    hightlights: [
      "Supports healthy digestion and nutrient absorption",
      "Enzyme-rich formula helps break down carbohydrates and proteins",
      "Fortified with B-complex vitamins for energy and metabolism",
      "Provides relief from indigestion, bloating, and loss of appetite",
    ],
    uses: [
      "- Used for the treatment of indigestion and digestive disorders",
      "- Helps relieve symptoms of bloating, flatulence, and abdominal discomfort",
      "- Aids in improving appetite and overall digestive health",
      "- Supports recovery in cases of poor digestion due to illness or medication",
      "- Beneficial for individuals with enzyme deficiency or malnutrition",
    ],
    howToUse: [
      "- Shake the bottle well before use.",
      "- Take the syrup exactly as prescribed by your doctor or as mentioned on the label.",
      "- Use a proper measuring cup or spoon to ensure accurate dosing.",
      "- Usually taken after meals for best results.",
      "- Do not exceed the recommended dose.",
      "- Inform your doctor if you experience any allergic reactions or persistent digestive issues.",
    ],
  },
  {
    name: "Montipure-LC",
    price: "Rs. 95.00",
    composition:
      "Montelukast Sodium & Levocetirizine Hydrochloride Tablets I.P.",
    hightlights: [
      "Dual-action formula for allergy and asthma symptom relief",
      "Reduces sneezing, runny nose, and nasal congestion",
      "Helps prevent asthma attacks and breathing difficulties",
      "Non-sedating and suitable for long-term use as prescribed",
    ],
    uses: [
      "- Used for the treatment and prevention of allergic rhinitis (hay fever) and seasonal allergies",
      "- Helps manage symptoms such as sneezing, runny nose, itching, and watery eyes",
      "- Effective in controlling chronic urticaria (hives) and skin allergies",
      "- Used as adjunct therapy in asthma to prevent breathing difficulties and wheezing",
      "- Provides relief from nasal congestion and improves overall respiratory comfort",
    ],
    howToUse: [
      "- Take the tablet exactly as prescribed by your doctor, usually once daily.",
      "- Swallow the tablet whole with water; do not crush or chew.",
      "- Can be taken with or without food.",
      "- Take at the same time each day for best results.",
      "- Do not exceed the recommended dose.",
      "- Inform your doctor if you experience any side effects such as drowsiness, dry mouth, or allergic reactions.",
    ],
  },
  {
    name: "L-BINO",
    price: "Rs. 95.00",
    composition: "Pre & Probiotic Capsules",
    hightlights: [
      "Promotes healthy gut flora and digestion",
      "Supports immune system function",
      "Helps restore natural balance of intestinal bacteria",
      "Aids in the prevention of antibiotic-associated diarrhea",
    ],
    uses: [
      "- Used to improve digestive health and maintain gut flora balance",
      "- Helps prevent and manage diarrhea, especially after antibiotic use",
      "- Supports relief from symptoms of irritable bowel syndrome (IBS) and bloating",
      "- Aids in the management of constipation and other gastrointestinal disturbances",
      "- Beneficial for enhancing nutrient absorption and overall gut health",
    ],
    howToUse: [
      "- Take the capsule exactly as prescribed by your doctor or as directed on the label.",
      "- Swallow whole with water; do not crush or chew the capsule.",
      "- Can be taken with or without food, as advised by your doctor.",
      "- Take at the same time each day for best results.",
      "- Do not exceed the recommended dose.",
      "- Inform your doctor if you experience any side effects such as abdominal discomfort, allergic reactions, or persistent digestive issues.",
    ],
  },
  {
    name: "ARZINO",
    price: "Rs. 95.00",
    composition:
      "L-Arginine Proanthocyanidin, DHA, Vitamin B6, Folic Acid & Lycopene Tablets",
    hightlights: [
      "Supports cardiovascular and reproductive health",
      "Rich in antioxidants for cellular protection",
      "Promotes healthy pregnancy and fetal development",
      "Enhances blood flow and overall wellness",
    ],
    uses: [
      "- Used to support maternal health during pregnancy",
      "- Helps improve blood circulation and vascular function",
      "- Aids in fetal growth and development by providing essential nutrients",
      "- Supports antioxidant defense against cellular damage",
      "- Beneficial in reducing the risk of pregnancy complications such as preeclampsia",
      "- Can be used to enhance male and female reproductive health",
    ],
    howToUse: [
      "- Take the tablet exactly as prescribed by your doctor, usually once daily.",
      "- Swallow whole with water; do not crush or chew the tablet.",
      "- It is best taken after meals to improve absorption and reduce stomach upset.",
      "- Do not exceed the recommended dose.",
      "- Inform your doctor if you are pregnant, breastfeeding, or taking other supplements or medications.",
      "- Report any unusual symptoms or allergic reactions to your healthcare provider promptly.",
    ],
  },
  {
    name: "Vonocef 500",
    price: "Rs. 95.00",
    composition: "Cefuroxime Axetil Tablets IP 500mg",
    hightlights: [
      "Broad-spectrum antibiotic effective against various bacterial infections",
      "Second-generation cephalosporin with enhanced activity",
      "Suitable for respiratory, urinary, and skin infections",
      "Well-tolerated and effective for both adults and children (as prescribed)",
    ],
    uses: [
      "- Used for the treatment of respiratory tract infections such as bronchitis, pneumonia, and sinusitis",
      "- Helps manage urinary tract infections (UTIs)",
      "- Effective in treating skin and soft tissue infections",
      "- Prescribed for ear infections (otitis media) and throat infections (pharyngitis, tonsillitis)",
      "- Can be used for certain sexually transmitted infections as advised by your doctor",
    ],
    howToUse: [
      "- Take the tablet exactly as prescribed by your doctor, usually once or twice daily.",
      "- Swallow whole with water; do not crush or chew the tablet.",
      "- Best taken after food to enhance absorption.",
      "- Complete the full course of treatment, even if you feel better before finishing the medication.",
      "- Do not skip doses or stop early to avoid antibiotic resistance.",
      "- Inform your doctor if you experience any side effects such as diarrhea, rash, or allergic reactions.",
    ],
  },
  {
    name: "Kocal-D3",
    price: "Rs. 95.00",
    composition: "Cholecalciferol 60,000 IU Softgel Capsules",
    hightlights: [
      "High-strength vitamin D3 supplement",
      "Supports bone and teeth health",
      "Helps improve calcium absorption in the body",
      "Boosts immunity and overall well-being",
    ],
    uses: [
      "- Used for the prevention and treatment of vitamin D3 deficiency",
      "- Helps manage and prevent bone disorders such as osteoporosis and rickets",
      "- Supports healthy bone growth and mineralization",
      "- Aids in the treatment of low calcium levels in the blood",
      "- Beneficial for individuals with limited sun exposure or increased vitamin D requirements",
    ],
    howToUse: [
      "- Take the softgel capsule exactly as prescribed by your doctor, usually once weekly or as directed.",
      "- Swallow whole with water; do not chew or crush the capsule.",
      "- Best taken after meals to enhance absorption.",
      "- Do not exceed the recommended dose.",
      "- Inform your doctor if you are pregnant, breastfeeding, or taking other supplements or medications.",
      "- Report any unusual symptoms or allergic reactions to your healthcare provider promptly.",
    ],
  },
  {
    name: "Painpure-Ace",
    price: "Rs. 95.00",
    composition: "Aceclofenac & Paracetamol Tablets",
    hightlights: [
      "Dual-action pain relief and anti-inflammatory formula",
      "Effective in reducing fever, swelling, and joint pain",
      "Provides rapid relief from musculoskeletal pain",
      "Suitable for short-term use under medical supervision",
    ],
    uses: [
      "- Used for the relief of mild to moderate pain and inflammation",
      "- Helps manage conditions such as osteoarthritis, rheumatoid arthritis, and ankylosing spondylitis",
      "- Effective in treating muscle pain, back pain, dental pain, and headache",
      "- Reduces fever and associated discomfort",
      "- Can be used for post-operative pain as advised by your doctor",
    ],
    howToUse: [
      "- Take the tablet exactly as prescribed by your doctor, usually once or twice daily.",
      "- Swallow whole with water; do not crush or chew the tablet.",
      "- Best taken with food or after meals to minimize stomach upset.",
      "- Do not exceed the recommended dose or duration of use.",
      "- Avoid consuming alcohol while taking this medication.",
      "- Inform your doctor if you experience any side effects such as stomach pain, nausea, rash, or signs of liver problems.",
    ],
  },
];

export const services = [
  {
    icon: GiStarsStack,
    title: "High Efficiency",
    description:
      "We have high quality, affordable and innovative medicines solutions as per customer's choice and requirement.",
  },
  {
    icon: BiSolidOffer,
    title: "Competitive Rates",
    description:
      "Pure pride as a team – works efficiently to provide quality pharma products at most competitive rates.",
  },
  {
    icon: FaTruck,
    title: "Fast Delivery",
    description:
      "We are actively deliver the order as soon as we get confirmation by the customers.",
  },
  {
    icon: RiCustomerService2Fill,
    title: "Customer Service",
    description:
      "The company focuses on its customers and have set-ups with devoted customer services.",
  },
  {
    icon: FaShoppingCart,
    title: "Wide Distribution Network",
    description:
      "We have a specialist team of distribution network, which tracks entire ongoing business.",
  },
  {
    icon: CgPill,
    title: "High Quality Products",
    description:
      "We re-test all active ingredients of the medicine to be manufactured, and ensure that all are as per standards.",
  },
];
export const contactUs = [
  {
    icon: MdLocationOn,
    title: "Address",
    description:
      "NeuSource Startup Minds India Limited B-11, Block-B, Ground Floor,Shankar Garden, Vikas Puri New Delhi, India 110018",
  },
  {
    icon: FaPhoneAlt,
    title: "Contact No",
    description: "+91 9993946660",
  },
  {
    icon: TfiAlarmClock,
    title: "Opening Hours",
    description: "Monday to Friday: 8am to 4pm Saturday: 10am to 3pm",
  },
  {
    icon: IoIosMail,
    title: "Mail",
    description: "purepridepharma@gmail.com",
  },
];

export const formFields = [
  {
    icon: IoIosContact,
    type: "text",
    placeholder: "Enter your name",
  },
  {
    icon: RiMailSendFill,
    type: "email",
    placeholder: "Your mail",
  },
  {
    icon: FaPhoneAlt,
    type: "phone",
    placeholder: "Phone Number",
  },
  {
    icon: IoIosChatbubbles,
    type: "textarea",
    placeholder: "Write your message",
  },
];

export const footerData = {
  upper: {
    description:
      "In order to maintain defined quality standards, these medicines are thoroughly tested against numerous quality parameters under the guidance of our quality experts.",
    reachUs: {
        title: "Reach Us",
        links: [
          {
            icon: MdLocationOn,
            text: "B-11, Block-B, Ground Floor, Shankar Garden, Vikas Puri New Delhi, India 110018",
          },
          {
            icon: FaPhoneAlt,
            text: "+91 9993946660",
          },
          {
            icon: IoIosMail,
            text: "purepride@gmail.com",
          },
        ],
      },
      explore: {
        title: "Explore",
        links: [
          { text: "About Us", href: "/about" },
          { text: "Our Products", href: "/products" },
          { text: "Contact Us", href: "/contact" },
          { text: "Privacy Policy", href: "#" },
        ],
      },

    },
  lower: {
    title: "© 2021, Pure Pride Pharma PVT. LTD. All Rights Reserved.",
    button: {
      text: "Install Distributor App",
      href: "#",
    },
    socialLinks: [
      {
        icon: FaFacebook,
        href: "#",
      },
      {
        icon: FaLinkedin,
        href: "#",
      },
      {
        icon: FaXTwitter,
        href: "#",
      },
      {
        icon: FaYoutube,
        href: "#",
      },
    ],
  }
};
