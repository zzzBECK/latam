import { TiHome } from "react-icons/ti";
import { IoNotificationsOutline } from "react-icons/io5";
import mundo from "../../assets/mundo.svg";
import react3 from "../../assets/react3.svg";

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
        }}
      >
        <div style={{ marginRight: "2em" }}>
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
        <div>
          <IoNotificationsOutline size={"2em"} color="#100050" />
          <p
            style={{
              opacity: 0.5,
              fontSize: "0.8em",
            }}
          >
            Notificação
          </p>
          <img src={mundo} />
          <img src={react3} />
        </div>
      </div>
    </div>
  );
}
