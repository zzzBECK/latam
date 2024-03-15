import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

export default function Footer() {
  const [count, setCount] = useState(0);

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
            display: "flex",
            width: "2em",
            height: "2em",
            backgroundImage: "latamicon.jpeg",
            backgroundColor: "red",
          }}
          onClick={() => setCount(count + 1)}
        />

        <h4
          style={{
            fontWeight: "400",
            fontSize: "clamp(0.8em, 1.5vw, 2em)",
          }}
        >
          {count}
        </h4>
      </div>

      <IoMdMenu size={"2em"} />
    </div>
  );
}
