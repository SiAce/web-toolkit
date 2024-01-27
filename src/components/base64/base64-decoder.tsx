'use client'

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { Base64ToString } from "@/lib/client-utils";

import { useState } from "react";


export function Base64Decoder() {
  const [base64String, setBase64String] = useState<string | undefined>(undefined)
  const [originalString, setOriginalString] = useState<string | undefined>(undefined)

  return (
    <div className="grid w-full gap-10">
      <div className="grid w-full gap-5">
        <Label htmlFor="base64-decoder-input-string">Base64-Encoded string</Label>
        <Textarea rows={10} placeholder="Type the string to be Base64-Decoded." id="base64-decoder-input-string"
          onChange={(e) => setBase64String(e.target.value)}
          value={base64String}
        />
        <Button onClick={(e) => setOriginalString(Base64ToString(base64String!))}>
          Base64 Decode
        </Button>
      </div>
      <div className="grid w-full gap-5">
        <Label htmlFor="base64-decoder-output-string">Base64-Decoded String</Label>
        <Textarea rows={10} placeholder="Your Base64-Decoded string will be shown here." id="base64-decoder-output-string"
          value={originalString}
        />
      </div>
    </div>
  )
}