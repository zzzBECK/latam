import Box from "../../components/Box";
import maleta from "../../assets/maleta.svg";
import mundo from "../../assets/mundo.svg";
import react from "../../assets/react.svg";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
        background: "#fff",
        gap: "1em",
        borderRadius: "1em",
      }}
    >
      <Box title="Compre um pacote" image={maleta} />
      <Box title="Reserve um hotel" image={mundo} />
      <Box title="Alugue um carro" image={react} />
    </div>
  );
}
