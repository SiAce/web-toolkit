"use client";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { converterConfig, isConverterGroup } from "@/config/converter";

import { useState } from "react";
import { AnimatedButton } from "../../animated/motion-button";
import { ConverterProps } from "../text/converter";
import { DropzoneSingle } from "./dropzone-single";


export function ImageConverter({ converterPageId, converterName }: ConverterProps) {
  const [originalFile, setOriginalFile] = useState<File>();
  const [convertedString, setConvertedString] = useState<string>();

  const pages = converterConfig.converterGroups.find(isConverterGroup("image"))?.pages;

  const page = pages?.find(converterPage => converterPage.id === converterPageId);
  const convertFunc = page?.converters.find(converter => converter.name === converterName)?.convertFunc

  return (
    <div className="grid w-full gap-10">
      <div className="grid w-full gap-5">
        <Label htmlFor="converter-input-string">Original Image</Label>
        <DropzoneSingle id="converter-input-string" className="min-h-52" file={originalFile} setFile={setOriginalFile}/>
        <AnimatedButton
          onClick={async () => {
            if (originalFile) {
              setConvertedString(await convertFunc!(originalFile))
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
