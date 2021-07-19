function Result({amount, term, total}){
  return (
    <div className="u-full-width resultado">
      <h2>Resumen</h2>
      <p>La cantidad solicitada es: ${ amount }</p>
      <p>A pagar en: {term} meses</p>
      <p>Pago mensual de: ${(total / term).toFixed(2)}</p>
      <p>Total a pagar: ${(total).toFixed(2)}</p>
    </div>
  );
}
export default Result;