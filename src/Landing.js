import React from "react";
import SideBar from "./componets/side-bar/SideBar";
import shotVideo from "./assets/videos/video-2.mp4";
import Logo from "./componets/logo/Logo";
import PlayIcon from "./componets/icons/PlayIcon";
import ReactPlayer from "react-player";

function Landing() {
  const [playing, setPlaying] = React.useState(false);
  return (
    <div className="landing">
      <video autoPlay loop muted>
        <source src={shotVideo} type="video/mp4" />
      </video>
      <SideBar />
      <header className="Landing-header">
        <Logo />
      </header>
      <main>
        <h1 class="text-xl">
          Strength is defined by <br />
          what composes it.
        </h1>
        <div class="text-lg">
          And each building is as reliable as its <br /> structure and
          foundations.
        </div>

        <div className="video-btm">
          <span>
            <PlayIcon setPlaying={() => setPlaying(!playing)} />
          </span>
          <span>WATCH FULL VIDEO</span>
        </div>
      </main>
      <div className={`full-video-modal ${playing ? "active" : ""}`}>
        <div className="close-video-modal" onClick={() => setPlaying(false)}>
          <span className="close-btn">
            <span></span>
            <span></span>
          </span>
        </div>
        <ReactPlayer controls url={shotVideo} width="100%" playing={playing} />
      </div>
    </div>
  );
}

export default Landing;
