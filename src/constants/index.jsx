import {
  highlightFirstVideo,
  highlightSecondVideo,
  highlightThirdVideo,
} from "../utils";

import { Signal, Heart, BarChart, FileText, Briefcase,Truck } from "lucide-react";
import { Building, Wrench, Smartphone, CheckCircle, MessageCircle, Eye } from "lucide-react"; // Updated Comments to MessageCircle



export const navItems = [
  { label: "About", href: "#about", dropdownItems: [] },
  { label: "Features", href: "#features", dropdownItems: [] },
  { label: "Products", href: "#products",dropdownItems: [
    { label: 'Digital Twin', href: '/app2' },
    { label: 'Computer Vision', href: '/app3' },
    { label: 'Document Intelligence', href: '/app4' },
  ] },
];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "3D Visualization",
      
    ],
    video: highlightFirstVideo,
    videoDuration: 3,
  },
  {
    id: 2,
    textLists: ["Digital Dimensional Analysis", "and  maintenance"],
    video: highlightSecondVideo,
    videoDuration: 3.5,
  },
  {
    id: 3,
    textLists: [
      "Annotations for telecom towers.",
    ],
    video: highlightThirdVideo,
    videoDuration: 4,
  },
];



export const features = [
  {
    icon: <Signal />,
    text: "Telecommunications",
    description: [
      "Create virtual replicas of physical towers.",
      "Real-time monitoring and management.",
      "Enhancing operational efficiency."
    ],
  },
  {
    icon: <Heart />,
    text: "Healthcare",
    description: [
      "Enhanced Patient Care.",
      "Predictive Analytics.",
      "Telemedicine Solutions."
    ],
  },
  {
    icon: <Truck />,
    text: "Logistics",
    description: [
      "Enhance supply chain efficiency.",
      "Real-time tracking.",
      "Predictive analytics for better decision-making."
    ],
  },
  {
    icon: <FileText />,
    text: "Retail and E-Commerce",
    description: [
      "Utilize AI to extract and analyze data.",
      "Streamline workflows.",
      "Improve accuracy."
    ],
  },
  {
    icon: <BarChart />, 
    text: "Real Estate and Construction",
    description: [
      "SmartBuilding Solutions.",
      "MarketAnalysis Tools.",
      "EnhancedVisualization for Clients."
    ],
  },
  {
    icon: <Briefcase />, 
    text: " Manufacturing",
    description: [
      "Operational Efficiency.",
      "Predictive Maintenance.",
      "SupplyChain Optimization."
    ],
  },
];

export const solution = [
  {
    icon: <Smartphone />,
    text: "Digital Twins",
    description: [
      "Real-time data integration for monitoring.",
      "Supports proactive maintenance strategies.",
      "Optimizes resource management and decision-making.",
    ],
  },
  {
    icon: <Building />, // Using an icon for 3D Reconstruction
    text: "3D Reconstruction",
    description: [
      "Accurate models of structures created.",
      "Enhances architectural and urban planning.",
      "Improves stakeholder engagement through visualization.",
    ],
  },
  {
    icon: <Wrench />, // Using an icon for Predictive Maintenance
    text: "Predictive Maintenance",
    description: [
      "Forecasts maintenance needs effectively.",
      "Reduces unexpected asset breakdowns.",
      "Lowers overall maintenance costs significantly.",
    ],
  },
  {
    icon: <CheckCircle />,
    text: "Quality Control",
    description: [
      "Thorough inspections using digital models.",
      "Ensures adherence to quality standards.",
      "Identifies hazards to enhance safety.",
    ],
  },
  {
    icon: <MessageCircle />, // Updated icon for NLP
    text: "Natural Language Processing (NLP)",
    description: [
      "Simplifies data interaction with language.",
      "Promotes wider technology adoption.",
      "Enhances team collaboration and communication.",
    ],
  },
  {
    icon: <Eye />,
    text: "Computer Vision",
    description: [
      "Automates inspections for structural anomalies.",
      "Streamlines processes, reducing manual effort.",
      "Ensures compliance with safety regulations.",
    ],
  },
];



export const productsOptions = [
{
  title: "Digital Twin",
  features: [
    "Town Planing",
    "Asset Maintenance",
    "Predictive Analytics",
  ],
  link: '/app2#home',
},
{
  title: "Computer Vision",
  features: [
    "Disaster Management",
    "Neural Forms",
    "Real Time Surveillance",
  ],
  link: '/app3#home',
},
{
  title: "Document Intelligence",
  features: [
    "Efficiency",
    "Enhanced Data Accuracy",
    "Automated Workflows",
  ],
  link: '#',
},
];

export const footerLinks = [
  { text: "About Us", href: "/about" },
  // { text: "Features", href: "#features" },
];


export const checklistItems = [
  {
    "title": "Unmatched Expertise",
    "description": "Our team of industry pioneers and technical experts is passionate about AI, defining trends rather than just following them. With a deep understanding of cutting-edge technologies, we deliver transformative and effective solutions."
  },
  {
    "title": "Tailored Solutions",
    "description": "Every business is unique, and we recognize that. Our approach is not one-size-fits-all; we develop customized solutions that perfectly align with your specific challenges and objectives, ensuring you achieve the results you need."
  },
  {
    "title": "Proven Impact",
    "description": "We let our results speak for themselves. Our clients experience significant enhancements in efficiency, productivity, and customer satisfaction, leading to measurable business growth."
  },
  {
    "title": "Agile and Adaptive",
    "description": "At Mbstech.ai, our agility allows us to quickly adapt to client needs and market changes, delivering efficient solutions on time and within budget. We focus on helping businesses stay ahead of the competition through seamless project adjustments and technology integration."
  }
];


