import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2, Shield } from "lucide-react";
import { motion } from "motion/react";
import type { NavState } from "../App";

interface TrustSafetyPageProps {
  navigate: (state: NavState) => void;
}

const TRUST_FEATURES = [
  {
    icon: "🪪",
    title: "KYC Verification",
    color: "bg-blue-50 border-blue-100",
    iconBg: "bg-blue-100",
    points: [
      "Aadhaar Card verification for all service partners",
      "PAN Card submission required",
      "Digital identity cross-verification",
      "Re-verification every 12 months",
    ],
    description:
      "All service partners must complete Know Your Customer (KYC) verification before joining. This includes valid government ID documents to confirm their identity.",
  },
  {
    icon: "🚔",
    title: "Police Verification",
    color: "bg-purple-50 border-purple-100",
    iconBg: "bg-purple-100",
    points: [
      "Official police background check",
      "Criminal record clearance required",
      "Verification from home district",
      "Mandatory before any service booking",
    ],
    description:
      "Every service partner undergoes police background verification to ensure they have no criminal record and are safe to work in customers' homes.",
  },
  {
    icon: "🎓",
    title: "Training & Certification",
    color: "bg-green-50 border-green-100",
    iconBg: "bg-green-100",
    points: [
      "Service-specific training programs",
      "3 training centers in Kolkata",
      "9 professional trainers on staff",
      "Certification awarded after completion",
    ],
    description:
      "Partners are carefully screened and trained in their service category. After completing training at our 3 Kolkata centers, they receive official HOMIVA certification.",
  },
  {
    icon: "🔐",
    title: "Dual OTP System",
    color: "bg-pink-50 border-pink-100",
    iconBg: "bg-pink-100",
    points: [
      "Start OTP sent to customer when worker arrives",
      "Service begins only after OTP confirmation",
      "End OTP closes the service officially",
      "Full transparency and audit trail",
    ],
    description:
      "A dual OTP system ensures transparency: service starts only after the customer's Start OTP is entered, and ends with an End OTP confirmation.",
  },
  {
    icon: "📍",
    title: "Real-Time GPS Tracking",
    color: "bg-violet-50 border-violet-100",
    iconBg: "bg-violet-100",
    points: [
      "Live location of service partner during service",
      "Track via the HOMIVA app",
      "Route history available post-service",
      "Emergency alert button for customers",
    ],
    description:
      "Customers can track the service provider's real-time location through the app, ensuring transparency and safety throughout the service period.",
  },
];

export default function TrustSafetyPage({ navigate }: TrustSafetyPageProps) {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <div className="bg-pink-700 text-white py-14 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 80%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <button
          type="button"
          onClick={() => navigate({ page: "home" })}
          className="flex items-center gap-1.5 text-pink-200 hover:text-white text-sm mb-6 transition-colors"
          data-ocid="trust.link"
        >
          <ArrowLeft size={16} /> Back to Home
        </button>
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex w-16 h-16 rounded-2xl bg-white/10 items-center justify-center text-4xl mb-4">
            <Shield className="text-violet-300" size={36} />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            Trust & Safety at HOMIVA
          </h1>
          <p className="text-pink-200 text-base leading-relaxed">
            Your safety is our top priority. Every worker on HOMIVA goes through
            a rigorous multi-step verification process before they ever enter
            your home.
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-6">
          {TRUST_FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              data-ocid={`trust.item.${i + 1}`}
            >
              <Card
                className={`border rounded-2xl overflow-hidden ${feature.color}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-14 h-14 rounded-2xl ${feature.iconBg} flex items-center justify-center text-3xl shrink-0`}
                    >
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">
                          {feature.title}
                        </h3>
                        <span className="text-xs bg-pink-100 text-pink-700 font-semibold px-2 py-0.5 rounded-full">
                          Step {i + 1}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {feature.description}
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {feature.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-center gap-2 text-sm text-gray-700"
                          >
                            <CheckCircle2
                              size={14}
                              className="text-pink-500 shrink-0"
                            />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-pink-600 to-pink-800 text-white p-8 text-center">
          <div className="text-3xl mb-3">🛡️</div>
          <h3 className="text-2xl font-bold mb-2">Safety You Can Count On</h3>
          <p className="text-pink-200 text-sm mb-6 max-w-md mx-auto">
            HOMIVA's comprehensive 5-step safety system means you can book with
            complete confidence for yourself and your family.
          </p>
          <button
            type="button"
            onClick={() => navigate({ page: "service", serviceId: "elderly" })}
            className="bg-violet-500 hover:bg-violet-600 text-white font-bold rounded-full px-8 py-3 transition-colors"
            data-ocid="trust.primary_button"
          >
            Book a Verified Worker
          </button>
        </div>
      </div>
    </div>
  );
}
