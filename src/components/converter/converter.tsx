"use client";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { converterConfig } from "@/config/converter";
import { UpdateIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { useState } from "react";
import { MotionButton } from "../animated/motion-button";


const convertIcon = {
  hover: {
    rotate: 45,
    scale: 1.2,
    pathlength: 0.2
  },
  tap: {
    rotate: 360,
    pathlength: 0.8
  },
  init: {
  },
}

export interface ConverterProps {
  page: string
  converterName: string
}

export function Converter({ page, converterName }: ConverterProps) {
  const [originalString, setOriginalString] = useState<string | undefined>(
    undefined
  );
  const [convertedString, setConvertedString] = useState<string | undefined>(
    undefined
  );

  const convertFunc = converterConfig.pages[page].converters.find((converter) => converter.name === converterName)!.convertFunc

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
        <MotionButton
          onClick={(e) => setConvertedString(convertFunc(originalString!))}
          whileHover="hover"
          whileTap="tap"
        >
          {converterName}
          <motion.div
            variants={convertIcon}
          >
            <UpdateIcon className="m-2" />
          </motion.div>
        </MotionButton>
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
