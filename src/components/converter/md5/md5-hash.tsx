"use client";

import { MD5Hash } from "@/lib/client-utils";
import { Converter } from "../converter";

export function MD5HashConverter() {
  return <Converter name="MD5 Hash" convertFunc={MD5Hash}></Converter>;
}
