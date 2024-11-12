import React from "react";
import Playlist from "../components/Playlist";


const CurrentPlaylist: React.FC = () => {

  return (
    <div className="container text-center pt-5 vh-100">
      <h3>Current playlist based on your mood:</h3>
      <div>
        <Playlist />
      </div>
    </div>
  )
}

export default CurrentPlaylist