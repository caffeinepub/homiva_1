import { CalendarDays, Home, Info, Shield, TrendingUp } from "lucide-react";
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
  { label: "Investor", page: "investor" as const, Icon: TrendingUp },
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
              className="flex-1 flex flex-col items-center justify-center py-2 transition-colors relative"
              data-ocid={`bottom_nav.${label.toLowerCase().replace(/ /g, "_")}.link`}
            >
              {active ? (
                <span
                  className="flex flex-col items-center gap-0.5 px-3 py-1 rounded-full"
                  style={{ background: "rgba(168,85,247,0.15)" }}
                >
                  <Icon
                    size={18}
                    style={{ color: "#a855f7" }}
                    strokeWidth={2.5}
                  />
                  <span
                    className="text-[9px] font-bold leading-none"
                    style={{ color: "#a855f7" }}
                  >
                    {label}
                  </span>
                </span>
              ) : (
                <span className="flex flex-col items-center gap-0.5">
                  <Icon size={18} className="text-gray-400" strokeWidth={1.8} />
                  <span className="text-[9px] text-gray-400 font-medium leading-none">
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
