const rawWhatsappNumber =
  import.meta.env.VITE_WHATSAPP_NUMBER?.trim() || "918148865188";
const whatsappNumber = rawWhatsappNumber.replace(/\D/g, "");
const defaultMessage =
  "Hi, I'm interested in your online music classes. Please share more details.";

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

const FloatingWhatsApp = () => {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[60] flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_35px_rgba(37,211,102,0.35)] transition-transform duration-300 hover:scale-105 hover:bg-[#20bd5a] focus:outline-none focus:ring-4 focus:ring-[#25D366]/25"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      <svg
        className="relative h-8 w-8"
        viewBox="0 0 32 32"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M19.11 17.37c-.3-.15-1.78-.88-2.06-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.94 1.18-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.53.08-.8.38-.28.3-1.07 1.05-1.07 2.57 0 1.52 1.1 3 1.25 3.2.15.2 2.16 3.3 5.23 4.63.73.32 1.3.5 1.75.64.73.23 1.4.2 1.92.12.59-.09 1.78-.73 2.03-1.44.25-.72.25-1.33.17-1.45-.08-.12-.28-.2-.58-.35Z" />
        <path d="M16.02 3.2c-7.07 0-12.8 5.72-12.8 12.78 0 2.26.6 4.47 1.74 6.4L3.1 28.8l6.58-1.72a12.8 12.8 0 0 0 6.34 1.62h.01c7.06 0 12.79-5.72 12.79-12.78A12.73 12.73 0 0 0 16.02 3.2Zm0 23.35h-.01a10.7 10.7 0 0 1-5.46-1.49l-.39-.23-3.9 1.02 1.04-3.8-.25-.4a10.6 10.6 0 0 1-1.63-5.67c0-5.88 4.78-10.66 10.67-10.66 2.85 0 5.52 1.1 7.53 3.12a10.57 10.57 0 0 1 3.12 7.54c0 5.88-4.79 10.67-10.68 10.67Z" />
      </svg>
    </a>
  );
};

export default FloatingWhatsApp;
