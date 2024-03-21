import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";

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

export default function Footer() {
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchName = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, "teste"));
        querySnapshot.forEach((doc) => {
          setName(doc.data().name);
        });
      } catch (error) {
        console.error("Error fetching name:", error);
      }
    };

    fetchName();
  }, []);

  const getGreeting = () => {
    const currentTime = new Date().getHours();

    if (currentTime >= 6 && currentTime < 12) {
      return "Bom dia";
    } else if (currentTime >= 12 && currentTime < 18) {
      return "Boa tarde";
    } else {
      return `Boa noite, ${name || ""}`; // Incluindo o nome da pessoa, se disponível
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
