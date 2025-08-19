import React, { useState, useRef } from 'react';

function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef();

  const toggleMusic = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="fixed bottom-6 right-6">
      <button onClick={toggleMusic} className="bg-white border border-gray-300 px-4 py-2 rounded-full shadow">
        {playing ? '⏸ Pause' : '▶️ Play'} Love Song
      </button>
      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default MusicPlayer;
