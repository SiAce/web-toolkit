'use client'

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { UTF8Encode } from "@/lib/client-utils";

import { useState } from "react";


export function UTF8Encoder() {
  const [originalString, setOriginalString] = useState<string | undefined>(undefined)
  const [utf8String, setUTF8String] = useState<string | undefined>(undefined)

  return (
    <div className="grid w-full gap-10">
      <div className="grid w-full gap-5">
        <Label htmlFor="utf8-encoder-input-string">Original String</Label>
        <Textarea rows={10} placeholder="Type the string to be UTF8-Encoded." id="utf8-encoder-input-string"
          onChange={(e) => setOriginalString(e.target.value)}
          value={originalString}
        />
        <Button onClick={(e) => setUTF8String(UTF8Encode(originalString!))}
        >UTF-8 Encode</Button>
      </div>
      <div className="grid w-full gap-5">
        <Label htmlFor="utf8-encoder-output-string">UTF-8-Encoded Hex Bytes</Label>
        <Textarea rows={10} placeholder="Your UTF8-Encoded string will be shown here." id="utf8-encoder-output-string"
          value={utf8String}
        />
      </div>
    </div>
  )
}