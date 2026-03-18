export interface SubService {
  name: string;
  description: string;
  items: string[];
}

export interface ServiceData {
  id: string;
  backendId: bigint;
  title: string;
  tagline: string;
  price: string;
  priceNote: string;
  icon: string;
  color: string;
  bgColor: string;
  image: string;
  description: string;
  subServices: SubService[];
  packages?: {
    name: string;
    duration: string;
    price: string;
    features: string[];
  }[];
}

export const SERVICES: ServiceData[] = [
  {
    id: "elderly",
    backendId: BigInt(1),
    title: "Elderly Care",
    tagline: "Compassionate care for your loved ones",
    price: "₹700",
    priceNote: "per session",
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
  },
  {
    id: "babysitting",
    backendId: BigInt(2),
    title: "Babysitting",
    tagline: "Safe, nurturing childcare you can trust",
    price: "₹500",
    priceNote: "per session",
    icon: "👶",
    color: "orange",
    bgColor: "bg-orange-50",
    image: "/assets/generated/service-babysitting.dim_600x400.jpg",
    description:
      "Trained female caregivers with minimum 2 years of childcare experience. We partner with women SHGs and NGOs to provide safe, reliable, and enriching childcare.",
    subServices: [
      {
        name: "Hourly Booking",
        description: "Flexible childcare for a few hours",
        items: [
          "Child supervision at home",
          "Educational & creative play activities",
          "Basic learning support",
          "Care during parents' work or meetings",
        ],
      },
    ],
    packages: [
      {
        name: "3-Month Package",
        duration: "3 Months",
        price: "₹12,000",
        features: [
          "Consistent caregiver",
          "Scheduled sessions",
          "Monthly progress updates",
          "5% discount vs hourly",
        ],
      },
      {
        name: "6-Month Package",
        duration: "6 Months",
        price: "₹22,000",
        features: [
          "Dedicated caregiver",
          "Flexible scheduling",
          "Bi-weekly updates",
          "8% discount vs hourly",
        ],
      },
      {
        name: "9-Month Package",
        duration: "9 Months",
        price: "₹30,000",
        features: [
          "Priority caregiver matching",
          "Fully flexible scheduling",
          "Weekly reports",
          "12% discount vs hourly",
        ],
      },
    ],
  },
  {
    id: "household",
    backendId: BigInt(3),
    title: "Household Help",
    tagline: "Reliable daily home assistance, on demand",
    price: "₹350",
    priceNote: "per session",
    icon: "🏠",
    color: "teal",
    bgColor: "bg-teal-50",
    image: "/assets/generated/service-household.dim_600x400.jpg",
    description:
      "Book household help only when needed — more flexible and affordable than a full-time maid. Covering daily chores, cleaning, cooking prep, and event support.",
    subServices: [
      {
        name: "Daily Household Tasks",
        description: "Routine home maintenance & cleaning",
        items: [
          "Room cleaning & sweeping",
          "Washing clothes & utensils",
          "Vegetable cutting & meal prep",
          "General daily household chores",
        ],
      },
      {
        name: "Event Support",
        description: "Extra help for home gatherings & celebrations",
        items: [
          "Birthday party setup & cleanup",
          "Family gathering support",
          "Small celebration helpers",
          "Post-event cleaning",
        ],
      },
    ],
  },
  {
    id: "petcare",
    backendId: BigInt(4),
    title: "Pet Care",
    tagline: "Loving care for your furry family members",
    price: "₹400",
    priceNote: "per session",
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
          "Regular walking & exercise sessions",
          "Pet sitting for short durations",
          "Basic hygiene & grooming assistance",
        ],
      },
    ],
  },
];

export function getService(id: string): ServiceData | undefined {
  return SERVICES.find((s) => s.id === id);
}
