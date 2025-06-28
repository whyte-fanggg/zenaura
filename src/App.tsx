import { colors } from "./theme";
import Logo from "./components/Logo";
import TimerCircle from "./components/TimerCircle";
import ControlsPanel from "./components/ControlsPanel";
import MotivationQuote from "./components/MotivationQuote";
import SessionStats from "./components/SessionStats";
import AudioPlayer from "./components/AudioPlayer";

function App() {
  return (
    <div style={{
      backgroundColor: colors.background,
      color: colors.textPrimary,
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem"
    }}>
      <Logo />
      <TimerCircle />
      <ControlsPanel />
      <MotivationQuote />
      <SessionStats />
      <AudioPlayer />
    </div>
  );
}

export default App;
