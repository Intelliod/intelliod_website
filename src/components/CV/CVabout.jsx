import { motion } from 'framer-motion';


const About = () => {
  return (
    <section className="w-full relative">
      <div className="h-5/6 w-full mx-auto flex flex-col ">
        <div className="md:w-10/12 w-11/12 mx-auto grid lg:grid-cols-2 items-center md:items-center gap-4 md:py-10 space-y-10 md:space-y-0">
          <motion.div
            className="flex flex-col justify-center order-1 md:order-0"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <h1 className="text-xl md:text-4xl text-white leading-relaxed font-bold text-center lg:text-left">
              Revolutionizing Agriculture with Computer Vision
            </h1>
            <motion.p
              className="text-sm md:text-md lg:text-lg text-gray-200 leading-relaxed mt-4 md:mt-7"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
            >
              Computer vision revolutionizes agriculture by enabling real-time plant disease detection. Analyzing high-resolution crop images, AI identifies early signs of disease, allowing timely intervention. This boosts yields, ensures sustainable farming, and enhances decision-making with confidence-scored insights.
            </motion.p>
            <motion.ul
              id="about-content"
              className="list-disc list-inside text-gray-200 mt-4 text-sm md:text-md lg:text-lg"
              initial={{ x: -100, opacity: 0 }} // Initial state (off-screen to the left)
              whileInView={{ x: 0, opacity: 1 }} // Final state (slide in from left)
              transition={{ duration: 0.9, ease: 'easeOut' }}
            >
              <li><strong>24/7 Monitoring:</strong>Enables constant drone-based monitoring of crops with advanced sensors, ensuring optimal crop health and timely interventions.</li>
              <li><strong>Data-Driven Decision Support:</strong>Real-time agronomic insights and continuous analysis empower stakeholders to make informed, proactive decisions.</li>
              <li><strong>Increased Yield Potential</strong>Advanced AI and machine learning enable up to 60% yield improvement, enhancing productivity across farming operations.</li>
            </motion.ul>
          </motion.div>
          <motion.img
            src="https://intelliod.s3.ap-south-1.amazonaws.com/images/cv3.jpg"
            className="md:w-[90%] rounded order-0 lg:order-1"
            alt="About Image"
            initial={{ scale: 1.5, opacity: 0, x: window.innerWidth < 768 ? 0 : 150 }}
            whileInView={{ scale: 1, opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
