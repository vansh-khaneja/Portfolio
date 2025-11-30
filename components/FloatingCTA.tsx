export default function FloatingCTA() {
  return (
    <a
      href="#contact"
      className="fixed bottom-8 right-8 px-8 py-4 bg-gray-900 text-white rounded-full font-medium shadow-2xl hover:bg-gray-800 transform hover:scale-105 transition-all z-50 flex items-center gap-2"
    >
      <span>Meet me in Calendly</span>
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    </a>
  );
}

