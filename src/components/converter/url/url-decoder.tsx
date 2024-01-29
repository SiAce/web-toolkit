'use client'

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";


import { useState } from "react";


export function URLDecoder() {
  const [URLString, setURLString] = useState<string | undefined>(undefined)
  const [originalString, setOriginalString] = useState<string | undefined>(undefined)

  return (
    <div className="grid w-full gap-10">
      <div className="grid w-full gap-5">
        <Label htmlFor="URL-decoder-input-string">URL-Encoded string</Label>
        <Textarea rows={10} placeholder="Type the string to be URL-Decoded." id="URL-decoder-input-string"
          onChange={(e) => setURLString(e.target.value)}
          value={URLString}
        />
        <Button onClick={(e) => setOriginalString(decodeURI(URLString!))}>
          URL Decode
        </Button>
      </div>
      <div className="grid w-full gap-5">
        <Label htmlFor="URL-decoder-output-string">URL-Decoded String</Label>
        <Textarea rows={10} placeholder="Your URL-Decoded string will be shown here." id="URL-decoder-output-string"
          value={originalString}
        />
      </div>
    </div>
  )
}