import { motion } from "framer-motion";

function ControlsPanel() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        background: "#CBA0E3",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "2rem",
        color: "#333333"
      }}
    >
      25:00
    </motion.div>
  );
}

export default ControlsPanel;
