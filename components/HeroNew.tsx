interface HeroNewProps {
  personalData: {
    name: string;
    title: string;
    description: string;
  };
}

export default function HeroNew({ personalData }: HeroNewProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 lg:px-16">
      <div className="max-w-4xl w-full text-center">
        {/* Animated Character Area */}
        <div className="mb-12 relative">
          <div className="w-64 h-64 mx-auto rounded-full border-4 border-dashed border-gray-200 flex items-center justify-center relative">
            <div className="text-8xl">👨‍💻</div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full mt-4 bg-gray-200 text-gray-700 px-6 py-2 rounded-full text-sm font-mono whitespace-nowrap">
              HI THERE! _
            </div>
          </div>
        </div>

        {/* Section Label */}
        <div className="text-gray-400 text-sm font-mono mb-4 tracking-widest">
          // ABOUT ME
        </div>

        {/* Large Background Text */}
        <div 
          className="text-9xl font-bold mb-8 opacity-5 select-none"
          style={{
            WebkitTextStroke: '2px #e5e7eb',
            WebkitTextFillColor: 'transparent',
          }}
        >
          ABOUT ME
        </div>

        {/* Title */}
        <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 -mt-20">
          {personalData.title}
        </h2>

        {/* Description */}
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          {personalData.description}
        </p>

        {/* Skills Tags */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <div className="px-6 py-3 border-2 border-gray-900 rounded-full text-gray-900 font-medium">
            Frontend<span className="text-gray-500">(40%)</span>
          </div>
          <div className="px-6 py-3 border-2 border-gray-900 rounded-full text-gray-900 font-medium">
            Backend<span className="text-gray-500">(45%)</span>
          </div>
          <div className="px-6 py-3 border-2 border-gray-900 rounded-full text-gray-900 font-medium">
            UI/UX<span className="text-gray-500">(15%)</span>
          </div>
        </div>
      </div>
    </section>
  );
}

