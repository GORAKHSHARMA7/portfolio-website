import { IconWatchSale, IconKeyboard, IconDrumPad, IconPlug } from "../components/Icons";

export const productCategories = [
  {
    id: "watches",
    no: "PRD-01",
    icon: <IconWatchSale />,
    title: "Watches",
    description: "Analog, digital and smartwatches for men, women and kids — from everyday wear to gifting pieces.",
    items: [
      { name: "Classic Analog Watches", note: "Leather & steel straps" },
      { name: "Digital Sports Watches", note: "Shock & water resistant" },
      { name: "Smartwatches", note: "Fitness tracking & notifications" },
      { name: "Kids' Watches", note: "Durable, fun designs" },
    ],
  },
  {
    id: "keyboards",
    no: "PRD-02",
    icon: <IconKeyboard />,
    title: "Musical Keyboards",
    description: "Beginner to performance-grade electronic keyboards with demo before you buy.",
    items: [
      { name: "Beginner Keyboards", note: "Light-up keys, lesson modes" },
      { name: "61 / 76 Key Models", note: "Standard practice & stage use" },
      { name: "Arranger Keyboards", note: "Built-in rhythms & tones" },
      { name: "Keyboard Stands & Adapters", note: "Sold separately" },
    ],
  },
  {
    id: "pads",
    no: "PRD-03",
    icon: <IconDrumPad />,
    title: "Musical Pads",
    description: "Electronic drum pads and percussion pads for practice and performance.",
    items: [
      { name: "Practice Drum Pads", note: "Compact, headphone-ready" },
      { name: "Multi-Pad Percussion Sets", note: "Performance grade" },
      { name: "Pad Sticks & Sensors", note: "Spares available" },
    ],
  },
  {
    id: "accessories",
    no: "PRD-04",
    icon: <IconPlug />,
    title: "Accessories & Spare Parts",
    description: "Everyday essentials for electronics, watches and musical instruments.",
    items: [
      { name: "Mobile Chargers & Cables", note: "All major brands" },
      { name: "Watch Straps & Batteries", note: "Leather, steel & rubber" },
      { name: "Instrument Cables & Adapters", note: "Keyboard & pad compatible" },
      { name: "Replacement Parts", note: "Screens, ports, sensors" },
    ],
  },
];
