import React, { useState, useEffect } from 'react';
import sound from './Audio/thunderSound.mp3';

function ThunderSound() {
  const [playing, setPlaying] = useState(false);

  const playSound = () => {
    const audio = new Audio(sound);
    audio.play();
    setPlaying(true);
  };

  useEffect(() => {
    playSound();
  }, []);

  return (
    <div>
      {playing && <audio src={sound} autoPlay />}
    </div>
  );
}

export default ThunderSound;