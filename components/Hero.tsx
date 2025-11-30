interface HeroProps {
  personalData: {
    name: string;
    title: string;
    description: string;
  };
}

export default function Hero({ personalData }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-gray-800 mb-6 animate-fade-in">
            {personalData.name}
          </h1>
          <h2 className="text-2xl md:text-4xl text-gray-600 mb-8 animate-fade-in-delay-1">
            {personalData.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 animate-fade-in-delay-2">
            {personalData.description}
          </p>
          <div className="flex justify-center gap-4 animate-fade-in-delay-3">
            <a
              href="#contact"
              className="px-8 py-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-4 bg-white text-gray-800 rounded-full font-medium hover:bg-gray-50 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl border border-gray-200"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

