import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Technical Analyst",
      company: "ION Group",
      location: "Bengaluru, India",
      period: "Jan 2024 – Jul 2025",
      type: "Full-time",
      description: "Provided technical support by resolving client issues, troubleshooting system workflows, and implementing small automation solutions to improve efficiency and reduce manual effort.",
      achievements: [
        "Resolved 200+ client issues through systematic troubleshooting and optimization",
        "Automated database restoration processes, reducing manual work from days to hours",
        "Documented key processes to help new team members get up to speed faster",
        "Collaborated with cross-functional teams to implement scalable solutions"
      ],
      icon: <Briefcase className="w-6 h-6 text-purple-600" />
    },
    {
      title: "Software Development Intern",
      company: "ISRO LPSC",
      location: "Bengaluru, India",
      period: "May 2023 – Jul 2023",
      type: "Internship",
      description: "Developed cutting-edge computer vision solutions for aerospace applications.",
      achievements: [
        "Developed computer vision solutions for defect detection in critical systems",
        "Implemented ML algorithms achieving 94% accuracy in defect identification",
        "Applied Canny edge detection to improve defect segmentation and visualization",
        "Created comprehensive documentation and testing frameworks"
      ],
      icon: <Briefcase className="w-6 h-6 text-cyan-600" />
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-animated-gradient bg-[length:400%_400%] animate-gradient-shift opacity-20 pointer-events-none"></div>

      <div className="absolute inset-0 bg-gradient-hero opacity-50"></div>
      <div className="absolute inset-0 pixelated-bg opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional journey spanning system optimization, automation, and 
            cutting-edge computer vision applications.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-white border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  {exp.icon}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{exp.title}</h3>
                    <p className="text-cyan-600 font-medium">{exp.company}</p>
                    <p className="text-sm text-gray-600">{exp.location} • {exp.period} • {exp.type}</p>
                    <p className="mt-3 text-muted-foreground">{exp.description}</p>
                    <ul className="mt-3 space-y-2 text-sm text-gray-700">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-gray-400 rounded-full mt-2"></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
