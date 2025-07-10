import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Code, Zap, X, Calendar, User, CheckCircle, Award } from "lucide-react";

const styles = {
  burntorange: "#f97316",
  deepgray: "#1f2937",
  charcoal: "#111827",
};

const featuredProjects = [
  {
    title: "Moringa Hostel App",
    role: "Full-stack Developer",
    date: "January 2025 - Present",
    description: "A comprehensive hostel management system with booking, payment processing, and administrative dashboards.",
    longDescription: "Hostel Discoveries is a comprehensive platform connecting students with quality accommodation options. As Full-stack Developer, I built both frontend and backend components, implementing secure authentication, responsive design, and efficient search functionality that has attracted 3,000+ monthly active users.",
    technologies: ["React", "Node.js", "Flask", "SQLAlchemy", "Mpesa API", "Tailwind CSS"],
    metrics: "99.7% uptime, 500+ weekly transactions",
    image: "/Moringa_Hostel.png",
    github: "https://github.com/JBcollo1/front-end-hostels",
    liveUrl: "https://moringahostels.netlify.app",
    challenges: "Creating a platform that could handle complex search queries and high-resolution images while maintaining fast performance and ensuring secure user authentication.",
    solutions: "Implemented JWT for secure logins and lazy loading image techniques that reduced page load times by 50%, significantly improving user experience.",
    highlights: [
      "Built platform for student accommodation with 3,000+ monthly active users",
      "Implemented authentication with role-based access control",
      "Used flask components deployed on cPanel for administrative functions"
    ]
  },
  {
    title: "Ticketing System",
    role: "Technical Lead",
    date: "November 2024 - Present",
    description: "End-to-end ticket management solution with role-based access, automated notifications, and analytics dashboard.",
    longDescription: "This Enterprise Ticketing Application revolutionizes how businesses handle internal support requests. As Technical Lead, I built a highly scalable system that processes over 800 tickets daily with exceptional reliability while providing powerful business intelligence through comprehensive reporting.",
    technologies: ["TypeScript", "React", "Redux", "Flask", "SQLAlchemy", "PostgreSQL", "Tailwind CSS", "Mpesa API", "Paystack API"],
    metrics: "1,200+ active users, 40% reduction in resolution time, Still under production - Enhanced features in development",
    image: "/ticketing_system.png",
    github: "https://github.com/JBcollo2/pulse",
    liveUrl: "https://pulse-ticket-verse.netlify.app",
    challenges: "Creating a system capable of handling high ticket volume with real-time updates while maintaining comprehensive historical data for business intelligence.",
    solutions: "Engineered a custom dashboard with real-time WebSocket notifications and implemented efficient database indexing that reduced ticket resolution time by 40%.",
    highlights: [
      "Achieved 99.99% uptime even during peak usage periods",
      "Implemented real-time notifications via WebSockets",
      "Created comprehensive reporting for business intelligence"
    ]
  },
  {
    title: "Food Delivery System",
    role: "Team Lead",
    date: "October 2024 - Present",
    description: "A complete platform for food ordering and delivery, featuring restaurant management, user profiles, and order tracking.",
    longDescription: "This comprehensive Food Delivery Management System handles everything from customer ordering to delivery tracking. As Team Lead, I designed a microservice architecture capable of processing 1,000+ concurrent orders while maintaining system performance and reliability.",
    technologies: ["React", "Node.js", "Python", "Flask", "SQLAlchemy", "Mpesa Api", "Tailwind CSS", "Paystack API"],
    metrics: "Still under production - Enhanced features in development",
    image: "/food_delivery_system.png",
    github: "https://github.com/JBcollo1/flutter-food-fusion",
    liveUrl: "https://castino.netlify.app",
    challenges: "Coordinating multiple services including real-time GPS tracking, order management, payment processing, and vendor inventory systems while ensuring seamless user experience.",
    solutions: "Designed a robust microservice architecture with efficient database optimization that enabled smooth handling of 1,000+ concurrent orders with minimal latency.",
    highlights: [
      "Implementing real-time GPS tracking with 99.8% accuracy",
      "Developing vendor portal and inventory management using PHP with cPanel deployment",
      "Creating secure payment processing supporting 5+ payment methods"
    ]
  },
  {
    title: "Magnet Custom System",
    role: "Solo Developer",
    date: "December 2024 - Present",
    description: "A modern platform for creating and managing custom magnet orders — featuring personalized design uploads, order tracking, user profiles, and delivery coordination across multiple cities.",
    longDescription: "This project involved developing a complete custom magnet ordering system. As the sole developer, I focused on user experience optimization and order management, creating a robust platform that significantly streamlined the custom magnet creation process for users while maintaining complete order integrity.",
    technologies: ["Javascript", "Typescript", "Python", "Flask", "SQLAlchemy", "Mpesa", "Tailwind CSS"],
    metrics: "100+ daily orders",
    image: "/magnet.png",
    github: "https://github.com/JBcollo1/magnet",
    liveUrl: "https://magnet12.netlify.app/",
    challenges: "Creating a user-friendly interface for custom design uploads while ensuring efficient order processing and delivery coordination across multiple cities.",
    solutions: "Implemented advanced file upload handling and created an intuitive design interface that reduced order completion time by 60% while maintaining high-quality output.",
    highlights: [
      "Reduced order processing time by 60% through efficient workflow design",
      "Successfully integrated multi-city delivery coordination system",
      "Created comprehensive order tracking and user profile management"
    ]
  }
];

