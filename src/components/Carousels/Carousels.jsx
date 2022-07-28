import React from 'react';
import Slider from 'react-slick';
import classNames from 'classnames';

import Button from '@/components/Button';

import './Carousels.scss';

export const Carousels = ({
  className,
  centerMode = false,
  dots = true,
  arrows = true,
  infinite = true,
  variableWidth,
  slidesToShow = 1,
  slidesToScroll = 1,
  slidesPerRow = 1,
  responsive = [],
  autoplay,
  onDragging,
  children,
  onInit,
  beforeChange,
  afterChange,
}) => {
  const renderPrevArrow = () => {
    return <Button size="small" className="Carousels-arrow prev" />;
  };

  const renderNextArrow = () => {
    return <Button size="small" className="Carousels-arrow next" />;
  };

  const settings = {
    speed: 500,
    dots,
    arrows,
    centerMode,
    infinite,
    autoplay,
    slidesPerRow,
    autoplaySpeed: 4000,
    slidesToShow,
    slidesToScroll,
    responsive,
    variableWidth,
    // nextArrow: renderNextArrow(),
    // prevArrow: renderPrevArrow(),
    beforeChange: (index) => {
      beforeChange?.(index);
      onDragging?.(true);
    },
    afterChange: (index) => {
      afterChange?.(index);
      onDragging?.(false);
    },
  };
  return (
    <div className={classNames('Carousels', className)}>
      <Slider {...settings} ref={(e) => onInit?.(e)}>
        {children}
      </Slider>
    </div>
  );
};

export default Carousels;
