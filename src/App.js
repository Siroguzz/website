
import './App.css';
import video1 from "./asset/video.mp4"
import logo from "./asset/logo.png"
function App() {
  return (
    <div className="welcome">
      {/* <video src={video1} width="600" height="300" controls="none" autoplay="true" /> */}
      <img src={logo} width="700" height="700" />
      <h1 className="title-text">Coming Soon!</h1>
    </div>
  );
}

export default App;
