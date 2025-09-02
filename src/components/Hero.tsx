import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

// Load Sacramento font
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Sacramento&display=swap';
fontLink.rel = 'stylesheet';
if (!document.querySelector('link[href*="Sacramento"]')) {
  document.head.appendChild(fontLink);
}

// Resume download handler
const handleResumeDownload = () => {
  const link = document.createElement('a');
  link.href = '/Resume.pdf'; // Path to your resume in public folder
  link.download = 'Subiksha_Jegadish_Resume.pdf'; // Suggested file name
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-visible py-12 md:py-16 lg:py-24">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-animated-gradient bg-[length:400%_400%] animate-gradient-shift opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center max-w-5xl mx-auto">
          {/* Left Content */}
          <div className="flex flex-col items-center lg:items-start space-y-6 lg:space-y-12 animate-fade-in-up">
            <p className="text-neon-cyan text-lg">Hello there, I am</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center lg:text-left">
              <span className="gradient-text" style={{ fontFamily: "'Sacramento', cursive" }}>Subiksha Jegadish</span>
            </h1>
            <div className="text-lg sm:text-xl md:text-2xl text-muted-foreground text-center lg:text-left">
              Software Developer | AI/ML & Computer Vision
            </div>

            {/* Bio */}
            <p className="text-lg text-muted-foreground leading-relaxed text-center lg:text-left max-w-md">
              Software Engineering graduate student at UMD passionate about full-stack development, AI, and building systems that scale.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="#contact">
                <Button className="bg-white/20 backdrop-blur-sm border-white/30 text-foreground hover:bg-orange-100 hover:text-orange-800 hover:border-orange-200 transition-all duration-300">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Button>
              </a>
              
              <Button
                variant="outline"
                className="bg-white/20 backdrop-blur-sm border-white/30 text-foreground hover:bg-orange-100 hover:text-orange-800 hover:border-orange-200 transition-all duration-300"
                onClick={handleResumeDownload}
              >
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 justify-center lg:justify-start">
              <a href="https://github.com/subikshajegadish" className="text-muted-foreground hover:text-neon-cyan transition-colors" target="_blank" rel="noopener noreferrer">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/subiksha-jegadish-7683031b2/" className="text-muted-foreground hover:text-neon-cyan transition-colors" target="_blank" rel="noopener noreferrer">
                <Linkedin size={24} />
              </a>
              <a href="mailto:subiksha.jegadish@gmail.com" className="text-muted-foreground hover:text-neon-cyan transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0 animate-fade-in-up relative">
            <div className="relative w-64 h-64 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-72 lg:h-72 rounded-full overflow-hidden">
              <img
                src="https://i.postimg.cc/ydcxSvzw/IMG-7979-2.avif"
                alt="Subiksha Jegadish"
                className="w-full h-full object-cover"
              />

              {/* Decorative Stars */}
              <div className="absolute -top-6 -left-6 w-6 h-6 text-neon-purple float">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div className="absolute -bottom-6 -right-6 w-10 h-10 text-neon-cyan float" style={{ animationDelay: '1s' }}>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
