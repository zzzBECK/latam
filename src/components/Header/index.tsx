export default function Footer() {
  const getGreeting = () => {
    const currentTime = new Date().getHours();

    if (currentTime >= 6 && currentTime < 12) {
      return "Bom dia";
    } else if (currentTime >= 12 && currentTime < 18) {
      return "Boa tarde";
    } else {
      return "Boa noite";
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100vw",
        height: "6em",
        backgroundColor: "#4658E0",
        alignItems: "center",
        padding: "0 2em",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.6em",
        }}
      >
        <div
          style={{
            width: "2em",
            height: "2em",
            backgroundImage: `url('latam2.jpg')`,
            backgroundColor: "white",
            backgroundSize: "cover",
            cursor: "pointer",
            borderRadius: "50%",
          }}
        />

        <h4
          style={{
            fontWeight: "400",
            fontSize: "clamp(0.8em, 1.5vw, 2em)",
            color: "white", 
          }}
        >
          {getGreeting()}
        </h4>
      </div>
    </div>
  );
}
