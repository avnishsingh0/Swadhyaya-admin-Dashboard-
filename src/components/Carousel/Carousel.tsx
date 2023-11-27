import React, { useState, useContext, useEffect } from "react";

// Third party
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

// Internal imports
import "./Carousel.css";
import { GlobalContextData } from "../../context";

interface CarouselItem {
  id: number;
  category: string;
  title: string;
  description: string;
  img: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

export const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { state } = useContext(GlobalContextData);
  useEffect(() => {
    const interval = setInterval(() => {
      // Auto-rotate the carousel every 3000ms
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [items.length]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const goToPrevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container">
      <div
        className={state.openSidebar ? "carousel" : "left-side-close-carousel"}
        style={{
          backgroundImage: `url(${items[activeIndex].img})`,
        }}
      >
        <div className="carousel-content">
          <div className="carousel-navigation">
            <div className="dot-navigation">
              {items.map((item, index) => (
                <span
                  key={item.id}
                  className={`dot ${index === activeIndex ? "active" : ""}`}
                  onClick={() => goToSlide(index)}
                ></span>
              ))}
            </div>
            <div className="arrow-navigation">
              <span className="prev" onClick={goToPrevSlide}>
                <AiOutlineLeft className="left-arrow" />
              </span>
              <span className="next" onClick={goToNextSlide}>
                <AiOutlineRight className="right-arrow" />
              </span>
            </div>
          </div>
          <div className="carousel-details">
            <div className="category">{items[activeIndex].category}</div>
            <div className="title">{items[activeIndex].title}</div>
            <div className="description">{items[activeIndex].description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
