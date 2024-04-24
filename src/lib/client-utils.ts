import { createHash } from "crypto";

export function stringToBase64(originalString: string) {
  const uint8Array = new TextEncoder().encode(originalString);
  const binString = String.fromCodePoint(...Array.from(uint8Array));
  return btoa(binString);
}

export function Base64ToString(base64String: string) {
  const binString = atob(base64String);
  const uint8Array = Uint8Array.from(binString, (m) => m.codePointAt(0)!);
  return new TextDecoder().decode(uint8Array);
}

export function UTF8Encode(s: string) {
  const uint8Array = new TextEncoder().encode(s);
  var str = "",
    byt;

  for (var i = 0, len = uint8Array.length; i < len; ++i) {
    byt = uint8Array[i];
    str += ((byt & 0xf0) >>> 4).toString(16);
    str += (byt & 0x0f).toString(16);
  }

  return str;
}

export function UTF8Decode(s: string) {
  var size = s.length / 2,
    buf = new Uint8Array(size),
    character = "";

  for (var i = 0, len = s.length; i < len; ++i) {
    character += s.charAt(i);

    if (i > 0 && i % 2 === 1) {
      buf[i >>> 1] = parseInt(character, 16);
      character = "";
    }
  }

  return new TextDecoder().decode(buf);
}

export function JSONMinify(s: string) {
  return JSON.stringify(JSON.parse(s));
}

export function JSONPrettify(s: string) {
  return JSON.stringify(JSON.parse(s), undefined, 2);
}

export function JSONParse(s: string) {
  return String(JSON.parse(s));
}

export function MD5Hash(s: string): string {
  return createHash("md5").update(s).digest('hex');
}

export function SHA256Hash(s: string): string {
  return createHash("sha256").update(s).digest('hex');
}

export function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      resolve(fileReader.result as string)
    };
    fileReader.onerror = reject;
    fileReader.readAsDataURL(file);
  })
}

export function fileToHex(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      const numberArray = Array.from(new Uint8Array(fileReader.result as ArrayBuffer))
      const hexString = numberArray.map(num => num.toString(16).toUpperCase().padStart(2, "0")).join("")
      resolve(hexString)
    };
    fileReader.onerror = reject;
    fileReader.readAsArrayBuffer(file);
  })
}
