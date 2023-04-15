// App.tsx
import React from "react";
import AudioPlayer from "./howler";

const App: React.FC = () => {
  return (
    <div>
      <h1>Audio Player</h1>
      <div className="audio-player">
        <AudioPlayer src="https://example.com/path/to/your/audio/file.mp3" />
      </div>
    </div>
  );
};

export default App;
