import React from "react";
import SideBar from "./componets/side-bar/SideBar";
import shotVideo from "./assets/videos/video-2.mp4";
import Logo from "./componets/logo/Logo";
import PlayIcon from "./componets/icons/PlayIcon";
import ReactPlayer from "react-player";
import fallBack from "./assets/images/fallback.jpg";
import BottomContent from "./componets/bottom-content/BottomContent";

function Landing() {
  const [playing, setPlaying] = React.useState(false);
  const [isModal, setIsModal] = React.useState(false);
  const [isSideNav, setIsSideNav] = React.useState(false);
  return (
    <div>
      <div className={`landing ${isSideNav ? "active-side-nav" : ""}`}>
        <video poster={fallBack} autoPlay loop muted>
          <source src={shotVideo} type="video/mp4" />
        </video>
        <SideBar />
        <header className="nav">
          <Logo />

          <div className="menu">
            <div className="menuIcon" onClick={() => setIsSideNav(!isSideNav)}>
              <span></span>
              <span></span>
            </div>
          </div>
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

          <div
            className="video-btm"
            onClick={() => {
              setPlaying(true);
              setIsModal(true);
            }}
          >
            <span>
              <PlayIcon />
            </span>
            <span>WATCH FULL VIDEO</span>
          </div>
        </main>
        <div className={`full-video-modal ${isModal ? "active" : ""}`}>
          <div className="close-video-modal" onClick={() => setIsModal(false)}>
            <span className="close-btn">
              <span></span>
              <span></span>
            </span>
          </div>
          <ReactPlayer
            controls
            url={shotVideo}
            width="100%"
            playing={playing}
            loop
          />
        </div>
      </div>
      <BottomContent />
    </div>
  );
}

export default Landing;
