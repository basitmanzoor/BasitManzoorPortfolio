import { motion } from 'framer-motion'
import { Calendar, MapPin, Building } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer / WordPress Developer",
      company: "iQuasar",
      location: "Tech Company",
      period: "October 2023 - Present",
      type: "Full-time",
      achievements: [
        "Actively contribute as part of the backend team for an ERP solution, following Agile methodology",
        "Developed and maintained 12+ microservices using Node.js and TypeScript",
        "Implemented real-time communication between services with Kafka, improving response times by 40%",
        "Worked on API layer and database design, ensuring efficient data flow and optimized query performance",
        "Collaborated closely with frontend developers and QA teams for timely delivery of high-quality features",
        "Participated in code reviews and debugging sessions, enhancing code quality and team collaboration",
        "Developed 10+ custom websites for clients across various industries",
        "Created an assessment tool using HubSpot CMS that improved client data collection efficiency by 60%",
        "Built a fully functional e-commerce website using WordPress with 3 major payment gateways and 99.9% uptime"
      ]
    },
    {
      title: "Web Development Intern",
      company: "iQuasar",
      location: "Tech Company",
      period: "April 2023 - October 2023",
      type: "Internship",
      achievements: [
        "Gained hands-on experience in MERN stack development",
        "Contributed to full-stack application development by building and maintaining backend services",
        "Used Node.js and MongoDB for backend development",
        "Managed and redesigned multiple company websites using WordPress",
        "Developed custom themes and integrated Google Analytics and Tag Manager"
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            My professional journey and key contributions in software development
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-pink-600"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative mb-12 ml-16"
              >
                {/* Timeline dot */}
                <div className="absolute -left-10 top-6 w-4 h-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full border-4 border-white shadow-lg"></div>

                <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-wrap items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-4 text-gray-600 mb-2">
                        <div className="flex items-center gap-2">
                          <Building size={16} />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-purple-600">
                        <Calendar size={16} />
                        <span className="font-medium">{exp.period}</span>
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 + achIndex * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3 text-gray-700"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Education
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                B.Tech in Computer Science
              </h4>
              <p className="text-purple-600 font-medium mb-2">
                Lovely Professional University
              </p>
              <p className="text-gray-600 mb-4">September 2017 - May 2021</p>
              <div className="bg-white px-4 py-2 rounded-full inline-block">
                <span className="text-purple-800 font-semibold">GPA: 8.34</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Non-Medical Science Stream
              </h4>
              <p className="text-blue-600 font-medium mb-2">
                Tyndale Biscoe School
              </p>
              <p className="text-gray-600 mb-4">September 2015 - May 2017</p>
              <div className="bg-white px-4 py-2 rounded-full inline-block">
                <span className="text-blue-800 font-semibold">GPA: 9.58</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

