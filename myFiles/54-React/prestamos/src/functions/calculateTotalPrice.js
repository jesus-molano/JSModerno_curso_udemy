export function calculateTotalPrice(amount, term) {
  // Cantidades
  // 0 - 1000 = 25%
  // 1001 - 5000 = 20%
  // 5001 - 10000 = 15%
  // +10000 = 10%
  
  let totalAmount;
  if (amount <= 1000) {
    totalAmount = amount * 0.25;
  } else if(amount > 1000 && amount < 5000 ){
    totalAmount = amount * 0.20;
  } else if (amount > 5000 && amount < 10000) {
    totalAmount = amount * 0.15;
  } else {
    totalAmount = amount * 0.10
  }

  // Calcular el plazo
  // 3 = 5%
  // 6 = 10%
  // 12 = 15%
  // 24 = 20%

  let totalTerm = 0;
  switch (term) {
    case 3:
      totalTerm = amount * 0.05;
      break;
    case 6:
      totalTerm = amount * 0.10;
      break;
    case 12:
      totalTerm = amount * 0.15;
      break;
    case 24:
      totalTerm = amount * 0.20;
      break;
    default:
      break;
  }

  return totalTerm + totalAmount + amount
}