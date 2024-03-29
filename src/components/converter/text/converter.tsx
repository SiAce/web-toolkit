"use client";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { converterConfig, isConverterGroup } from "@/config/converter";

import { useState } from "react";
import { AnimatedButton } from "../../animated/motion-button";


export interface ConverterProps {
  converterPageId: string
  converterName: string
}

export function TextConverter({ converterPageId, converterName }: ConverterProps) {
  const [originalString, setOriginalString] = useState<string>();
  const [convertedString, setConvertedString] = useState<string>();

  const pages = converterConfig.converterGroups.find(isConverterGroup("text"))?.pages;

  const page = pages?.find(converterPage => converterPage.id === converterPageId);
  const convertFunc = page?.converters.find(converter => converter.name === converterName)?.convertFunc

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
        <AnimatedButton
          onClick={async () => {
            if (originalString) {
              setConvertedString(await convertFunc!(originalString))
            }
          }}
        >
          {converterName}
        </AnimatedButton>
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
