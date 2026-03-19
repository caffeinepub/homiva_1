import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2, Smartphone, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import type { NavState } from "../App";

interface HowItWorksPageProps {
  navigate: (state: NavState) => void;
}

const STEPS = [
  {
    step: "01",
    icon: "📱",
    title: "Browse & Select a Service",
    description:
      "Open HOMIVA and choose from 4 core home care services: Elderly Care, Babysitting, Household Help, or Pet Care. Select your sub-service and package.",
    details: [
      "View service descriptions & pricing",
      "Select sub-service type",
      "Choose flexible or subscription package",
    ],
  },
  {
    step: "02",
    icon: "📅",
    title: "Book a Date, Time & Address",
    description:
      "Pick a convenient date and time slot. Enter your address and confirm the booking. Our system matches you with the nearest verified worker within 5 km.",
    details: [
      "Choose from 10+ time slots daily",
      "Enter your service address",
      "Real-time availability check",
    ],
  },
  {
    step: "03",
    icon: "🚗",
    title: "Verified Worker Arrives (15–20 min)",
    description:
      "A background-checked, trained, and certified HOMIVA caregiver arrives at your home. You receive a Start OTP to begin the service after identity confirmation.",
    details: [
      "GPS-tracked arrival",
      "Identity verification at door",
      "Start OTP activates service",
    ],
  },
  {
    step: "04",
    icon: "✅",
    title: "Service Completed & Rated",
    description:
      "Once the service is done, an End OTP officially closes it in our system. You can then rate your experience and leave a review to help other families.",
    details: [
      "End OTP confirms completion",
      "Leave a star rating & review",
      "Rebook your favorite worker",
    ],
  },
];

const FAQS = [
  {
    q: "How quickly can I get a caregiver?",
    a: "HOMIVA operates within a 5 km hyper-local radius, ensuring arrival in just 15–20 minutes after booking confirmation.",
  },
  {
    q: "Are all workers background verified?",
    a: "Yes! Every HOMIVA worker completes KYC verification, police background checks, and our training program before being listed.",
  },
  {
    q: "Can I rebook the same worker?",
    a: "Absolutely. HOMIVA allows you to set a preferred worker and rebook them for future services. Consistency is key to great care.",
  },
  {
    q: "What payment methods are accepted?",
    a: "HOMIVA supports all major payment methods including UPI, credit/debit cards, and net banking through our secure payment gateway.",
  },
  {
    q: "What if I need to cancel a booking?",
    a: "You can cancel a pending booking any time through the app at no charge. A full refund is processed within 2–3 business days.",
  },
];

export default function HowItWorksPage({ navigate }: HowItWorksPageProps) {
  return (
    <div className="min-h-screen" style={{ background: "transparent" }}>
      {/* Hero */}
      <div
        className="text-white py-14 px-4"
        style={{ background: "linear-gradient(135deg, #a855f7, #ec4899)" }}
      >
        <button
          type="button"
          onClick={() => navigate({ page: "home" })}
          className="flex items-center gap-1.5 text-white/70 hover:text-white text-sm mb-6 transition-colors"
          data-ocid="howitworks.link"
        >
          <ArrowLeft size={16} /> Back to Home
        </button>
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex w-16 h-16 rounded-2xl bg-white/10 items-center justify-center mb-4">
            <Smartphone className="text-white" size={36} />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            How HOMIVA Works
          </h1>
          <p className="text-white/80 text-base leading-relaxed">
            Getting reliable home care has never been easier. From booking to
            service completion, HOMIVA handles everything in 4 simple steps.
          </p>
        </div>
      </div>

      {/* Steps */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="space-y-6">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              data-ocid={`howitworks.item.${i + 1}`}
            >
              <Card
                className="border-0 shadow-card rounded-2xl overflow-hidden"
                style={{ background: "white" }}
              >
                <div
                  className="h-1"
                  style={{
                    background: "linear-gradient(90deg, #ff4da6, #6a5acd)",
                  }}
                />
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
                        style={{
                          background: "#f9f6ff",
                          border: "2px solid #e9d5ff",
                        }}
                      >
                        {step.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded-full text-white"
                        style={{
                          background:
                            "linear-gradient(135deg, #a855f7, #ec4899)",
                        }}
                      >
                        Step {step.step}
                      </span>
                      <h3
                        className="text-lg font-bold mt-1 mb-2"
                        style={{ color: "#4b2e83" }}
                      >
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-3">
                        {step.description}
                      </p>
                      <ul className="space-y-1.5">
                        {step.details.map((detail) => (
                          <li
                            key={detail}
                            className="flex items-center gap-2 text-sm text-gray-700"
                          >
                            <CheckCircle2
                              size={14}
                              style={{ color: "#a855f7" }}
                              className="shrink-0"
                            />
                            {detail}
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

        {/* FAQs */}
        <div className="mt-12">
          <h2
            className="text-2xl font-bold mb-6 text-center"
            style={{ color: "#4b2e83" }}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                data-ocid={`faq.item.${i + 1}`}
              >
                <Card
                  className="border rounded-2xl"
                  style={{ borderColor: "#e9d5ff", background: "white" }}
                >
                  <CardContent className="p-5">
                    <h4
                      className="font-semibold mb-2"
                      style={{ color: "#4b2e83" }}
                    >
                      {faq.q}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {faq.a}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Revenue preview */}
        <div
          className="mt-12 rounded-2xl text-white p-8"
          style={{ background: "linear-gradient(135deg, #a855f7, #ec4899)" }}
        >
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="text-white" size={24} />
            <h3 className="text-xl font-bold">HOMIVA Revenue Growth</h3>
          </div>
          <p className="text-white/70 text-sm mb-6">
            Month-by-month platform growth in Year 1
          </p>
          <div className="grid grid-cols-4 gap-2">
            {[
              { m: "M1", r: "₹1.75L", b: 60 },
              { m: "M3", r: "₹2.34L", b: 80 },
              { m: "M6", r: "₹3.81L", b: 130 },
              { m: "M12", r: "₹8.78L", b: 300 },
            ].map((item) => (
              <div key={item.m} className="text-center">
                <div className="font-bold text-white text-sm">{item.r}</div>
                <div className="text-white/70 text-xs mt-0.5">
                  {item.b} bookings/day
                </div>
                <div className="text-white/70 text-xs">{item.m}</div>
              </div>
            ))}
          </div>
          <div
            className="mt-4 pt-4 border-t flex justify-between items-center"
            style={{ borderColor: "rgba(255,255,255,0.2)" }}
          >
            <span className="text-white/70 text-sm">Year 1 Total Revenue</span>
            <span className="text-2xl font-extrabold text-white">
              ≈ ₹51 Lakhs
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => navigate({ page: "service", serviceId: "elderly" })}
            className="text-white font-bold rounded-full px-10 py-4 text-base transition-opacity hover:opacity-90 shadow-lg"
            style={{ background: "linear-gradient(135deg, #ff4da6, #6a5acd)" }}
            data-ocid="howitworks.primary_button"
          >
            Book Your First Service
          </button>
        </div>
      </div>
    </div>
  );
}
