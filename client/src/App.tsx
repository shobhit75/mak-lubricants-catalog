/* Multi-level route shell: overview, category sub-tabs, and nested product pages. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import { CategoryPage, ProductPage } from "./pages/CatalogPages";

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster /><Switch><Route path="/" component={Home} /><Route path="/category/:categorySlug/product/:productSlug" component={ProductPage} /><Route path="/category/:categorySlug" component={CategoryPage} /><Route component={Home} /></Switch></TooltipProvider></ThemeProvider></ErrorBoundary>;
}
