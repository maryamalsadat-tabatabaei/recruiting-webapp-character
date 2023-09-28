export function calculateModifier(attribute) {
  return Math.floor((attribute - 10) / 2);
}

export function calculateTotalPoints(attributes) {
  return Object.values(attributes).reduce((total, value) => total + value, 0);
}

export function isMeetClassRequirements(attributes, classAttributes) {
  return Object.entries(classAttributes).every(
    ([attribute, value]) => attributes[attribute] >= value
  );
}

export function calculateTotalAvailablePoints(attributes) {
  const intelligenceModifierValue = Math.floor(
    (attributes.Intelligence - 10) / 2
  );
  return 10 + 4 * intelligenceModifierValue;
}
