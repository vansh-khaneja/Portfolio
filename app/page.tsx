import portfolioData from '@/data/portfolio.json';
import ChatBot from '@/components/ChatBot';

export default function Home() {
  const firstName = portfolioData.personal.name.split(' ')[0];
  const lastName = portfolioData.personal.name.split(' ').slice(1).join(' ');

  return (
    <div className="min-h-screen bg-white relative" style={{
      backgroundImage: 'radial-gradient(circle, #d1d5db 1px, transparent 1px)',
      backgroundSize: '24px 24px'
    }}>
      {/* Top Right Icons */}
      <div className="fixed top-8 right-8 flex items-center gap-6 z-50">
        <a href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-600">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-600">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>
        <button className="p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>

      {/* Floating Navigation Box */}
      <div className="fixed left-10 top-36 z-40 bg-black text-white p-7 rounded-xl w-72 shadow-2xl">
        <nav>
          <ul className="space-y-5">
            <li>
              <a href="#about" className="flex items-center justify-between text-gray-300 hover:text-white transition-colors text-sm tracking-[0.2em]">
                <span>ABOUT ME</span>
                <span className="w-3 h-3 rounded-full border-2 border-dashed border-gray-500"></span>
              </a>
            </li>
            <li>
              <a href="#resume" className="flex items-center justify-between text-gray-300 hover:text-white transition-colors text-sm tracking-[0.2em]">
                <span>RESUME</span>
                <span className="w-2 h-2 rounded-full bg-white"></span>
              </a>
            </li>
            <li>
              <a href="#portfolio" className="flex items-center justify-between text-gray-300 hover:text-white transition-colors text-sm tracking-[0.2em]">
                <span>PORTFOLIO</span>
                <span className="w-2 h-2 rounded-full bg-white"></span>
              </a>
            </li>
            <li>
              <a href="#blog" className="flex items-center justify-between text-gray-300 hover:text-white transition-colors text-sm tracking-[0.2em]">
                <span>BLOG</span>
                <span className="w-2 h-2 rounded-full bg-white"></span>
              </a>
            </li>
            <li>
              <a href="#contact" className="flex items-center justify-between text-gray-300 hover:text-white transition-colors text-sm tracking-[0.2em]">
                <span>CONTACT</span>
                <span className="w-2 h-2 rounded-full bg-white"></span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <main className="pl-[320px] pr-12">
        {/* Large Name Header - Now in main content area */}
        <div className="pt-8 pb-3">
          <div className="w-full max-w-5xl mx-auto px-8 border-b border-gray-200 pb-3">
            <h1 className="text-[80px] font-bold leading-none tracking-tight">
              <span className="text-gray-900">{firstName}</span>{' '}
              <span 
                style={{
                  WebkitTextStroke: '2px #000',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {lastName}
              </span>
          </h1>
          </div>
        </div>
        {/* About Section */}
        <section id="about" className="flex items-center justify-center pt-8 pb-6">
          <div className="w-full max-w-5xl mx-auto px-8">
            {/* About Card */}
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 shadow-lg w-full">
              <div className="text-left">
                <div className="text-sm text-gray-400 mb-3 tracking-widest font-mono">// ABOUT ME</div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3 leading-tight">
                  {portfolioData.personal.title}
                </h2>

                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {portfolioData.personal.description}
                </p>

                {/* Skills Pills */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {portfolioData.about.skills.map((skill) => (
                    <div key={skill.name} className="px-6 py-2.5 border-2 border-gray-900 rounded-full font-medium">
                      {skill.name}<span className="text-gray-500">({skill.level}%)</span>
                    </div>
                  ))}
                </div>

                {/* Stats Cards with Outline Numbers */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {portfolioData.about.stats.map((stat, index) => (
                    <div key={index} className="text-left">
                      <div className="flex items-start mb-2">
                        <span 
                          className="text-6xl font-bold mr-2"
                          style={{
                            WebkitTextStroke: '2px #000',
                            WebkitTextFillColor: 'transparent',
                          }}
                        >
                          {stat.value}
                        </span>
                        <span className="text-3xl font-bold mt-1">+</span>
                      </div>
                      <div className="text-sm font-bold tracking-wider uppercase">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resume Section - Education & Experience Card */}
        <section id="resume" className="flex items-center justify-center py-6">
          <div className="w-full max-w-5xl mx-auto px-8">
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 shadow-lg w-full">
              <div className="text-left">
                <div className="text-sm text-gray-400 mb-3 tracking-widest font-mono">// RESUME</div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Education & Experience
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Experience */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Experience</h3>
                    <div className="relative">
                      {portfolioData.experience.map((exp, index) => (
                        <div key={exp.id} className="relative pl-6 pb-6 last:pb-0">
                          {/* Vertical line - not shown for last item */}
                          {index !== portfolioData.experience.length - 1 && (
                            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                          )}
                          {/* Line only to the dot for last item */}
                          {index === portfolioData.experience.length - 1 && (
                            <div className="absolute left-0 top-0 w-0.5 bg-gray-200 h-2"></div>
                          )}
                          <div className="absolute -left-[3px] top-0 w-2 h-2 bg-gray-900 rounded-full"></div>
                          <div className="text-sm text-gray-500 mb-1">{exp.period}</div>
                          <h4 className="text-lg font-bold text-gray-900 mb-1">{exp.title}</h4>
                          <div className="text-gray-600 font-medium mb-1.5">@ {exp.company}</div>
                          <p className="text-gray-600 text-sm">{exp.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Education */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Education</h3>
                    <div className="relative">
                      {portfolioData.education.map((edu, index) => (
                        <div key={edu.id} className="relative pl-6 pb-6 last:pb-0">
                          {/* Vertical line - not shown for last item */}
                          {index !== portfolioData.education.length - 1 && (
                            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                          )}
                          {/* Line only to the dot for last item */}
                          {index === portfolioData.education.length - 1 && (
                            <div className="absolute left-0 top-0 w-0.5 bg-gray-200 h-2"></div>
                          )}
                          <div className="absolute -left-[3px] top-0 w-2 h-2 bg-gray-900 rounded-full"></div>
                          <div className="text-sm text-gray-500 mb-1">{edu.period}</div>
                          <h4 className="text-lg font-bold text-gray-900 mb-1">{edu.degree}</h4>
                          <div className="text-gray-600 font-medium mb-0.5">{edu.field}</div>
                          <div className="text-gray-600 font-medium mb-1.5">@ {edu.school}</div>
                          <p className="text-gray-600 text-sm">{edu.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="flex items-center justify-center py-6">
          <div className="w-full max-w-5xl mx-auto px-8">
            {/* Portfolio Card */}
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 shadow-lg w-full">
              <div className="text-left">
                <div className="text-sm text-gray-400 mb-3 tracking-widest font-mono">// PORTFOLIO</div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3 leading-tight">My Latest Works</h2>
                <p className="text-gray-600 mb-6">Some of my recent projects</p>
                
                <div className="grid grid-cols-2 gap-6">
                  {portfolioData.projects.slice(0, 4).map((project) => (
                    <div key={project.id} className="group relative overflow-hidden rounded-xl bg-gray-50 hover:shadow-lg transition-all">
                      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                        <div className="text-7xl opacity-20">💻</div>
                      </div>
                      <div className="p-4">
                        <div className="text-xs text-blue-600 font-medium mb-1.5">{project.category}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1.5">{project.title}</h3>
                        <p className="text-gray-600 text-sm mb-2.5 line-clamp-2">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span key={tech} className="px-3 py-1 bg-white border border-gray-200 text-xs rounded-full">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="flex items-center justify-center py-6">
          <div className="w-full max-w-5xl mx-auto px-8">
            {/* Blog Card */}
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 shadow-lg w-full">
              <div className="text-left">
                <div className="text-sm text-gray-400 mb-3 tracking-widest font-mono">// BLOG</div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">Latest Blog Posts</h2>

                <div className="grid grid-cols-3 gap-5">
                  {portfolioData.blog.slice(0, 3).map((post) => (
                    <article key={post.id} className="group">
                      <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-3 relative overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2.5 left-2.5">
                          <span className="px-3 py-1.5 bg-black text-white text-xs font-semibold rounded-full">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 mb-1.5">
                        Posted on {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </div>
                      <h3 className="text-lg font-bold mb-1.5 group-hover:text-gray-600 transition-colors">{post.title}</h3>
                      <p className="text-gray-600 text-sm mb-2 line-clamp-2">{post.excerpt}</p>
                      <a href={`/blog/${post.slug}`} className="text-sm font-medium hover:underline inline-flex items-center gap-1">
                        Read more →
                      </a>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="flex items-center justify-center py-6">
          <div className="w-full max-w-5xl mx-auto px-8">
            {/* Contact Card */}
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 shadow-lg w-full">
              <div className="text-left">
                <div className="text-sm text-gray-400 mb-3 tracking-widest font-mono">// GET IN TOUCH</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2 leading-tight">Reach Me</h2>
                <p className="text-gray-600 mb-5 text-sm">If you want to contact me, just call me or email.</p>

                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Name"
                      className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-gray-900 transition-colors text-sm"
                    />
                    <input
                      type="email"
                      placeholder="E-Mail"
                      className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-gray-900 transition-colors text-sm"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-gray-900 transition-colors text-sm"
                  />
                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-gray-900 resize-none transition-colors text-sm"
                  />
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors text-sm"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
        </div>
        </section>
      </main>

      {/* Chatbot */}
      <ChatBot />
    </div>
  );
}
