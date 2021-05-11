function hexToRgb(hex: string): [number, number, number] {
  const arrBuff = new ArrayBuffer(4);
  const vw = new DataView(arrBuff);
  vw.setUint32(0, parseInt(hex, 16), false);
  const arrByte = new Uint8Array(arrBuff);

  return [arrByte[1], arrByte[3], arrByte[3]];
}

export function hexToRgbA(hex: string, alpha: string): string {
  return `rgba(${hexToRgb(hex)}, ${alpha})`;
}
