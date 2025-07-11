import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { FaReact, FaPython, FaPhp } from "react-icons/fa";
import { SiTypescript, SiFlask, SiFastapi } from "react-icons/si";

const Hero = () => {
  const techStack = [
    { name: "React", icon: FaReact, category: "Frontend" },
    { name: "TypeScript", icon: SiTypescript, category: "Frontend" },
    { name: "Python", icon: FaPython, category: "Backend" },
    { name: "PHP", icon: FaPhp, category: "Backend" },
    { name: "Flask", icon: SiFlask, category: "Backend" },
    { name: "FastAPI", icon: SiFastapi, category: "Backend" },
  ];

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center pt-20 pb-10 bg-gradient-to-br from-slate-950 via-gray-900 to-black relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content Section */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.p 
                className="text-orange-400 mb-3 text-lg font-medium tracking-wide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Hello, I'm
              </motion.p>
              
              <h1 className="mb-6">
                <motion.span 
                  className="block text-5xl md:text-7xl lg:text-8xl font-black text-white mb-2 leading-tight"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Daniel Kemboi
                </motion.span>
                
                <motion.span 
                  className="block text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent leading-tight"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Full Stack Developer
                </motion.span>
              </h1>
              
              <motion.p 
                className="text-gray-300 text-xl md:text-2xl font-light leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                Turning ideas into scalable digital solutions.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="space-y-6"
            >
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
             I am a results-driven developer with a strong freelance background, specializing in modern web technologies and building robust applications that deliver exceptional user experiences
              </p>

              {/* Enhanced Tech Stack */}
              <div className="space-y-4">
                <h3 className="text-gray-300 font-semibold text-sm uppercase tracking-wider">
                  Technologies I Work With
                </h3>
                <div className="flex flex-wrap gap-3">
                  {techStack.map((tech, index) => {
                    const IconComponent = tech.icon;
                    return (
                      <motion.span
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.9 + index * 0.1 }}
                        className="group bg-gradient-to-r from-orange-500/20 to-red-500/20 hover:from-orange-500/30 hover:to-red-500/30 border border-orange-500/30 text-orange-300 px-4 py-2 rounded-full text-sm font-medium flex items-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
                      >
                        <IconComponent className="mr-2 h-4 w-4 group-hover:text-orange-200 transition-colors" />
                        {tech.name}
                      </motion.span>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Enhanced Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button 
                size="lg" 
                onClick={scrollToProjects}
                className="group bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <motion.a
                href="/CV.docx"
                download="Daniel_Kemboi_CV.docx"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center px-8 py-4 border-2 border-orange-500 rounded-full text-sm font-semibold text-orange-400 hover:bg-orange-500 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25"
              >
                Download CV
                <Download className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-0.5" />
              </motion.a>
            </motion.div>

            {/* Enhanced Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex items-center space-x-6 pt-6"
            >
              <span className="text-gray-400 text-sm font-medium">Connect with me:</span>
              
              {[
                { href: "https://github.com/dannykhan02", icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/daniel-kemboi-73386a293/", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:danielkemboi462@gmail.com?subject=Project%20Inquiry&body=Hi%20Daniel,%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20project%20with%20you.", icon: Mail, label: "Email" }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.label !== "Email" ? "_blank" : undefined}
                  rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-orange-400 transition-all duration-300 p-2 rounded-full hover:bg-orange-500/10 hover:shadow-lg hover:shadow-orange-500/20"
                  aria-label={social.label}
                  title={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Enhanced Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 100 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group"
            >
              {/* Animated background rings - More masculine colors */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-orange-500/20 via-gray-600/10 to-red-600/15 blur-2xl opacity-40 animate-pulse group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-orange-400/20 to-gray-600/20 blur-xl opacity-30 animate-spin"></div>
              
              {/* Main image container */}
              <div className="relative bg-gradient-to-br from-gray-800 to-slate-900 rounded-full h-72 w-72 md:h-96 md:w-96 overflow-hidden border-4 border-gray-600 group-hover:border-orange-400/50 shadow-2xl shadow-gray-900/50 group-hover:shadow-orange-500/20 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-gray-500/5"></div>
                <div className="h-full w-full flex items-center justify-center relative z-10">
                  <img
                    src="/profile-picture.png"
                    alt="Daniel Kemboi - Full Stack Developer"
                    className="object-cover h-full w-full rounded-full group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-orange-500/8 rounded-full"></div>
              </div>
              
              {/* Floating elements - More masculine colors */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-orange-400 to-gray-500 rounded-full blur-sm opacity-60"
              ></motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-gray-400 to-orange-500 rounded-full blur-sm opacity-40"
              ></motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="flex justify-center mt-16"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center space-y-2 cursor-pointer group"
            onClick={scrollToProjects}
          >
            <span className="text-gray-400 text-sm font-medium group-hover:text-orange-400 transition-colors">
              Scroll to explore
            </span>
            <ChevronDown className="text-gray-400 group-hover:text-orange-400 transition-colors" size={28} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;