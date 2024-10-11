import { AiOutlineCalendar } from "react-icons/ai"
import { TfiRulerPencil } from "react-icons/tfi"
import { VscFileSubmodule } from "react-icons/vsc"
import { BiUser } from "react-icons/bi";
import Service_01 from "@/public/images/ser0.jpg"

export const home = [
  {
    icon: <AiOutlineCalendar size={25} />,
    title: "10+ years of market experience",
    path:""
  },
  {
    icon: <TfiRulerPencil size={25} />,
    title: "Unique technologies & modern approach ",
    path:""
  },
  {
    icon: <VscFileSubmodule size={25} />,
    title: "100+ successful cases in portfolio",
    path:""
  },
  {
    icon: <BiUser size={25} />,
    title: "Customer satisfaction is our top priority",
    path:""
  },
]
export const expertise = [
  {
    id: 1,
    title: "Artificial Intelligence",
    cover: "../images/ser0.jpg",
    desc: [
      { text: "AI-driven testing" },
      { text: "Machine learning solutions" },
      { text: "Predictive analytics" },
      { text: "Natural language processing" },
      { text: "Intelligent automation" }
    ],
    para: "Supercharge Your Business with AI: Where Human Ingenuity Meets Machine Intelligence",
    path: "services",
    details: {
      introduction: "At Nexus Digital Solutions, we harness the power of AI to revolutionize your business processes and decision-making.",
      offerings: [
        { heading: "AI-Driven Testing", detail: "Enhance software quality with our advanced, automated testing solutions." },
        { heading: "Machine Learning Solutions", detail: "Unlock insights from your data with custom ML models." },
        { heading: "Predictive Analytics", detail: "Forecast trends and make data-driven decisions with our predictive models." },
        { heading: "Natural Language Processing", detail: "Improve customer interactions with AI-powered communication tools." },
        { heading: "Intelligent Automation", detail: "Streamline operations with smart, adaptive automation systems." }
      ],
      whyChooseUs: [
        "Customized AI solutions tailored to your specific business needs",
        "Proven track record of successful AI implementations across industries",
        "Continuous support and updates to keep your AI systems at the cutting edge",
        "Seamless integration with your existing technologies and processes"
      ],
      successStory: "\"Nexus Digital Solutions' AI-driven predictive analytics increased our inventory efficiency by 35% and reduced waste by 28% in just six months.\" - CEO, Major Retail Chain"
    }
  },
  {
    id: 2,
    title: "Web Design & Development",
    cover: "../images/ser01.jpg",
    desc: [
      { text: "Responsive web design" },
      { text: "Custom web applications" },
      { text: "E-commerce solutions" },
      { text: "Progressive Web Apps (PWA)" },
      { text: "Full-stack development" }
    ],
    para: "Web Wonders Await: Transforming Ideas into Digital Masterpieces",
    path: "services",
    details: {
      introduction: "We don't just build websites; we craft digital experiences that captivate, engage, and convert.",
      offerings: [
        { heading: "Responsive Web Design", detail: "Create stunning websites that look great on any device." },
        { heading: "Custom Web Applications", detail: "Develop tailored web apps that solve your unique business challenges." },
        { heading: "E-commerce Solutions", detail: "Build online stores that drive sales and enhance customer experience." },
        { heading: "Progressive Web Apps (PWA)", detail: "Combine the best of web and mobile apps for optimal performance." },
        { heading: "Full-Stack Development", detail: "End-to-end web solutions using cutting-edge technologies." }
      ],
      whyChooseUs: [
        "User-centric design approach ensures intuitive and engaging websites",
        "Performance-optimized code for lightning-fast load times",
        "SEO-friendly development to boost your online visibility",
        "Scalable solutions that grow with your business"
      ],
      successStory: "\"Our new e-commerce site by Nexus Digital Solutions increased our online sales by 150% in the first quarter post-launch.\" - Marketing Director, Fashion Retailer"
    }
  },
  {
    id: 3,
    title: "Mobile Development",
    cover: "../images/ser02.jpg",
    desc: [
      { text: "Native app development" },
      { text: "Cross-platform mobile apps" },
      { text: "Mobile UI/UX design" },
      { text: "App performance optimization" },
      { text: "Mobile enterprise solutions" }
    ],
    para: "Mobile Magic: Putting Your Business in Every Pocket",
    path: "services",
    details: {
      introduction: "In a mobile-first world, we ensure your business is always at your customers' fingertips.",
      offerings: [
        { heading: "Native App Development", detail: "Create high-performance apps for iOS and Android." },
        { heading: "Cross-Platform Mobile Apps", detail: "Develop once, deploy everywhere with efficient cross-platform solutions." },
        { heading: "Mobile UI/UX Design", detail: "Craft intuitive and beautiful mobile interfaces that users love." },
        { heading: "App Performance Optimization", detail: "Enhance speed and efficiency of existing mobile applications." },
        { heading: "Mobile Enterprise Solutions", detail: "Streamline business operations with powerful mobile tools." }
      ],
      whyChooseUs: [
        "Expertise in latest mobile technologies and platforms",
        "Focus on user experience to ensure high engagement and retention",
        "Rigorous testing processes for bug-free, reliable apps",
        "Ongoing support and updates to keep your app relevant and performant"
      ],
      successStory: "\"Nexus Digital Solutions' mobile app increased our customer engagement by 200% and significantly boosted our brand loyalty.\" - CTO, Health & Fitness Company"
    }
  },
  {
    id: 4,
    title: "Digital Marketing",
    cover: "../images/ser03.jpg",
    desc: [
      { text: "Search Engine Optimization (SEO)" },
      { text: "Pay-Per-Click (PPC) advertising" },
      { text: "Social media marketing" },
      { text: "Content marketing strategy" },
      { text: "Conversion rate optimization" }
    ],
    para: "Dominate the Digital Realm: Your Brand, Amplified",
    path: "services",
    details: {
      introduction: "We don't just increase your visibility; we transform your digital presence into a powerful revenue generator.",
      offerings: [
        { heading: "Search Engine Optimization (SEO)", detail: "Boost your rankings and organic traffic with our proven SEO strategies." },
        { heading: "Pay-Per-Click (PPC) Advertising", detail: "Maximize ROI with targeted, data-driven ad campaigns." },
        { heading: "Social Media Marketing", detail: "Build brand awareness and engagement across all major platforms." },
        { heading: "Content Marketing Strategy", detail: "Create compelling content that attracts, engages, and converts." },
        { heading: "Conversion Rate Optimization", detail: "Turn more visitors into customers with our CRO techniques." }
      ],
      whyChooseUs: [
        "Data-driven strategies tailored to your specific business goals",
        "Transparent reporting and analytics for clear ROI tracking",
        "Agile approach allows quick pivots based on performance",
        "Integrated marketing solutions for consistent messaging across all channels"
      ],
      successStory: "\"Nexus Digital Solutions' SEO and content strategy increased our organic traffic by 310% and leads by 150% within a year.\" - CMO, B2B Software Company"
    }
  },
  {
    id: 5,
    title: "UI/UX Design",
    cover: "../images/ser04.jpg",
    desc: [
      { text: "User-centered design" },
      { text: "Interaction design" },
      { text: "Wireframing and prototyping" },
      { text: "Usability testing" },
      { text: "Information architecture" }
    ],
    para: "Design that Delights: Crafting Experiences Users Can't Resist",
    path: "services",
    details: {
      introduction: "We believe in the power of design to solve problems, evoke emotions, and drive business success.",
      offerings: [
        { heading: "User-Centered Design", detail: "Create products that truly resonate with your target audience." },
        { heading: "Interaction Design", detail: "Develop intuitive interfaces that users love to engage with." },
        { heading: "Wireframing and Prototyping", detail: "Visualize and test ideas before full development." },
        { heading: "Usability Testing", detail: "Ensure your product meets user needs and expectations." },
        { heading: "Information Architecture", detail: "Organize content for optimal user navigation and understanding." }
      ],
      whyChooseUs: [
        "Deep understanding of human psychology and behavior in digital environments",
        "Iterative design process that refines ideas based on user feedback",
        "Seamless collaboration between design and development teams",
        "Focus on accessibility to ensure your product is usable by all"
      ],
      successStory: "\"The UX redesign by Nexus Digital Solutions increased our app's user retention by 70% and in-app purchases by 85%.\" - Product Manager, EdTech Startup"
    }
  },
  {
    id: 6,
    title: "Branding & Creative Services",
    cover: "../images/ser05.jpg",
    desc: [
      { text: "Brand identity design" },
      { text: "Logo and visual asset creation" },
      { text: "Brand strategy development" },
      { text: "Brand guidelines" },
      { text: "Rebranding services" }
    ],
    para: "Brand Brilliance: Igniting Your Identity, Illuminating Your Impact",
    path: "services",
    details: {
      introduction: "We don't just create brands; we craft identities that resonate, inspire, and endure.",
      offerings: [
        { heading: "Brand Identity Design", detail: "Develop a unique visual language that sets you apart." },
        { heading: "Logo and Visual Asset Creation", detail: "Design memorable logos and consistent brand elements." },
        { heading: "Brand Strategy Development", detail: "Define your brand's position, personality, and promise." },
        { heading: "Brand Guidelines", detail: "Create comprehensive guides for consistent brand application." },
        { heading: "Rebranding Services", detail: "Revitalize your brand for the modern marketplace." }
      ],
      whyChooseUs: [
        "Strategic approach that aligns your brand with business objectives",
        "Deep market research to ensure your brand resonates with target audiences",
        "Holistic branding that extends beyond visuals to tone, messaging, and experience",
        "Ongoing brand management support to maintain and evolve your identity"
      ],
      successStory: "\"Nexus Digital Solutions' rebranding effort transformed our company image, leading to a 50% increase in brand recognition and 30% growth in new business inquiries.\" - CEO, Financial Services Firm"
    }
  }
];


