import { User, Zap } from "lucide-react";
import {
  client_1,
  client_2,
  client_3,
  client_4,
  graphicDesignIcon,
  instagramIcon,
  linkedInIcon,
  project_1,
  project_2,
  project_3,
  project_4,
  seoOptIcon,
  webDesignIcon,
  webDevIcon,
  UWLogo,
  EnergyNorthwest,
  CBC,
  Delta
} from "@/app/assets/assets";
import { Instagram, Linkedin } from "lucide-react";
import { SiAutocad, SiPython, SiArduino, SiAdobe } from "react-icons/si";
import { FaCube, FaChartBar, FaTools } from "react-icons/fa";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import { TbAutomation } from "react-icons/tb";
import { MdDesignServices } from "react-icons/md";

import {
  counterListsType,
  FAQ,
  FollowerData,
  myEducationTypes,
  myExperienceTypes,
  myServicesPlansTypes,
  myShowCasesTypes,
  myStackTypes,
  mySkillsTypes,
  testimonialsTypes,
  myServicesTypes,
} from "@/types";
import { socialListsTypes } from "@/types";
import { pagesListsType } from "@/types";

export const pagesLists: pagesListsType[] = [
  {
    id: 1,
    title: "Home",
    href: "/",
    icon: <User />,
  },
  {
    id: 2,
    title: "About",
    href: "/about",
    icon: <Zap />,
  },
  // {
  //   id: 3,
  //   title: "Contact",
  //   href: "/contact",
  //   icon: <Mail />,
  // },
];

export const socialLists: socialListsTypes[] = [
  {
    id: 1,
    title: "Instagram",
    icon: <Instagram size={22} />,
    link: "https://www.instagram.com/avenuedaze/",
  },
  {
    id: 2,
    title: "LinkedIn",
    icon: <Linkedin size={22} />,
    link: "https://www.linkedin.com/in/abigailhoutari/",
  },
];

export const mySkills: mySkillsTypes[] = [
  {
    id: 1,
    name: "Microsoft 365",
  },
  {
    id: 2,
    name: "SOLIDWORKS (CSWA Certified)",
  },
  {
    id: 3,
    name: "AutoCAD",
  },
  {
    id: 4,
    name: "Python",
  },
  {
    id: 5,
    name: "Arduino",
  },
  {
    id: 6,
    name: "Adobe Suite",
  },
  {
    id: 7,
    name: "Structural Analysis",
  },
  {
    id: 8,
    name: "Basic Failure Theory",
  },
];

export const counterLists: counterListsType[] = [
  {
    id: 1,
    title: "Courses Taken",
    value: 45,
  },
  {
    id: 2,
    title: "Year of Experience",
    value: 1,
  },
  {
    id: 3,
    title: "Completed Tasks",
    value: 40,
  },
  {
    id: 4,
    title: "Awards & Scholarships",
    value: 6,
  },
];

export const myExperience: myExperienceTypes[] = [
  {
    id: 1,
    year: "2023 - Present",
    title: "Peer Tutor and Teaching Assistant",
    company: "University of Washington",
    label: "university",
    description:
      "Tutor 7+ students weekly in Calculus (I-III) and Physics, enhancing their comprehension of complex concepts including Statics, Dynamics, Strengths of Materials, and Electromagnetism. Research and implement effective pedagogical strategies to enhance student learning and engagement, presented findings at the UW School of STEM’s 2024 Research Symposium.",
    link: "",
    logo: UWLogo,
  },
  {
    id: 2,
    year: "June 2024 - Sep 2024",
    title: "Facilities Engineering Intern",
    company: "Energy Northwest",
    label: "company",
    description:
      "Utilized AutoCAD to create detailed architectural and electrical plans for 10+ facility and commercial engineering projects at Columbia Generating Station. Conducted area walk-downs and created AutoCAD as-built drawings for 5+ engineering documentation packages, ensuring precision in material selection and structural modifications. Contributed to project iteration plans, resulting in an estimated 7% reduction in design errors.",
    link: "",
    logo: EnergyNorthwest,
  },
  {
    id: 3,
    year: "Aug 2020 - Sep 2023",
    title: "Instrumentation Lab Intern",
    company: "Energy Northwest",
    label: "company",
    description:
      "Developed and implemented a new calibration tracking system, improving efficiency by 10%. Conducted water sample testing critical to nuclear power plant facility operations, following strict environmental and radiological lab protocols. Gained hands-on experience in NRC laboratory safety compliance, materials testing, and data reporting. Automated the distribution of over 400 invoice emails, saving an estimated 5 hours of labor per week.",
    link: "",
    logo: EnergyNorthwest,
  },
];

