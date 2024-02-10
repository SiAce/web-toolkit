'use client'

import { JSONMinify } from "@/lib/client-utils";
import { Converter } from "../converter";


export function JSONMinifier() {
  return <Converter name="JSON Minify" convertFunc={JSONMinify}></Converter>
}