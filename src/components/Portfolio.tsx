import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ExternalLink, Github, Image, Database } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Food Waste Management System",
      description: "Full-stack web application connecting restaurants and NGOs to reduce food waste through efficient resource distribution.",
      techStack: ["React", "Node.js", "MongoDB", "Google Maps API", "Express.js"],
      features: [
        "Developed full-stack web application connecting restaurants and NGOs to reduce food waste",
        "RESTful APIs for user authentication and inventory management",
        "Role-based access control for different user types",
        "Real-time inventory tracking and notifications"
      ],
      icon: <Database className="w-6 h-6 text-purple-600" />,
      category: "Full-Stack Development",
      github: "https://github.com/subikshajegadish/Food-Waste-Management-System"
    },
    {
      title: "Image Enhancement Using Exposure Fusion Framework",
      description: "Python-based computer vision solution for enhancing low-light images using advanced exposure fusion techniques.",
      techStack: ["Python", "OpenCV", "NumPy", "Scikit-learn", "Matplotlib"],
      features: [
        "3.7% PSNR boost in image quality metrics",
        "3% SSIM improvement in structural similarity",
        "Modular and configurable framework design",
        "Real-time processing capabilities"
      ],
      icon: <Image className="w-6 h-6 text-cyan-600" />,
      category: "Computer Vision",
      github: "https://github.com/subikshajegadish/Image-Contrast-Enhancement-using-Exposure-Fusion-Framework"
    },
  ];
  

  return (
    <section id="portfolio" className="py-20 relative overflow-visible">
      {/* Background */}
      <div className="absolute inset-0 bg-animated-gradient bg-[length:400%_400%] animate-gradient-shift opacity-20 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-hero opacity-30"></div>
      <div className="absolute inset-0 pixelated-bg opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative projects demonstrating expertise in full-stack development, 
            computer vision, and system automation.
          </p>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative max-w-4xl mx-auto overflow-visible">
          <Carousel className="w-full">
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index}>
                  <Card className="bg-white border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        {project.icon}
                        <div>
                          {/* Title & Category */}
                          <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                          <p className="text-cyan-600 font-medium">{project.category}</p>
                          
                          {/* Description */}
                          <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                            {project.description}
                          </p>

                          {/* Tech Stack */}
                          <div className="mt-3">
                            <h4 className="font-semibold text-gray-900 text-sm mb-2">Technologies:</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.techStack.map((tech, techIndex) => (
                                <span 
                                  key={techIndex} 
                                  className="px-3 py-1 bg-gray-100 text-gray-800 rounded-md text-xs hover:bg-gray-200 transition-colors"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Features */}
                          <div className="mt-3">
                            <h4 className="font-semibold text-gray-900 text-sm mb-2">Key Features:</h4>
                            <ul className="space-y-1 text-sm text-gray-700">
                              {project.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-start space-x-2">
                                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2"></span>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex space-x-3 pt-4">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="sm" className="hover:bg-gray-100">
                              <Github className="mr-1 h-4 w-4" />
                              View Code
                            </Button>
                          </a>


                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Carousel Controls */}
            <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20" />
            <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