export const myEducation: myEducationTypes[] = [
  {
    id: 1,
    year: "Expected - June 2027",
    degree: "BS in Mechanical Engineering",
    college: "University of Washington",
    label: "university",
    description:
      "Coursework: Dynamics, Strengths of Materials, Multivariate Calculus, Differential equations, Engineering Statistics, Waves, Electromagnetism, Thermodynamics, Machine design, Fluid Mechanics.",
    link: "",
    logo: UWLogo,
  },
  {
    id: 2,
    year: "Sep 2021 - June 2023",
    degree: "Associate of Arts",
    college: "Columbia Basin College",
    label: "college",
    description: "I achieved XYZ",
    link: "",
    logo: CBC,
  },
  {
    id: 3,
    year: "Sep 2019 - June 2023",
    degree: "High School Diploma",
    college: "Delta High School",
    label: "high school",
    description: "I achieved XYZ",
    link: "",
    logo: Delta,
  },
];

export const myStack: myStackTypes[] = [
  {
    id: 1,
    title: "SOLIDWORKS",
    description: "3D CAD Design Tool",
    logo: FaCube,
    link: "https://www.solidworks.com",
  },
  {
    id: 2,
    title: "AutoCAD",
    description: "2D, 3D CAD Design Tool",
    logo: SiAutocad,
    link: "https://www.autodesk.com/products/autocad/overview",
  },
  {
    id: 3,
    title: "Microsoft 365",
    description: "Productivity Suite",
    logo: TfiMicrosoftAlt,
    link: "https://www.microsoft.com/en/microsoft-365",
  },
  {
    id: 4,
    title: "Arduino",
    description: "Electronics platform",
    logo: SiArduino,
    link: "https://www.arduino.cc",
  },
  {
    id: 5,
    title: "Adobe Suite",
    description: "Design Software Suite",
    logo: SiAdobe,
    link: "https://www.adobe.com/creativecloud.html",
  },
  {
    id: 6,
    title: "Python",
    description: "Programming Language",
    logo: SiPython,
    link: "https://www.python.org",
  },
];

export const myServices: myServicesTypes[] = [
  {
    id: 1,
    title: "Mechanical Design",
    description:
      "Designing advanced mechanical systems with precision using tools like SOLIDWORKS and AutoCAD.",
    icon: FaTools,
    link: "",
  },
  {
    id: 2,
    title: "Carbon Fiber Composite Design",
    description:
      "Specializing in carbon fiber monocoque chassis design and material selection for high-performance applications.",
    icon: MdDesignServices,
    link: "",
  },
  {
    id: 3,
    title: "Engineering Analysis",
    description:
      "Conducting structural and failure analysis for mechanical systems to ensure safety and performance.",
    icon: FaChartBar,
    link: "",
  },
  {
    id: 4,
    title: "Programming & Automation",
    description:
      "Utilizing Python and Arduino for system automation, data analysis, and control systems.",
    icon: TbAutomation,
    link: "",
  },
];

export const myShowCases: myShowCasesTypes[] = [
  {
    id: 1,
    title: "Devcraft",
    description:
      "Showcasing expertise, passion, and innovation in the realm of development.",
    link: "vortex.com",
    type: "Portfolio",
    theme: "Dark",
    pages: 4,
    image: project_1,
  },
  {
    id: 2,
    title: "Zenith Gym",
    description:
      "Empowering fitness enthusiasts with an immersive online experience.",
    link: "zenith.com",
    type: "Fitness",
    theme: "Light",
    pages: 5,
    image: project_2,
  },
  {
    id: 3,
    title: "Novus Agency",
    description:
      "Transforming ideas into digital realities with creativity and expertise.",
    link: "novus.com",
    type: "Business",
    theme: "Dark",
    pages: 6,
    image: project_3,
  },
  {
    id: 4,
    title: "Apex Agency",
    description:
      "Setting the pinnacle of digital excellence with cutting-edge solutions and creativity.",
    link: "apex.com",
    type: "Business",
    theme: "Light",
    pages: 6,
    image: project_4,
  },
];

