export default function Comprar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        background: "#fff",
      }}
    >
      <div
        style={{
          width: "80%",
          borderRadius: "0.5em",
          background: "#fff",
          color: "#000",
          padding: "1em",
          boxShadow: "0 0 0.5em rgba(0, 0, 0, 0.2)",
          fontWeight: "bold", 
        }}
      >
        Você não tem nenhuma notificação!
      </div>
    </div>
  );
}
