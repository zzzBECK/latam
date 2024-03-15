import { TiHome } from "react-icons/ti";

export default function Footer() {
  return (
    <div
      style={{
        display: "flex",
        position: "fixed",
        bottom: "0",
        justifyContent: "space-between",
        width: "100vw",
        height: "6em",
        backgroundColor: "#fff",
        alignItems: "center",
        padding: "0 2em",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          color: "black",
          alignItems: "center",
        }}
      >
        <TiHome size={"2em"} color="#100050" />
        <p
          style={{
            opacity: 0.5,
            fontSize: "0.8em",
          }}
        >
          Home
        </p>
      </div>
    </div>
  );
}
