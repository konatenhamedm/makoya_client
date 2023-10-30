import React from "react";

interface DataSlideProps {
  image: string;
}

const DataSlide: React.FC<DataSlideProps> = ({ image }) => {
  return (
    <div className="hidden  duration-1800 ease-in-out" data-carousel-item>
      <img
        src={image}
        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        alt="..."
      />
    </div>
  );
};

export default DataSlide;
