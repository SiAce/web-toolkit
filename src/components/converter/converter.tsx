"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { useState } from "react";

export interface ConverterProps {
  name: string;
  convertFunc: (s: string) => string;
}

export function Converter({ name, convertFunc }: ConverterProps) {
  const [originalString, setOriginalString] = useState<string | undefined>(
    undefined
  );
  const [convertedString, setConvertedString] = useState<string | undefined>(
    undefined
  );

  return (
    <div className="grid w-full gap-10">
      <div className="grid w-full gap-5">
        <Label htmlFor="converter-input-string">Original String</Label>
        <Textarea
          rows={10}
          placeholder="Type the string to be converted."
          id="converter-input-string"
          onChange={(e) => setOriginalString(e.target.value)}
          value={originalString}
        />
        <Button
          onClick={(e) => setConvertedString(convertFunc(originalString!))}
        >
          {name}
        </Button>
      </div>
      <div className="grid w-full gap-5">
        <Label htmlFor="converter-output-string">Converted string</Label>
        <Textarea
          rows={10}
          placeholder="Your converted string will be shown here."
          id="converter-output-string"
          value={convertedString}
        />
      </div>
    </div>
  );
}