export const testimonials: testimonialsTypes[] = [
  {
    id: 1,
    name: "Sarah Thompson",
    description:
      "I am thrilled with the website for my business. His ability to translate my vision into a visually stunning...",
    location: "New York City, USA.",
    avatar: client_1,
  },
  {
    id: 2,
    name: "John Anderson",
    description:
      "Working with Pragadesh was a game-changer for my online business. His web design skills are exceptional.",
    location: "Sydney, Australia.",
    avatar: client_2,
  },
  {
    id: 3,
    name: "Mark Davis",
    description:
      "Pragadesh’s creativity and technical expertise transformed our website into a visually stunning platform.",
    location: "London, UK.",
    avatar: client_3,
  },
  {
    id: 4,
    name: "Laura Adams",
    description:
      "Pragadesh is a artist when it comes to website. He transformed my outdated website into a modern masterpiece.",
    location: "Madrid, Spain.",
    avatar: client_4,
  },
];

export const myServicesPlans: myServicesPlansTypes[] = [
  {
    id: 1,
    service: "Web Design",
    price: "$50",
    description:
      "Crafting visually captivating and user-friendly websites for online success.",
    completedWorks: "25+",
    experience: "5+",
    totalHoursWorked: "500 hours",
    icon: webDesignIcon,
  },
  {
    id: 2,
    service: "Web Dev",
    price: "$60",
    description:
      "Bringing ideas to life with robust and scalable web solutions.",
    completedWorks: "30+",
    experience: "6+",
    totalHoursWorked: "420 hours",
    icon: webDevIcon,
  },
  {
    id: 3,
    service: "Graphic Design",
    price: "$40",
    description:
      "Creating visually stunning designs that captivate and engage audiences.",
    completedWorks: "40+",
    experience: "8+",
    totalHoursWorked: "328 hours",
    icon: graphicDesignIcon,
  },
  {
    id: 4,
    service: "SEO",
    price: "$70",
    description:
      "Elevating online visibility and driving organic traffic through strategies.",
    completedWorks: "20+",
    experience: "4+",
    totalHoursWorked: "223 hours",
    icon: seoOptIcon,
  },
];

export const faqData: FAQ[] = [
  {
    question: "Can you work with clients remotely?",
    answer:
      "Absolutely! I have experience working with clients from all around the world. Through effective communication channels such as email, video calls, and project management tools, I ensure seamless collaboration regardless of geographical location.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Absolutely! Mobile responsiveness is a top priority in today's digital landscape. I design and develop websites that are fully responsive and adaptable to various devices and screen sizes. Your website will provide an optimal user experience whether accessed via desktops, smartphones, or tablets.",
  },
  {
    question: "How long does it typically take to complete a project?",
    answer:
      "The timeline for each project varies depending on its scope and complexity. Factors such as the number of pages, functionalities, and the client feedback process can impact the timeline. Upon discussing your project requirements, I will provide you with a realistic timeline and keep you updated throughout the process.",
  },
  {
    question: "Can you integrate third-party tools into my website?",
    answer:
      "Yes, I have experience integrating various third-party tools, plugins, and platforms into websites. Whether you need to integrate e-commerce functionalities, social media integration, email marketing services, or anything else, I can recommend and help ensure smooth integration.",
  },
  {
    question: "Do you offer website maintenance?",
    answer:
      "Yes, I offer website maintenance services to ensure your website remains up to date, secure, and optimized. From performance updates to adding new features and content, I can provide ongoing support to keep your website running smoothly.",
  },
  {
    question: "How do you handle website revisions?",
    answer:
      "I value your input and collaboration throughout the design process. Upon completing an initial design, I encourage you to provide feedback. I incorporate your suggestions and revisions to ensure the final product aligns with your vision.",
  },
  {
    question: "Can you optimize my website?",
    answer:
      "Certainly! I incorporate search engine optimization (SEO) best practices into my development process. This includes using relevant keywords, optimizing meta tags, creating search-engine-friendly URLs, and ensuring your website has a solid foundation for better search engine visibility.",
  },
  {
    question: "What are your payment terms?",
    answer:
      "Payment terms may vary depending on the project scope and duration. Generally, I request an initial deposit before commencing work.",
  },
];

export const followerData: FollowerData[] = [
  {
    platform: "Instagram",
    followers: "",
    url: "https://www.instagram.com/avenuedaze/",
    icon: instagramIcon,
  },
  {
    platform: "LinkedIn",
    followers: "",
    url: "https://www.linkedin.com/in/abigailhoutari/",
    icon: linkedInIcon,
  },
];
