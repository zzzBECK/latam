import Box, { FullWidthBox } from "../../components/Box";
import maleta from "../../assets/maleta.svg";
import mundo from "../../assets/mundo.svg";
import carro from "../../assets/carro.svg";
import tailandia from "../../assets/tailandia.jpg";
import { useEffect, useState } from "react";
import FirebaseService from "../../services/FirebaseService";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

interface FirebaseItem {
  key?: string;
  [key: string]: unknown; // or any specific type according to your data structure
}

const firebaseConfig = {
  apiKey: "AIzaSyAU9WxzsUoyEVRVkLCSlkWZ-CnYOW_JKRY",
  authDomain: "latam-ed251.firebaseapp.com",
  databaseURL: "https://latam-ed251-default-rtdb.firebaseio.com/",
  projectId: "latam-ed251",
  storageBucket: "latam-ed251.appspot.com",
  messagingSenderId: "447221351755",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export default function Home() {
  // Explicitly define the type of the state variable as FirebaseItem[]
  const [items, setItems] = useState<FirebaseItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(firestore, "teste"));
      const items = querySnapshot.docs.map((doc) => ({
        key: doc.id,
        ...doc.data(),
      }));
      setItems(items);
      console.log(items);
    };

    fetchData();
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
        <Box title="Alugue um carro" image={carro} />
      </div>
      <FullWidthBox
        title="Já tem um voo?"
        subtitle="Adicione o voo com os dados da sua reserva"
      />
    </div>
  );
}
