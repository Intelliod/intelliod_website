import { motion } from 'framer-motion';
import DM from '../../assets/Dm.mp4';

const Head = () => {
  return (
    <section className="w-full relative">
      <div className="h-5/6 w-[80%] mx-auto flex-center flex-col">
      <div className="text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Our {" "}
          <span className="bg-gradient-to-r from-[#0038a8] to-white text-transparent bg-clip-text">
            Projects
          </span>
          </h2>
      </div>
        <div className="w-full grid lg:grid-cols-2 items-center justify-start gap-4 py-20">
          <motion.video
            id="about-image"
            src={DM}
            autoPlay
            loop
            muted
            className="md:w-[90%] rounded"
            initial={{ scale: 1.5, opacity: 0, x: 150 }} // Initial state (zoomed in)
            whileInView={{ scale: 1, opacity: 1, x: 0 }} // Final state (zoomed out and centered)
            transition={{ duration: 2, ease: 'easeOut' }}
          />
          <div>
            <motion.h1
              id="about-content"
              className="text-2xl md:text-4xl text-white font-bold leading-relaxed text-center lg:text-left"
              initial={{ x: -100, opacity: 0 }} // Initial state (off-screen to the left)
              whileInView={{ x: 0, opacity: 1 }} // Final state (slide in from left)
              transition={{ duration: 0.9, ease: 'easeOut' }}
            >
              Revolutionizing Disaster Response
            </motion.h1>
            <motion.p
              id="about-content"
              className="text-md text-gray-200 leading-relaxed mt-5 lg:text-left"
              initial={{ x: -100, opacity: 0 }} // Initial state (off-screen to the left)
              whileInView={{ x: 0, opacity: 1 }} // Final state (slide in from left)
              transition={{ duration: 0.9, ease: 'easeOut' }}
            >
              Utilizing advanced image processing techniques and artificial intelligence, we have developed a robust system that can analyze aerial imagery and satellite data to detect and assess flood-affected areas in real time.
            </motion.p>
            <motion.ul
              id="about-content"
              className="list-disc list-inside text-gray-200 mt-4 text-md md:text-lg"
              initial={{ x: -100, opacity: 0 }} // Initial state (off-screen to the left)
              whileInView={{ x: 0, opacity: 1 }} // Final state (slide in from left)
              transition={{ duration: 0.9, ease: 'easeOut' }}
            >
              <li><strong>Rapid Damage Assessment:</strong> Automatically identifies submerged structures, damaged infrastructure, and affected vegetation to prioritize relief efforts.</li>
              <li><strong>Real-Time Monitoring:</strong> Continuously processes imagery to track flooding and its impact on communities and the environment.</li>
              <li><strong>Predictive Analytics:</strong> Integrates historical data with real-time observations to predict flood risks and offer insights for disaster preparedness.</li>
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Head;
