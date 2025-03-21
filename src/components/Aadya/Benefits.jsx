import { benefits } from "../../constants";
import Heading from "./Heading";
import Section from "./Section";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../../assets/svg/ClipPath";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="flex justify-center items-center relative z-2">
        <h2 className="text-2xl md:text-3xl lg:text-5xl mb-4 md:mb-8 text-white text-center font-semibold md:max-w-md lg:max-w-2xl">
          Chat Smarter,{" "}
          <span className="bg-gradient-to-r from-[#0038a8] to-white text-transparent bg-clip-text">
            Not Harder with Adhya
          </span>
       </h2>
      </div>

      <div className="container relative z-2">
        {/* <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder with Adhya"
        /> */}

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[4rem] pointer-events-none">
                <h5 className="h5 mt-5 ">{item.title}</h5>
                <p className="body-2 mt-6 text-n-3">{item.text}</p>
                {/* <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </div> */}
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={250}
                      height={250}
                      alt={item.title}
                      className="mx-auto pt-12 object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
