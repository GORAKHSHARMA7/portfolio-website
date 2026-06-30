// Minimal hand-picked SVG icon set — keeps bundle light, no external icon dependency.
const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const IconPhone = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const IconWhatsapp = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M17.47 14.38c-.29-.15-1.7-.84-1.97-.93-.26-.1-.46-.15-.65.15-.2.29-.75.93-.92 1.12-.17.2-.34.22-.63.08-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.08-.15-.65-1.58-.9-2.16-.24-.58-.48-.5-.65-.51h-.56c-.2 0-.51.07-.78.37-.26.29-1.02 1-1.02 2.44s1.05 2.83 1.2 3.03c.15.2 2.07 3.17 5.02 4.44.7.3 1.25.48 1.68.62.7.22 1.34.19 1.85.12.56-.08 1.7-.7 1.95-1.37.24-.68.24-1.26.17-1.38-.07-.12-.27-.2-.56-.34z" />
    <path d="M12.04 2C6.58 2 2.13 6.42 2.13 11.86c0 1.86.5 3.6 1.43 5.1L2 22l5.18-1.5a9.9 9.9 0 0 0 4.86 1.25h.01c5.46 0 9.9-4.42 9.9-9.86C21.95 6.42 17.5 2 12.04 2zm0 18.02h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.08.9.91-2.97-.2-.31a8.06 8.06 0 0 1-1.28-4.45c0-4.5 3.69-8.16 8.18-8.16a8.1 8.1 0 0 1 5.78 2.4 8 8 0 0 1 2.39 5.74c0 4.5-3.69 8.18-8.21 8.18z" />
  </svg>
);

export const IconMail = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 6-10 7L2 6" />
  </svg>
);

export const IconPin = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const IconClock = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

export const IconCircuit = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <rect x="7" y="7" width="10" height="10" rx="1" />
    <path d="M7 9H3M7 15H3M21 9h-4M21 15h-4M9 7V3M15 7V3M9 21v-4M15 21v-4" />
  </svg>
);

export const IconMobile = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <rect x="6" y="2" width="12" height="20" rx="2" />
    <path d="M11 18h2" />
  </svg>
);

export const IconWatch = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <circle cx="12" cy="12" r="6.5" />
    <path d="M12 9v3.2l2 1.3M9 5.5 9.7 2h4.6l.7 3.5M9 18.5 9.7 22h4.6l.7-3.5" />
  </svg>
);

export const IconWatchSale = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <circle cx="12" cy="12" r="6.5" />
    <path d="M12 9v3.2l2 1.3M9 5.5 9.7 2h4.6l.7 3.5M9 18.5 9.7 22h4.6l.7-3.5" />
    <path d="m20 4 1.5 1.5L18 9" />
  </svg>
);

export const IconKeyboard = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <rect x="2" y="6" width="20" height="12" rx="2" />
    <path d="M6 10v.01M10 10v.01M14 10v.01M18 10v.01M6 14h12" />
  </svg>
);

export const IconDrumPad = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <rect x="3" y="3" width="8" height="8" rx="1.5" />
    <rect x="13" y="3" width="8" height="8" rx="1.5" />
    <rect x="3" y="13" width="8" height="8" rx="1.5" />
    <rect x="13" y="13" width="8" height="8" rx="1.5" />
  </svg>
);

export const IconTool = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L2 19l3 3 7.3-7.3a4 4 0 0 0 5.4-5.4l-2.8 2.8-2-2 2.8-2.8Z" />
  </svg>
);

export const IconPlug = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <path d="M9 2v4M15 2v4M7 10h10v3a5 5 0 0 1-10 0v-3ZM12 18v4" />
  </svg>
);

export const IconStar = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.5 14.9 9l7.1.6-5.4 4.7L18.2 21 12 17.3 5.8 21l1.6-6.7L2 9.6 9.1 9z" />
  </svg>
);

export const IconCheck = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const IconShield = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <path d="M12 2 4 5v6c0 5 3.4 8.7 8 11 4.6-2.3 8-6 8-11V5l-8-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const IconUsers = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3.5 20c.7-3.2 3-5 5.5-5s4.8 1.8 5.5 5" />
    <circle cx="17" cy="9" r="2.4" />
    <path d="M16 14.3c2 .2 3.6 1.8 4.2 4.7" />
  </svg>
);

export const IconBadge = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <circle cx="12" cy="9" r="5.5" />
    <path d="m8.5 13.5-1.7 7L12 18l5.2 2.5-1.7-7" />
  </svg>
);

export const IconTimer = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <path d="M10 2h4M12 14 15 9" />
    <circle cx="12" cy="14" r="8" />
  </svg>
);

export const IconArrowRight = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const IconMenu = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
);

export const IconClose = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

export const IconFacebook = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M14 9V6.5c0-.69.56-1.25 1.25-1.25H17V2h-2.5A4.25 4.25 0 0 0 10.25 6.25V9H8v3h2.25v10h3.5V12H16l.75-3h-3.75Z" />
  </svg>
);

export const IconInstagram = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const IconYoutube = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <rect x="2" y="5" width="20" height="14" rx="4" />
    <path d="m10 9 5 3-5 3Z" fill="currentColor" stroke="none" />
  </svg>
);

export const IconUpload = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" />
  </svg>
);

export const IconCamera = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2Z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
);

export const IconSpark = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5 19 19M19 5l-2.5 2.5M7.5 16.5 5 19" />
  </svg>
);
