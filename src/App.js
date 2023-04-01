import './App.css';
import Video from './pages/video';
import onepiece from './pages/Download.mp4'
import luffy from './pages/components/footer/Download (3).mp4'
import zoro from './pages/components/footer/Download (1).mp4'
import carnival from './pages/components/footer/Download (4).mp4'

function App() {
  return (
    <div className="App">
      <div className='app__videos'>
        <Video
          url={onepiece}
          userName={"GabrielDev"}
          content={"The World of One Piece"}
          song={"Jenkins Ratledge - Adiemus"}
          likes={258}
          messages={545}
          shares={871} 
        />

        <Video 
          url={luffy}
          userName={"Lucas Carneiro"}
          content={"GEAR!... #luffy #onepiece #manga #edit"}
          song={"Chaos Knight - Dj"}
          likes={675}
          messages={324}
          shares={365} 
        />
        
        <Video 
          url={zoro}
          userName={"Louback Edits"}
          content={"Zoro sola!!"}
          song={"Nissan - Beat Alucinante (Slowed Reverb)"}
          likes={675}
          messages={324}
          shares={365} 
        />

        <Video 
          url={carnival}
          userName={"Louback Edits"}
          content={"That's why we love One Piece!❤"}
          song={"Nissan - Beat Alucinante (Slowed Reverb)"}
          likes={999}
          messages={759}
          shares={623} 
        />
      </div>
    </div>
  );
}

export default App;