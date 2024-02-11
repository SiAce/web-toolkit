"use client";

import { SHA256Hash } from "@/lib/client-utils";
import { Converter } from "../converter";

export function SHA256HashConverter() {
  return <Converter name="SHA256 Hash" convertFunc={SHA256Hash}></Converter>;
}
