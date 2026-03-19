import { Bell, MapPin, Search } from "lucide-react";
import type { NavState } from "../../App";

interface MobileTopBarProps {
  navigate: (state: NavState) => void;
  onAuthOpen: () => void;
}

export default function MobileTopBar({
  navigate,
  onAuthOpen,
}: MobileTopBarProps) {
  return (
    <header
      className="md:hidden fixed top-0 left-0 right-0 z-50"
      style={{ background: "oklch(0.58 0.20 350)" }}
    >
      {/* Row 1: Logo + actions */}
      <div className="flex items-center justify-between px-4 pt-3 pb-2">
        <button
          type="button"
          onClick={() => navigate({ page: "home" })}
          className="flex items-center gap-2"
          data-ocid="topbar.link"
        >
          <div className="bg-white rounded-lg px-2 py-1 flex items-center justify-center">
            <img
              src="/assets/uploads/IMG-20251217-WA0103.jpg-1-1.jpeg"
              alt="HOMIVA"
              className="h-8 w-auto object-contain"
            />
          </div>
        </button>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="flex items-center gap-1 text-white/80 text-xs"
            data-ocid="topbar.toggle"
          >
            <MapPin size={12} className="text-pink-200 shrink-0" />
            <span className="text-[11px] font-medium">Kolkata</span>
          </button>
          <button
            type="button"
            className="relative text-white"
            aria-label="Notifications"
            data-ocid="topbar.toggle"
          >
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-violet-500 text-white text-[9px] font-bold flex items-center justify-center">
              2
            </span>
          </button>
          <button
            type="button"
            onClick={onAuthOpen}
            className="w-8 h-8 rounded-full bg-white/20 text-white font-bold text-sm flex items-center justify-center"
            data-ocid="auth.open_modal_button"
          >
            U
          </button>
        </div>
      </div>

      {/* Row 2: Search bar */}
      <div className="px-4 pb-3">
        <button
          type="button"
          className="w-full flex items-center gap-2 bg-white/15 backdrop-blur rounded-full px-4 py-2.5 text-white/70 text-sm"
          onClick={() => navigate({ page: "service", serviceId: "elderly" })}
          data-ocid="topbar.search_input"
        >
          <Search size={16} className="text-white/60 shrink-0" />
          <span>Search services...</span>
        </button>
      </div>
    </header>
  );
}
