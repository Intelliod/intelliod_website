




import right from "/assets/images/right.svg";
import replay from "/assets/images/replay.svg";
import play from "/assets/images/play.svg";
import pause from "/assets/images/pause.svg";

import explore1 from "../assets/car.jpg";
import explore2 from "../assets/cv2.jpeg";
import rust1 from "../assets/rust.png";
import { Heart, ShoppingCart, Truck, Settings, BarChart2, Lock } from "lucide-react";


export const highlightFirstVideo ="https://intelliod.s3.ap-south-1.amazonaws.com/videos/tower1.mp4";
export const highlightSecondVideo = "https://intelliod.s3.ap-south-1.amazonaws.com/videos/mes.mp4";
export const highlightThirdVideo =  "https://intelliod.s3.ap-south-1.amazonaws.com/videos/video3.mp4";;

export const exploreVideo = "https://intelliod.s3.ap-south-1.amazonaws.com/videos/video3.mp4";


export const rightImg = right;
export const replayImg = replay;
export const playImg = play;
export const pauseImg = pause;

export const explore1Img = explore1;
export const explore2Img = explore2;
export const rust1Img = rust1;

export const navItems = [
{ label: "Feature", href: "#feature"},
];
export const feature = [
  {
    icon: <Heart />,
    text: "Healthcare",
    description: [
      "Automated Tumor Detection",
      "Real-time Vital Sign Monitoring",
      "Surgical Navigation Systems",
      "Pathology Image Analysis",
    ],
  },
  {
    icon: <ShoppingCart />,
    text: "E-commerce",
    description: [
      "Virtual Try-On Solutions",
      "Interactive Marketing Solutions",
      "Personalized Product Recommendations",
      "AR-Enhanced Product Demos",
    ],
  },
  {
    icon: <Truck />,
    text: "Automotive",
    description: [
      "Sensor Fusion Techniques",
      "Driver Monitoring Systems",
      "Obstacle Detection",
      "Traffic Sign Recognition",
    ],
  },
  {
    icon: <Settings />,  // Changed from Gear to Settings
    text: "Manufacturing",
    description: [
      "Advanced Quality Control",
      "Predictive Maintenance Algorithms",
      "Compliance Verification Systems",
      "Material Quality Assessments",
    ],
  },
  {
    icon: <BarChart2 />,
    text: "Agriculture",
    description: [
      "Hyperspectral Imaging",
      "Pest Detection",
      "Livestock Activity Tracking",
      "Soil Health Monitoring",
    ],
  },
  {
    icon: <Lock />,
    text: "Security",
    description: [
      "Real-time Anomaly Detection",
      "License Plate Recognition",
      "Crowd Management Solutions",
      "Facial Recognition Technology",
    ],
  },
];
      