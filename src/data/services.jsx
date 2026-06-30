import {
  IconCircuit,
  IconMobile,
  IconWatch,
  IconWatchSale,
  IconKeyboard,
  IconDrumPad,
  IconTool,
  IconPlug,
} from "../components/Icons";

export const services = [
  {
    id: "electronics",
    no: "TKT-01",
    status: "Same Day",
    icon: <IconCircuit />,
    title: "Electronics Repair",
    short: "TVs, audio systems, home appliances and small electronics diagnosed and fixed on-site.",
    long:
      "From television panels and amplifiers to chargers, irons and small home appliances — our technicians diagnose the fault, source the right part, and repair it with original or high-grade compatible components. We test thoroughly before handover and explain what was wrong in plain language.",
    points: ["Free diagnosis", "Genuine & compatible parts", "Warranty on repair work"],
  },
  {
    id: "mobile",
    no: "TKT-02",
    status: "Express",
    icon: <IconMobile />,
    title: "Mobile Repair",
    short: "Screen, battery, charging port and software issues across all major smartphone brands.",
    long:
      "Cracked screens, draining batteries, charging port faults, water damage and software glitches — we handle Android and iOS devices with precision tools and tested replacement parts. Most common repairs are completed within a few hours.",
    points: ["Screen & battery replacement", "Water damage recovery", "Software troubleshooting"],
  },
  {
    id: "watch",
    no: "TKT-03",
    status: "Expert Care",
    icon: <IconWatch />,
    title: "Watch Repair",
    short: "Movement servicing, strap and glass replacement, battery change for analog and smart watches.",
    long:
      "Our watchmakers service mechanical, automatic and quartz movements, replace straps, glass and batteries, and restore water resistance where possible. We treat every piece — from a daily-wear watch to a family heirloom — with the same careful attention.",
    points: ["Movement servicing", "Battery & strap change", "Water resistance check"],
  },
  {
    id: "watch-sales",
    no: "TKT-04",
    status: "In Stock",
    icon: <IconWatchSale />,
    title: "Watch Sales",
    short: "A curated range of analog, digital and smart watches for men, women and kids.",
    long:
      "Browse a hand-picked selection of branded and value-for-money watches across analog, digital and smartwatch categories. Every watch sold comes with after-sales support from the same workshop that services it.",
    points: ["Men's, women's & kids' watches", "Smartwatches available", "After-sales support included"],
  },
  {
    id: "keyboard-pad-sales",
    no: "TKT-05",
    status: "In Stock",
    icon: <IconKeyboard />,
    title: "Musical Keyboard & Pad Sales",
    short: "Beginner to performance-grade keyboards and electronic drum pads.",
    long:
      "Whether you're buying a first keyboard for a student or a performance pad for a working musician, we stock trusted brands and help you choose based on budget, key-count and features — with a demo before you decide.",
    points: ["Beginner & performance models", "In-store demo", "EMI guidance available"],
  },
  {
    id: "instrument-repair",
    no: "TKT-06",
    status: "Skilled Hands",
    icon: <IconTool />,
    title: "Musical Instrument Repair",
    short: "Keyboard circuitry, key action, drum pad sensors and instrument electronics serviced.",
    long:
      "Stuck keys, dead pads, power issues or sound faults on keyboards and electronic drum kits — our technicians understand the electronics inside musical instruments, not just the music. We repair what other electronics shops won't touch.",
    points: ["Key & pad sensor repair", "Power & sound fault fixing", "Tuning-ready handover"],
  },
];

export const accessoriesBlurb = {
  id: "accessories",
  no: "TKT-07",
  status: "Always Stocked",
  icon: <IconPlug />,
  title: "Accessories & Spare Parts",
  short: "Chargers, cables, watch straps, instrument cables, batteries and more.",
  long:
    "A well-stocked counter of everyday essentials — phone chargers and cables, watch straps and batteries, keyboard adapters and instrument cables — so small fixes never mean a long wait.",
  points: ["Genuine spare parts", "Wide cable & charger range", "Same-day availability"],
};
