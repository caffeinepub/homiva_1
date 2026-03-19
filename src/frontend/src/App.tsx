import { Toaster } from "@/components/ui/sonner";
import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import AuthModal from "./components/auth/AuthModal";
import BottomNav from "./components/layout/BottomNav";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import MobileTopBar from "./components/layout/MobileTopBar";
import SplashScreen from "./components/layout/SplashScreen";
import HomePage from "./pages/HomePage";
import HowItWorksPage from "./pages/HowItWorksPage";
import InvestorPage from "./pages/InvestorPage";
import MyBookingsPage from "./pages/MyBookingsPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import TrustSafetyPage from "./pages/TrustSafetyPage";

export type PageName =
  | "home"
  | "service"
  | "bookings"
  | "trust"
  | "how-it-works"
  | "investor";

export type NavState = {
  page: PageName;
  serviceId?: string;
};

export default function App() {
  const [nav, setNav] = useState<NavState>({ page: "home" });
  const [authOpen, setAuthOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  const navigate = (state: NavState) => {
    setNav(state);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (nav.page) {
      case "home":
        return (
          <HomePage navigate={navigate} onAuthOpen={() => setAuthOpen(true)} />
        );
      case "service":
        return (
          <ServiceDetailPage
            serviceId={nav.serviceId ?? "elderly"}
            navigate={navigate}
            onAuthOpen={() => setAuthOpen(true)}
          />
        );
      case "bookings":
        return (
          <MyBookingsPage
            navigate={navigate}
            onAuthOpen={() => setAuthOpen(true)}
          />
        );
      case "trust":
        return <TrustSafetyPage navigate={navigate} />;
      case "how-it-works":
        return <HowItWorksPage navigate={navigate} />;
      case "investor":
        return <InvestorPage navigate={navigate} />;
      default:
        return (
          <HomePage navigate={navigate} onAuthOpen={() => setAuthOpen(true)} />
        );
    }
  };

  return (
    <>
      <AnimatePresence>
        {showSplash && <SplashScreen key="splash" />}
      </AnimatePresence>

      <div className="min-h-screen bg-background font-sans">
        {/* Mobile top bar */}
        <MobileTopBar
          navigate={navigate}
          onAuthOpen={() => setAuthOpen(true)}
        />

        {/* Desktop header */}
        <div className="hidden md:block">
          <Header
            nav={nav}
            navigate={navigate}
            onAuthOpen={() => setAuthOpen(true)}
          />
        </div>

        {/* Main content: extra top padding on mobile for fixed top bar */}
        <main className="pb-16 md:pb-0 pt-[88px] md:pt-0">{renderPage()}</main>

        {/* Footer hidden on mobile */}
        <div className="hidden md:block">
          <Footer navigate={navigate} />
        </div>

        <BottomNav nav={nav} navigate={navigate} />
        <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
        <Toaster position="top-center" richColors />
      </div>
    </>
  );
}
