// Números Mágicos
const INTERVAL_THIRTY_MINUTES = 60 * 30 * 1000;

function lookForUpdades() {
  const price = 100;
  const discountPercent = 15;
  calculateDiscount(price, discountPercent);
}

setInterval(lookForUpdades, INTERVAL_THIRTY_MINUTES);

function calculateDiscount(originalPrice, discountPercent) {
  if (originalPrice <= 0 || discountPercent < 0 || discountPercent > 100) {
    throw new Error("Parâmetros inválidos para cálculo de desconto.");
  }

  const discountValue = (originalPrice * discountPercent) / 100;
  const finalPrice = originalPrice - discountValue;

  return {
    originalPrice,
    discountPercent,
    discountValue,
    finalPrice,
  };
}

const priceInfo = calculateDiscount(100, 20);
console.log(priceInfo);
