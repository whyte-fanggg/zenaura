const Logo = () => {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.5em"
    }}>
      <span style={{ fontSize: "1.5em" }}>🕊️</span> {/* Dove emoji as origami style placeholder */}
      <h2 style={{
        color: "#CBA0E3",
        fontWeight: "bold",
        fontSize: "1.8em",
        margin: 0,
        fontFamily: "'Libre Baskerville', serif"
      }}>
        Zenaura
      </h2>
    </div>
  );
};

export default Logo;
