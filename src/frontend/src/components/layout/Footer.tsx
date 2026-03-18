import { Heart, Mail, MapPin, Phone } from "lucide-react";
import type { NavState } from "../../App";

interface FooterProps {
  navigate: (state: NavState) => void;
}

export default function Footer({ navigate }: FooterProps) {
  const year = new Date().getFullYear();
  const hostname = window.location.hostname;

  return (
    <footer className="bg-teal-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-orange-500 flex items-center justify-center text-white font-black text-lg">
                H
              </div>
              <span className="text-xl font-bold">HOMIVA</span>
            </div>
            <p className="text-teal-200 text-sm leading-relaxed mb-4">
              Your trusted hyper-local home care partner. Elderly care,
              babysitting, household help & pet care — all in one app.
            </p>
            <div className="flex gap-2">
              <span className="bg-teal-700 text-white text-xs px-3 py-2 rounded-lg font-medium cursor-pointer hover:bg-teal-600 transition-colors">
                📱 App Store
              </span>
              <span className="bg-teal-700 text-white text-xs px-3 py-2 rounded-lg font-medium cursor-pointer hover:bg-teal-600 transition-colors">
                🤖 Google Play
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-white">Our Services</h4>
            <ul className="space-y-2 text-teal-200 text-sm">
              {["elderly", "babysitting", "household", "petcare"].map((id) => (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => navigate({ page: "service", serviceId: id })}
                    className="hover:text-orange-400 transition-colors capitalize"
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
            <ul className="space-y-2 text-teal-200 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => navigate({ page: "how-it-works" })}
                  className="hover:text-orange-400 transition-colors"
                  data-ocid="footer.link"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate({ page: "trust" })}
                  className="hover:text-orange-400 transition-colors"
                  data-ocid="footer.link"
                >
                  Trust & Safety
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate({ page: "bookings" })}
                  className="hover:text-orange-400 transition-colors"
                  data-ocid="footer.link"
                >
                  My Bookings
                </button>
              </li>
              <li>
                <span className="hover:text-orange-400 transition-colors cursor-pointer">
                  Careers
                </span>
              </li>
              <li>
                <span className="hover:text-orange-400 transition-colors cursor-pointer">
                  Privacy Policy
                </span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3 text-teal-200 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 text-orange-400 shrink-0" />
                <span>12 Park Street, Kolkata, West Bengal — 700016</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-orange-400 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-orange-400 shrink-0" />
                <span>hello@homiva.in</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-teal-700 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-teal-300 text-xs">
          <span>© {year} HOMIVA. All rights reserved.</span>
          <span className="flex items-center gap-1">
            Built with{" "}
            <Heart size={11} className="text-orange-400 fill-orange-400" />{" "}
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
