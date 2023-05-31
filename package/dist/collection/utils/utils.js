// Generate a universally unique identifier
export function generateUUID() {
  return Date.now().toString(36) + Math.floor(10 ** 12 + Math.random() * 9 * 10 ** 12).toString(36);
}
