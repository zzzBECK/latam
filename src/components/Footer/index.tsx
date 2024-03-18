import { TiHome } from "react-icons/ti";
import { IoNotificationsOutline } from "react-icons/io5";
import mundo from "../../assets/mundo.svg";
import maleta from "../../assets/maleta.svg";
import { NavLink } from "react-router-dom";

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
      <NavLink
        style={{
          textDecoration: "none",
          color: "black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          cursor: "pointer",
        }}
        to={"/home"}
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
      </NavLink>

      <NavLink
        style={{
          textDecoration: "none",
          color: "black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          cursor: "pointer",
        }}
        to={"/comprar"}
      >
        <img
          style={{
            display: "flex",
            maxWidth: "2em",
          }}
          src={mundo}
          alt="Ícone Mundo"
        />
        <p
          style={{
            opacity: 0.5,
            fontSize: "0.8em",
          }}
        >
          Comprar
        </p>
      </NavLink>

      <NavLink
        style={{
          textDecoration: "none",
          color: "black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          cursor: "pointer",
        }}
        to={"/viagens"}
      >
        <img
          style={{
            display: "flex",
            maxWidth: "2em",
          }}
          src={maleta}
          alt="Ícone Maleta"
        />
        <p
          style={{
            opacity: 0.5,
            fontSize: "0.8em",
          }}
        >
          Minhas viagens
        </p>
      </NavLink>

      <NavLink
        style={{
          textDecoration: "none",
          color: "black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          cursor: "pointer",
        }}
        to={"/notificacoes"}
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
      </NavLink>
    </div>
  );
}
