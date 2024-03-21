import Box, { FullWidthBox } from "../../components/Box";
import maleta from "../../assets/maleta.svg";
import mundo from "../../assets/mundo.svg";
import react from "../../assets/react.svg";
import tailandia from "../../assets/tailandia.jpg";
import { useEffect, useState } from "react";
import FirebaseService from "../../services/FirebaseService";

interface FirebaseItem {
  key?: string;
  [key: string]: unknown; // or any specific type according to your data structure
}

export default function Home() {
  // Explicitly define the type of the state variable as FirebaseItem[]
  const [items, setItems] = useState<FirebaseItem[]>([]);

  useEffect(() => {
    // Adjust 'nodePath' to your specific Firebase data path
    FirebaseService.getDataList("/", (data) => {
      console.log(data); // To see the data fetched from Firebase
      setItems(data);
    });
  }, []);

  console.log(items);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        minHeight: "90vh",
        alignItems: "center",
        background: "#fff",
        gap: "2em",
        borderRadius: "1em",
        padding: "1em",
      }}
    >
      <img
        src={tailandia}
        alt="Tailandia"
        style={{
          width: "100%",
          maxHeight: "200px",
          objectFit: "cover",
          borderRadius: "0.5em",
          marginTop: "0",
          marginBottom: "1em",
        }}
      />
      <p
        style={{
          textAlign: "center",
          color: "#000",
          fontSize: "clamp(0.8em, 1vw, 1em)",
        }}
      >
        Encontre tudo em um único lugar Acumules Pontos LATAM Pass e Pontos
        Qualificáveis
      </p>

      <div style={{ display: "flex", gap: "1em" }}>
        <Box title="Compre um pacote" image={maleta} />
        <Box title="Reserve um hotel" image={mundo} />
        <Box title="Alugue um carro" image={react} />
      </div>
      <FullWidthBox
        title="Já tem um voo?"
        subtitle="Adicione o voo com os dados da sua reserva"
      />
    </div>
  );
}
