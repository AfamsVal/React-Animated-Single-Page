import SideBar from "./componets/side-bar/SideBar";
import shotVideo from "./assets/videos/video-2.mp4";
import Logo from "./componets/logo/Logo";
import PlayIcon from "./componets/icons/PlayIcon";

function Landing() {
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
          <PlayIcon />
          <span>VER VÍDEO COMPLETO</span>
        </div>
      </main>
    </div>
  );
}

export default Landing;
