import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Java (DSA)", level: 85 }
      ]
    },
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React.js", level: 95 },
        { name: "HTML5", level: 98 },
        { name: "CSS3", level: 95 },
        { name: "Tailwind CSS", level: 90 }
      ]
    },
    {
      title: "Backend Technologies",
      skills: [
        { name: "Node.js", level: 95 },
        { name: "Express.js", level: 90 },
        { name: "MongoDB", level: 88 },
        { name: "SQL", level: 85 }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 90 },
        { name: "WordPress", level: 88 },
        { name: "Kafka", level: 80 }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-800 font-medium">{skill.name}</span>
                        <span className="text-purple-600 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-r from-purple-600 to-pink-600 h-3 rounded-full relative overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Certifications & Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                LC
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">LeetCode 100+</h4>
              <p className="text-gray-600">240+ coding problems solved</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                JS
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">JavaScript Algorithms</h4>
              <p className="text-gray-600">Data Structures Certification</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                BE
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Backend Development</h4>
              <p className="text-gray-600">APIs Certification</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

