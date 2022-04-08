import React from 'react';
import Thumbnail from '../Image-card/Thumbnail';
import VideoCard from '../Image-card/Thumbnail';

const Section = ({ title, data }) => {
  console.log('data', data);
  return (
    <div className=" h-[45vh] mt-12 ">
      <h1 className="text-header text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 font-bold">
        {title}
      </h1>
      <div className="flex items-center ">
        {data.map((item) => (
          <Thumbnail key={item.id} imageUrl={item.thumbnail.url} slug={item.slug} />
        ))}
      </div>
    </div>
  );
};

export default Section;
