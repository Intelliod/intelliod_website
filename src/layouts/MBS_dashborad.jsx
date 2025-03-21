import Navbar from "../components/Navbar";
import HeroSection from "../components/MBS/HeroSection";
import Workflow from "../components/MBS/Workflow";
import Footer from "../components/Footer";
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
      <div className="pt-10">
      <div id="workflow" className="pt-10 md:py-20 max-w-7xl mx-auto ">
          <CaseStudy />
        </div>
        <div id="" className=" pt-10 md:py-20 max-w-7xl mx-auto ">
          <Workflow />
        </div>
        <div id="features" className="pt-10 md:py-20">
          <Sector/>
        </div>
        <Footer />
      </div>
      </div>
    </>
  );
};

export default MBS;
