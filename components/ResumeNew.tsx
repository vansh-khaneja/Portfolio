interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
}

interface Education {
  id: number;
  degree: string;
  field: string;
  school: string;
  period: string;
  description: string;
}

interface ResumeNewProps {
  experience: Experience[];
  education: Education[];
}

export default function ResumeNew({ experience, education }: ResumeNewProps) {
  return (
    <section id="resume" className="py-32 px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        {/* Section Label */}
        <div className="text-gray-400 text-sm font-mono mb-8 tracking-widest">
          // RESUME
        </div>

        {/* Background Text */}
        <div 
          className="text-9xl font-bold mb-8 opacity-5 select-none"
          style={{
            WebkitTextStroke: '2px #e5e7eb',
            WebkitTextFillColor: 'transparent',
          }}
        >
          RESUME
        </div>

        <h2 className="text-5xl font-bold text-gray-900 mb-16 -mt-20">Education & Experience</h2>

        {/* Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Experience</h3>
          <div className="space-y-12">
            {experience.map((exp) => (
              <div key={exp.id} className="relative pl-8 border-l-2 border-gray-200">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-gray-900 rounded-full"></div>
                <div className="text-sm text-gray-500 mb-2">{exp.period}</div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h4>
                <div className="text-gray-600 font-medium mb-4">@ {exp.company}</div>
                <p className="text-gray-600 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Education</h3>
          <div className="space-y-12">
            {education.map((edu) => (
              <div key={edu.id} className="relative pl-8 border-l-2 border-gray-200">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-gray-900 rounded-full"></div>
                <div className="text-sm text-gray-500 mb-2">{edu.period}</div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                <div className="text-gray-600 font-medium mb-1">{edu.field}</div>
                <div className="text-gray-600 font-medium mb-4">@ {edu.school}</div>
                <p className="text-gray-600 leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

