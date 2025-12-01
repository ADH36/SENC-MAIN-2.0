const About = () => {
  const teamMembers = [
    {
      initials: 'SH',
      name: 'SHIN',
      role: 'FOUNDER',
      description: 'Visionary leader driving innovation in esports and gaming technology.',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      initials: 'AD',
      name: 'ADH',
      role: 'CEO',
      description: 'Strategic leader committed to excellence and growth in the gaming industry.',
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  const values = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Innovation',
      description: 'Pushing boundaries to create next-gen gaming solutions.',
      color: 'cyan'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Trust',
      description: 'Building lasting relationships through transparency.',
      color: 'green'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Community',
      description: 'Working together with gamers to achieve shared success.',
      color: 'purple'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Performance',
      description: 'Committed to delivering high-performance solutions.',
      color: 'pink'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden hero-gradient">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-slide-up">
            <span className="inline-block px-4 py-2 glass rounded-full text-cyan-400 text-sm font-medium uppercase tracking-wider mb-8 border border-cyan-500/30">
              Our Story
            </span>
            <h1 className="font-gaming text-5xl md:text-7xl font-bold text-white mb-8">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">SENC</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We are a team of passionate gamers and technologists dedicated to 
              revolutionizing the esports industry with cutting-edge solutions.
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="glass card-hover p-10 rounded-2xl border border-white/5 animate-slide-up">
              <div className="w-16 h-16 mb-8 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 border border-cyan-500/30 flex items-center justify-center">
                <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="font-gaming text-3xl font-bold text-white mb-6">
                Our <span className="text-cyan-400">Vision</span>
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                To become the leading provider of integrated esports and gaming technology,
                connecting players, teams, and organizations with tools that drive growth,
                excellence, and innovation in the competitive gaming landscape.
              </p>
            </div>
            
            <div className="glass card-hover p-10 rounded-2xl border border-white/5 animate-slide-up delay-200">
              <div className="w-16 h-16 mb-8 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/30 flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="font-gaming text-3xl font-bold text-white mb-6">
                Our <span className="text-purple-400">Mission</span>
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                To deliver exceptional gaming products that enhance competitive performance,
                streamline team operations, and create unforgettable experiences through
                a unified platform that brings the entire esports ecosystem together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-gaming text-4xl md:text-5xl font-bold text-white mb-6">
              Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Values</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group glass card-hover p-8 rounded-2xl border border-white/5 text-center animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-20 h-20 mx-auto mb-6 rounded-xl bg-gradient-to-br from-${value.color}-500/20 to-transparent border border-${value.color}-500/30 flex items-center justify-center text-${value.color}-400 group-hover:scale-110 transition-transform duration-300`}>
                  {value.icon}
                </div>
                <h3 className="font-gaming text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
      </section>

      {/* Team Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 glass rounded-full text-purple-400 text-sm font-medium uppercase tracking-wider mb-6 border border-purple-500/30">
              The Squad
            </span>
            <h2 className="font-gaming text-4xl md:text-5xl font-bold text-white mb-6">
              Meet Our Team
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              The elite players behind SENC's success. Passionate individuals 
              dedicated to transforming the esports industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group glass card-hover rounded-2xl overflow-hidden border border-white/5 animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Avatar */}
                <div className="relative h-48 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f]"></div>
                  <div className={`relative w-28 h-28 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <span className="font-gaming text-3xl font-bold text-white">{member.initials}</span>
                  </div>
                  
                  {/* Corner decorations */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyan-500/30 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-purple-500/30 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </div>
                
                {/* Info */}
                <div className="p-6 text-center">
                  <h3 className="font-gaming text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-purple-400 text-sm font-medium uppercase tracking-wider mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl border border-white/5 p-12 relative overflow-hidden">
            <div className="absolute inset-0 hero-gradient opacity-50"></div>
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: '2020', label: 'Founded', suffix: '' },
                { value: '50', label: 'Team Members', suffix: '+' },
                { value: '100', label: 'Countries', suffix: '+' },
                { value: '1M', label: 'Gamers Served', suffix: '+' }
              ].map((stat, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="font-gaming text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-gray-400 uppercase tracking-wider text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
