export default function Viagens() {
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
        background: "#fff",
        gap: "1em",
        borderRadius: "1em",
        color: "black",
        padding: "1em", 
        border: "1px solid #ccc", 
      }}
    >
      <div>
        Parabéns, você já está cadastrado no programa e terá acesso com exclusividade às taxas aéreas. <br/>
        Após o período de carência você estará apto a comprar suas primeiras passagens. <br/>
        Período de Carência: 20 dias após a data de compra.
      </div>
    </div>
  );
}
