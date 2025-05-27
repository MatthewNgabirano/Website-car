import { useState } from "react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";


function App() {
  const heroData = [
    { text1: "Dive into", text2: "what you love" },
    { text1: "With your", text2: "passion" },
    { text1: "Give in to", text2: "Effort" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  return (
    <>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero setPlayStatus={setPlayStatus}
      heroData={heroData[heroCount]}
      heroCount={heroCount}
      setHeroCount={setHeroCount} 
      playStatus={playStatus}
      />
    </>
  );
}

export default App;
