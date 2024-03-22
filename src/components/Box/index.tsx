import { Link } from 'react-router-dom';

interface BoxProps {
  title: string;
  image: string;
}

export default function Box({ title, image }: BoxProps) {
  return (
    <Link to="./comprar" style={{ textDecoration: 'none', color: 'inherit' }}>
      <div
        style={{
          display: "flex",
          width: "6em",
          height: "6em",
          borderRadius: "0.5em",
          justifyContent: "center",
          alignItems: "flex-start",
          boxShadow: "0 0 0.5em rgba(0, 0, 0, 0.2)",
          color: "black",
          flexDirection: "column",
          padding: "0 1em",
          gap: "0.5em",
          cursor: "pointer",
        }}
      >
        <img
          src={image}
          alt="maleta"
          style={{ maxWidth: "1.4em", opacity: 0.5 }}
        />
        <p
          style={{
            fontSize: "clamp(0.8em, 0.8vw, 1em)",
            opacity: 0.5,
          }}
        >
          {title}
        </p>
      </div>
    </Link>
  );
}

export function FullWidthBox({ title, subtitle }: { title: string, subtitle: string }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "auto",
        borderRadius: "0.5em",
        justifyContent: "center",
        alignItems: "flex-start", 
        backgroundColor: "#fff", 
        color: "#000", 
        padding: "1em",
        boxShadow: "0 0 0.5em rgba(0, 0, 0, 0.2)",
      }}
    >
      <h3
        style={{
          fontSize: "clamp(1em, 2vw, 1.5em)",
          marginBottom: "0.5em",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: "clamp(0.8em, 1vw, 1em)",
          opacity: 0.8,
          marginBottom: "1em",
        }}
      >
        {subtitle}
      </p>
      <Link to="/comprar">
      <button
        style={{
          width: "370%",
          backgroundColor: "white", 
          color: "#4658E0", 
          border: "1px solid #4658E0",
          padding: "0.5em 0",
          borderRadius: "0.5em",
          cursor: "pointer",
        }}
      >
        Adicionar voo
      </button>
      </Link>
    </div>
  );
}