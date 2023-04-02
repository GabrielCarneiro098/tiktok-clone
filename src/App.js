import React, { useEffect, useState } from "react";
import "./App.css";
import db from "./config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";
import Video from "./pages/video";

function App() {
  const [video, setVideos] = useState([]);

  async function getVideos() {
    const videosCollection = collection(db, "videos");
    const videosSnapshot = await getDocs(videosCollection);
    const videosList = videosSnapshot.docs.map((doc) => doc.data());
    setVideos(videosList);
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="App">
      <div className="app__videos">
        {video.map((item) => {
          return (
            <Video
              url={item.url}
              userName={item.userName}
              content={item.content}
              song={item.song}
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
            />
          );
        })}

      </div>
    </div>
  );
}

export default App;
