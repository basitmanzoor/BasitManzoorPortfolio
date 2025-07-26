import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      name: "GitHub",
      url: "#",
      color: "hover:text-gray-900"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn",
      url: "#",
      color: "hover:text-blue-600"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      name: "Email",
      url: "mailto:basit1107@gmail.com",
      color: "hover:text-purple-600"
    }
  ]

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="mb-4">
              <span className="text-3xl font-bold text-white">Basit</span>
              <span className="text-purple-400 text-3xl">.</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Full Stack Developer passionate about creating innovative solutions 
              and delivering high-quality web applications. Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 text-gray-400 ${social.color} transform hover:scale-110`}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-2 text-gray-400">
              <p>Srinagar, Jammu & Kashmir</p>
              <p>
                <a 
                  href="mailto:basit1107@gmail.com"
                  className="hover:text-purple-400 transition-colors duration-300"
                >
                  basit1107@gmail.com
                </a>
              </p>
              <p>
                <a 
                  href="tel:+917889318950"
                  className="hover:text-purple-400 transition-colors duration-300"
                >
                  +91 7889318950
                </a>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 mb-4 md:mb-0">
              <span>© {currentYear} Basit Manzoor. Made with</span>
              <Heart className="w-4 h-4 text-red-500 mx-1" fill="currentColor" />
              <span>and React.js</span>
            </div>
            <button
              onClick={scrollToTop}
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Back to Top
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

