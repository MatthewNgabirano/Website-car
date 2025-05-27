import React, { useState, useEffect } from "react";
import "./Hero.css";
import arrow_btn from "../../Assets/arrow_btn.png";
import pause_icon from "../../Assets/pause_icon.png";
import play_icon from "../../Assets/play_icon.png";

interface HeroProps {
  heroData: { text1: string; text2: string };
  setHeroCount: (count: number) => void;
  heroCount: number;
  setPlayStatus: (status: boolean) => void;
  playStatus: boolean;
}

const Hero: React.FC<HeroProps> = ({
  heroData,
  setHeroCount,
  heroCount,
  setPlayStatus,
  playStatus,
}) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
    window.addEventListener("resize", handleResize);
    console.log("EVENT LISTENER ADDED");
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.title = `Size:${width}x${height}`;
  }, [width, height]);

  // Removed unused isEmployed state and toggleEmployedStatus function
  // Function to go to the next hero item
  const handleNext = () => {
    setHeroCount((heroCount + 1) % 3); // cycles through 0 → 1 → 2 → 0
  };

  return (
    <div className="hero">
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>

      <div className="hero-expoler">
        <p>Explore more features</p>
        <img
          src={arrow_btn}
          alt="Next"
          onClick={handleNext}
          className="hero-arrow"
        />
      </div>

      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li
            onClick={() => setHeroCount(0)}
            className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}
          />
          <li
            onClick={() => setHeroCount(1)}
            className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}
          />
          <li
            onClick={() => setHeroCount(2)}
            className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}
          />
        </ul>

        <div className="hero-play-pause">
          <img
            src={playStatus ? pause_icon : play_icon}
            alt="Play/Pause"
            className="hero-play-pause-icon"
            onClick={() => setPlayStatus(!playStatus)}
          />
          <p>Feel The Drive</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
