/* Multi-level catalog pages: category images open sub-tabs, product images open nested product detail routes. */
import { ArrowLeft, ArrowUpRight, ChevronRight, ExternalLink } from "lucide-react";
import { Link, useRoute } from "wouter";
import { findCategory, findProduct, makCategories, officialProductCopy, type MakCategory, type MakProduct } from "@/lib/makData";

const img = { logo: "/manus-storage/bpcl-logo_216bb070.png", smartline: "/manus-storage/smartline_40d4ff4e.png", bharatgas: "/manus-storage/bharatgas_9983c632.png", forbes: "/manus-storage/forbes_4db26ea7.png" };

function SharedHeader() {
  const nav = ["Home", "About BPCL", "Bharat Petroleum For", "Our Businesses", "Tenders", "Careers", "CSR", "R&D Centre", "Sustainability", "Vigilance", "RTI", "Complaints | Feedback"];
  return <><div className="utility-bar"><div className="utility-inner"><div className="utility-left"><a href="#main-content">SKIP TO MAIN CONTENT</a><span>ACCESSIBILITY</span><span>BPCL GROUP</span><span>BPCL LINKS</span><span>CONNECT</span><span>Print</span></div><button className="language">English⌄</button></div></div><header className="site-header"><div className="header-inner"><Link href="/"><span className="brand"><img src={img.logo} alt="Bharat Petroleum" /><span>MAK<br /><b>Lubricants</b></span></span></Link><div className="header-badges"><img src={img.smartline} alt="SmartLine" /><img src={img.bharatgas} alt="Bharatgas" /><img className="forbes" src={img.forbes} alt="Forbes" /></div></div></header><nav className="main-nav"><div className="nav-inner">{nav.map((item, i) => <Link key={item} href={i === 0 ? "/" : "/#" + item.toLowerCase().replaceAll(" ", "-")}>{item}{[1,2,3,7,8,9,10].includes(i) && <span className="nav-plus">+</span>}</Link>)}<button className="price-btn">View Prices <ArrowUpRight size={15} /></button></div></nav></>;
}

function CategoryCard({ category }: { category: MakCategory }) {
  return <Link href={`/category/${category.slug}`}><span className="category-card route-card"><img src={category.image} alt={category.name} /><span className="card-shade"></span><span className="card-label"><span>{category.name}</span><ChevronRight size={16} /></span></span></Link>;
}

function ProductCard({ product }: { product: MakProduct }) {
  return <Link href={`/category/${product.category}/product/${product.slug}`}><span className="bike-product-card route-product-card"><span className="product-number">↗</span><span className="product-image-wrap"><img src={product.image} alt={product.name} /></span><span className="bike-product-label"><strong>{product.name}</strong><ArrowUpRight size={15} /></span></span></Link>;
}

export function CategoryPage() {
  const [, params] = useRoute("/category/:categorySlug");
  const category = findCategory(params?.categorySlug ?? "");
  if (!category) return <NotFoundPanel />;
  return <div className="min-h-screen bg-[#f7f9fa] text-[#243238]"><main id="main-content"><section className="bike-products category-products"><div className="container">{category.products.length ? <div className="bike-product-grid">{category.products.map((product) => <ProductCard key={product.slug} product={product} />)}</div> : <div className="empty-category"><p>{category.name}</p><Link href="/" className="modal-action">Back to Previous Page <ArrowUpRight size={15} /></Link></div>}</div></section></main></div>;
}

export function ProductPage() {
  const [, params] = useRoute("/category/:categorySlug/product/:productSlug");
  const category = findCategory(params?.categorySlug ?? "");
  const product = params?.categorySlug && params?.productSlug ? findProduct(params.categorySlug, params.productSlug) : undefined;
  if (!category || !product) return <NotFoundPanel />;
  const more = category.products.filter((item) => item.slug !== product.slug).slice(0, 4);
  return <div className="min-h-screen bg-[#f7f9fa] text-[#243238]"><main id="main-content"><div className="product-detail-top"><div className="container"><div className="breadcrumbs"><Link href="/">Home</Link><ChevronRight size={13} /><Link href={`/category/${category.slug}`}>{category.name}</Link><ChevronRight size={13} /><span>{product.name}</span></div></div></div><section className="product-detail"><div className="container product-detail-grid"><div className="product-detail-image"><img src={product.image} alt={product.name} /></div><div className="product-detail-copy"><p className="eyebrow">{product.name.toUpperCase()}</p><h1>{product.name}</h1><div className="product-detail-copy-text">{(officialProductCopy[product.slug] ?? []).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><div className="detail-rule"></div><div className="detail-table"><div><span>SKUs AVAILABLE</span><strong>{product.name}</strong></div></div><div className="product-detail-actions"><Link href={`/category/${category.slug}`} className="back-link"><ArrowLeft size={15} /> Back to {category.name}</Link></div></div></div></section></main></div>;
}

function NotFoundPanel() { return <div className="min-h-screen grid place-items-center bg-[#f7f9fa]"><div className="text-center"><p className="eyebrow">MAK CATALOG</p><h1 className="not-found-title">This catalog route is not available.</h1><Link href="/" className="modal-action">Return to Bikes and Scooters <ArrowUpRight size={15} /></Link></div></div>; }
