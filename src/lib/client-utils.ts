export function stringToBase64(originalString: string) {
  const uint8Array = new TextEncoder().encode(originalString);
  const binString = String.fromCodePoint(...Array.from(uint8Array));
  return btoa(binString);
}

export function Base64ToString(base64String: string) {
  const binString = atob(base64String);
  const uint8Array = Uint8Array.from(binString, (m) => m.codePointAt(0)!);
  return new TextDecoder().decode(uint8Array)
}