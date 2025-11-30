interface AboutNewProps {
  aboutData: {
    bio: string;
    skills: Array<{
      name: string;
      level: number;
    }>;
    stats: Array<{
      value: string;
      label: string;
    }>;
  };
}

export default function AboutNew({ aboutData }: AboutNewProps) {
  return (
    <section id="about" className="py-32 px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        {/* Section Label */}
        <div className="text-gray-400 text-sm font-mono mb-8 tracking-widest">
          // SKILLS
        </div>

        {/* Bio */}
        <p className="text-xl text-gray-700 mb-12 leading-relaxed">
          {aboutData.bio}
        </p>

        {/* Skills as Tags */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {aboutData.skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center justify-between p-6 border border-gray-200 rounded-lg hover:border-gray-900 transition-colors"
            >
              <span className="font-medium text-gray-900">{skill.name}</span>
              <span className="text-gray-500">({skill.level}%)</span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8">
          {aboutData.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold text-gray-900 mb-2">
                {stat.value}
                <span className="text-gray-400">+</span>
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

