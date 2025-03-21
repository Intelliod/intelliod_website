import Head from "../components/CV/CVhead";
import Features from "../components/CV/CVfeatures";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CV from "../components/CV/CV";
import About from "../components/CV/CVabout";
import Rust from "../components/CV/CVrust";
import Feature from "../components/CV/feature";
import { navItems } from "../constants";
const CV_dashboard = () => {
    return (
      <>
      
        <Navbar navItems={navItems} />
        <div className="overflow-x-hidden">
        <div id="home">
          <CV />
        </div>
        <div id="about" className="md:py-10">
          <Head />
        </div>
        <div  className="md:py-10">
          <About />
        </div>
        <div id="rust" className="md:py-10">
          <Rust />
        </div>
        <div className="max-w-7xl mx-auto md:pt-10 md:px-6">
        <div id="feature" className="md:py-20">
          <Feature />
        </div>
        <div id="features" className="md:py-20">
          <Features />
        </div>
        </div>
        <Footer />
       
        </div>
      </>
    );
  };
  
  export default CV_dashboard;