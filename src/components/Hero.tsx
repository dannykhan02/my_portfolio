import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { FaReact, FaPython, FaPhp } from "react-icons/fa";
import { SiTypescript, SiFlask, SiExpress } from "react-icons/si";

// Define your color variables here or import them from your design system
const styles = {
  burntorange: "#f97316",
  deepgray: "#1f2937",
  charcoal: "#111827",
};

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-10 bg-gradient-to-br from-[#1a1a1a] to-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center lg:flex-row flex-col">
          <div className="lg:col-span-8 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-burntorange mb-2">Hello, I'm</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
                <span className="block typing-effect mb-2">Daniel Kemboi</span>
                <span className="text-burntorange">Full Stack Developer</span>
              </h1>
              <p className="text-zinc-400 text-lg mb-4">Turning ideas into scalable digital solutions.</p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-zinc-400 text-lg max-w-2xl"
            >
              I am a results-driven freelancer with expertise in JavaScript (ES6+), TypeScript, Python, PHP,
              and frameworks like React, Flask, and Express.js.
            </motion.p>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-burntorange/10 text-burntorange px-2 py-1 rounded-md text-sm flex items-center">
                <FaReact className="mr-1" /> React
              </span>
              <span className="bg-burntorange/10 text-burntorange px-2 py-1 rounded-md text-sm flex items-center">
                <SiTypescript className="mr-1" /> TypeScript
              </span>
              <span className="bg-burntorange/10 text-burntorange px-2 py-1 rounded-md text-sm flex items-center">
                <FaPython className="mr-1" /> Python
              </span>
              <span className="bg-burntorange/10 text-burntorange px-2 py-1 rounded-md text-sm flex items-center">
                <FaPhp className="mr-1" /> PHP
              </span>
              <span className="bg-burntorange/10 text-burntorange px-2 py-1 rounded-md text-sm flex items-center">
                <SiFlask className="mr-1" /> Flask
              </span>
              <span className="bg-burntorange/10 text-burntorange px-2 py-1 rounded-md text-sm flex items-center">
                <SiExpress className="mr-1" /> Express.js
              </span>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="group bg-gradient-to-r from-burntorange to-orange-600 text-white shadow-lg hover:shadow-xl transition">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <a
                href="/daniel_kemboi_cv.docx"
                download="Daniel_Kemboi_CV.docx"
                className="group inline-flex items-center px-6 py-3 border rounded-md text-sm font-medium text-white border-burntorange hover:bg-burntorange hover:text-white transition"
              >
                Download CV
                <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center space-x-4 pt-4"
            >
              <a
                href="https://github.com/dannykhan02"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-burntorange transition-all duration-300 hover:scale-110"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/daniel-kemboi-73386a293/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-burntorange transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <span title="Send me an email">
                <a
                  href="mailto:danielkemboi462@gmail.com?subject=Project%20Inquiry&body=Hi%20Daniel,%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20project%20with%20you."
                  className="text-zinc-400 hover:text-burntorange transition-all duration-300 hover:scale-110"
                  aria-label="Email Daniel"
                >
                  <Mail size={24} />
                </a>
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-burntorange to-deepgray blur-xl opacity-70 animate-pulse"></div>
              <div className="relative bg-charcoal rounded-full h-64 w-64 md:h-80 md:w-80 overflow-hidden border-4 border-deepgray shadow-xl">
                <div className="h-full w-full flex items-center justify-center">
                  <img
                    src="/profile-picture.png"
                    alt="Daniel Kemboi"
                    className="object-cover h-full w-full rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex justify-center mt-10"
        >
          <ChevronDown className="text-zinc-400" size={32} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
