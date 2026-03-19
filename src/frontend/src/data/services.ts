export interface SubService {
  name: string;
  description: string;
  items: string[];
}

export interface PricingItem {
  label: string;
  price: string;
  note?: string;
  discountPct?: number;
  discountedPrice?: string;
}

export interface ServiceData {
  id: string;
  backendId: bigint;
  title: string;
  tagline: string;
  price: string;
  priceNote: string;
  discountPct: number;
  discountedPrice: string;
  icon: string;
  color: string;
  bgColor: string;
  image: string;
  description: string;
  subServices: SubService[];
  pricing?: PricingItem[];
  packages?: {
    name: string;
    duration: string;
    price: string;
    discountedPrice?: string;
    discountPct?: number;
    features: string[];
  }[];
}

export const SERVICES: ServiceData[] = [
  {
    id: "elderly",
    backendId: BigInt(1),
    title: "Elderly Care",
    tagline: "Compassionate care for your loved ones",
    price: "₹459",
    priceNote: "per day",
    discountPct: 5,
    discountedPrice: "₹436",
    icon: "🏥",
    color: "teal",
    bgColor: "bg-teal-50",
    image: "/assets/generated/hero-homiva.dim_1400x800.jpg",
    description:
      "Professional elderly care services at home. Our trained caregivers include retired nurses for nursing care and retired army personnel for companionship, ensuring safety, reliability, and discipline.",
    subServices: [
      {
        name: "Nursing Care",
        description: "Basic medical & health support by retired nurses",
        items: [
          "Blood pressure & blood sugar monitoring",
          "Medication management & reminders",
          "Basic nursing support & first aid",
          "Post-hospitalization care & recovery",
        ],
      },
      {
        name: "Companionship Care",
        description:
          "Daily assistance & emotional support by retired army personnel",
        items: [
          "Hospital & clinic appointment escort",
          "Morning / evening walks",
          "Shopping & pharmacy visits",
          "Companionship & emotional support",
        ],
      },
    ],
    pricing: [
      {
        label: "Nursing Care – Daily",
        price: "₹459",
        note: "per day",
        discountPct: 5,
        discountedPrice: "₹436",
      },
      {
        label: "Nursing Care – Monthly (9 hrs)",
        price: "₹12,000",
        note: "per month",
        discountPct: 10,
        discountedPrice: "₹10,800",
      },
      {
        label: "Nursing Care – Monthly (24 hrs)",
        price: "₹15,000",
        note: "per month",
        discountPct: 10,
        discountedPrice: "₹13,500",
      },
      { label: "Companionship Care", price: "₹249", note: "per hour" },
    ],
  },
  {
    id: "babysitting",
    backendId: BigInt(2),
    title: "Babysitting",
    tagline: "Safe, nurturing childcare you can trust",
    price: "₹12,000",
    priceNote: "per month",
    discountPct: 10,
    discountedPrice: "₹10,800",
    icon: "👶",
    color: "orange",
    bgColor: "bg-orange-50",
    image: "/assets/generated/service-babysitting.dim_600x400.jpg",
    description:
      "Trained female caregivers with minimum 2 years of childcare experience. We partner with Women SHGs, NGOs, and Government women empowerment programs to provide safe, reliable childcare.",
    subServices: [
      {
        name: "Postpartum Care (45 Days)",
        description: "Specialized care for newborns and new mothers",
        items: [
          "Dedicated female caregiver",
          "Newborn bathing & feeding support",
          "Mother recovery assistance",
          "24/7 availability option",
        ],
      },
      {
        name: "Monthly Care Plan",
        description: "Consistent childcare for working parents",
        items: [
          "Child supervision at home",
          "Educational & creative play",
          "Basic learning support",
          "Flexible scheduling",
        ],
      },
    ],
    pricing: [
      {
        label: "Postpartum Care 45 Days (9 hrs)",
        price: "₹19,000",
        note: "45 days",
        discountPct: 10,
        discountedPrice: "₹17,100",
      },
      {
        label: "Postpartum Care 45 Days (24 hrs)",
        price: "₹25,000",
        note: "45 days",
        discountPct: 10,
        discountedPrice: "₹22,500",
      },
      {
        label: "Monthly Care Plan (9 hrs)",
        price: "₹12,000",
        note: "per month",
        discountPct: 10,
        discountedPrice: "₹10,800",
      },
      {
        label: "Monthly Care Plan (24 hrs)",
        price: "₹15,000",
        note: "per month",
        discountPct: 10,
        discountedPrice: "₹13,500",
      },
    ],
    packages: [
      {
        name: "Postpartum Care – 9 Hours",
        duration: "45 Days",
        price: "₹19,000",
        discountedPrice: "₹17,100",
        discountPct: 10,
        features: [
          "Trained female caregiver",
          "Newborn & mother support",
          "Daily progress updates",
          "Minimum 2 yrs experience",
        ],
      },
      {
        name: "Postpartum Care – 24 Hours",
        duration: "45 Days",
        price: "₹25,000",
        discountedPrice: "₹22,500",
        discountPct: 10,
        features: [
          "Round-the-clock care",
          "Night feeding support",
          "Priority caregiver matching",
          "Emergency backup caregiver",
        ],
      },
      {
        name: "Monthly Plan – 9 Hours",
        duration: "1 Month",
        price: "₹12,000",
        discountedPrice: "₹10,800",
        discountPct: 10,
        features: [
          "Consistent caregiver",
          "Scheduled daily sessions",
          "Monthly progress reports",
          "Flexible rescheduling",
        ],
      },
      {
        name: "Monthly Plan – 24 Hours",
        duration: "1 Month",
        price: "₹15,000",
        discountedPrice: "₹13,500",
        discountPct: 10,
        features: [
          "Full-day dedicated care",
          "Night supervision included",
          "Bi-weekly parent updates",
          "Priority support line",
        ],
      },
    ],
  },
  {
    id: "household",
    backendId: BigInt(3),
    title: "Household Help",
    tagline: "Reliable daily home assistance, on demand",
    price: "₹199",
    priceNote: "onwards",
    discountPct: 5,
    discountedPrice: "₹189",
    icon: "🏠",
    color: "teal",
    bgColor: "bg-teal-50",
    image: "/assets/generated/service-household.dim_600x400.jpg",
    description:
      "Book household help only when needed — more flexible and affordable than a full-time maid. Covering daily chores, cleaning, cooking prep, and event support.",
    subServices: [
      {
        name: "Cleaning Services",
        description: "Bathroom, kitchen, room & utensil cleaning",
        items: [
          "Bathroom cleaning (₹359–₹459)",
          "Kitchen deep cleaning (₹999)",
          "Room cleaning: 1 room ₹299 | 2 rooms ₹599 | 3 rooms ₹799",
          "Utensil washing (₹199/service)",
        ],
      },
      {
        name: "Daily Help & Events",
        description: "Laundry, meal prep, and gathering support",
        items: [
          "Laundry (₹299–₹499 by quantity)",
          "Vegetable chopping (₹59–₹199)",
          "Helping hand for gatherings (₹249/hour)",
          "Birthday party & family event support",
        ],
      },
    ],
    pricing: [
      { label: "Bathroom Cleaning", price: "₹359 – ₹459", note: "per service" },
      { label: "Kitchen Cleaning", price: "₹999", note: "per service" },
      { label: "Room Cleaning (1 room)", price: "₹299", note: "per service" },
      { label: "Room Cleaning (2 rooms)", price: "₹599", note: "per service" },
      { label: "Room Cleaning (3 rooms)", price: "₹799", note: "per service" },
      {
        label: "Utensil Washing",
        price: "₹199",
        note: "per service",
        discountPct: 5,
        discountedPrice: "₹189",
      },
      { label: "Laundry Services", price: "₹299 – ₹499", note: "by quantity" },
      { label: "Vegetable Chopping", price: "₹59 – ₹199", note: "by quantity" },
      { label: "Helping Hand for Gatherings", price: "₹249", note: "per hour" },
    ],
  },
  {
    id: "petcare",
    backendId: BigInt(4),
    title: "Pet Care",
    tagline: "Loving care for your furry family members",
    price: "₹199",
    priceNote: "onwards",
    discountPct: 5,
    discountedPrice: "₹189",
    icon: "🐾",
    color: "orange",
    bgColor: "bg-orange-50",
    image: "/assets/generated/service-petcare.dim_600x400.jpg",
    description:
      "Professional pet care in collaboration with verified local pet shops and care centers. Safe, experienced, and trustworthy care for your beloved pets.",
    subServices: [
      {
        name: "Pet Sitting & Walking",
        description: "Daily care and outdoor activities",
        items: [
          "Pet feeding as per owner's instructions",
          "Regular walking & exercise sessions (₹199/session)",
          "Drop-in sitting (₹299/hour)",
          "Basic hygiene assistance",
        ],
      },
      {
        name: "Hygiene & Vet Services",
        description: "Grooming, hygiene, and vet coordination",
        items: [
          "Cleaning & hygiene service (₹799)",
          "Veterinary appointment booking (₹399/session)",
          "Collaboration with verified local pet shops",
          "Professional handling by experienced caregivers",
        ],
      },
    ],
    pricing: [
      { label: "Cleaning & Hygiene", price: "₹799", note: "per service" },
      {
        label: "Pet Walking",
        price: "₹199",
        note: "per session",
        discountPct: 5,
        discountedPrice: "₹189",
      },
      { label: "Drop-in Services", price: "₹299", note: "per hour" },
      { label: "Veterinary Appointment", price: "₹399", note: "per session" },
    ],
  },
];

export function getService(id: string): ServiceData | undefined {
  return SERVICES.find((s) => s.id === id);
}

// Parse a price string like "₹12,000" or "₹459" to a number
export function parsePrice(price: string): number {
  return Number.parseInt(price.replace(/[₹,]/g, ""), 10) || 0;
}
