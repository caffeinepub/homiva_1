import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CalendarPlus,
  ChevronLeft,
  ChevronRight,
  Clock,
  Smartphone,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import type { NavState } from "../App";
import { SERVICES } from "../data/services";

interface HomePageProps {
  navigate: (state: NavState) => void;
  onAuthOpen: () => void;
}

const WHY_ITEMS = [
  { icon: "📍", title: "Hyper-Local", desc: "Within 5 km radius" },
  { icon: "⚡", title: "15–20 Min", desc: "Quick response time" },
  { icon: "✅", title: "Verified Workers", desc: "Aadhaar & PAN verified" },
  { icon: "💰", title: "Transparent Pricing", desc: "No hidden charges" },
];

const TRUST_ITEMS = [
  { icon: "🪪", title: "KYC Verified" },
  { icon: "🚔", title: "Police Verified" },
  { icon: "🔐", title: "Dual OTP" },
  { icon: "📍", title: "GPS Tracking" },
  { icon: "🎓", title: "Certified Caregivers" },
];

const TESTIMONIALS = [
  {
    name: "Priya Chatterjee",
    location: "Salt Lake, Kolkata",
    rating: 5,
    text: "HOMIVA's elderly care service has been a blessing for our family. The caregiver assigned to my mother is so patient and professional. We feel completely at ease.",
    service: "Elderly Care",
    avatar: "PC",
  },
  {
    name: "Rahul Mehta",
    location: "New Town, Kolkata",
    rating: 5,
    text: "The babysitter assigned to our 3-year-old is wonderful. She's trained, caring, and my daughter absolutely loves her. Booking is super easy through the app!",
    service: "Babysitting",
    avatar: "RM",
  },
  {
    name: "Ananya Bose",
    location: "Ballygunge, Kolkata",
    rating: 5,
    text: "Used the household help service twice this month. Both times the helper arrived within 20 minutes, did a thorough job. Great value for money!",
    service: "Household Help",
    avatar: "AB",
  },
];

const FINANCIALS = [
  { label: "Year-1 Revenue", value: "₹51 Lakhs", icon: TrendingUp },
  { label: "Break-Even", value: "18–24 Months", icon: Clock },
  { label: "Workers/Year", value: "500+", icon: Users },
  { label: "Initial Investment", value: "₹7 Lac", icon: Smartphone },
];

