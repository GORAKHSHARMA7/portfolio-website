// ---------------------------------------------------------------------------
// BUSINESS DATA — edit this file to update contact info site-wide.
// ---------------------------------------------------------------------------

export const business = {
  name: "Shyama Tech Mart",
  tagline: "Repaired Right. Built to Last.",
  subTagline:
    "Your neighbourhood expert for electronics, mobiles, watches and musical instruments.",
  phonePrimary: "9125526731",
  phoneSecondary: "9118933309",
  whatsappPrimary: "9125526731",
  whatsappSecondary: "9118933309",
  email: "info@shyamatechmart.in",
  address:
    "Asuran Chowk, Medical College Road, Shahpur, Gorakhpur, Uttar Pradesh, India - 273006",
  addressShort: "Asuran Chowk, Medical College Road, Shahpur, Gorakhpur - 273006",
  hours: [
    { day: "Monday – Saturday", time: "10:00 AM – 8:30 PM" },
    { day: "Sunday", time: "11:00 AM – 2:00 PM" },
  ],
  mapsEmbedSrc:
    "https://www.google.com/maps?q=Asuran+Chowk+Medical+College+Road+Shahpur+Gorakhpur+273006&output=embed",
  mapsLinkSrc:
    "https://www.google.com/maps/search/?api=1&query=Asuran+Chowk+Medical+College+Road+Shahpur+Gorakhpur+273006",
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    youtube: "https://youtube.com/",
  },
};

export const waLink = (number, prefilledMsg = "") => {
  const msg = encodeURIComponent(
    prefilledMsg || `Hello ${business.name}, I would like to know more about your services.`
  );
  return `https://wa.me/91${number}?text=${msg}`;
};

export const telLink = (number) => `tel:+91${number}`;
