import { motion } from 'framer-motion'
import { Code, Database, Globe, Users } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full Stack Expertise",
      description: "Specialized in MERN stack with extensive experience in JavaScript and TypeScript"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development",
      description: "Expert in Node.js, Express, MongoDB, and microservices architecture"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "WordPress Management",
      description: "Experienced in custom WordPress development and website management"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration",
      description: "Strong collaborative skills with experience in Agile development environments"
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Description */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Dedicated Full Stack Developer
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I am a dedicated Full Stack Developer with expertise in JavaScript and TypeScript, 
                and extensive experience in both backend development and WordPress management. 
                I thrive in collaborative environments, demonstrated by my ongoing contributions 
                to ERP solutions and various client-focused projects.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                With a strong academic background and hands-on experience in modern web technologies, 
                I am passionate about delivering high-quality solutions that meet client needs. 
                My experience spans from building microservices architectures to creating 
                custom e-commerce solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                  8.34 GPA in Computer Science
                </div>
                <div className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium">
                  240+ LeetCode Problems Solved
                </div>
              </div>
            </motion.div>

            {/* Right side - Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid gap-6"
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-purple-600 flex-shrink-0">
                    {highlight.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-gray-700">
                      {highlight.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

