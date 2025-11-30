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

interface ResumeProps {
  experience: Experience[];
  education: Education[];
}

export default function Resume({ experience, education }: ResumeProps) {
  return (
    <section id="resume" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-medium text-sm uppercase tracking-wider">Resume</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2">Education & Experience</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
              <span className="w-2 h-8 bg-blue-600 rounded mr-3"></span>
              Experience
            </h3>
            <div className="space-y-8">
              {experience.map((exp) => (
                <div
                  key={exp.id}
                  className="relative pl-8 border-l-2 border-gray-200 hover:border-blue-600 transition-colors"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="text-sm text-blue-600 font-medium mb-1">{exp.period}</div>
                  <h4 className="text-xl font-bold text-gray-800 mb-1">{exp.title}</h4>
                  <div className="text-gray-600 font-medium mb-3">@ {exp.company}</div>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
              <span className="w-2 h-8 bg-purple-600 rounded mr-3"></span>
              Education
            </h3>
            <div className="space-y-8">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="relative pl-8 border-l-2 border-gray-200 hover:border-purple-600 transition-colors"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-600 rounded-full"></div>
                  <div className="text-sm text-purple-600 font-medium mb-1">{edu.period}</div>
                  <h4 className="text-xl font-bold text-gray-800 mb-1">{edu.degree}</h4>
                  <div className="text-gray-600 font-medium mb-1">{edu.field}</div>
                  <div className="text-gray-600 font-medium mb-3">@ {edu.school}</div>
                  <p className="text-gray-600">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

