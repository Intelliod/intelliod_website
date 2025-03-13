import gsap from 'gsap';
import Footer from "./Footer";
import Navbar from "./Navbar";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import contactimg from '../assets/contact-image.jpg'; // Replace with your contact image

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#contact-image',
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
    });

    tl.fromTo(
      '#contact-image',
      { scale: 1.5, opacity: 0, x: 0 },
      { scale: 1, opacity: 1, x: window.innerWidth < 768 ? 0 : 150, duration: 2, ease: 'power2.out' }
    )
      .fromTo(
        '#contact-content',
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
                id="contact-content"
                className="text-2xl md:text-4xl leading-relaxed font-bold"
              >
                Contact <span className='bg-gradient-to-r from-[#0038a8] to-white text-transparent bg-clip-text'> Us</span>
              </h1>
              <p className="text-md md:text-md text-gray-400 leading-relaxed mt-4 md:mt-7">
                Have questions or want to get in touch? We'd love to hear from you! 
                Reach out to us for any inquiries, collaborations, or support.
              </p>
              <div className="mt-4 md:mt-7">
                <p className="text-md md:text-md text-gray-400 leading-relaxed">
                  <strong>Email:</strong> info@intelliod.com
                </p>
                <p className="text-md md:text-md text-gray-400 leading-relaxed mt-2">
                  <strong>Phone:</strong> +1 (123) 456-7890
                </p>
                <p className="text-md md:text-md text-gray-400 leading-relaxed mt-2">
                  <strong>Address:</strong> 123 Tech Street, Innovation City, IC 12345
                </p>
              </div>
            </div>
            <img
              id="contact-image"
              src={contactimg}
              className="md:w-[90%] rounded order-0 lg:order-1"
              alt="Contact Image"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;