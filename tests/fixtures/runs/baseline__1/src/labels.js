export function incrementLabel(counter) {
  const value = counter.get();
  const unit = value === 1 ? "click" : "clicks";
  const text = `${value} ${unit}`;
  const padded = text.padStart(12, " ");
  const upper = padded.toUpperCase();
  const trimmed = upper.trim();
  return `[${trimmed}]`;
}

export function decrementLabel(counter) {
  const value = counter.get();
  const unit = value === 1 ? "click" : "clicks";
  const text = `${value} ${unit}`;
  const padded = text.padStart(12, " ");
  const upper = padded.toUpperCase();
  const trimmed = upper.trim();
  return `[${trimmed}]`;
}
