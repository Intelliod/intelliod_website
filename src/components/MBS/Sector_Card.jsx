import React from 'react';

function Sector_Card({ title, subtitle, description, imageSrc }) {
  return (
    <div className="max-w-sm sm:max-w-md mx-auto rounded-lg overflow-hidden cursor-pointer bg-[#1a1a1a] p-3 sm:p-5">
      
      {/* Title with Gradient Bar */}
      <div className="p-2 flex items-center gap-2">
        <p
          className="w-[5px] sm:w-[7px] h-[16px] sm:h-[20px]"
          style={{
            background:
              'transparent linear-gradient(197deg, #FFBA53 0%, #D86A26 51%, #980866 100%) 0% 0% no-repeat padding-box',
          }}
        ></p>
        <h2 className="text-lg sm:text-2xl font-semibold text-white">
          {title}
        </h2>
      </div>

      {/* Image */}
      <div className="w-full h-40 sm:h-48 overflow-hidden rounded-xl">
        <img
          src={imageSrc}
          alt="Card Image"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* Subtitle & Description */}
      <div className="py-4 sm:py-6">
        {subtitle && (
          <h3 className="text-base sm:text-xl font-semibold border-b-2 border-transparent hover:border-[#FFBA53] transition duration-300 ease-in-out">
            {subtitle}
          </h3>
        )}
        <p className="mt-2 sm:mt-4 text-neutral-400 text-sm sm:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Sector_Card;