const freelanceProjects = [
  {
    title: "Galana",
    role: "Frontend Developer",
    date: "September 2024",
    description: "Developed a responsive and modern landing page for Galana, showcasing their services and portfolio.",
    longDescription: "The Galana project involved creating a modern, responsive landing page that effectively showcases the company's services and portfolio. The focus was on creating an engaging user experience with smooth animations and optimal performance across all devices.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    image: "/galana.png",
    liveUrl: "https://galana.netlify.app/",
    challenges: "Creating a visually appealing landing page that loads quickly and provides an engaging user experience across all device types.",
    solutions: "Implemented responsive design principles and optimized asset loading to achieve fast page load times while maintaining visual appeal.",
    highlights: [
      "Achieved 95+ Google PageSpeed score",
      "Implemented smooth scroll animations and transitions",
      "Created fully responsive design for all screen sizes"
    ]
  },
  {
    title: "LumeLink Technologies",
    role: "Lead Developer",
    date: "September 2024 - Present",
    description: "Crafted a professional website for LumeLink Technologies, highlighting their tech solutions and expertise.",
    longDescription: "The LumeLink Portfolio Platform is a cutting-edge solution for professionals to showcase their work with location-based context. As Lead Developer, I architected a responsive system featuring interactive map integration, optimized image loading, and seamless dark/light mode transitions for an exceptional user experience.",
    technologies: ["React", "Tailwind CSS", "Vite"],
    image: "/lumelink.png",
    liveUrl: "https://lumelink.netlify.app/",
    challenges: "Creating a highly performant application with complex map integrations while maintaining exceptional page load speeds across all devices.",
    solutions: "Implemented dynamic code splitting, lazy loading of components, and optimized image processing that resulted in a remarkable 97/100 Google PageSpeed score.",
    highlights: [
      "Delivered 10 days ahead of schedule with zero critical bugs",
      "Created reusable component library reducing future development time by 40%",
      "Implemented advanced animations using Framer Motion for engaging user experience"
    ]
  },
  {
    title: "Ace of Fades Barber Shop",
    role: "Full-stack Developer",
    date: "July 2024",
    description: "Created a modern and responsive website for Ace of Fades Barber Shop, enabling online bookings and showcasing services.",
    longDescription: "The Ace of Fades project involved creating a modern, responsive website for a barber shop that enables online bookings and effectively showcases their services. The platform features appointment scheduling, service listings, and a gallery of previous work.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "Laravel"],
    image: "/Ace_of_fade.png",
    liveUrl: "https://aceoffades.africa/",
    challenges: "Creating a booking system that integrates with the barber shop's scheduling while maintaining an attractive, user-friendly interface.",
    solutions: "Developed a custom booking system with PHP and Laravel backend that seamlessly integrates with the shop's workflow, reducing booking conflicts by 80%.",
    highlights: [
      "Implemented online booking system reducing phone bookings by 70%",
      "Created service showcase with pricing and duration information",
      "Integrated gallery featuring before/after photos of client work"
    ]
  }
];

