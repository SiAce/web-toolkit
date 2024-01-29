'use client'

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";



import { useState } from "react";


export function URLEncoder() {
  const [originalString, setOriginalString] = useState<string | undefined>(undefined)
  const [URLString, setURLString] = useState<string | undefined>(undefined)

  return (
    <div className="grid w-full gap-10">
      <div className="grid w-full gap-5">
        <Label htmlFor="URL-encoder-input-string">Original String</Label>
        <Textarea rows={10} placeholder="Type the string to be URL-Encoded." id="URL-encoder-input-string"
          onChange={(e) => setOriginalString(e.target.value)}
          value={originalString}
        />
        <Button onClick={(e) => setURLString(encodeURI(originalString!))}
        >URL Encode</Button>
      </div>
      <div className="grid w-full gap-5">
        <Label htmlFor="URL-encoder-output-string">URL-Encoded string</Label>
        <Textarea rows={10} placeholder="Your URL-Encoded string will be shown here." id="URL-encoder-output-string"
          value={URLString}
        />
      </div>
    </div>
  )
}