// export const features = [
//   {
//     icon: <Signal />,
//     text: "Telecommunications",
//     description: [
//       "Create virtual replicas of physical towers to facilitate effective management. This allows for improved resource allocation and reduced downtime. Real-time monitoring ensures operational efficiency and responsiveness."
//     ],
//     summary: "Transform telecommunications with innovative digital solutions."
//   },
//   {
//     icon: <Heart />,
//     text: "Healthcare",
//     description: [
//       "Enhanced patient care is achieved through advanced technology and predictive analytics. Telemedicine solutions bridge the gap for remote healthcare access. This integration improves patient outcomes and streamlines care delivery."
//     ],
//     summary: "Revolutionize healthcare with data-driven patient support."
//   },
//   {
//     icon: <Truck />,
//     text: "Logistics",
//     description: [
//       "Enhance supply chain efficiency with real-time tracking capabilities. This ensures transparency and accountability throughout the logistics process. Predictive analytics further empower decision-making and optimize operations."
//     ],
//     summary: "Optimize logistics operations for better delivery outcomes."
//   },
//   {
//     icon: <FileText />,
//     text: "Retail and E-Commerce",
//     description: [
//       "Utilize AI to extract and analyze data for valuable insights into consumer behavior. Streamlining workflows enhances operational accuracy and speed. This data-driven approach can significantly boost sales and customer satisfaction."
//     ],
//     summary: "Elevate retail strategies through intelligent data use."
//   },
//   {
//     icon: <BarChart />, 
//     text: "Real Estate and Construction",
//     description: [
//       "Smart building solutions offer innovative project management capabilities. Market analysis tools provide crucial insights for strategic decision-making. Enhanced visualization techniques help clients understand potential investments better."
//     ],
//     summary: "Transform real estate with innovative construction solutions."
//   },
//   {
//     icon: <Briefcase />, 
//     text: "Manufacturing",
//     description: [
//       "Boost operational efficiency through the implementation of predictive maintenance strategies. This minimizes unexpected downtimes and optimizes production processes. Supply chain optimization further enhances productivity and reduces costs."
//     ],
//     summary: "Advance manufacturing processes through smart technologies."
//   },
// ];

// Aadhya----------------------------------------------------


import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
 
} from "../assets";

import cc from '../../public/assets/images/cc1.png'
import Di from '../../public/assets/images/Di.jpg'
import Kn from '../../public/assets/images/Kn.jpg'
import QS from '../../public/assets/images/QS.jpg'
import RS from '../../public/assets/images/RS.jpg'
import sm from '../../public/assets/images/sm.jpg'

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Tailored Intelligence",
    text: "Custom Tailored Intelligent chatbot for efficiency. ",
    imageUrl: roadmap1,
    
  },
  {
    id: "1",
    title: "Usage Analytics",
    text: "Get intelligent insights from local documents.",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Security",
    text: "Establish tiered security protocols for document levels.",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Sources",
    text: "A completely redesigned experience to keep you in flow.",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Finance",
    Key_Solutions: "Regulatory Compliance Automation Tool, Document Intelligence System",
  },
  {
    id: "1",
    title: "Healthcare",
    Key_Solutions: "Client Onboarding Solution, Sentiment Insight",
  },
  {
    id: "2",
    title: "Manufacturing",
    Key_Solutions: "Vendor Risk Management Platform, Competitive Analysis Dashboard",

  },
  {
    id: "3",
    title: "Professional Services",
    Key_Solutions: "Content Creator Pro, QuickSummarize",

  },
  {
    id: "4",
    title: "Retail",
    Key_Solutions: "Sentiment Insight, Document Intelligence System",
  },
  {
    id: "5",
    title: "Logistics and Supply Chain",
    Key_Solutions: "Vendor Risk Management Platform, Document Intelligence System",
  },
];


export const benefits = [
  {
    id: "0",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Connect everywhere",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
]

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

export const solutions = [
  {
    icon: sm,
    text: "SmartChat AI",
    description: [
      "Intelligent chatbots and virtual assistants designed for real-time customer engagement and internal support.These solutions streamline communication processes, reduce response times, and enhance stakeholder satisfaction, allowing executives to focus on strategic initiatives."
    ]
  },
  {
    icon: QS ,
    text: "QuickSummarize",
    description: [
      "Automated summarization of lengthy reports, financial documents, and board meeting notes.This solution enables busy executives and company secretaries to quickly extract critical insights, facilitating informed decision-making and efficient meetings."
    ]
  },
  {
    icon: Kn ,
    text: "Knowledge Navigator",
    description: [
      "A dynamic knowledge management platform that consolidates and synthesizes information from various business sources.This tool enhances organizational efficiency by ensuring that decision-makers have easy access to the information they need when they need it."
    ]
  },
  {
    icon: cc,
    text: "Content Creator Pro",
    description: [
      "AI-driven content generation tools that produce high-quality, tailored communications for executive briefings, investor relations, and corporate marketing.This solution ensures consistent messaging that aligns with the company's strategic objectives."
    ]
  },
  {
    icon: Di ,
    text: "Document Intelligence Suite",
    description: [
      "An automated system for extracting and analyzing key data from legal and financial documents.Designed for company secretaries and compliance officers, this suite helps ensure regulatory compliance and improves data accuracy while saving valuable time."
    ]
  },
  {
    icon: RS, // Reuse the icon for Vendor Risk Assessment Tool
    text: "Vendor Risk Assessment Tool",
    description: [
      "A comprehensive solution that evaluates supplier risks by analyzing contracts and compliance documents.This tool empowers CFOs and procurement teams to make informed sourcing decisions, ensuring the reliability and integrity of supply chains."
    ]
  }
];