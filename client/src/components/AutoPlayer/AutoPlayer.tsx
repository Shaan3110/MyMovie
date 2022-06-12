import React from "react";
import "./Autoplayer.css";

function AutoPlayer() {
  return (
    <div className="autoplayer">
      <iframe
        width="1300"
        height="1000"
        src="https://www.youtube.com/embed/yQEondeGvKo?autoplay=1"
        title="YouTube video player"
        style={{ width: "97%", height: "120%" }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
      <div className="autoplayer-details">
        <h1>Stranger Things</h1>
        <p>
          After the mysterious and sudden vanishing of a young spanoy, the
          people of a small town begin to uncover secrets of a government lab ,
          portals to another world and sinister monsters. The boy's mother
          (Joyce) desperately tries to find him, convinced he is in grave
          danger, while the police chief searches for answers.
        </p>
      </div>
    </div>
  );
}

export default AutoPlayer;
