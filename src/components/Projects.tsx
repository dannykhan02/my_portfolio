import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Clock, Code, Zap } from "lucide-react";

// Define your color variables here or import them from your design system
const styles = {
  burntorange: "#f97316",
  deepgray: "#1f2937",
  charcoal: "#111827",
};

const featuredProjects = [
  {
    title: "Moringa Hostel App",
    description: "A comprehensive hostel management system with booking, payment processing, and administrative dashboards.",
    technologies: ["React", "Node.js", "Flask", "SQLAlchemy", "Mpesa API", "Tailwind CSS"],
    metrics: "99.7% uptime, 500+ weekly transactions",
    image: "/Moringa_Hostel.png",
    github: "https://github.com/JBcollo1/front-end-hostels",
    liveUrl: "https://moringahostels.netlify.app",
  },
  {
    title: "Ticketing System",
    description: "End-to-end ticket management solution with role-based access, automated notifications, and analytics dashboard.",
    technologies: ["TypeScript", "React", "Redux", "Flask", "SQLAlchemy", "PostgreSQL", "Tailwind CSS", "Mpesa API", "Paystack API"],
    metrics: "1,200+ active users, 40% reduction in resolution time ,Still under production - Enhanced features in development",
    image: "/ticketing_system.png",
    github: "https://github.com/JBcollo2/pulse",
    liveUrl: "https://pulse-ticket-verse.netlify.app",
  },
  {
    title: "Food Delivery System",
    description: "A complete platform for food ordering and delivery, featuring restaurant management, user profiles, and order tracking.",
    technologies: ["React", "Node.js", "Python", "Flask", "SQLAlchemy", "Mpesa Api", "Tailwind CSS", "Paystack API"],
    metrics: "Still under production - Enhanced features in development",
    image: "/food_delivery_system.png",
    github: "https://github.com/JBcollo1/flutter-food-fusion",
    liveUrl: "https://castino.netlify.app",
  },
  {
    title: "Magnet Custom System",
    description: "A modern platform for creating and managing custom magnet orders — featuring personalized design uploads, order tracking, user profiles, and delivery coordination across multiple cities.",
    technologies: ["Javascript","Typescript","Python", "Flask", "SQLAlchemy", "Mpesa", "Tailwind CSS"],
    metrics: " 100+ daily orders",
    image: "/magnet.png",
    github: "https://github.com/JBcollo1/magnet",
    liveUrl: "https://magnet12.netlify.app/",
  }
];

const freelanceProjects = [
  {
    title: "Galana",
    description: "Developed a responsive and modern landing page for Galana, showcasing their services and portfolio.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    image: "/galana.png",
    liveUrl: "https://galana.netlify.app/",
  },
  {
    title: "LumeLink Technologies",
    description: "Crafted a professional website for LumeLink Technologies, highlighting their tech solutions and expertise.",
    technologies: ["React", "Tailwind CSS", "Vite"],
    image: "/lumelink.png",
    liveUrl: "https://lumelink.netlify.app/",
  },
 {
    title: "Ace of Fades Barber Shop",
    description: "Created a modern and responsive website for Ace of Fades Barber Shop, enabling online bookings and showcasing services.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "Laravel"],
    image: "/Ace_of_fade.png",
    liveUrl: "https://aceoffades.africa/",
  }
];

const upcomingProjects = [

  {
    title: "Chama Web3 Platform",
    description: "A decentralized platform for community savings groups (Chama) with blockchain-based transactions, smart contracts for automated savings, and transparent fund management.",
    technologies: ["React", "Solidity", "Web3.js", "Ethereum", "Node.js", "Express"],
    status: "In Development",
    progress: 30,
    expectedLaunch: "Q2 2025",
    features: ["Smart contract automation", "Decentralized governance", "Transparent transactions", "Mobile-first design"],
    image: "/Chama.png",
  },
  {
    title: "Food Delivery System",
    description: "A complete platform for food ordering and delivery, featuring restaurant management, user profiles, and order tracking with enhanced features.",
    technologies: ["React", "Node.js", "Python", "Flask", "SQLAlchemy", "Mpesa API", "Tailwind CSS", "Paystack API"],
    status: "In Development",
    progress: 40,
    expectedLaunch: "Q1 2025",
    features: ["Real-time order tracking", "Restaurant dashboard", "Payment integration", "Delivery optimization"],
    image: "/food_delivery_system.png",
  },
];

const Projects = () => {
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

  const ProjectCard = ({ project }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
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
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
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
              className={`text-gray-300 hover:text-burntorange transition-colors duration-300 flex items-center ${!project.github ? 'ml-auto' : ''}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-sm">Live Demo</span>
              <ExternalLink size={16} className="ml-1 motion-safe:animate-bounce" />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );

  const UpcomingProjectCard = ({ project }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="relative bg-charcoal rounded-2xl overflow-hidden transition-all duration-300 shadow-md hover:shadow-lg border border-transparent hover:border-burntorange group cursor-pointer"
    >
      <div className="relative h-48 overflow-hidden bg-deepgray group">
        <div className="w-full h-full bg-gradient-to-br from-burntorange/20 to-deepgray flex items-center justify-center">
          <div className="text-center">
            <Clock size={48} className="text-burntorange mx-auto mb-2" />
            <p className="text-white text-lg font-semibold">{project.title}</p>
          </div>
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
          <h3 className="text-xl font-bold">{project.title}</h3>
          <span className="text-burntorange text-sm font-medium">{project.progress}%</span>
        </div>
        
        {/* Progress Bar */}
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

        {/* Key Features */}
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

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-burntorange uppercase tracking-wider text-sm font-medium">My Work</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Featured Projects</h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            A selection of projects that showcase my technical expertise and problem-solving abilities.
          </p>
        </motion.div>

        {/* Featured Projects Section */}
        <motion.div
          ref={refFeatured}
          initial="hidden"
          animate={inViewFeatured ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {featuredProjects.map((project, index) => (
            <ProjectCard key={`featured-${index}`} project={project} />
          ))}
        </motion.div>

        {/* Freelance Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-burntorange uppercase tracking-wider text-sm font-medium">Client Work</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Freelance Projects</h2>
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
            <ProjectCard key={`freelance-${index}`} project={project} />
          ))}
        </motion.div>

        {/* Upcoming Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-burntorange uppercase tracking-wider text-sm font-medium">What's Next</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Upcoming Projects</h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Innovative solutions currently in development, pushing the boundaries of technology.
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
            <UpcomingProjectCard key={`upcoming-${index}`} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;