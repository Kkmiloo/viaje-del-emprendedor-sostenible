import React from 'react';
import Slider, { Settings } from 'react-slick';
import { motion } from 'framer-motion';

interface AchievementInterface {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface CarouselProps {
  achievements: AchievementInterface[];
}

const AchievementStep = ({
  icon: Icon,
  title,
  description,
}: AchievementInterface) => (
  <motion.div
    className='flex flex-col items-center bg-white p-4 rounded-lg shadow-md'
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Icon className='w-12 h-12 text-green-500' />
    <h3 className='font-bold text-xl text-gray-800'>{title}</h3>
    <p className='text-gray-600'>{description}</p>
  </motion.div>
);

const AchievementCarousel = ({ achievements }: CarouselProps) => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,

    speed: 500,
    slidesToShow: 1, // Muestra 1 slide a la vez
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 768, // Para pantallas menores a md
        settings: {
          slidesToShow: 1, // Muestra 1 slide a la vez
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Para pantallas mayores a md
        settings: {
          slidesToShow: 2, // Muestra 2 slides a la vez
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {achievements.map((achievement, index) => (
        <AchievementStep key={index} {...achievement} />
      ))}
    </Slider>
  );
};

export default AchievementCarousel;
