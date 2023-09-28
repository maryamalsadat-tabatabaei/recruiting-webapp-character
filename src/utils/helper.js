export function calculateModifier(attribute) {
  return Math.floor((attribute - 10) / 2);
}

export function calculateTotalPoints(attributes) {
  return Object.values(attributes).reduce((total, value) => total + value, 0);
}
