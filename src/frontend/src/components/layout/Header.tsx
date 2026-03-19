import { Button } from "@/components/ui/button";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import type { NavState } from "../../App";

interface HeaderProps {
  nav: NavState;
  navigate: (state: NavState) => void;
  onAuthOpen: () => void;
}

const navLinks = [
  { label: "Home", page: "home" as const },
  { label: "Our Services", page: "service" as const, serviceId: "elderly" },
  { label: "How It Works", page: "how-it-works" as const },
  { label: "Trust & Safety", page: "trust" as const },
];

export default function Header({ nav, navigate, onAuthOpen }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top utility strip */}
      <div
        className="text-white py-1.5 px-4 text-xs flex items-center justify-between"
        style={{ background: "#4b2e83" }}
      >
        <span className="flex items-center gap-1">
          <Phone size={11} className="opacity-70" />
          <span className="opacity-80">+91 98765 43210</span>
        </span>
        <span className="opacity-80 hidden sm:block">
          📍 Serving Kolkata & nearby areas | 15–20 min response
        </span>
        <span className="opacity-80">🔒 Verified Workers Only</span>
      </div>

      {/* Main navbar */}
      <div
        className="shadow-header"
        style={{
          background: "rgba(255,255,255,0.6)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            type="button"
            onClick={() => navigate({ page: "home" })}
            className="flex items-center"
            data-ocid="header.link"
          >
            <img
              src="/assets/uploads/IMG-20251217-WA0103.jpg-1-1.jpeg"
              alt="HOMIVA"
              className="h-10 w-auto object-contain"
            />
          </button>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-6"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.label}
                onClick={() =>
                  navigate({ page: link.page, serviceId: link.serviceId })
                }
                className={`text-sm font-medium transition-colors pb-0.5 ${
                  nav.page === link.page ? "border-b-2" : "text-gray-700"
                }`}
                style={
                  nav.page === link.page
                    ? { color: "#a855f7", borderColor: "#a855f7" }
                    : {}
                }
                onMouseEnter={(e) => {
                  if (nav.page !== link.page)
                    (e.currentTarget as HTMLElement).style.color = "#a855f7";
                }}
                onMouseLeave={(e) => {
                  if (nav.page !== link.page)
                    (e.currentTarget as HTMLElement).style.color = "";
                }}
                data-ocid="header.link"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={onAuthOpen}
              className="text-sm font-medium transition-colors"
              style={{ color: "#4b2e83" }}
              data-ocid="auth.link"
            >
              Login / Register
            </button>
            <Button
              onClick={() =>
                navigate({ page: "service", serviceId: "elderly" })
              }
              className="rounded-full text-white text-sm px-5 py-2 font-semibold border-0"
              style={{
                background: "linear-gradient(135deg, #a855f7, #ec4899)",
              }}
              data-ocid="header.primary_button"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            data-ocid="header.toggle"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white/90 border-t border-gray-100 px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.label}
                onClick={() => {
                  navigate({ page: link.page, serviceId: link.serviceId });
                  setMenuOpen(false);
                }}
                className="block w-full text-left text-sm font-medium py-2 text-gray-700"
                data-ocid="header.link"
              >
                {link.label}
              </button>
            ))}
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  onAuthOpen();
                  setMenuOpen(false);
                }}
                className="flex-1 text-sm font-medium text-center py-2.5 rounded-full border"
                style={{ borderColor: "#a855f7", color: "#a855f7" }}
                data-ocid="auth.link"
              >
                Login / Register
              </button>
              <Button
                onClick={() => {
                  navigate({ page: "service", serviceId: "elderly" });
                  setMenuOpen(false);
                }}
                className="flex-1 rounded-full text-white text-sm font-semibold border-0"
                style={{
                  background: "linear-gradient(135deg, #ff4da6, #6a5acd)",
                }}
                data-ocid="header.primary_button"
              >
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
