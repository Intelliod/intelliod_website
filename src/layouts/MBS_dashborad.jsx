import Navbar from "../components/Navbar";
import HeroSection from "../components/MBS/HeroSection";
import FeatureSection from "../components/MBS/FeatureSection";
import Workflow from "../components/MBS/Workflow";
import Footer from "../components/Footer";
import Products from "../components/MBS/Products";
import { navItems } from "../constants";
import About from "../components/MBS/About";
import CaseStudy from "../components/MBS/CaseStudy";
import Sector from "../components/MBS/Sector";

const MBS = () => {
  return (
    <>
  
      <Navbar navItems={navItems} />
      <div className="overflow-x-hidden">
      <div id="home">
        <HeroSection />
      </div>
      <div className="pt-10 px-6">
      <div id="workflow" className="py-20 max-w-7xl mx-auto ">
          <CaseStudy />
        </div>
        <div id="" className="py-20 max-w-7xl mx-auto ">
          <Workflow />
        </div>
        <div id="features" className="py-20">
          <Sector/>
        </div>
        {/* <div id="about" className="py-20 max-w-7xl mx-auto ">
          <FeatureSection />
        </div> */}
        {/* <div id="about" className="py-20 max-w-7xl mx-auto ">
          <Products />
        </div> */}
        <Footer />
      </div>
      </div>
    </>
  );
};

export default MBS;