const upcomingProjects = [
  {
    title: "Chama Web3 Platform",
    role: "Full-stack Blockchain Developer",
    date: "In Progress - 2025",
    description: "A decentralized platform for community savings groups (Chama) with blockchain-based transactions, smart contracts for automated savings, and transparent fund management.",
    longDescription: "Chama Web3 is a decentralized application (dApp) designed to help groups manage savings and contributions using blockchain. Built with React, Tailwind CSS, FastAPI, and Solidity, the platform allows members to contribute using ERC-20 tokens governed by smart contracts deployed on Avalanche. The aim is to bring transparency, automation, and tokenization to traditional community savings models.",
    technologies: ["React", "Solidity", "Web3.js", "Ethereum", "Node.js", "Express"],
    status: "In Development",
    progress: 30,
    expectedLaunch: "Q2 2025",
    features: ["Smart contract automation", "Decentralized governance", "Transparent transactions", "Mobile-first design"],
    image: "/Chama.png",
    challenges: "Creating a secure, decentralized contribution and withdrawal mechanism while keeping the platform user-friendly.",
    solutions: "Utilized Avalanche C-Chain for smart contract deployment, FastAPI for API routing, and localStorage for simple front-end state management during MVP phase.",
    highlights: [
      "Smart contract built with Solidity and tested using Hardhat",
      "Token-based contributions for transparent recordkeeping",
      "Frontend designed with React + Tailwind; backend API in FastAPI"
    ]
  },
  {
    title: "Food Delivery System",
    role: "Team Lead",
    date: "October 2024 - Present",
    description: "A complete platform for food ordering and delivery, featuring restaurant management, user profiles, and order tracking with enhanced features.",
    longDescription: "This comprehensive Food Delivery Management System handles everything from customer ordering to delivery tracking. As Team Lead, I designed a microservice architecture capable of processing 1,000+ concurrent orders while maintaining system performance and reliability.",
    technologies: ["React", "Node.js", "Python", "Flask", "SQLAlchemy", "Mpesa API", "Tailwind CSS", "Paystack API"],
    status: "In Development",
    progress: 40,
    expectedLaunch: "Q1 2025",
    features: ["Real-time order tracking", "Restaurant dashboard", "Payment integration", "Delivery optimization"],
    image: "/food_delivery_system.png",
    challenges: "Coordinating multiple services including real-time GPS tracking, order management, payment processing, and vendor inventory systems while ensuring seamless user experience.",
    solutions: "Designed a robust microservice architecture with efficient database optimization that enabled smooth handling of 1,000+ concurrent orders with minimal latency.",
    highlights: [
      "Implementing real-time GPS tracking with 99.8% accuracy",
      "Developing vendor portal and inventory management using PHP with cPanel deployment",
      "Creating secure payment processing supporting 5+ payment methods"
    ]
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const refFeatured = useRef(null);
  const refFreelance = useRef(null);
  const refUpcoming = useRef(null);
  const inViewFeatured = useInView(refFeatured, { once: true, amount: 0.1 });
  const inViewFreelance = useInView(refFreelance, { once: true, amount: 0.1 });
  const inViewUpcoming = useInView(refUpcoming, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.2, ease: "easeIn" }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
    setSelectedProject(null);
  };

  const ProjectCard = ({ project, onClick }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="relative bg-charcoal rounded-2xl overflow-hidden transition-all duration-300 shadow-md hover:shadow-lg border border-transparent hover:border-burntorange group cursor-pointer"
    >
      <div className="relative h-48 overflow-hidden bg-deepgray group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <p className="text-white text-lg font-semibold">{project.title}</p>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-300 text-sm mb-4">{project.description}</p>
        <div className="mb-4">
          <motion.div
            className="flex flex-wrap gap-2 mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.05 }}
          >
            {project.technologies.map((tech, techIndex) => (
              <motion.span
                key={techIndex}
                whileHover={{ scale: 1.1 }}
                className="text-xs bg-deepgray px-2 py-1 rounded text-gray-300 border border-slate-600"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
          {project.metrics && (
            <p className="text-burntorange text-sm font-medium">{project.metrics}</p>
          )}
        </div>
        <div className="flex justify-between items-center pt-4 border-t border-deepgray">
          {project.github && (
            <motion.a
              href={project.github}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="text-gray-300 hover:text-burntorange transition-colors duration-300 flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={16} className="mr-1" />
              <span className="text-sm">Code</span>
            </motion.a>
          )}
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className={`text-gray-300 hover:text-burntorange transition-colors duration-300 flex items-center ${!project.github ? 'ml-auto' : ''}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-sm">Live Demo</span>
              <ExternalLink size={16} className="ml-1" />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );

  const UpcomingProjectCard = ({ project, onClick }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="relative bg-charcoal rounded-2xl overflow-hidden transition-all duration-300 shadow-md hover:shadow-lg border border-transparent hover:border-burntorange group cursor-pointer"
    >
      <div className="relative h-48 overflow-hidden bg-deepgray group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <p className="text-white text-lg font-semibold">{project.title}</p>
        </div>
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            project.status === 'In Development' ? 'bg-yellow-500/20 text-yellow-400' :
            project.status === 'Planning Phase' ? 'bg-blue-500/20 text-blue-400' :
            'bg-purple-500/20 text-purple-400'
          }`}>
            {project.status}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <span className="text-burntorange text-sm font-medium">{project.progress}%</span>
        </div>

        <div className="w-full bg-deepgray rounded-full h-2 mb-4">
          <motion.div
            className="bg-burntorange h-2 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${project.progress}%` }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </div>
        <p className="text-gray-300 text-sm mb-4">{project.description}</p>
        <div className="mb-4">
          <motion.div
            className="flex flex-wrap gap-2 mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.05 }}
          >
            {project.technologies.map((tech, techIndex) => (
              <motion.span
                key={techIndex}
                whileHover={{ scale: 1.1 }}
                className="text-xs bg-deepgray px-2 py-1 rounded text-gray-300 border border-slate-600"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
        <div className="mb-4">
          <h4 className="text-sm font-medium text-burntorange mb-2">Key Features:</h4>
          <ul className="text-xs text-gray-300 space-y-1">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <Zap size={12} className="text-burntorange mr-2" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between items-center pt-4 border-t border-deepgray">
          <span className="text-gray-400 text-sm">Expected Launch:</span>
          <span className="text-burntorange text-sm font-medium">{project.expectedLaunch}</span>
        </div>
      </div>
    </motion.div>
  );

  const ProjectModal = ({ project, onClose }) => (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-75 backdrop-blur-sm"
            onClick={onClose}
            variants={overlayVariants}
          />
          <motion.div
            className="relative bg-charcoal rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
            variants={modalVariants}
          >
            <div className="sticky top-0 bg-charcoal border-b border-deepgray p-6 flex justify-between items-center z-10">
              <h1 className="text-3xl font-bold text-white">{project.title}</h1>
              <button
                onClick={onClose}
                className="text-gray-300 hover:text-burntorange transition-colors duration-300"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap items-center mb-6 text-gray-400">
                <div className="flex items-center mr-6 mb-2">
                  <User size={18} className="mr-2" />
                  <span>{project.role}</span>
                </div>
                <div className="flex items-center mb-2">
                  <Calendar size={18} className="mr-2" />
                  <span>{project.date}</span>
                </div>
                {project.status && (
                  <div className="flex items-center mb-2 ml-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'In Development' ? 'bg-yellow-500/20 text-yellow-400' :
                      project.status === 'Planning Phase' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-purple-500/20 text-purple-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                )}
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-3">
                  <div className="mb-8 w-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                    {project.progress && (
                      <div className="mb-4">
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-300">Progress</span>
                          <span className="text-burntorange font-medium">{project.progress}%</span>
                        </div>
                        <div className="w-full bg-deepgray rounded-full h-3">
                          <motion.div
                            className="bg-burntorange h-3 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${project.progress}%` }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center text-white">
                      <span className="bg-burntorange w-10 h-1 rounded-full mr-3"></span>
                      Project Overview
                    </h2>
                    <p className="text-gray-300 mb-6 leading-relaxed">{project.longDescription}</p>
                  </div>
                  {project.challenges && project.solutions && (
                    <div className="mb-8">
                      <h2 className="text-2xl font-semibold mb-4 flex items-center text-white">
                        <span className="bg-burntorange w-10 h-1 rounded-full mr-3"></span>
                        Challenges and Solutions
                      </h2>
                      <p className="text-gray-300 mb-3 leading-relaxed"><strong>Challenges:</strong> {project.challenges}</p>
                      <p className="text-gray-300 mb-6 leading-relaxed"><strong>Solutions:</strong> {project.solutions}</p>
                    </div>
                  )}
                  {project.highlights && (
                    <div className="mb-8">
                      <h2 className="text-2xl font-semibold mb-4 flex items-center text-white">
                        <span className="bg-burntorange w-10 h-1 rounded-full mr-3"></span>
                        Key Highlights
                      </h2>
                      <ul className="mb-8">
                        {project.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start mb-3">
                            <CheckCircle size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-300">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {project.features && (
                    <div className="mb-8">
                      <h2 className="text-2xl font-semibold mb-4 flex items-center text-white">
                        <span className="bg-burntorange w-10 h-1 rounded-full mr-3"></span>
                        Key Features
                      </h2>
                      <ul className="mb-8">
                        {project.features.map((feature, index) => (
                          <li key={index} className="flex items-start mb-3">
                            <Zap size={20} className="text-burntorange mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-burntorange text-white py-2 px-4 rounded-md hover:bg-orange-600 flex items-center transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <Github size={20} className="mr-2" /> View Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-deepgray text-white py-2 px-4 rounded-md hover:bg-gray-600 flex items-center transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <ExternalLink size={20} className="mr-2" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
                <div className="lg:col-span-1">
                  <div className="bg-deepgray rounded-lg p-6 sticky top-6">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center text-white">
                      <span className="bg-burntorange w-10 h-1 rounded-full mr-3"></span>
                      Technologies
                    </h2>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-sm bg-charcoal text-burntorange rounded-full border border-slate-600 transition-all duration-300 hover:scale-105"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-3 flex items-center text-white">
                        <Award size={18} className="mr-2 text-burntorange" />
                        Expertise
                      </h3>
                      <p className="text-gray-300 mb-4">
                        Freelance Full-Stack & Mobile Developer with expertise in creating high-performance, scalable applications.
                      </p>
                      <p className="text-gray-300">
                        Maintaining 4.9/5 client satisfaction with 90% returning clients.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-burntorange uppercase tracking-wider text-sm font-medium">My Work</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">Featured Projects</h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            A selection of projects that showcase my technical expertise and problem-solving abilities.
          </p>
        </motion.div>
        <motion.div
          ref={refFeatured}
          initial="hidden"
          animate={inViewFeatured ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={`featured-${index}`}
              project={project}
              onClick={() => openModal(project)}
            />
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-burntorange uppercase tracking-wider text-sm font-medium">Client Work</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">Freelance Projects</h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Solutions delivered for clients, demonstrating real-world impact and versatility.
          </p>
        </motion.div>
        <motion.div
          ref={refFreelance}
          initial="hidden"
          animate={inViewFreelance ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {freelanceProjects.map((project, index) => (
            <ProjectCard
              key={`freelance-${index}`}
              project={project}
              onClick={() => openModal(project)}
            />
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-burntorange uppercase tracking-wider text-sm font-medium">Upcoming Projects</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">What's Next</h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            A sneak peek at projects currently in development.
          </p>
        </motion.div>
        <motion.div
          ref={refUpcoming}
          initial="hidden"
          animate={inViewUpcoming ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {upcomingProjects.map((project, index) => (
            <UpcomingProjectCard
              key={`upcoming-${index}`}
              project={project}
              onClick={() => openModal(project)}
            />
          ))}
        </motion.div>
      </div>
      <ProjectModal project={selectedProject} onClose={closeModal} />
    </section>
  );
};

export default Projects;
