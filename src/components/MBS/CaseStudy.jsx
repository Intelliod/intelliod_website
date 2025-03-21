import { CheckCircle2 } from "lucide-react";
import codeImg from "../../assets/about.png";
import { checklistItems } from "../../constants";

const CaseStudy = () => {
  return (
    <div className="mt-10 px-6">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
      What Sets Us {" "}
        <span className="bg-gradient-to-r from-[#0038a8] to-white text-transparent bg-clip-text">
          APART
        </span>
        
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2 mt-12">
          <img src={codeImg} alt="Coding" className="rounded-[30%]"/>
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-8">
              <div className="text-green-400 me-3 lg:mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
