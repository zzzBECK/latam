import { useLocation } from "react-router-dom";
import { cpfDict } from "../../utils/utils";

export default function Footer() {
  // Use useLocation to access the query string
  const location = useLocation();

  // A helper function to parse query parameters
  const getQueryParams = (search: string) => {
    return new URLSearchParams(search);
  };

  const getGreeting = () => {
    const currentTime = new Date().getHours();
    let greeting = "";

    if (currentTime >= 6 && currentTime < 12) {
      greeting = "Bom dia";
    } else if (currentTime >= 12 && currentTime < 18) {
      greeting = "Boa tarde";
    } else {
      greeting = "Boa noite";
    }

    const queryParams = getQueryParams(location.search);
    const cpf = queryParams.get("cpf"); // Retrieve the cpf query parameter

    if (cpf && Object.prototype.hasOwnProperty.call(cpfDict, cpf)) {
      greeting += " " + cpfDict[cpf];
    } else {
      greeting += " " + cpfDict.default;
    }

    return greeting;
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
