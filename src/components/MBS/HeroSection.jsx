import React, { useEffect, useRef, useState } from "react";
const HeroSection = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        window.VANTA.NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          spacing:20.00,
          scaleMobile: 1.0,
          color: 0x0214fc6,
          // color: 0xff2800,
          birdSize: 0.60,
          backgroundColor:0x000000 ,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div ref={vantaRef} className="flex flex-col h-screen justify-center items-center text-center">
      <h2 className="text-4xl sm:text-6xl lg:text-8xl tracking-wide">
        <span className="bg-gradient-to-r from-[#0038a8] to-white text-transparent bg-clip-text">AI - </span>
        <span className="bg-gradient-to-r from-[#0038a8] to-white text-transparent bg-clip-text">
          Powered Brilliance{" "}
        </span>
      </h2>
      <h1 className="text-4xl text-white opacity-1 sm:text-6xl lg:text-8xl tracking-wide mt-2">
        for Industry and Society
      </h1>
      <p className="mt-10 text-xl px-2 text-neutral-400 max-w-4xl">
      Our intelligent solutions bridge today's challenges with tomorrow's possibilities
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#workflow"
          className="bg-gradient-to-r from-[#120a8f] to-[#0038a8] py-3 px-4 mx-3 rounded-md"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};
export default HeroSection;
