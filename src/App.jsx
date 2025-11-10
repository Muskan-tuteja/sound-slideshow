import React, { useState, useRef, useEffect } from "react";
import Background from "./components/Background";
import LeftMenu from "./components/LeftMenu";
import RightMenu from "./components/RightMenu";
import ScrollSection from "./components/ScrollSection";
import clickSoundFile from "./assets/sounds/click.mp3";
import hoverSoundFile from "./assets/sounds/hover.mp3";
import { h1 } from "framer-motion/client";

const images = [
  "https://images.unsplash.com/photo-1761857352384-aaae23a714a4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764",
  "https://images.unsplash.com/photo-1753847726685-6af24062aa9e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880",
  "https://plus.unsplash.com/premium_photo-1761334228337-438a180ba277?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=715",
  "https://images.unsplash.com/photo-1754481249380-3b4ada5ebc67?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764",
  "https://plus.unsplash.com/premium_photo-1730051149650-8a1ed7b4f81f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=715",
  "https://plus.unsplash.com/premium_photo-1692948505024-20a1288d0b65?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764"
 
];

const artists = [
  "Adele",
  "Drake",
  "Ed Sheeran",
  "Billie Eilish",
  "The Weeknd",
  "Dua Lipa",
  "Bruno Mars",
  "Taylor Swift",
  "Post Malone",
  "Ariana Grande"
];
const categories = [
  "Pop",
  "R&B",
  "Indie",
  "Electronic",
  "Hip-Hop",
  "Rock",
  "Jazz",
  "Soul",
  "Reggae",
  "Alternative"
];

const texts = [
  "Adele – Skyfall",
  "Drake – Hotline Bling",
  "Ed Sheeran – Shape of You",
  "Billie Eilish – Bad Guy",
  "The Weeknd – Blinding Lights",
  "Dua Lipa – Levitating",
  "Bruno Mars – Uptown Funk",
  "Taylor Swift – Blank Space",
  "Post Malone – Circles",
  "Ariana Grande – 7 Rings"
];

const App = () => {
  const [active, setActive] = useState(0);
  const [activeCategory, setActiveCategory] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(false);

  const clickSound = useRef(new Audio(clickSoundFile));
  const hoverSound = useRef(new Audio(hoverSoundFile));

  useEffect(() => {
    const enableSound = () => {
      setSoundEnabled(true);
      window.removeEventListener("click", enableSound);
      window.removeEventListener("keydown", enableSound);
    };

    window.addEventListener("click", enableSound);
    window.addEventListener("keydown", enableSound);

    return () => {
      window.removeEventListener("click", enableSound);
      window.removeEventListener("keydown", enableSound);
    };
  }, []);

  const playClick = () => {
    if (!soundEnabled) return;
    clickSound.current.currentTime = 0;
    clickSound.current.play().catch(() => {});
  };

  const playHover = () => {
    if (!soundEnabled) return;
    hoverSound.current.currentTime = 0;
    hoverSound.current.play().catch(() => {});
  };

  const handleArtistClick = (index) => {
    setActive(index);
    setActiveCategory(index);
    playHover(); // 🔄 Hover sound on click
  };

  // Keyboard sound effect
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!soundEnabled) return;
      if (e.key === "ArrowLeft") {
        playHover(); // 🔄 Hover sound on key press (like click)
        setActive((prev) => (prev > 0 ? prev - 1 : artists.length - 1));
        setActiveCategory((prev) => (prev > 0 ? prev - 1 : categories.length - 1));
      } else if (e.key === "ArrowRight") {
        playHover();
        setActive((prev) => (prev < artists.length - 1 ? prev + 1 : 0));
        setActiveCategory((prev) => (prev < categories.length - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [soundEnabled]);

  return (
  

    <div className="relative w-full h-screen overflow-hidden select-none">
      <Background images={images} activeIndex={active} />
     
        

      <div className="absolute inset-0 flex justify-between items-center px-10">
        <LeftMenu
          items={artists}
          activeIndex={active}
          setActive={handleArtistClick}
          onHover={playClick} // 🔄 Click sound on hover
        />
        <RightMenu
          items={categories}
          activeIndex={activeCategory}
          onHover={playClick} // 🔄 Click sound on hover
          onClick={(index) => {
            setActive(index);
            setActiveCategory(index);
            playHover(); // 🔄 Hover sound on click
          }}
        />
      </div>

      <ScrollSection activeText={texts[active]} />
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
  <h1 className="text-9xl md:text-9xl text-blue-50 font-extrabold text-center">
    Feel the Rhythm of <br /> the Universe
  </h1>
</div>
{/* 
      {!soundEnabled && (
        <div className="absolute bottom-5 w-full text-center text-gray-300 text-sm">
          🔊 Click or press any key to enable sound
        </div>
      )} */}
    </div>
  );
};

export default App;
