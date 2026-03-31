import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaLinkedin, FaGithub, FaTwitter, FaDownload, FaEnvelope, 
  FaPhone, FaMapMarkerAlt, FaGraduationCap, FaChartLine, 
  FaCarCrash, FaThermometerHalf, FaBars, FaTimes 
} from 'react-icons/fa';
import './App.css';

// Initialize EmailJS
const emailjs = window.emailjs;
if (emailjs) {
  emailjs.init("EqkMWfZss4OA2r6iC");
}

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 5000);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      showNotification('Please fill in all fields', 'error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showNotification('Please enter a valid email address', 'error');
      return;
    }

    setIsSubmitting(true);

    try {
      if (emailjs) {
        await emailjs.send("service_3et1287", "template_mgd8ftq", {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          reply_to: formData.email
        });
      }
      showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email sending failed:', error);
      showNotification('Failed to send message. Please try again later.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const skills = [
    {
      category: "Programming Languages",
      items: [
        { name: "C", level: 82 },
        { name: "C++", level: 78 },
        { name: "PHP", level: 85 }
      ]
    },
    {
      category: "Embedded Systems",
      items: [
        { name: "Arduino", level: 83 },
        { name: "NodeMCU", level: 80 },
        { name: "ESP32", level: 77 }
      ]
    },
    {
      category: "Web Development",
      items: [
        { name: "HTML", level: 84 },
        { name: "CSS", level: 79 },
        { name: "Node.js", level: 75 },
        { name: "SQL", level: 81 }
      ]
    },
    {
      category: "Tools & Software",
      items: [
        { name: "MS Word", level: 86 },
        { name: "PowerPoint", level: 83 },
        { name: "EasyDA PCB Design", level: 78 },
        { name: "GitHub", level: 80 }
      ]
    }
  ];

  const projects = [
    {
      title: "Real-Time Web Chart Application",
      description: "Developed a real-time web chart application using HTML and CSS to display data in a structured and responsive dashboard format.",
      tech: ["HTML", "CSS", "JavaScript"],
      icon: <FaChartLine />,
      github: "https://github.com/sksureshkumar31611-tech/Chat-App",
      color: "#4facfe"
    },
    {
      title: "IoT Based Accident Detection System",
      description: "Designed an IoT system to detect accidents and automatically send location-based alerts using sensor and microcontroller integration.",
      tech: ["Arduino", "ESP32", "Sensors", "GPS"],
      icon: <FaCarCrash />,
      github: "https://github.com/sksureshkumar31611-tech/IoT-Accident-Detection-ESP8266-MPU6050-WhatsApp",
      color: "#f093fb"
    },
    {
      title: "IoT Temperature & Humidity Monitoring",
      description: "Created an IoT-based environmental monitoring system that tracks temperature and humidity levels in real-time with data logging capabilities.",
      tech: ["NodeMCU", "DHT11", "Blynk", "Cloud"],
      icon: <FaThermometerHalf />,
      github: "#",
      color: "#43e97b"
    }
  ];

  return (
    <div className="App">
      {/* Notification */}
      <AnimatePresence>
        {notification && (
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className={`notification ${notification.type}`}
          >
            {notification.message}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <motion.nav 
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="nav-container">
          <motion.div 
            className="nav-logo"
            whileHover={{ scale: 1.05 }}
          >
            Suresh Kumar
          </motion.div>
          
          <div className="nav-menu-desktop">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
              <motion.button
                key={item}
                className="nav-link"
                onClick={() => scrollToSection(item.toLowerCase())}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.button>
            ))}
          </div>

          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div 
          className="mobile-menu"
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
        >
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <button
              key={item}
              className="mobile-nav-link"
              onClick={() => scrollToSection(item.toLowerCase())}
            >
              {item}
            </button>
          ))}
        </motion.div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
        
        <div className="hero-container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Electronics and Communication Engineer
            </motion.h1>
            
            <motion.h2 
              className="hero-tagline"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Building Smart Systems with Embedded and IoT Technologies
            </motion.h2>
            
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              I am an Electronics and Communication Engineering graduate with a strong interest in embedded systems and IoT. 
              I specialize in developing real-time solutions using microcontrollers, sensors, and hardware integration. 
              Passionate about innovation, I aim to create efficient and intelligent systems that solve real-world problems.
            </motion.p>
            
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.button 
                className="btn btn-primary"
                onClick={() => scrollToSection('contact')}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
              <motion.button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('projects')}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>
              <motion.a 
                href="resume.pdf" 
                className="btn btn-outline"
                download
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload /> Download Resume
              </motion.a>
            </motion.div>

            <motion.div 
              className="hero-social"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              {[
                { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/suresh-kumar-6797262a7/", label: "LinkedIn" },
                { icon: <FaGithub />, href: "https://github.com/sksureshkumar31611-tech", label: "GitHub" },
                { icon: <FaTwitter />, href: "https://x.com/suresh_kum63759", label: "Twitter" }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="image-container">
              <img src="sureshkumar-photo.jpg" alt="Suresh Kumar" className="hero-profile-photo" />
              <div className="image-glow"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>
          
          <div className="about-content">
            <motion.div 
              className="about-image-wrapper"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src="sureshkumar-photo.jpg" alt="Suresh Kumar" className="about-photo" />
            </motion.div>
            
            <motion.div 
              className="about-text"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p>
                I am an enthusiastic Electronics and Communication Engineering graduate with a deep interest in embedded systems, IoT, and real-time applications. My technical journey began with curiosity about how electronic devices communicate, which led me to explore microcontrollers, Arduino-based systems, and hardware-software integration.
              </p>
              <p>
                I have hands-on experience in designing and developing embedded solutions, including sensor-based systems and automation projects. I enjoy solving practical problems by building efficient and reliable systems.
              </p>
              <p>
                I am a quick learner, adaptable, and always eager to explore emerging technologies. My goal is to work as an Embedded Systems or IoT Engineer where I can contribute to innovative projects while continuously enhancing my skills.
              </p>
              
              <div className="about-highlights">
                <motion.div 
                  className="highlight-card"
                  whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)' }}
                >
                  <FaGraduationCap className="highlight-icon" />
                  <span>Bachelor's in Electronics and Communication</span>
                </motion.div>
                <motion.div 
                  className="highlight-card"
                  whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)' }}
                >
                  <FaMapMarkerAlt className="highlight-icon" />
                  <span>Salem, Tamil Nadu, India</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Skills
          </motion.h2>
          
          <div className="skills-grid">
            {skills.map((category, catIndex) => (
              <motion.div 
                key={category.category}
                className="skill-category"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              >
                <h3>{category.category}</h3>
                <div className="skill-list">
                  {category.items.map((skill, skillIndex) => (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percent">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div 
                          className="skill-progress"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIndex * 0.1, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Projects
          </motion.h2>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div 
                key={project.title}
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div 
                  className="project-header"
                  style={{ background: `linear-gradient(135deg, ${project.color}20, ${project.color}40)` }}
                >
                  <div className="project-icon" style={{ color: project.color }}>
                    {project.icon}
                  </div>
                </div>
                
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  
                  <div className="project-tech">
                    {project.tech.map(tech => (
                      <span key={tech} className="tech-tag" style={{ 
                        background: `${project.color}20`,
                        borderColor: `${project.color}40`,
                        color: project.color 
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <motion.a 
                    href={project.github}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ background: project.color }}
                  >
                    <FaGithub /> View Code
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </motion.h2>
          
          <div className="contact-content">
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="contact-card">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div>
                  <h3>Email</h3>
                  <p>ureshkumar31611@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-card">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div>
                  <h3>Phone</h3>
                  <p>7502386080</p>
                </div>
              </div>
            </motion.div>
            
            <motion.form 
              className="contact-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                />
              </div>
              <motion.button 
                type="submit" 
                className="btn btn-primary submit-btn"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2024 Suresh Kumar. Built with React & Framer Motion.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
