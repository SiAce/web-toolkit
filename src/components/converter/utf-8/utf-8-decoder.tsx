'use client'

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { UTF8Decode } from "@/lib/client-utils";

import { useState } from "react";


export function UTF8Decoder() {
  const [utf8String, setUTF8String] = useState<string | undefined>(undefined)
  const [originalString, setOriginalString] = useState<string | undefined>(undefined)

  return (
    <div className="grid w-full gap-10">
      <div className="grid w-full gap-5">
        <Label htmlFor="utf8-decoder-input-string">UTF-8-Encoded Hex Bytes</Label>
        <Textarea rows={10} placeholder="Type the string to be UTF8-Decoded." id="utf8-decoder-input-string"
          onChange={(e) => setUTF8String(e.target.value)}
          value={utf8String}
        />
        <Button onClick={(e) => setOriginalString(UTF8Decode(utf8String!))}>
          UTF-8 Decode
        </Button>
      </div>
      <div className="grid w-full gap-5">
        <Label htmlFor="utf8-decoder-output-string">UTF-8-Decoded String</Label>
        <Textarea rows={10} placeholder="Your UTF8-Decoded string will be shown here." id="utf8-decoder-output-string"
          value={originalString}
        />
      </div>
    </div>
  )
}