import { motion } from "framer-motion";
import Logo from "./components/Logo";
import TimerCircle from "./components/TimerCircle";
import MotivationQuote from "./components/MotivationQuote";
import SessionStats from "./components/SessionStats";
import AudioPlayer from "./components/AudioPlayer";
import AudioTranscribe from "./components/AudioTranscribe";

function App() {
  return (
    <div className="container">
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Logo />
        <TimerCircle />
        <MotivationQuote />
        <SessionStats />
        <AudioPlayer />
        <AudioTranscribe />
      </motion.div>
    </div>
  );
}

export default App;
