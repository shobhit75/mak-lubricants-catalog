/* Navigation data mirrors the official MAK automobile lubricant category structure and uploaded source thumbnails. */
export type MakProduct = { name: string; slug: string; image: string; detail: string; category: string };
export type MakCategory = { name: string; slug: string; image: string; description: string; products: MakProduct[] };

const p = (category: string, name: string, slug: string, image: string, detail: string): MakProduct => ({ category, name, slug, image, detail });

export const makCategories: MakCategory[] = [
  { name: "Bikes and Scooters", slug: "bikes-and-scooters", image: "/manus-storage/bikes_6e5d8fec.jpg", description: "", products: [
    p("bikes-and-scooters", "MAK 4T NXT SYNTH", "mak-4t-nxt-synth", "/manus-storage/nxt-synth_d85b3d0c.jpg", "Synthetic 4T engine oil"),
    p("bikes-and-scooters", "MAK 4T NXT PRO", "mak-4t-nxt-pro", "/manus-storage/nxt-pro_4374f75e.jpg", "Advanced 4T protection"),
    p("bikes-and-scooters", "MAK 4T NXT 15W-50", "mak-4t-nxt-15w-50", "/manus-storage/nxt-15w50_957caa7c.jpg", "15W-50 motorcycle oil"),
    p("bikes-and-scooters", "MAK 4T NXT 20W-50", "mak-4t-nxt-20w-50", "/manus-storage/nxt-20w50_62f96913.jpg", "20W-50 motorcycle oil"),
    p("bikes-and-scooters", "MAK 4T NXT 10W-30", "mak-4t-nxt-10w-30", "/manus-storage/mak-2t_d74433e0.jpg", "10W-30 motorcycle oil"),
    p("bikes-and-scooters", "MAK 4T NXT 20W-40", "mak-4t-nxt-20w-40", "/manus-storage/nxt-20w40_61bda564.jpg", "20W-40 motorcycle oil"),
    p("bikes-and-scooters", "MAK 4T SCCOTECH NXT 5W-30", "mak-4t-sccotech-nxt-5w-30", "/manus-storage/scootech-nxt_94a9fd4c.jpg", "Scooter engine oil"),
    p("bikes-and-scooters", "MAK 2T", "mak-2t", "/manus-storage/mak-2t_d74433e0.jpg", "2T engine oil"),
    p("bikes-and-scooters", "MAK 4T STAR", "mak-4t-star", "/manus-storage/mak-4t-star_3f9a7d20.png", "4T engine oil"),
    p("bikes-and-scooters", "MAK 4T SCOOTECH 10W-30", "mak-4t-scootech-10w-30", "/manus-storage/scootech-10w30_d2e4c691.png", "10W-30 scooter oil"),
  ]},
  { name: "Auto & CNG", slug: "auto-and-cng", image: "/manus-storage/auto_3ed6be15.png", description: "", products: [] },
  { name: "Cars & SUVs", slug: "cars-and-suvs", image: "/manus-storage/cars_a46fe7c2.jpg", description: "", products: [
    p("cars-and-suvs", "MAK Classic 20W-50", "mak-classic-20w-50", "/manus-storage/t-mak-classic-20w-50-sl_2f9e998f.png", "Engine oil for everyday driving"),
    p("cars-and-suvs", "MAK Alpha Zenith 5W-40", "mak-alpha-zenith-5w-40", "/manus-storage/t-mak-alpha-zenith-5w-40_706dec4a.png", "Premium synthetic performance"),
    p("cars-and-suvs", "MAK Alpha Zenith 15W-40", "mak-alpha-zenith-15w-40", "/manus-storage/t-mak-alpha-zenith-15w-40_c44edff1.png", "High-performance engine oil"),
    p("cars-and-suvs", "MAK Classic Plus 5W-30", "mak-classic-plus-5w-30", "/manus-storage/t-mak-classic-plus-5w-30_0d621661.png", "Fuel-efficient car oil"),
  ]},
  { name: "Trucks & Buses", slug: "trucks-and-buses", image: "/manus-storage/trucks_e0008e8e.jpg", description: "", products: [
    p("trucks-and-buses", "MAK Multigrade", "mak-multigrade", "/manus-storage/t-mak-multigrade-20w-40_f554bf20.png", "Multigrade commercial vehicle oil"),
    p("trucks-and-buses", "MAK Fleet Mini CL4+ 15W-40", "mak-fleet-mini-cl4-15w-40", "/manus-storage/t-mak-fleet-mini-15w-40_ae58459c.png", "Fleet-ready diesel engine oil"),
  ]},
  { name: "Agriculture", slug: "agriculture", image: "/manus-storage/agriculture_83d4bcde.jpg", description: "", products: [
    p("agriculture", "MAK Trac Champion Mini 15W-40 CF-4", "mak-trac-champion-mini-15w-40", "/manus-storage/t-mak-trac-champion-mini-15w-40_d307d8ae.png", "Agricultural diesel engine oil"),
    p("agriculture", "MAK Trac Champion Mini 20W-40 CF-4", "mak-trac-champion-mini-20w-40", "/manus-storage/t-mak-trac-champion-mini-20w-40_1838835a.png", "Tractor engine oil"),
    p("agriculture", "MAK Trac Champion 15W-40 CF-40", "mak-trac-champion-15w-40", "/manus-storage/t-mak-trac-champion-15w-40_e0741024.png", "Heavy-duty tractor oil"),
    p("agriculture", "MAK Trac Champion Plus 15W-40 CL4 Plus", "mak-trac-champion-plus-15w-40", "/manus-storage/t-mak-trac-champion-plus-15w-40_b81de855.png", "Premium tractor protection"),
  ]},
  { name: "Greases", slug: "greases", image: "/manus-storage/greases_5acd38d7.jpg", description: "", products: [
    p("greases", "MAK LL Grease", "mak-ll-grease", "/manus-storage/t-ll-3-grease-pail-p_67f60d9c.jpg", "Long-life grease"),
    p("greases", "MAK MP Grease", "mak-mp-grease", "/manus-storage/t-mp-grease-3-pail-p_660483ef.jpg", "Multipurpose grease"),
    p("greases", "MAK Univex A", "mak-univex-a", "/manus-storage/t-univex-ae-pail-p_c88fa48d.jpg", "Specialty automotive grease"),
    p("greases", "MAK Univex CD", "mak-univex-cd", "/manus-storage/t-univex-cd-p_a3722c78.jpg", "Heavy-duty grease"),
    p("greases", "MAK WB Grease Special", "mak-wb-grease-special", "/manus-storage/t-wb-grease-pail-p_4079dd31.jpg", "Water-resistant grease"),
  ]},
  { name: "Specialties", slug: "specialties", image: "/manus-storage/specialties_919019a7.jpg", description: "", products: [
    p("specialties", "MAK Adblue", "mak-adblue", "/manus-storage/1000195460_dac9fdfc.png", "Emission-control fluid"),
    p("specialties", "MAK Chain Spray", "mak-chain-spray", "/manus-storage/t-mak-chain-spray_3caef273.png", "Chain maintenance spray"),
    p("specialties", "MAK Multi Purpose Spray", "mak-multi-purpose-spray", "/manus-storage/t-mak-multipurpose-spray_8265f6e1.png", "Multi-purpose maintenance spray"),
  ]},
  { name: "Marine Boats", slug: "marine-boats", image: "/manus-storage/marine_8bdf97d0.jpg", description: "", products: [] },
  { name: "Gears & Transmission", slug: "gears-and-transmission", image: "/manus-storage/gears_2d550cb0.jpg", description: "", products: [] },
];

