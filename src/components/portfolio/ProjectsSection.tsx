"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeader from "./SectionHeader";

const projects = [
  {
    title: "RolePlay.ai",
    subtitle: "AI-Powered Roleplay Training Platform",
    description: "An advanced learning management system that transforms professional training through AI-driven roleplay simulations. Features intelligent voice conversations, real-time performance analysis, and comprehensive scoring to enhance sales, customer service, and communication skills.",
    features: [
      "AI-powered voice simulations with realistic conversation scenarios",
      "Dynamic scorecard system with customizable assessment criteria",
      "Real-time performance evaluation and coaching feedback",
      "Multi-role assignment management (learners, admins, super admins)",
      "Comprehensive dashboard with analytics and progress tracking",
      "Voice AI integration with multiple voice personas and languages",
      "Automated call analysis with performance insights and tips",
      "Leaderboard system for competitive learning engagement",
      "Assignment workflows with deadline management",
      "Detailed call history and replay functionality",
      "Role-based access control and user management",
      "Integration capabilities with external learning systems"
    ],
    deliverables: [
      "Production-ready roleplay training platform",
      "AI voice simulation engine with scenario management",
      "Comprehensive admin dashboard for training management",
      "Learner portal with progress tracking and assignments",
      "Real-time scoring and evaluation system",
      "User authentication and role management system",
      "Analytics dashboard with performance metrics",
      "API endpoints for system integrations",
      "Responsive web application with modern UI",
      "Email notification system for assignments and deadlines"
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Mongoose", "OpenAI", "LangChain", "JWT", "Stripe", "Mailtrap", "TailwindCSS", "Zustand", "React Query", "Vapi AI"],
    github: "https://github.com",
    live: "https://roleplay.ai",
    gradient: "from-blue-500 to-purple-600",
    status: "Testing",
    category: "Traning Platform",
    highlight: "Featured",
    timeline: "6 months",
    clientType: "Corporate Training & Education"
  },
  {
    title: "Chatley.ai",
    subtitle: "AI-Powered Voice Call Automation Platform",
    description: "A comprehensive AI voice agent solution that transforms business communication by automating customer calls 24/7. Features advanced conversation AI, real-time call handling, and seamless CRM integration to reduce operational costs by up to 40% while improving customer satisfaction.",
    features: [
      "24/7 AI voice agents for automated call handling",
      "Inbound and outbound call automation with intelligent routing",
      "Multi-language support for global customer interactions",
      "Real-time call transcription and detailed analytics",
      "CRM integration with popular business tools via Zapier",
      "Advanced appointment scheduling and calendar synchronization",
      "Lead qualification and customer support automation",
      "Customizable AI agent personalities and conversation flows",
      "Call forwarding integration with existing business numbers",
      "Batch calling capabilities for marketing campaigns",
      "Comprehensive call insights and performance dashboards",
      "Knowledge base integration for accurate responses",
      "Phone number provisioning across multiple countries"
    ],
    deliverables: [
      "Production-ready AI voice call platform",
      "Multi-tenant dashboard with agent management",
      "Voice AI integration with VAPI service",
      "Subscription management with Stripe billing",
      "Real-time call analytics and reporting system",
      "API endpoints for third-party integrations",
      "Mobile-responsive web application",
      "Admin panel for user and workspace management",
      "Automated call queue processing system",
      "Knowledge base upload and management interface"
    ],
    tech: ["React", "Vite", "Node.js", "Express", "MongoDB", "VAPI", "Stripe", "Tailwind CSS", "Firebase", "Zapier", "WebRTC", "Chart.js"],
    github: "https://github.com",
    live: "https://chatley.ai",
    gradient: "from-purple-600 to-blue-600",
    status: "Live",
    category: "AI Voice Platform",
    highlight: "Featured",
    timeline: "12 months",
    clientType: "Business & Enterprise"
  },
  {
    title: "Idea-Lab AI",
    subtitle: "AI-Powered Content Creation & Style Learning Platform",
    description: "A revolutionary virtual whiteboard platform that helps creators and businesses generate viral content by learning from successful examples. Upload existing content, let AI analyze the style and structure, then generate new content that matches proven patterns for better SEO and engagement across all platforms.",
    features: [
      "Virtual whiteboard interface for content organization and collaboration",
      "AI-powered content style analysis and pattern recognition",
      "Multi-format content upload (YouTube videos, images, documents, voice notes)",
      "Intelligent content generation matching learned styles and structures",
      "SEO optimization with keyword targeting and ranking strategies",
      "Cross-platform content repurposing (carousels, Reels, scripts, emails)",
      "YouTube video transcription and analysis using OpenAI Whisper",
      "Vector database storage for semantic content similarity matching",
      "Collaborative workspace management with team sharing capabilities",
      "OpenAI Assistant integration with custom knowledge bases",
      "Real-time content generation with streaming responses",
      "Usage analytics and token tracking for optimization",
      "File attachment system with vector store integration",
      "Thread-based conversation management for context retention"
    ],
    deliverables: [
      "Production-ready content creation and analysis platform",
      "AI style learning engine with pattern recognition capabilities",
      "Multi-format content processing pipeline (video, audio, text, images)",
      "Collaborative whiteboard interface with drag-and-drop functionality",
      "Vector-powered content similarity and recommendation system",
      "SEO optimization toolkit with keyword analysis",
      "Cross-platform content repurposing automation",
      "User authentication and workspace management system",
      "Analytics dashboard for content performance tracking",
      "Mobile-responsive Progressive Web Application",
      "API documentation for third-party integrations",
      "Content template library with proven viral patterns"
    ],
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Shadcn UI", "Express.js", "OpenAI GPT-4", "OpenAI Whisper", "OpenAI Assistants", "Supabase", "Qdrant Vector DB", "FFmpeg", "ytdl-core", "React Query", "Zustand", "Firecrawl", "PDF.js", "Mammoth", "React Flow"],
    github: "https://github.com",
    live: "https://idealab-ai.com",
    gradient: "from-purple-600 to-blue-500",
    status: "In Development",
    category: "AI Content Platform",
    highlight: "Featured",
    timeline: "8 months",
    clientType: "Content Creators & Marketing Agencies"
  },
  {
    title: "Kadastra.ai",
    subtitle: "AI-Powered Site Assessment Platform",
    description: "A comprehensive AI-powered platform designed for instant CDC (Complying Development Certificate) compliance checks for property development. The platform leverages artificial intelligence, image analysis, GIS mapping, and deep domain expertise to assess development sites and provide instant compliance reports for property developers, architects, and real estate professionals.",
    features: [
      "AI-powered site assessment with automated compliance checking",
      "Instant CDC compliance reports covering all relevant LEP maps and legislation",
      "Multi-property type support including dual occupancies, granny flats, and alterations & additions",
      "Smart contract upload system with drag-and-drop functionality",
      "Real-time GIS mapping integration for accurate site analysis",
      "Credit-based subscription system with Stripe payment integration",
      "Multi-role support for architects, developers, real estate agents, and builders",
      "Secure file storage with AWS S3 integration",
      "Real-time notification system for user engagement",
      "Mobile-responsive interface with modern UI/UX"
    ],
    deliverables: [
      "Fully functional web application deployed on production",
      "AI-powered compliance assessment engine with automated report generation",
      "User authentication and subscription management system",
      "Payment processing integration with Stripe for subscription plans",
      "Admin dashboard for user management and analytics",
      "Mobile-optimized responsive interface with modern UI/UX",
      "Secure file upload and storage system with AWS S3",
      "Multi-tenant architecture supporting different user roles and permissions",
      "API documentation and backend services with Express.js and MongoDB"
    ],
    tech: ["Next.js", "React", "Tailwind CSS", "Radix UI", "TypeScript", "Express.js", "Node.js", "MongoDB", "Mongoose", "AWS S3", "Stripe API", "JWT Authentication", "React Hook Form", "Zod", "Axios"],
    github: "https://github.com",
    live: "https://kadastra.ai",
    gradient: "from-green-500 to-emerald-500",
    status: "Live",
    category: "Web Application",
    highlight: "Featured",
    timeline: "6 months",
    clientType: "Real Estate & Development Industry"
  },
  {
    title: "TeacherPayTeacher",
    subtitle: "Educational Resource Marketplace Platform",
    description: "A comprehensive marketplace platform connecting educators who create and sell teaching resources with buyers seeking quality educational materials. Features robust payment processing, user management, and resource approval workflows designed specifically for the education sector.",
    features: [
      "Multi-role user system (Admin, Seller, Buyer) with tailored dashboards",
      "Educational resource upload with media support (images, videos, documents)",
      "Advanced resource categorization by subject, grade level, and difficulty",
      "Integrated payment processing with PayPal and bank transfer support",
      "Real-time seller earnings tracking and withdrawal management",
      "Resource review and rating system with purchase verification",
      "Admin approval workflow for quality control",
      "Seller analytics dashboard with sales statistics",
      "Wishlist functionality for buyers",
      "Email notifications via Mailtrap integration",
      "AWS S3 cloud storage for resource files",
      "Responsive design with Tailwind CSS",
      "JWT-based authentication with password reset functionality"
    ],
    deliverables: [
      "Full-stack marketplace platform with admin panel",
      "Seller dashboard with resource management and analytics",
      "Buyer dashboard with resource browsing and purchasing",
      "Payment processing system with withdrawal requests",
      "Resource approval and moderation system",
      "User authentication and authorization system",
      "Cloud storage integration for file management",
      "Email notification system for transactions",
      "Mobile-responsive web application",
      "API documentation and database schemas"
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "AWS S3", "PayPal API", "Mailtrap", "Tailwind CSS", "Vite", "React Router", "Multer", "Bcrypt"],
    github: "https://github.com",
    live: "https://teacherpayteacher.com",
    gradient: "from-blue-500 to-green-500",
    status: "Testing",
    category: "EdTech Marketplace",
    highlight: "Featured",
    timeline: "6 months",
    clientType: "Educational Technology"
  },

];

export default function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const floatVariants = {
    animate: {
      y: [-10, 10, -10],
      x: [-5, 5, -5],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      className="mb-16 md:mb-24 lg:mb-32 relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          variants={floatVariants}
          animate="animate"
          className="absolute top-5 md:top-20 right-2 md:right-16 w-12 sm:w-16 md:w-32 h-12 sm:h-16 md:h-32 bg-gradient-to-br from-purple-400/15 md:from-purple-400/20 to-pink-400/15 md:to-pink-400/20 rounded-full blur-xl md:blur-4xl"
        />
        <motion.div
          variants={floatVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
          className="absolute bottom-5 md:bottom-20 left-2 md:left-16 w-16 sm:w-20 md:w-40 h-16 sm:h-20 md:h-40 bg-gradient-to-br from-blue-400/10 md:from-blue-400/15 to-cyan-400/10 md:to-cyan-400/15 rounded-full blur-xl md:blur-2xl"
        />
        <motion.div
          variants={floatVariants}
          animate="animate"
          style={{ animationDelay: "4s" }}
          className="hidden lg:block absolute top-1/3 right-1/3 w-20 h-20 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10"
      >
        {/* Section Header */}
        <SectionHeader
          tagText="Portfolio Showcase"
          tagIcon="solar:code-square-bold"
          heading="Featured Projects"
          description="Discover my latest work in web development, AI integration, and digital innovation"
          showUnderline={true}
          centered={true}
        />

        {/* Full-Width Stacked Projects */}
        <div className="max-w-7xl mx-auto px-3 md:px-4 space-y-8 md:space-y-12 lg:space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group"
            >
              <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/30 dark:border-gray-700/40 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-500 overflow-hidden shadow-lg md:shadow-xl hover:shadow-xl md:hover:shadow-2xl">

                {/* Project Header with Gradient */}
                <div className={`relative bg-gradient-to-br ${project.gradient} p-4 sm:p-6 md:p-8 lg:p-10`}>
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[length:20px_20px] md:bg-[length:30px_30px]" />
                  </div>

                  {/* Floating tech icons - hidden on mobile */}
                  <div className="hidden md:block absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                    {[
                      { icon: "logos:react", pos: { top: "15%", left: "80%" } },
                      { icon: "logos:nextjs-icon", pos: { top: "60%", right: "4%" } },
                      { icon: "logos:typescript-icon", pos: { bottom: "20%", left: "75%" } },
                      { icon: "logos:nodejs-icon", pos: { top: "25%", right: "15%" } },
                      { icon: "logos:tailwindcss-icon", pos: { bottom: "30%", left: "85%" } },
                      { icon: "logos:postgresql", pos: { top: "40%", right: "20%" } },
                      { icon: "simple-icons:langchain", pos: { bottom: "10%", left: "70%" } },
                      { icon: "logos:redis", pos: { top: "20%", right: "25%" } },
                      { icon: "logos:socket-io", pos: { bottom: "25%", left: "90%" } },
                      { icon: "logos:stripe", pos: { top: "30%", right: "30%" } },
                      { icon: "logos:vercel-icon", pos: { bottom: "15%", left: "65%" } },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        className="absolute text-white text-2xl md:text-3xl"
                        style={item.pos}
                        animate={{
                          y: [0, -8, 0],
                          rotate: [0, 5, 0],
                        }}
                        transition={{
                          duration: 4 + i * 0.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <Icon icon={item.icon} width={24} height={24} className="md:w-8 md:h-8" />
                      </motion.div>
                    ))}
                  </div>

                  <div className="relative z-10">
                    {/* Project Meta Info */}
                    <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4 md:mb-6">
                      <motion.span
                        className="px-2.5 py-1.5 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white text-xs md:text-sm font-semibold"
                        whileHover={{ scale: 1.05 }}
                      >
                        {project.category}
                      </motion.span>

                      {project.highlight && (
                        <motion.span
                          className="px-2.5 py-1.5 md:px-4 md:py-2 bg-yellow-500/20 backdrop-blur-sm border border-yellow-400/30 text-yellow-200 rounded-full text-xs md:text-sm font-semibold flex items-center gap-1 md:gap-2"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Icon icon="solar:star-bold" width={12} height={12} className="md:w-4 md:h-4" />
                          <span className="hidden sm:inline">{project.highlight}</span>
                        </motion.span>
                      )}

                      <motion.span
                        className={`px-2.5 py-1.5 md:px-4 md:py-2 backdrop-blur-sm rounded-full text-xs md:text-sm font-semibold flex items-center gap-1 md:gap-2 ${project.status === 'Live'
                          ? 'bg-green-500/20 text-green-200 border border-green-400/30'
                          : 'bg-orange-500/20 text-orange-200 border border-orange-400/30'
                          }`}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${project.status === 'Live' ? 'bg-green-400' : 'bg-orange-400'
                          } animate-pulse`} />
                        {project.status}
                      </motion.span>

                      <span className="px-2.5 py-1.5 md:px-4 md:py-2 bg-black/20 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs md:text-sm font-medium">
                        {project.timeline}
                      </span>

                      <span className="hidden sm:inline-block px-2.5 py-1.5 md:px-4 md:py-2 bg-black/20 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs md:text-sm font-medium">
                        {project.clientType}
                      </span>
                    </div>

                    {/* Project Title & Description */}
                    <div className="mb-6 md:mb-8">
                      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 font-medium mb-3 md:mb-4">
                        {project.subtitle}
                      </p>
                      <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl">
                        {project.description}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                      {/* <Link
                        href={project.github}
                        className="flex items-center justify-center gap-2 md:gap-3 px-4 py-2.5 md:px-6 md:py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-lg md:rounded-xl hover:bg-white/30 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl active:scale-95"
                      >
                        <Icon icon="solar:code-bold" width={18} height={18} className="md:w-5 md:h-5" />
                        <span>View Repository</span>
                      </Link> */}
                      {project.status === "Live" && (
                      <Link
                        href={project.live}
                        className="flex items-center justify-center gap-2 md:gap-3 px-4 py-2.5 md:px-6 md:py-3 bg-white text-gray-900 rounded-lg md:rounded-xl hover:bg-gray-100 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl active:scale-95"
                      >
                        <Icon icon="solar:arrow-up-outline" width={18} height={18} className="md:w-5 md:h-5" />
                        <span>Live Demo</span>
                      </Link>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Details Content */}
                <div className="p-4 sm:p-6 md:p-8 lg:p-10">
                  <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">

                    {/* Features Section */}
                    <div>
                      <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                        <div className="p-1.5 md:p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg md:rounded-xl">
                          <Icon icon="solar:settings-bold" className="text-white w-[18px] h-[18px] md:w-6 md:h-6" />
                        </div>
                        <span>Key Features</span>
                      </h4>
                      <ul className="space-y-2.5 md:space-y-3">
                        {project.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: featureIndex * 0.1 }}
                            className="flex items-start gap-2.5 md:gap-3 text-gray-700 dark:text-gray-300"
                          >
                            <Icon
                              icon="solar:check-circle-bold"
                              className="text-green-500 mt-0.5 flex-shrink-0 w-4 h-4 md:w-5 md:h-5"
                            />
                            <span className="text-sm md:text-base leading-relaxed">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables Section */}
                    <div className="mt-6 lg:mt-0">
                      <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                        <div className="p-1.5 md:p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg md:rounded-xl">
                          <Icon icon="solar:delivery-bold" className="text-white w-[18px] h-[18px] md:w-6 md:h-6" />
                        </div>
                        <span>Deliverables</span>
                      </h4>
                      <ul className="space-y-2.5 md:space-y-3">
                        {project.deliverables.map((deliverable, deliverableIndex) => (
                          <motion.li
                            key={deliverableIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: deliverableIndex * 0.1 }}
                            className="flex items-start gap-2.5 md:gap-3 text-gray-700 dark:text-gray-300"
                          >
                            <Icon
                              icon="solar:box-bold"
                              className="text-blue-500 mt-0.5 flex-shrink-0 w-4 h-4 md:w-5 md:h-5"
                            />
                            <span className="text-sm md:text-base leading-relaxed">{deliverable}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tech Stack Section */}
                  <div className="mt-6 md:mt-8 lg:mt-12 pt-6 md:pt-8 border-t border-gray-200/50 dark:border-gray-700/50">
                    <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                      <div className="p-1.5 md:p-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg md:rounded-xl">
                        <Icon icon="solar:code-bold" className="text-white w-[18px] h-[18px] md:w-6 md:h-6" />
                      </div>
                      <span>Technology Stack</span>
                    </h4>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.05 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-2.5 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 rounded-lg md:rounded-xl text-xs md:text-sm font-medium border border-gray-200 dark:border-gray-600 hover:shadow-md md:hover:shadow-lg transition-all duration-200"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}

        <motion.div
          variants={itemVariants}
          className="text-center mt-12 md:mt-16 lg:mt-20 px-4 mb-12"
        >
          <Link
            href="#contact"
          >

            <motion.div
              className="inline-flex items-center gap-2 md:gap-3 px-4 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 dark:border-purple-500/20 rounded-xl md:rounded-2xl"
              whileHover={{ scale: 1.05 }}
            >
              <Icon icon="solar:programming-bold" className="text-blue-500 dark:text-purple-400 w-5 h-5 md:w-6 md:h-6" />
              <span className="text-gray-700 dark:text-gray-300 font-medium text-sm md:text-base text-center">
                Interested in working together? Let&apos;s create something amazing!
              </span>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
} 