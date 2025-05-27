import "./Background.css";

import { useEffect, useRef } from "react";
import video from "../../Assets/video.mp4";
import image1 from "../../Assets/image1.png";
import image2 from "../../Assets/image2.png";
import image3 from "../../Assets/image3.png";

type BackgroundProps = {
  playStatus: boolean;
  heroCount: number;
};

const Background = ({ playStatus, heroCount }: BackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);


  useEffect(() => {
    if (videoRef.current) {
      if (playStatus) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [playStatus]);

  const getOverlayImage = () => {
    if (heroCount === 0 ) return image1;
    if (heroCount === 1) return image2;
    if (heroCount === 2 ) return image3;
    return "";
  };
  // Removed invalid standalone JSX expression block
  
  return (
    <>
      <section className="fixed top-0 left-0 w-screen h-screen -z-10 overflow-hidden">
        <div className="Background-container animate-fade-in w-full h-full object-cover absolute">
          <video ref={videoRef} className="background" loop muted src={video} />
          {!playStatus && (
            <img
              src={getOverlayImage()}
              alt="Paused background"
              className="background paused-overlay animate-fade-in w-full h-full object-cover absolute"
            />
          )}
        
        </div>
      </section>

    </>
  );
};

export default Background;