export const findCategory = (slug: string) => makCategories.find((category) => category.slug === slug);
export const findProduct = (categorySlug: string, productSlug: string) => findCategory(categorySlug)?.products.find((product) => product.slug === productSlug);

export const officialProductCopy: Record<string, string[]> = {
  "mak-4t-nxt-synth": ["Fully synthetic 4-stroke petrol engine oil designed to deliver maximum power and ultimate performance in modern high-power superbikes.", "Meets the performance benchmarks of API SN; JASO MA", "Recommended for modern high-powered 4-stroke Superbikes"],
  "mak-4t-nxt-pro": ["Premium quality next generation engine oil with best-in-class Synthetic Technology & unique viscometry designed specifically for modern generation 4-stroke motorbikes.", "Meets the performance benchmark of API SP & JASO MA2", "Recommended for use in all new generation motorbikes."],
  "mak-4t-nxt-15w-50": ["Premium engine oil with Synthetic Formula for new generation BS VI compliant motorcycles. It is suitable for earlier generation motorcycles.", "Meets the performance benchmarks of API SN; JASO MA2", "Recommended for use in all high cc 4-stroke motorcycles and suitable for earlier generation motorcycles."],
  "mak-4t-nxt-20w-50": ["Premium engine oil with Synthetic Formula for new generation BS VI compliant motorcycles. It is suitable for earlier-generation motorcycles.", "Meets the performance benchmarks of API SN; JASO MA2", "It is recommended for the stringent lubrication requirements of high-performance motorcycles. It is also recommended for earlier-generation motorcycles."],
  "mak-4t-nxt-10w-30": ["Premium engine oil with Synthetic Formula for new generation BS VI compliant motorcycles. It is suitable for earlier-generation motorcycles.", "Meets the performance benchmarks of API SN; JASO MA2", "Recommended for modern high-powered 4-stroke Superbikes"],
  "mak-4t-nxt-20w-40": ["Premium engine oil with Synthetic Formula for new generation BS VI compliant motorcycles. It is suitable for earlier-generation motorcycles.", "Meets the performance benchmarks of API SN; JASO MA2", "Recommended for the latest generation modern 4-stroke motorcycles, also suitable for earlier models."],
  "mak-4t-sccotech-nxt-5w-30": ["MAK 4T SCOOTECH NXT is a semi synthetic product designed to offer ultimate protection and performance reliability required for latest generation of gearless scooters of various engine capacities.", "Exceeds API SL; JASO MB", "Semi synthetic scooter engine oil for ultimate protection and performance for latest generation of gearless scooters. Scooters runs in dense traffic with frequent stop-go conditions and this gives severe stress on engine and engine oil.", "MAK 4T SCOOTECH NXT is suitable for all 4-stroke gearless scooters and should not be used in wet clutch bike/ motorcycle engine."],
  "mak-2t": ["A new generation semi-synthetic, low smoke, environment friendly two stroke engine oil, suitable for all types of 2 & 3 wheeler vehicles fitted with 2 stroke petrol engines/CNG engines.", "Blended from highly refined mineral base oil & special synthetic component and fortified with finely balanced low ash additives. A specially selected diluent is added to ensure instantaneous self-mixing of oil with fuel", "For gear box application of 2 & 3 wheelers, use MAK MULTIGRADE 20W-40"],
  "mak-4t-star": ["Superior engine oil for 4-stroke motorcycles", "MAK 4T Star 20W-40 is a superior engine oil blended from highly refined base stocks fortified with carefully selected additive chemistry. It is specially formulated for 4-stroke motorcycle engines to perform in harsh operating conditions. Provides the highest level of protection to relatively older engines operating in dusty environment and uneven road conditions in rural areas.", "Recommended for 4-stroke motor cycle"],
  "mak-4t-scootech-10w-30": ["Premium 4-stroke engine oil for new-generation gearless scooters and for your maximum riding comfort", "MAK 4T Scootech 10W-30 is a premium quality 4-stroke engine oil exclusively developed for new generation gearless scooters. Formulated with premium quality Group II+ base oils, its unique additive chemistry ensures a smooth engine run, better fuel economy and longer engine life.", "The MAK 4T Scootech 10W-30 is recommended for new generation scooters of various manufacturers like Hero, Honda, TVS, Bajaj, etc."],
};
