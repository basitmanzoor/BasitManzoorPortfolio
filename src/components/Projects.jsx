import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink, Github, Server, Globe, Database, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const projects = [
    {
      id: 1,
      title: "ERP Solution Backend",
      description: "Comprehensive backend system for enterprise resource planning with microservices architecture and real-time communication.",
      technologies: ["Node.js", "TypeScript", "Kafka", "Microservices"],
      features: [
        "12+ microservices architecture",
        "Real-time communication with Kafka",
        "40% improvement in response times",
        "Agile development methodology"
      ],
      impact: "40% improvement in response times",
      icon: <Server className="w-8 h-8" />,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "Fully functional e-commerce website built with WordPress, featuring multiple payment gateways and high availability.",
      technologies: ["WordPress", "PHP", "Payment Gateways", "MySQL"],
      features: [
        "3 major payment gateway integrations",
        "99.9% uptime achievement",
        "Custom WordPress themes",
        "Responsive design"
      ],
      impact: "99.9% uptime",
      icon: <Globe className="w-8 h-8" />,
      gradient: "from-green-500 to-teal-600"
    },
    {
      id: 3,
      title: "HubSpot Assessment Tool",
      description: "Custom assessment tool built using HubSpot CMS to streamline client data collection and improve efficiency.",
      technologies: ["HubSpot CMS", "JavaScript", "APIs", "Analytics"],
      features: [
        "Custom HubSpot CMS integration",
        "Automated data collection",
        "60% efficiency improvement",
        "Analytics and reporting"
      ],
      impact: "60% efficiency improvement",
      icon: <Database className="w-8 h-8" />,
      gradient: "from-orange-500 to-red-600"
    },
    {
      id: 4,
      title: "Custom Client Websites",
      description: "Portfolio of 10+ custom websites developed for clients across various industries with tailored solutions.",
      technologies: ["WordPress", "Custom Themes", "Google Analytics", "Tag Manager"],
      features: [
        "10+ custom websites delivered",
        "Industry-specific solutions",
        "Google Analytics integration",
        "Custom theme development"
      ],
      impact: "10+ satisfied clients",
      icon: <Globe className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-600"
    },
    {
      id: 5,
      title: "MERN Stack Applications",
      description: "Full-stack web applications built using MongoDB, Express.js, React.js, and Node.js with modern development practices.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
      features: [
        "Full-stack development",
        "RESTful API design",
        "Database optimization",
        "Modern UI/UX design"
      ],
      impact: "Enhanced development skills",
      icon: <Zap className="w-8 h-8" />,
      gradient: "from-indigo-500 to-blue-600"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length)
  }

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Showcasing my expertise through real-world projects and solutions
          </p>
        </motion.div>

        {/* Project Slider */}
        <div className="max-w-6xl mx-auto relative">
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={project.id} className="w-full flex-shrink-0">
                  <div className="bg-gray-800 rounded-2xl p-8 mx-4 h-full">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      {/* Project Info */}
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                      >
                        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${project.gradient} mb-6`}>
                          {project.icon}
                        </div>
                        <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                          {project.description}
                        </p>
                        
                        {/* Technologies */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold mb-3">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Impact */}
                        <div className="mb-6">
                          <div className={`inline-block bg-gradient-to-r ${project.gradient} text-white px-4 py-2 rounded-full font-semibold`}>
                            Impact: {project.impact}
                          </div>
                        </div>

                        {/* Action Buttons
                        <div className="flex gap-4">
                          <Button
                            variant="outline"
                            className="border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white"
                          >
                            <ExternalLink size={16} className="mr-2" />
                            View Details
                          </Button>
                          <Button
                            variant="outline"
                            className="border-gray-400 text-gray-300 hover:bg-gray-400 hover:text-white"
                          >
                            <Github size={16} className="mr-2" />
                            Source Code
                          </Button>
                        </div> */}
                      </motion.div>

                      {/* Project Features */}
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-gray-700 rounded-xl p-6"
                      >
                        <h4 className="text-xl font-semibold mb-4">Key Features:</h4>
                        <ul className="space-y-3">
                          {project.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-3">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient} mt-2 flex-shrink-0`}></div>
                              <span className="text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">12+</div>
            <div className="text-gray-400">Microservices</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-400 mb-2">10+</div>
            <div className="text-gray-400">Client Websites</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
            <div className="text-gray-400">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">60%</div>
            <div className="text-gray-400">Efficiency Gain</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

