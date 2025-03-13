import React from 'react';

function Sector_Card({ title, subtitle, description, imageSrc }) {
  return (
    <div className="max-w-sm mx-auto rounded-lg  overflow-hidden cursor-pointer">
      <div className="p-4 flex items-center gap-2">
      <p
        className='w-[7px] h-[20px]'
        style={{
          background: 'transparent linear-gradient(197deg, #FFBA53 0%, #D86A26 51%, #980866 100%) 0% 0% no-repeat padding-box'
        }}
      ></p>
      <h2
        className="text-2xl font-semibold text-white "
      >
        {title}
      </h2>

      </div>
      <div className="w-full h-48 overflow-hidden">
        
        <img 
          src={imageSrc} 
          alt="Card Image"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="py-6">
        {subtitle && <h3 className="text-xl font-semibold border-b-2 border-transparent hover:border-[#FFBA53] transition duration-300 ease-in-out">{subtitle}</h3>}
        <p className="mt-4 text-neutral-500 text-base">{description}</p>
      </div>
    </div>
  );
}

export default Sector_Card;
