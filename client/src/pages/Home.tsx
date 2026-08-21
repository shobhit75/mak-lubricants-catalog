/* Ground-truth replication of the supplied BPCL MAK page. Preserve BPCL teal, MAK yellow, image-led catalog rhythm, and responsive hierarchy. */
import { useMemo, useState } from "react";
import { ChevronDown, ChevronRight, Menu, Search, X, ExternalLink, ArrowUpRight } from "lucide-react";
import { makCategories } from "@/lib/makData";

const img = {
  logo: "/manus-storage/bpcl-logo_216bb070.png",
  hero: "/manus-storage/hero_e8ea06ba.jpg",
  bikesHero: "/manus-storage/bikes-banner_dc5c0855.jpg",
  smartline: "/manus-storage/smartline_40d4ff4e.png",
  bharatgas: "/manus-storage/bharatgas_9983c632.png",
  forbes: "/manus-storage/forbes_4db26ea7.png",
};

const categories = [
  { name: "Bikes and Scooters", short: "Bikes & Scooters", image: "/manus-storage/nxt-synth_d85b3d0c.jpg", description: "Engine oils for two-wheelers that move with you." },
  { name: "Auto & CNG", short: "Auto & CNG", image: "/manus-storage/nxt-pro_4374f75e.jpg", description: "Reliable protection for everyday city mobility." },
  { name: "Cars & SUVs", short: "Cars & SUVs", image: "/manus-storage/nxt-15w50_957caa7c.jpg", description: "Smooth, confident performance across the road." },
  { name: "Trucks & Buses", short: "Trucks & Buses", image: "/manus-storage/nxt-20w50_62f96913.jpg", description: "Heavy-duty support for demanding journeys." },
  { name: "Agriculture", short: "Agriculture", image: "/manus-storage/nxt-20w40_61bda564.jpg", description: "Hard-working lubrication for the field." },
  { name: "Greases", short: "Greases", image: "/manus-storage/mak-2t_d74433e0.jpg", description: "Long-lasting protection for critical parts." },
  { name: "Specialties", short: "Specialties", image: "/manus-storage/mak-4t-star_3f9a7d20.png", description: "Purpose-built chemistry for specific needs." },
  { name: "Marine Boats", short: "Marine Boats", image: "/manus-storage/scootech-nxt_94a9fd4c.jpg", description: "Dependable performance on the water." },
  { name: "Gears & Transmission", short: "Gears & Transmission", image: "/manus-storage/scootech-10w30_d2e4c691.png", description: "Precision protection for moving systems." },
];

const products = [
  "MAK 4T NXT SYNTH", "MAK 4T NXT PRO", "MAK 4T NXT 15W-50", "MAK 4T NXT 20W-50", "MAK 4T NXT 10W-30", "MAK 4T NXT 20W-40", "MAK 4T SCCOTECH NXT 5W-30", "MAK 2T", "MAK 4T STAR", "MAK 4T SCOOTECH 10W-30",
];

const bikeProducts = [
  { name: "MAK 4T NXT SYNTH", image: "/manus-storage/nxt-synth_d85b3d0c.jpg", detail: "Synthetic 4T engine oil" },
  { name: "MAK 4T NXT PRO", image: "/manus-storage/nxt-pro_4374f75e.jpg", detail: "Advanced 4T protection" },
  { name: "MAK 4T NXT 15W-50", image: "/manus-storage/nxt-15w50_957caa7c.jpg", detail: "15W-50 motorcycle oil" },
  { name: "MAK 4T NXT 20W-50", image: "/manus-storage/nxt-20w50_62f96913.jpg", detail: "20W-50 motorcycle oil" },
  { name: "MAK 4T NXT 10W-30", image: "/manus-storage/nxt-10w30_38b5330a.jpg", detail: "10W-30 motorcycle oil" },
  { name: "MAK 4T NXT 20W-40", image: "/manus-storage/nxt-20w40_61bda564.jpg", detail: "20W-40 motorcycle oil" },
  { name: "MAK 4T SCCOTECH NXT 5W-30", image: "/manus-storage/scootech-nxt_94a9fd4c.jpg", detail: "Scooter engine oil" },
  { name: "MAK 2T", image: "/manus-storage/mak-2t_d74433e0.jpg", detail: "2T engine oil" },
  { name: "MAK 4T STAR", image: "/manus-storage/mak-4t-star_3f9a7d20.png", detail: "4T engine oil" },
  { name: "MAK 4T SCOOTECH 10W-30", image: "/manus-storage/scootech-10w30_d2e4c691.png", detail: "10W-30 scooter oil" },
];

const navItems = ["Home", "About BPCL", "Bharat Petroleum For", "Our Businesses", "Tenders", "Careers", "CSR", "R&D Centre", "Sustainability", "Vigilance", "RTI", "Complaints | Feedback"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("All");
  const [quickOpen, setQuickOpen] = useState(false);
  const [selected, setSelected] = useState<(typeof categories)[number] | null>(null);

  const visibleCategories = useMemo(() => categories.filter((item) => active === "All" || item.name === active).filter((item) => item.name.toLowerCase().includes(query.toLowerCase())), [active, query]);

  return (
    <div className="min-h-screen bg-[#f7f9fa] text-[#243238]">

      <main id="main-content">
        <section className="intro-copy bikes-intro"><h1>mak lubricants</h1></section>
        <section className="catalog-section" id="catalog"><div className="container"><div className="catalog-heading"><div className="catalog-tools"><div className="filter-label">FILTER BY APPLICATION</div><div className="filter-scroll">{["All", ...categories.map((c) => c.name)].map((item) => <button key={item} onClick={() => setActive(item)} className={active === item ? "selected" : ""}>{item}</button>)}</div></div></div><div className="bike-product-grid">{makCategories[0].products.map((product, i) => <a key={product.slug} href={`/category/${product.category}/product/${product.slug}`} className="bike-product-card route-product-card"><div className="product-number">0{i + 1}</div><div className="product-image-wrap"><img src={product.image} alt={product.name} /></div><div className="bike-product-label"><strong>{product.name}</strong><ArrowUpRight size={15} /></div></a>)}</div></div></section>
      </main>

      {selected && <div className="modal-backdrop" onClick={() => setSelected(null)}><div className="category-modal" onClick={(e) => e.stopPropagation()}><button className="modal-close" onClick={() => setSelected(null)}><X size={18} /></button><img src={selected.image} alt="" /><div><p className="eyebrow">MAK AUTOMOBILE LUBRICANTS</p><h2>{selected.name}</h2><p>{selected.description}</p><button className="modal-action" onClick={() => setSelected(null)}>Browse range <ArrowUpRight size={15} /></button></div></div></div>}
    </div>
  );
}
