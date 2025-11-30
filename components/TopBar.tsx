interface TopBarProps {
  personalData: {
    name: string;
    phone: string;
    email: string;
  };
  social: {
    linkedin: string;
    github: string;
    twitter: string;
  };
}

export default function TopBar({ personalData, social }: TopBarProps) {
  return (
    <div className="fixed top-0 right-0 left-0 lg:left-80 bg-white border-b border-gray-100 z-40">
      <div className="flex items-center justify-between px-8 py-6">
        {/* Name in Outline Style */}
        <h1 className="text-4xl font-bold tracking-wide" style={{
          WebkitTextStroke: '1.5px #000',
          WebkitTextFillColor: 'transparent',
          color: 'transparent'
        }}>
          {personalData.name}
        </h1>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href={social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
            </svg>
          </a>
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Contact Info Dropdown */}
      <div className="hidden absolute top-full right-0 bg-white shadow-lg p-6 rounded-lg m-4 min-w-[300px]">
        <div className="space-y-4">
          <div>
            <div className="text-sm text-gray-500 mb-1">Phone:</div>
            <div className="font-medium">{personalData.phone}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-1">Email:</div>
            <div className="font-medium">{personalData.email}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

