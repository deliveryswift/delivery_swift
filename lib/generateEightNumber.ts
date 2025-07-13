export function generateSecureEightDigitString(): string {
  const array = new Uint8Array(8);
  crypto.getRandomValues(array);
  return Array.from(array, byte => (byte % 10).toString()).join('');
}

console.log(generateSecureEightDigitString()); 