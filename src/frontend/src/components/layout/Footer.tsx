import { Heart, Mail, MapPin, Phone } from "lucide-react";
import type { NavState } from "../../App";

interface FooterProps {
  navigate: (state: NavState) => void;
}

export default function Footer({ navigate }: FooterProps) {
  const year = new Date().getFullYear();
  const hostname = window.location.hostname;

  return (
    <footer style={{ background: "#1a1a2e" }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-lg"
                style={{
                  background: "linear-gradient(135deg, #ff4da6, #6a5acd)",
                }}
              >
                H
              </div>
              <span className="text-xl font-bold" style={{ color: "#ff4da6" }}>
                HOMIVA
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Your trusted hyper-local home care partner. Elderly care,
              babysitting, household help & pet care — all in one app.
            </p>
            <div className="flex gap-2">
              <span
                className="text-white text-xs px-3 py-2 rounded-lg font-medium cursor-pointer transition-opacity hover:opacity-80"
                style={{
                  background: "rgba(255,77,166,0.15)",
                  border: "1px solid rgba(255,77,166,0.3)",
                }}
              >
                📱 App Store
              </span>
              <span
                className="text-white text-xs px-3 py-2 rounded-lg font-medium cursor-pointer transition-opacity hover:opacity-80"
                style={{
                  background: "rgba(255,77,166,0.15)",
                  border: "1px solid rgba(255,77,166,0.3)",
                }}
              >
                🤖 Google Play
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-white">Our Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {["elderly", "babysitting", "household", "petcare"].map((id) => (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => navigate({ page: "service", serviceId: id })}
                    className="hover:text-white transition-colors capitalize"
                    style={{}}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#ff4da6";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "";
                    }}
                    data-ocid="footer.link"
                  >
                    {id === "elderly"
                      ? "Elderly Care"
                      : id === "babysitting"
                        ? "Babysitting"
                        : id === "household"
                          ? "Household Help"
                          : "Pet Care"}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {[
                {
                  label: "How It Works",
                  action: () => navigate({ page: "how-it-works" }),
                },
                {
                  label: "Trust & Safety",
                  action: () => navigate({ page: "trust" }),
                },
                {
                  label: "My Bookings",
                  action: () => navigate({ page: "bookings" }),
                },
                { label: "Careers", action: () => {} },
                { label: "Privacy Policy", action: () => {} },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={item.action}
                    className="hover:text-white transition-colors"
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#ff4da6";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "";
                    }}
                    data-ocid="footer.link"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <MapPin
                  size={14}
                  className="mt-0.5 shrink-0"
                  style={{ color: "#ff4da6" }}
                />
                <span>Godrej Waterside, Salt Lake Sector V, Kolkata</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone
                  size={14}
                  className="shrink-0"
                  style={{ color: "#ff4da6" }}
                />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail
                  size={14}
                  className="shrink-0"
                  style={{ color: "#ff4da6" }}
                />
                <span>hello@homiva.in</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t py-4 px-4"
        style={{ borderColor: "rgba(255,255,255,0.1)" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-gray-500 text-xs">
          <span>© {year} HOMIVA. All rights reserved.</span>
          <span className="flex items-center gap-1">
            Built with{" "}
            <Heart
              size={11}
              className="fill-current"
              style={{ color: "#ff4da6" }}
            />{" "}
            using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
