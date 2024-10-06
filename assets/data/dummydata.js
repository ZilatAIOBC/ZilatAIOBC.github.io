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
    title: "Ligula vel urna accumsan placerat",
    cover: "../images/b1.webp",
    catgeory: "INDUSTRY",
    date: "JANUARY 12, 2023",
    path:"blogs"
  },
  {
    id: 2,
    title: "Don’t underestimate the lorem ipsum dolor amet",
    cover: "../images/b2.jpg",
    catgeory: "TIPS & TRICKS",
    date: "OCTOBER 20, 2023",
    path:"blogs"
  },
  {
    id: 3,
    title: "Building the real VR lorem ipsum dolor amet glavrida from a scratch",
    cover: "../images/b3.jpg",
    catgeory: "TIPS & TRICKS",
    date: "OCTOBER 9, 2023",
    path:"blogs"
  },
  {
    id: 4,
    title: "What eleifend posuere tincidunt",
    cover: "../images/b4.jpg",
    catgeory: "EVENTS",
    date: "OCTOBER 8, 2023",
    path:"blogs"
  },
]
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
