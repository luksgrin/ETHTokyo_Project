// AudioPlayer.tsx
import React, { useState, useEffect } from "react";
import { Howl } from "howler";

interface AudioPlayerProps {
  src: string;
}

const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time - minutes * 60);

  return `${minutes}:${String(seconds).padStart(2, "0")}`;
};

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(
    new Howl({
      src: [src],
      onplay: () => setIsPlaying(true),
      onpause: () => setIsPlaying(false),
      onend: () => setIsPlaying(false),
    })
  );

  const [seek, setSeek] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        const seek = audio.seek() as number;
        setSeek(seek);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [audio, isPlaying]);

  useEffect(() => {
    setDuration(audio.duration());
  }, [audio]);

  useEffect(() => {
    return () => {
      audio.unload();
    };
  }, [audio]);

  const play = () => {
    if (!isPlaying) {
      audio.play();
    }
  };

  const pause = () => {
    if (isPlaying) {
      audio.pause();
    }
  };

  const onSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSeek = parseFloat(e.target.value);
    setSeek(newSeek);
    audio.seek(newSeek);
  };

  const onVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audio.volume(newVolume);
  };

  return (
    <div>
      <button onClick={play}>Play</button>
      <button onClick={pause}>Pause</button>
      <br />
      <input
        type="range"
        min="0"
        max={duration}
        value={seek}
        step="any"
        onChange={onSeekChange}
      />
      <div>
        {formatTime(seek)} / {formatTime(duration)}
      </div>
      <br />
      <input
        type="range"
        min="0"
        max="1"
        value={volume}
        step="0.01"
        onChange={onVolumeChange}
      />
      <div>Volume: {Math.round(volume * 100)}%</div>
    </div>
  );
};

export default AudioPlayer;
