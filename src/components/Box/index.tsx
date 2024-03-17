interface BoxProps {
  title: string;
  image: string;
}

export default function Box({ title, image }: BoxProps) {
  return (
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
  );
}
