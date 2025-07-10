import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    title: "Independent Contractor - Programmer",
    company: "Twinfusion Limited",
    period: "May 2025 - July 2025",
    description: [
      "Engaged as independent contractor for comprehensive programming services and web development",
      "Lead qualifying, sharing and closing SaifyPOS with internal university project initiatives",
      "Manage Jamea university project implementations with change request handling (1k KSH per request)",
      "Develop and maintain API integrations and custom applications including PerfexCRM solutions",
      "Provide full-stack development services for websites, mobile apps, and custom applications",
      "Deliver comprehensive IT support including client websites, email systems, and technical troubleshooting",
      "Conduct SEO optimization and website performance improvements",
      "Maintain L1 support with 24-hour response time commitment for client issue resolution",
      "Technologies: Web Development, Mobile Apps, API Integration, CRM Systems, SEO"
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Freelance",
    period: "Feb 2024 - Present",
    description: [
      "Designed and developed full-stack web applications for 20+ clients across various industries",
      "Implemented responsive designs and performance optimizations, improving load times by an average of 45%",
      "Built custom CMS solutions, e-commerce platforms, and data visualization dashboards",
      "Technologies: React, TypeScript, Node.js, Express, MongoDB, PostgreSQL"
    ]
  },
  {
    title: "Software Engineering Intern",
    company: "Koduor and Company Ltd",
    period: "May 2024 - Aug 2024",
    description: [
      "Built components for a freelancer mobile platform used by over 5,000 users",
      "Contributed to a departmental ERP used by internal teams for resource planning",
      "Implemented core features of an internal ticketing tool with 99.5% uptime",
      "Technologies: React Native, Flask, PostgreSQL"
    ]
  },
  {
    title: "Software Engineering Intern",
    company: "CyberTap",
    period: "Jan 2024 - Mar 2024",
    description: [
      "Built a secure auth system that reduced security incidents by 95%",
      "Developed APIs serving 50,000+ daily requests with 99.9% uptime",
      "Wrote automated tests increasing backend coverage from 60% to 90%",
      "Technologies: Python, Flask, PostgreSQL, Pytest"
    ]
  },
 
];

const certifications = [
  { title: "Software Engineering", issuer: "Moringa School", date: "2024" },
  { title: "TypeScript Fundamentals", issuer: "FreeCodeCamp", date: "2023" },
  { title: "PHP & cPanel Deployment", issuer: "Coursera", date: "2024" },
  { title: "Backend Development and Api's", issuer: "FreeCodeCamp", date: "2024" },
  { title: "Certified full stack Developer Curriculum", issuer: "FreeCodeCamp", date: "2025" },
  { title: "Relational Database", issuer: "FreeCodeCamp", date: "2024" },
];

const softSkills = [
  "Communication",
  "Teamwork",
  "Problem-solving",
  "Adaptability",
  "Critical thinking",
  "Time management",
  "Empathy",
  "Leadership",
  "Conflict resolution",
  "Decision making"
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-burntorange uppercase tracking-wider text-sm font-medium">My History</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Professional Experience</h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            A timeline of my professional journey and acquired certifications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Work Experience Section */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-8 border-b border-slate pb-2">Work History</h3>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={containerVariants}
              className="space-y-12"
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, backgroundColor: "#1e1e1e" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group relative pl-8 border-l-2 border-slate hover:border-burntorange hover:shadow-lg hover:shadow-burntorange/20 transition-all duration-300 ease-in-out rounded-md p-4"
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-burntorange animate-pulse"></div>
                  <div>
                    <h4 className="text-xl font-semibold">{exp.title}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center text-sm mb-2 mt-1">
                      <span className="text-burntorange">{exp.company}</span>
                      <span className="hidden sm:block mx-2">•</span>
                      <span className="text-gray-400">{exp.period}</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-gray-300 transition-opacity duration-300 group-hover:opacity-100 opacity-80">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-sm md:text-base">{item}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Certifications and Soft Skills */}
          <div className="space-y-12">
            {/* Certifications */}
            <div>
              <h3 className="text-xl font-bold tracking-wide uppercase text-slate-200 mb-4">
                Certifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.03, backgroundColor: "#1e1e1e" }}
                    transition={{ duration: 0.3 }}
                    className="p-4 rounded-lg border border-slate-600 shadow-md hover:shadow-burntorange/30 bg-slate/30 backdrop-blur-md transition-all cursor-pointer"
                  >
                    <p className="text-md text-burntorange font-semibold">{cert.title}</p>
                    <p className="text-sm text-slate-300 mt-1">{cert.issuer}</p>
                    <p className="text-xs text-slate-400 mt-2">{cert.date}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-xl font-bold tracking-wide uppercase text-slate-200 mb-4">
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.08, backgroundColor: "#ff914d", color: "#0f172a" }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                    className="px-4 py-2 bg-slate border border-burntorange text-burntorange rounded-full text-sm cursor-pointer shadow-sm hover:shadow-burntorange/30 transition-all"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;