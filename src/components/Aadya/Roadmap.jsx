import Section from "./Section";
import { roadmap } from "../../constants";
import { grid, } from "../../assets";
import { Gradient } from "./design/Roadmap";
import adminPage2 from "../../assets/admin_page2.png";
import userPage2 from "../../assets/user_page2.png";
import adminPage1 from "../../assets/admin_page1.png";
import adminPage3 from "../../assets/admin_page3.png";

const Roadmap = () => (
  <Section className="overflow-hidden" id="roadmap">
        <div className="text-center">
          <h2 className="h2 font-semibold mb-4 md:mb-8 text-white">
          Explore{" "}
          <span className=" bg-gradient-to-r from-[#0038a8] to-white text-transparent bg-clip-text">
          Our Features
          </span>
          </h2>
</div>
    <div className="container md:pb-10">
      

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item) => {
          const status = item.status === "done" ? "Done" : "In progress";

          return (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              key={item.id}
            >
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 max-w-full">
                  <img
                    className="w-full"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                    <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">

                    </div>
                  </div>
                  <div className="mb-10 -my-10 -mx-15">
                    {item.id === "0" && (
                      <img src={userPage2} alt="Neural Networks" className="object-cover" />
                    )}
                    {item.id === "1" && (
                      <img src={adminPage2} alt="IntelliSense" />
                    )}
                    {item.title === "Security" && (
                      <img src={adminPage1} alt="Security" />
                    )}
                    {item.title === "Sources" && (
                      <img src={adminPage3} alt="Sources" />
                    )}
                  </div>
                  <h4 className="h4 mb-4">{item.title}</h4>
                  <p className="body-2 text-n-4">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}

        <Gradient />
      </div>
    </div>
  </Section>
);

export default Roadmap;
