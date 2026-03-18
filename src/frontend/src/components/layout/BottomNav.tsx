import { CalendarDays, Home, Info, Shield } from "lucide-react";
import type { NavState } from "../../App";

interface BottomNavProps {
  nav: NavState;
  navigate: (state: NavState) => void;
}

const items = [
  { label: "Home", page: "home" as const, Icon: Home },
  { label: "Bookings", page: "bookings" as const, Icon: CalendarDays },
  { label: "Safety", page: "trust" as const, Icon: Shield },
  { label: "How It Works", page: "how-it-works" as const, Icon: Info },
];

export default function BottomNav({ nav, navigate }: BottomNavProps) {
  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white"
      style={{ boxShadow: "0 -2px 16px 0 rgba(0,0,0,0.10)" }}
      aria-label="Bottom navigation"
    >
      <div className="flex items-stretch h-16">
        {items.map(({ label, page, Icon }) => {
          const active = nav.page === page;
          return (
            <button
              type="button"
              key={label}
              onClick={() => navigate({ page })}
              className="flex-1 flex flex-col items-center justify-center py-3 transition-colors relative"
              data-ocid={`bottom_nav.${label.toLowerCase().replace(/ /g, "_")}.link`}
            >
              {active ? (
                <span
                  className="flex flex-col items-center gap-0.5 px-4 py-1.5 rounded-full"
                  style={{ background: "oklch(0.90 0.04 185)" }}
                >
                  <Icon
                    size={20}
                    style={{ color: "oklch(0.43 0.10 185)" }}
                    strokeWidth={2.5}
                  />
                  <span
                    className="text-[10px] font-bold leading-none"
                    style={{ color: "oklch(0.43 0.10 185)" }}
                  >
                    {label}
                  </span>
                </span>
              ) : (
                <span className="flex flex-col items-center gap-0.5">
                  <Icon size={20} className="text-gray-400" strokeWidth={1.8} />
                  <span className="text-[10px] text-gray-400 font-medium leading-none">
                    {label}
                  </span>
                </span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