export default function HomePage({ navigate, onAuthOpen }: HomePageProps) {
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  return (
    <div className="relative">
      {/* ─── MOBILE HERO BANNER (compact) ─── */}
      <section className="md:hidden px-4 pt-4 pb-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl p-5"
          style={{
            background: "linear-gradient(135deg, #6a5acd, #a855f7)",
          }}
        >
          {/* Decorative circles */}
          <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/5" />
          <div className="absolute -right-2 bottom-4 w-20 h-20 rounded-full bg-white/5" />

          <span
            className="inline-block text-white text-xs font-semibold px-3 py-1 rounded-full mb-3"
            style={{ background: "rgba(255,255,255,0.2)" }}
          >
            🏡 Trusted Home Care
          </span>
          <h1 className="text-2xl font-extrabold text-white leading-snug mb-2">
            Your Home, Our <span style={{ color: "#fbcfe8" }}>Care</span>
          </h1>
          <p className="text-white/70 text-sm mb-4 leading-relaxed">
            Verified workers in 15–20 min · Elderly care, babysitting, help &
            pet care
          </p>
          <Button
            onClick={() => navigate({ page: "service", serviceId: "elderly" })}
            className="rounded-full font-bold text-sm px-6 py-5 shadow-lg border-0 text-white"
            style={{ background: "linear-gradient(135deg, #ff4da6, #6a5acd)" }}
            data-ocid="hero.primary_button"
          >
            Book a Service Now →
          </Button>

          {/* Quick stats row */}
          <div className="flex gap-4 mt-4 pt-4 border-t border-white/10">
            {[
              { v: "500+", l: "Workers" },
              { v: "4.8★", l: "Rating" },
              { v: "5km", l: "Radius" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-base font-bold text-white">{s.v}</div>
                <div className="text-[10px] text-white/50">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ─── DESKTOP HERO (full) ─── */}
      <section className="hidden md:flex relative min-h-[80vh] items-center overflow-hidden">
        <img
          src="/assets/generated/hero-homiva.dim_1400x800.jpg"
          alt="HOMIVA caregiver"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <span
              className="inline-block text-white text-xs font-semibold px-3 py-1 rounded-full mb-4"
              style={{ background: "rgba(168,85,247,0.7)" }}
            >
              🏡 Trusted Home Care Platform
            </span>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
              Your Trusted
              <br />
              <span style={{ color: "#fbcfe8" }}>Home Care</span> Partner
            </h1>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Professional elderly care, babysitting, household help & pet care
              — hyper-local, verified workers, 15–20 min response.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                onClick={() =>
                  navigate({ page: "service", serviceId: "elderly" })
                }
                className="rounded-full text-white font-bold px-8 py-6 text-base shadow-lg border-0"
                style={{
                  background: "linear-gradient(135deg, #ff4da6, #6a5acd)",
                }}
                data-ocid="hero.primary_button"
              >
                Book a Service Now
              </Button>
              <Button
                onClick={() => navigate({ page: "how-it-works" })}
                variant="outline"
                className="rounded-full border-white/70 text-white bg-white/10 hover:bg-white/20 font-semibold px-8 py-6 text-base backdrop-blur-sm"
                data-ocid="hero.secondary_button"
              >
                How It Works
              </Button>
            </div>
            <div className="flex gap-6 mt-10">
              {[
                { value: "500+", label: "Verified Workers" },
                { value: "5 km", label: "Hyper-Local Reach" },
                { value: "4.8★", label: "Customer Rating" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="text-2xl font-bold"
                    style={{ color: "#fbcfe8" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-white/70 text-xs mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── SERVICES HORIZONTAL SCROLL (mobile) / GRID (desktop) ─── */}
      <section className="py-5 md:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="px-4 mb-4 flex items-center justify-between">
            <div>
              <h2
                className="text-lg md:text-3xl font-extrabold"
                style={{ color: "#4b2e83" }}
              >
                Our Services
              </h2>
              <p className="text-xs md:text-sm text-gray-500 mt-0.5">
                Everything your home needs
              </p>
            </div>
            <button
              type="button"
              className="text-xs font-semibold md:hidden"
              style={{ color: "#a855f7" }}
              onClick={() =>
                navigate({ page: "service", serviceId: "elderly" })
              }
              data-ocid="services.secondary_button"
            >
              See all →
            </button>
          </div>

          {/* Mobile: horizontal scroll */}
          <div className="md:hidden flex gap-3 overflow-x-auto px-4 pb-2 snap-x snap-mandatory scrollbar-hide">
            {SERVICES.map((svc, i) => (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className="snap-start shrink-0 w-44"
                data-ocid={`services.item.${i + 1}`}
              >
                <Card
                  className="cursor-pointer border shadow-md rounded-3xl overflow-hidden h-full"
                  style={{ borderColor: "#e9d5ff", background: "white" }}
                  onClick={() =>
                    navigate({ page: "service", serviceId: svc.id })
                  }
                >
                  <div className="h-28 overflow-hidden">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-3">
                    <div className="text-2xl mb-1">{svc.icon}</div>
                    <h3
                      className="font-bold text-sm mb-1 leading-tight"
                      style={{ color: "#ec4899" }}
                    >
                      {svc.title}
                    </h3>
                    <div className="mt-2">
                      <div className="flex items-center gap-1 flex-wrap">
                        <span className="text-xs text-gray-400 line-through">
                          {svc.price}
                        </span>
                        <span
                          className="text-[10px] font-bold px-1.5 py-0.5 rounded-full text-white"
                          style={{ background: "#ec4899" }}
                        >
                          {svc.discountPct}% OFF
                        </span>
                      </div>
                      <span
                        className="text-sm font-bold"
                        style={{ color: "#6a5acd" }}
                      >
                        {svc.discountedPrice}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Desktop: grid */}
          <div className="hidden md:grid grid-cols-4 gap-6 px-4">
            {SERVICES.map((svc, i) => (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                data-ocid={`services.item.${i + 1}`}
              >
                <Card
                  className="card-hover cursor-pointer shadow-card overflow-hidden rounded-2xl h-full border"
                  style={{ borderColor: "#e9d5ff", background: "white" }}
                  onClick={() =>
                    navigate({ page: "service", serviceId: svc.id })
                  }
                >
                  <div className="h-44 overflow-hidden">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-5">
                    <div className="text-3xl mb-2">{svc.icon}</div>
                    <h3
                      className="font-bold text-lg mb-1"
                      style={{ color: "#ec4899" }}
                    >
                      {svc.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                      {svc.tagline}
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-lg text-gray-400 line-through font-medium">
                            {svc.price}
                          </span>
                          <span
                            className="text-xs font-bold px-2 py-0.5 rounded-full text-white"
                            style={{ background: "#ec4899" }}
                          >
                            {svc.discountPct}% OFF
                          </span>
                        </div>
                        <div className="flex items-baseline gap-1">
                          <span
                            className="text-xl font-bold"
                            style={{ color: "#6a5acd" }}
                          >
                            {svc.discountedPrice}
                          </span>
                          <span className="text-xs text-gray-400">
                            {svc.priceNote}
                          </span>
                        </div>
                      </div>
                      <Button
                        className="rounded-full text-white text-xs px-4 py-2 font-semibold border-0"
                        style={{
                          background:
                            "linear-gradient(135deg, #ff4da6, #6a5acd)",
                        }}
                        data-ocid={`services.item.${i + 1}.primary_button`}
                      >
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY HOMIVA ─── */}
      <section
        className="py-5 md:py-16 px-4"
        style={{ background: "linear-gradient(135deg, #f3e7ff, #ffe4f1)" }}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-lg md:text-3xl font-extrabold mb-1"
            style={{ color: "#4b2e83" }}
          >
            Why HOMIVA?
          </h2>
          <div
            className="w-12 h-1 rounded-full mb-3"
            style={{ background: "linear-gradient(90deg, #ff4da6, #6a5acd)" }}
          />
          <p className="text-xs md:text-sm mb-4" style={{ color: "#666" }}>
            What makes us different from the rest
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {WHY_ITEMS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-4 md:p-6 rounded-3xl border"
                style={{
                  background: "#f9f6ff",
                  borderColor: "#e9d5ff",
                }}
                data-ocid={`why.item.${i + 1}`}
              >
                <span className="text-3xl md:text-4xl mb-2">{item.icon}</span>
                <h3
                  className="font-bold text-sm md:text-base mb-0.5"
                  style={{ color: "#4b2e83" }}
                >
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRUST BADGES ─── */}
      <section
        className="py-8 md:py-14 px-4"
        style={{ background: "linear-gradient(135deg, #a855f7, #ec4899)" }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-lg md:text-2xl font-bold text-white mb-1">
            Trust & Safety First
          </h2>
          <p className="text-white/60 text-xs md:text-sm mb-5">
            Every worker goes through rigorous verification
          </p>

          {/* Chips row */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {TRUST_ITEMS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-2 shrink-0 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2"
                data-ocid={`trust.item.${i + 1}`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="text-white text-xs font-semibold whitespace-nowrap">
                  {item.title}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-5">
            <Button
              variant="outline"
              className="rounded-full border-white/60 text-white bg-white/10 hover:bg-white/20 font-semibold text-sm px-6"
              onClick={() => navigate({ page: "trust" })}
              data-ocid="trust.secondary_button"
            >
              Learn More About Safety
            </Button>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-8 md:py-16 px-4" style={{ background: "#f9f6ff" }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-lg md:text-3xl font-extrabold mb-1 md:text-center"
            style={{ color: "#4b2e83" }}
          >
            How It Works
          </h2>
          <div
            className="w-12 h-1 rounded-full mb-3 md:mx-auto"
            style={{ background: "linear-gradient(90deg, #ff4da6, #6a5acd)" }}
          />
          <p className="text-xs md:text-sm text-gray-500 mb-5 md:text-center">
            3 simple steps to get home care
          </p>
          <div className="grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-8">
            {[
              {
                step: "01",
                icon: "📱",
                title: "Book",
                desc: "Choose service, date & time",
              },
              {
                step: "02",
                icon: "🚗",
                title: "Worker Arrives",
                desc: "In 15–20 min, verified",
              },
              {
                step: "03",
                icon: "✅",
                title: "Done!",
                desc: "OTP confirm & rate",
              },
            ].map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative text-center"
                data-ocid={`howitworks.item.${i + 1}`}
              >
                <div
                  className="inline-flex w-12 h-12 md:w-16 md:h-16 rounded-full items-center justify-center text-2xl md:text-3xl mb-2 md:mb-4"
                  style={{ background: "#f9f6ff", border: "2px solid #e9d5ff" }}
                >
                  {step.icon}
                </div>
                <div
                  className="absolute top-0 left-1/2 -translate-x-8 w-5 h-5 md:w-6 md:h-6 rounded-full text-white text-[9px] md:text-xs font-bold flex items-center justify-center"
                  style={{ background: "#6a5acd" }}
                >
                  {i + 1}
                </div>
                <h3
                  className="font-bold mb-1 text-sm md:text-base"
                  style={{ color: "#4b2e83" }}
                >
                  {step.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-8 md:py-16 px-4" style={{ background: "#f9f6ff" }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-lg md:text-3xl font-extrabold mb-1 md:text-center"
            style={{ color: "#4b2e83" }}
          >
            Happy Customers
          </h2>
          <div
            className="w-12 h-1 rounded-full mb-3 md:mx-auto"
            style={{ background: "linear-gradient(90deg, #ff4da6, #6a5acd)" }}
          />
          <p className="text-xs md:text-sm text-gray-500 mb-5 md:text-center">
            Real families in Kolkata
          </p>

          <div className="relative">
            <motion.div
              key={testimonialIdx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Card
                className="border shadow-md rounded-3xl overflow-hidden"
                style={{ borderColor: "#e9d5ff", background: "white" }}
              >
                <CardContent className="p-5 md:p-8">
                  <div className="flex mb-3" style={{ color: "#ff4da6" }}>
                    {[1, 2, 3, 4, 5]
                      .slice(0, TESTIMONIALS[testimonialIdx].rating)
                      .map((n) => (
                        <Star key={n} size={16} fill="currentColor" />
                      ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base italic mb-5">
                    "{TESTIMONIALS[testimonialIdx].text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full text-white font-bold text-sm flex items-center justify-center"
                      style={{ background: "#a855f7" }}
                    >
                      {TESTIMONIALS[testimonialIdx].avatar}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm">
                        {TESTIMONIALS[testimonialIdx].name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {TESTIMONIALS[testimonialIdx].location} ·{" "}
                        {TESTIMONIALS[testimonialIdx].service}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <div className="flex items-center justify-center gap-4 mt-4">
              <button
                type="button"
                onClick={() =>
                  setTestimonialIdx(
                    (prev) =>
                      (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
                  )
                }
                className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-secondary transition-colors"
                style={{ color: "#a855f7" }}
                data-ocid="testimonials.pagination_prev"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-2">
                {TESTIMONIALS.map((t, dotIdx) => (
                  <button
                    type="button"
                    key={t.name}
                    onClick={() => setTestimonialIdx(dotIdx)}
                    className={`h-2 rounded-full transition-all duration-200 ${dotIdx === testimonialIdx ? "w-6" : "w-2 bg-gray-300"}`}
                    style={
                      dotIdx === testimonialIdx ? { background: "#a855f7" } : {}
                    }
                    data-ocid={`testimonials.item.${dotIdx + 1}`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() =>
                  setTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS.length)
                }
                className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-secondary transition-colors"
                style={{ color: "#a855f7" }}
                data-ocid="testimonials.pagination_next"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINANCIALS / STATS ─── */}
      <section
        className="py-8 md:py-14 px-4"
        style={{ background: "linear-gradient(135deg, #f3e7ff, #ffe4f1)" }}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-lg md:text-3xl font-extrabold mb-1 md:text-center"
            style={{ color: "#4b2e83" }}
          >
            HOMIVA by the Numbers
          </h2>
          <div
            className="w-12 h-1 rounded-full mb-3 md:mx-auto"
            style={{ background: "linear-gradient(90deg, #ff4da6, #6a5acd)" }}
          />
          <p className="text-xs md:text-sm text-gray-500 mb-5 md:text-center md:mb-8">
            A high-growth startup built for scale
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {FINANCIALS.map(({ label, value, icon: Icon }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-4 md:p-6 rounded-3xl border"
                style={{
                  background: "#f9f6ff",
                  borderColor: "#e9d5ff",
                }}
                data-ocid={`financials.item.${i + 1}`}
              >
                <Icon className="mb-2" size={22} style={{ color: "#a855f7" }} />
                <div
                  className="text-xl md:text-2xl font-extrabold mb-0.5"
                  style={{ color: "#4b2e83" }}
                >
                  {value}
                </div>
                <div className="text-xs text-gray-500">{label}</div>
              </motion.div>
            ))}
          </div>

          <div
            className="mt-5 md:mt-8 p-5 md:p-6 rounded-3xl text-white"
            style={{
              background: "linear-gradient(135deg, #ff4da6, #6a5acd)",
            }}
          >
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { v: "₹7 Lac", l: "Initial Value" },
                { v: "Godrej Waterside", l: "Salt Lake Sector V" },
                { v: "21%", l: "Commission" },
              ].map((s) => (
                <div key={s.l}>
                  <div
                    className="text-xl md:text-3xl font-bold mb-0.5"
                    style={{ color: "#f9f6ff" }}
                  >
                    {s.v}
                  </div>
                  <div className="text-white/70 text-xs">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section
        className="py-10 md:py-16 px-4"
        style={{ background: "#f3e8ff" }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Ready for <span style={{ color: "#ff4da6" }}>trusted</span> home
            care?
          </h2>
          <p className="text-gray-500 text-sm md:text-base mb-6">
            Join thousands of families in Kolkata who trust HOMIVA.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={() =>
                navigate({ page: "service", serviceId: "elderly" })
              }
              className="rounded-full font-bold px-8 py-5 text-base text-white shadow-md border-0"
              style={{
                background: "linear-gradient(135deg, #ff4da6, #6a5acd)",
              }}
              data-ocid="cta.primary_button"
            >
              Book a Service
            </Button>
            <Button
              onClick={onAuthOpen}
              variant="outline"
              className="rounded-full font-semibold px-8 py-5 text-base"
              style={{
                borderColor: "#a855f7",
                color: "#a855f7",
              }}
              data-ocid="cta.secondary_button"
            >
              Create Account
            </Button>
          </div>
        </div>
      </section>

      {/* ─── FLOATING ACTION BUTTON ─── */}
      <button
        type="button"
        onClick={() => navigate({ page: "service", serviceId: "elderly" })}
        className="md:hidden fixed bottom-20 right-4 z-40 w-14 h-14 rounded-full text-white shadow-2xl flex items-center justify-center"
        style={{ background: "#ff4da6" }}
        aria-label="Book a service"
        data-ocid="fab.primary_button"
      >
        <CalendarPlus size={24} />
      </button>
    </div>
  );
}
