import { TiHome } from "react-icons/ti";
import { IoNotificationsOutline } from "react-icons/io5";
import mundo from "../../assets/mundo.svg";
import maleta from "../../assets/maleta.svg";

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
          color: "black",
          alignItems: "center",
          flexDirection: "column",
          cursor: "pointer",
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

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          color: "black",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <img
          style={{
            display: "flex",
            maxWidth: "2em",
          }}
          src={mundo}
        />
        <p
          style={{
            opacity: 0.5,
            fontSize: "0.8em",
          }}
        >
          Comprar
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          color: "black",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <img
          style={{
            display: "flex",
            maxWidth: "2em",
          }}
          src={maleta}
        />
        <p
          style={{
            opacity: 0.5,
            fontSize: "0.8em",
          }}
        >
          Minhas viagens
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          color: "black",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <IoNotificationsOutline size={"2em"} color="#100050" />
        <p
          style={{
            opacity: 0.5,
            fontSize: "0.8em",
          }}
        >
          Notificação
        </p>
      </div>
    </div>
  );
}
