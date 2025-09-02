import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, Code, Zap } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: "Masters in Software Engineering",
      school: "University of Maryland, College Park",
      period: "2025 – 2027 (Expected)",
      icon: <GraduationCap className="w-6 h-6 text-purple-600" />
    },
    {
      degree: "BTech in Computer Science and Engineering",
      school: "Vellore Institute of Technology",
      period: "2020 – 2024",
      icon: <GraduationCap className="w-6 h-6 text-cyan-600" />
    }
  ];

  const skills = [
    {
      category: "Languages",
      items: ["Python", "Java", "C/C++", "JavaScript", "HTML/CSS", "R", "SQL"],
      icon: <Code className="w-6 h-6 text-purple-600" />
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MongoDB", "MySQL"],
      icon: <Zap className="w-6 h-6 text-cyan-600" />
    },
    {
      category: "Frameworks and Libraries",
      items: ["React", "Node.js", "Django", "ExpressJS", "Bootstrap", "Pandas", "NumPy", "Matplotlib", "OpenCV", "Scikit-learn"],
      icon: <Award className="w-6 h-6 text-pink-600" />
    },
    {
      category: "Tools and Platforms",
      items: ["Git", "JIRA", "Microsoft Azure", "VS Code", "Visual Studio", "PyCharm", "IntelliJ", "Eclipse"],
      icon: <Code className="w-6 h-6 text-blue-600" />
    },
    {
      category: "Operating Systems",
      items: ["Windows", "Linux (Ubuntu)"],
      icon: <Zap className="w-6 h-6 text-cyan-600" />
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-animated-gradient bg-[length:400%_400%] animate-gradient-shift opacity-20 pointer-events-none"></div>

      <div className="absolute inset-0 tech-grid opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-justify">
          I began coding out of curiosity, discovered my love for building systems at VIT, and continuing that journey at UMD. My previous experiences taught me one thing: the best technology starts with people.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Story */}
          <div className="space-y-6 animate-fade-in-up">
            {/* <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-neon-cyan">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
              </p>
              <p className="text-muted-foreground leading-relaxed">
              Along the way, at ION Group and ISRO LPSC, I learned that the most meaningful projects aren’t just about technology—they’re about the people who use it.
              </p>
            </div> */}

            {/* Education */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-neon-purple">Education</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card key={index} className="bg-white border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        {edu.icon}
                        <div>
                          <h4 className="font-semibold text-gray-900">{edu.degree}</h4>
                          <p className="text-cyan-600 font-medium">{edu.school}</p>
                          <p className="text-sm text-gray-600">{edu.period}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6 animate-slide-in-right">
            <h3 className="text-2xl font-semibold text-neon-cyan">Technical Expertise</h3>
            <div className="grid gap-6">
              {skills.map((skill, index) => (
                <Card key={index} className="bg-white border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      {skill.icon}
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-3">{skill.category}</h4>
                        <div className="flex flex-wrap gap-2">
                          {skill.items.map((item, itemIndex) => (
                            <span 
                              key={itemIndex}
                              className="px-3 py-1 bg-gray-100 text-gray-800 rounded-md text-sm hover:bg-gray-200 transition-colors"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;