export const testimonial = [
  {
    id: 1,
    name: "Alexander Black",
    cover: "../images/e1.jpg",
    post: "Nexus consulting - CEO",
    desc: "Nunc fermentum - tempus erat ligula, sit amet lacinia justo cursus ac. Suspendisse quis nulla tincidunt! Lorem ipsum dolor amet at ornare ex, quis fringilla tortor! Nunc consectetur feugiat rutrum. Sed rhoncus sapien!",
    path:""
  },
  {
    id: 2,
    name: "Diana Green",
    cover: "../images/e2.jpg",
    post: "Nexus Arts - marketing manager",
    desc: "Cras at ornare fermentum quam et tortor euismod, vel maximus metus tristique at ornare ex, quis fringilla tortor. Aenean semper neque quis consectetur lobortis. Quisque nec convallis ex. Aenean ut metus et nunc cursus aliquet.",
    path:""
  },
  {
    id: 3,
    name: "Alexander Black",
    cover: "../images/e3.jpg",
    post: "Nexus consulting - CEO",
    desc: "Nunc fermentum - tempus erat ligula, sit amet lacinia justo cursus ac. Suspendisse quis nulla tincidunt! Lorem ipsum dolor amet at ornare ex, quis fringilla tortor! Nunc consectetur feugiat rutrum. Sed rhoncus sapien!",
    path:""
  },
  {
    id: 4,
    name: "Diana Green",
    cover: "../images/e4.jpg",
    post: "Nexus Arts - marketing manager",
    desc: "Cras at ornare fermentum quam et tortor euismod, vel maximus metus tristique at ornare ex, quis fringilla tortor. Aenean semper neque quis consectetur lobortis. Quisque nec convallis ex. Aenean ut metus et nunc cursus aliquet.",
    path:""
  },
]
export const showcase = [
  {
    id: 1,
    title: "Neon Lights",
    cover: "../images/s1.jpg",
    catgeory: "DIGITAL MARKETING",
    path:""
  },
  {
    id: 2,
    title: "Futuristic Furniture",
    catgeory: "WEBSITES",
    cover: "../images/s2.jpg",
    path:""
  },
  {
    id: 3,
    title: "Smart Living",
    cover: "../images/s3.jpg",
    catgeory: "WEBSITES",
    path:""
  },
  {
    id: 4,
    title: "Light Painting",
    cover: "../images/s4.jpg",
    catgeory: "BRANDING	",
    path:""
  },
  {
    id: 5,
    title: "Ideabox",
    cover: "../images/s5.jpg",
    catgeory: "BRANDING	",
    path:""
  },
  {
    id: 5,
    title: "VR Experience",
    cover: "../images/s6.jpg",
    catgeory: "WEBSITES	",
    path:""
  },
]
export const brand = [
  {
    id: 1,
    cover: "../images/l1.svg",
    path:""
  },
  {
    id: 2,
    cover: "../images/l2.svg",
    path:""
  },
  {
    id: 3,
    cover: "../images/l3.svg",
    path:""
  },
  {
    id: 4,
    cover: "../images/l4.svg",
    path:""
  },
  {
    id: 5,
    cover: "../images/l5.svg",
    path:""
  },
  {
    id: 6,
    cover: "../images/l6.svg",
    path:""
  },
]
export const blogdata = [
  {
    id: 1,
    title: "How AI-Driven Testing is Revolutionizing Software Development",
    cover: "../images/blog01.jpeg",
    category: "ARTIFICIAL INTELLIGENCE",
    date: "OCTOBER 15, 2024",
    path: "blogs",
    excerpt: "Discover how AI-driven testing is transforming the software development landscape, improving efficiency and reliability in ways never before possible.",
    content: `Artificial Intelligence is reshaping the software testing industry, bringing unprecedented levels of efficiency and accuracy to quality assurance processes. This blog post explores the cutting-edge applications of AI in software testing, including:

    1. Automated test case generation
    2. Intelligent test data creation
    3. Self-healing test scripts
    4. Predictive analytics for test prioritization
    5. Visual UI testing with machine learning

    Learn how these innovations are helping companies reduce testing time, lower costs, and deliver higher-quality software products to market faster than ever before.`
  },
  {
    id: 2,
    title: "10 Essential UI/UX Design Principles for Boosting User Engagement",
    cover: "../images/blog02.png",
    category: "UI/UX DESIGN",
    date: "SEPTEMBER 28, 2024",
    path: "blogs",
    excerpt: "Master the art of creating engaging digital experiences with these 10 crucial UI/UX design principles that will keep your users coming back for more.",
    content: `In today's competitive digital landscape, exceptional UI/UX design is crucial for standing out and retaining users. This comprehensive guide covers 10 essential principles that will elevate your design game:

    1. Consistency in design elements
    2. Clear visual hierarchy
    3. Intuitive navigation structures
    4. Effective use of white space
    5. Responsive design for all devices
    6. Accessibility considerations
    7. Performance optimization
    8. Personalization and adaptability
    9. Microinteractions for delight
    10. Data-driven design decisions

    Implement these principles in your next project to create user interfaces that not only look great but also provide seamless, enjoyable experiences for your audience.`
  },
  {
    id: 3,
    title: "The Future of Mobile App Development: Trends to Watch in 2025",
    cover: "../images/blog03.jpeg",
    category: "MOBILE DEVELOPMENT",
    date: "AUGUST 17, 2024",
    path: "blogs",
    excerpt: "Stay ahead of the curve in mobile app development with our in-depth look at the trends shaping the industry in 2025 and beyond.",
    content: `The mobile app development landscape is evolving rapidly, with new technologies and user expectations driving innovation. This forward-looking article examines the trends that will define mobile app development in 2025:

    1. 5G-powered applications
    2. Augmented Reality (AR) integration
    3. AI and machine learning capabilities
    4. Internet of Things (IoT) connectivity
    5. Progressive Web Apps (PWAs)
    6. Blockchain for enhanced security
    7. Voice-activated interfaces
    8. Foldable device optimization
    9. Low-code/no-code development platforms
    10. Sustainable and eco-friendly app design

    Prepare your development team for the future by understanding and embracing these emerging trends in mobile app creation.`
  },
  {
    id: 4,
    title: "Mastering SEO in 2024: Advanced Techniques for Digital Dominance",
    cover: "../images/blog04.jpeg",
    category: "DIGITAL MARKETING",
    date: "JULY 5, 2024",
    path: "blogs",
    excerpt: "Elevate your digital marketing strategy with cutting-edge SEO techniques that will propel your website to the top of search engine results pages.",
    content: `Search Engine Optimization continues to be a critical component of digital marketing success. This in-depth guide covers advanced SEO strategies for 2024:

    1. AI-powered content optimization
    2. Voice search optimization
    3. Video SEO for increased visibility
    4. E-A-T (Expertise, Authoritativeness, Trustworthiness) signals
    5. Core Web Vitals optimization
    6. Natural language processing (NLP) for content creation
    7. Local SEO strategies for global reach
    8. Mobile-first indexing best practices
    9. Schema markup for enhanced SERP features
    10. User intent optimization

    Implement these advanced techniques to improve your website's search engine rankings, drive organic traffic, and stay ahead of your competitors in the digital space.`
  },
  {
    id: 5,
    title: "Building a Strong Brand Identity in the Digital Age: A Comprehensive Guide",
    cover: "../images/blog05.jpeg",
    category: "BRANDING & CREATIVE SERVICES",
    date: "JUNE 12, 2024",
    path: "blogs",
    excerpt: "Learn how to create a powerful and cohesive brand identity that resonates with your audience across all digital touchpoints.",
    content: `In today's digital-first world, a strong brand identity is more important than ever. This comprehensive guide walks you through the process of building a memorable brand:

    1. Defining your brand's core values and mission
    2. Developing a unique brand voice and personality
    3. Creating a visually consistent brand aesthetic
    4. Designing an impactful logo and visual assets
    5. Crafting a compelling brand story
    6. Implementing brand guidelines across all platforms
    7. Leveraging social media for brand awareness
    8. Building brand loyalty through customer experience
    9. Measuring and analyzing brand performance
    10. Evolving your brand identity over time

    Follow this guide to establish a strong, recognizable brand that stands out in the crowded digital marketplace and fosters lasting connections with your target audience.`
  }
];
export const teamdata = [
  {
    id: 1,
    title: "Muhammad Zil Ur Rehman",
    cover: "../images/ZIL.jpeg",
    post: "FOUNDER, CEO",
    path:""
  },
  // {
  //   id: 2,
  //   title: "Anna Kovalenko",
  //   cover: "../images/t2.jpg",
  //   post: "FINANCE DIRECTOR",
  // },
  // {
  //   id: 3,
  //   title: "Tiffany White",
  //   cover: "../images/t3.jpg",
  //   post: "CREATIVE DIRECTOR",
  // },
  // {
  //   id: 4,
  //   title: "Richard Greenwood",
  //   cover: "../images/t4.jpg",
  //   post: "PROGRAMMER",
  // },
  // {
  //   id: 5,
  //   title: "Jessica Brown",
  //   cover: "../images/t5.jpg",
  //   post: "MARKETING DIRECTOR",
  // },
  // {
  //   id: 6,
  //   title: "Gregory Windstorm",
  //   cover: "../images/t6.jpg",
  //   post: "ACCOUNTING MANAGER",
  // },
  // {
  //   id: 7,
  //   title: "Anna Red",
  //   cover: "../images/t7.jpg",
  //   post: "PROJECT MANAGER",
  // },
  // {
  //   id: 8,
  //   title: "Join our team!",
  //   cover: "../images/t8.jpg",
  //   post: "",
  // },
]
