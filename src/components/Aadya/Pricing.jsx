// import Section from "./Section";
// import Heading from "./Heading";
// import PricingList from "./PricingList";
// import { LeftLine, RightLine } from "./design/Pricing";

// const Pricing = () => {
//   return (
//     <Section className="overflow-hidden" id="pricing">
//       <div className="container relative z-2">
//       <div className="hidden relative justify-center mb-[4rem] lg:flex">
//       <div className="text-center">
//         <h2 className="h2 mb-4 md:mb-8 text-white">
//             Tools for{" "}
//         <span className=" bg-gradient-to-r from-[#0038a8] to-white text-transparent bg-clip-text">
//         specific industries
//         </span>
//         </h2>
//       </div>
//     </div>
//         <div className="relative">
//           <PricingList />
//           <LeftLine />
//           <RightLine />
//         </div>
//       </div>
//     </Section>
//   );
// };

// export default Pricing;


import Section from "./Section";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        
        {/* Header Section */}
        <div className="relative justify-center mb-[2rem] lg:mb-[4rem]">
          <div className="text-center">
            <h2 className="h2 mb-4 md:mb-8 text-white text-2xl sm:text-3xl lg:text-5xl">
              Tools for{" "}
              <span className="bg-gradient-to-r from-[#0038a8] to-white text-transparent bg-clip-text">
                specific industries
              </span>
            </h2>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="relative">
          <PricingList />
          
          {/* Lines */}
          <div className="absolute inset-0 z-1 hidden lg:block">
            <LeftLine />
            <RightLine />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
