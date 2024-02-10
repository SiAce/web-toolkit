'use client'

import { JSONPrettify } from "@/lib/client-utils";
import { Converter } from "../converter";


export function JSONPrettifier() {
  return <Converter name="JSON Prettify" convertFunc={JSONPrettify}></Converter>
}