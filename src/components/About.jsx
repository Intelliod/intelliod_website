import gsap from 'gsap';
import Footer from "./Footer";
import Navbar from "./Navbar";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import aboutimg from '../assets/cheerful-young-asian-businesswoman-using-laptop.jpg';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#about-image',
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
    });

    tl.fromTo(
      '#about-image',
      { scale: 1.5, opacity: 0, x: 0 },
      { scale: 1, opacity: 1, x: window.innerWidth < 768 ? 0 : 150, duration: 2, ease: 'power2.out' }
    )
      .fromTo(
        '#about-content',
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.out' },
        '-=1.5'
      );
  }, []);

  return (
    <>
      <Navbar />
      <section className="w-full relative">
        <div className="h-5/6 w-full mx-auto flex flex-col py-10">
          <div className="md:w-10/12 w-11/12 mx-auto grid lg:grid-cols-2 items-center md:items-center gap-4 space-y-10 md:space-y-0">
            <div className="flex flex-col justify-center order-1 md:order-0">
              <h1
                id="about-content"
                className="text-2xl md:text-4xl leading-relaxed font-bold"
              >
                About <span className='bg-gradient-to-r from-[#0038a8] to-white text-transparent bg-clip-text'> Us</span>
              </h1>
              <p id="about-content" className="text-md md:text-md text-gray-400 leading-relaxed mt-4 md:mt-7">
                Welcome to <strong>Intelliod</strong>, where innovation meets excellence. 
                We specialize in cutting-edge technologies, including Digital Twin, 
                Computer Vision, and Document Intelligence, to help businesses 
                streamline their operations.
              </p>
              <p
                id="about-content"
                className="text-md md:text-md text-gray-400 leading-relaxed mt-4 md:mt-7"
              >
                Our mission is to leverage AI-powered solutions to drive efficiency 
                and enable smarter decision-making. With a dedicated team of experts, 
                we are committed to transforming industries through technology.
              </p>
            </div>
            <img
              id="about-image"
              src={aboutimg}
              className="md:w-[90%] rounded order-0 lg:order-1"
              alt="About Image"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
