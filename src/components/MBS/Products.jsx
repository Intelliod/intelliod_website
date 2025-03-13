import { CheckCircle2 } from "lucide-react";
import { productsOptions } from "../../constants";

const Products = () => {
  return (
    <div className="mt-0">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
      Solutions
      </h2>
      <div className="flex flex-wrap">
        {productsOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="flex flex-col justify-between h-full p-10 border border-neutral-700 rounded-xl">
            <p className="text-3xl mb-8">{option.title}</p>
              <div>
                <ul className="mt-10">
                  {option.features.map((feature, index) => (
                    <li key={index} className="mt-8 flex items-center">
                      <CheckCircle2 />
                      <span className="ml-2 text-md">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={option.link}
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
              >
                Learn more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
