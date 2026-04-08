import Link from "next/link";

export default function WhatsAppButton() {
  const waUrl =
    "https://wa.me/6282240672888?text=Halo%20YAPU%2C%20saya%20ingin%20mengetahui%20lebih%20lanjut%20tentang%20program%20dan%20donasi.";

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      id="whatsapp-float-button"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 hover:shadow-green-400/40 group"
      style={{ background: "#25D366" }}
      aria-label="Chat WhatsApp YAPU"
    >
      {/* WhatsApp SVG Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        className="w-8 h-8"
        fill="white"
      >
        <path d="M24 4C13 4 4 13 4 24c0 3.7 1 7.2 2.8 10.2L4 44l10.1-2.7C17.1 43.1 20.5 44 24 44c11 0 20-9 20-20S35 4 24 4zm0 36c-3.1 0-6.1-.8-8.7-2.4l-.6-.4-6 1.6 1.6-5.9-.4-.6C8.8 30.1 8 27.1 8 24c0-8.8 7.2-16 16-16s16 7.2 16 16-7.2 16-16 16zm8.8-11.9c-.5-.2-2.8-1.4-3.2-1.5-.4-.2-.7-.2-1 .2-.3.5-1.2 1.5-1.5 1.8-.3.3-.5.4-1 .1-.5-.2-2-.7-3.8-2.3-1.4-1.2-2.4-2.8-2.6-3.2-.3-.5 0-.8.2-1 .2-.2.5-.5.7-.8.2-.3.3-.5.4-.8.1-.3 0-.6-.1-.8-.1-.2-1-2.5-1.4-3.4-.4-.9-.8-.8-1-.8h-.9c-.3 0-.8.1-1.2.6-.4.5-1.6 1.5-1.6 3.7s1.6 4.3 1.8 4.6c.2.3 3.2 4.9 7.7 6.8 1.1.5 1.9.8 2.6 1 1.1.3 2 .3 2.8.2.8-.1 2.6-1.1 3-2.1.4-1 .4-1.9.3-2.1-.2-.1-.5-.2-1-.4z" />
      </svg>

      {/* Tooltip */}
      <span className="absolute right-16 bg-white text-gray-800 text-xs font-medium px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat via WhatsApp
      </span>
    </a>
  );
}
