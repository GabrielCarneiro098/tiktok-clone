import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

function VideoFooter({userName, content, song}) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@{userName}</h3>
        <p>{content}</p>
        <div className="videoFooter__music">
          <MusicNoteIcon className="videoFooter__icon" />
          <div className="videoFooterMusic__text">
            <p>{song}</p>
          </div>
        </div>
      </div>
      <img
        className="videoFooter__record"
        alt="Imagem de um vinil girando"
        src="https://cdn.pixabay.com/photo/2019/03/09/02/12/vinyl-record-4043560_960_720.png"
      />
    </div>
  );
}

export default VideoFooter;
