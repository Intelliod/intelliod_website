import highlightFirstmv from "/assets/videos/tower1.mp4";
import highlightSectmv from "/assets/videos/mes.mp4";
import highlightThirdmv from "/assets/videos/video3.mp4";
import highlightFourthmv from "/assets/videos/hightlight-fourth.mp4";
import exploremv from "/assets/videos/video3.mp4";
import framemv from "/assets/videos/frame.mp4";

import right from "/assets/images/right.svg";
import replay from "/assets/images/replay.svg";
import play from "/assets/images/play.svg";
import pause from "/assets/images/pause.svg";

import explore1 from "../assets/car.jpg";
import explore2 from "../assets/cv2.jpeg";
import rust1 from "../assets/rust.png";
import { Heart, ShoppingCart, Truck, Settings, BarChart2, Lock } from "lucide-react";


export const highlightFirstVideo = highlightFirstmv;
export const highlightSecondVideo = highlightSectmv;
export const highlightThirdVideo = highlightThirdmv;
export const highlightFourthVideo = highlightFourthmv;
export const exploreVideo = exploremv;
export const frameVideo = framemv;

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
      