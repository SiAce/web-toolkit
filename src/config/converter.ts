import { ImageConverter } from "@/components/converter/image/converter";
import { TextConverter } from "@/components/converter/text/converter";
import { Base64ToString, JSONMinify, JSONPrettify, MD5Hash, SHA256Hash, UTF8Decode, UTF8Encode, fileToHex, fileToDataUrl, stringToBase64, JSONParse } from "@/lib/client-utils";
import { ConverterConfig, ConverterGroup, ConverterGroupId, ConverterGroupUnion, SidebarNavItem } from "@/types";

export const converterConfig: ConverterConfig = {
  mainNav: [
    {
      title: "Converter",
      href: "/converter/text/base64",
      disabled: false
    }
  ],
  converterGroups: [
    {
      id: "text",
      title: "Text to Text",
      converterFC: TextConverter,
      pages: [
        {
          id: "base64",
          title: "Base64 Encoder/Decoder",
          converters: [
            {
              name: "Base64 Encoder",
              convertFunc: stringToBase64
            },
            {
              name: "Base64 Decoder",
              convertFunc: Base64ToString
            },
          ]
        },
        {
          id: "url",
          title: "URL Encoder/Decoder",
          converters: [
            {
              name: "URL Encoder",
              convertFunc: encodeURIComponent
            },
            {
              name: "URL Decoder",
              convertFunc: decodeURIComponent
            },
          ]
        },
        {
          id: "utf-8",
          title: "UTF-8 Encoder/Decoder",
          subtitle: "Into Hex Bytes",
          converters: [
            {
              name: "UTF8 Encoder",
              convertFunc: UTF8Encode
            },
            {
              name: "UTF8 Decoder",
              convertFunc: UTF8Decode
            },
          ]
        },
        {
          id: "json",
          title: "JSON Minify/Prettify",
          converters: [
            {
              name: "JSON Minify",
              convertFunc: JSONMinify
            },
            {
              name: "JSON Prettify",
              convertFunc: JSONPrettify
            },
          ]
        },
        {
          id: "json-parse",
          title: "JSON Parse/Stringify",
          converters: [
            {
              name: "JSON Parse",
              convertFunc: JSONParse
            },
            {
              name: "JSON Stringify",
              convertFunc: JSON.stringify
            },
          ]
        },
        {
          id: "md5",
          title: "MD5 Hash",
          converters: [
            {
              name: "MD5 Hash",
              convertFunc: MD5Hash
            }
          ]
        },
        {
          id: "sha256",
          title: "SHA256 Hash",
          converters: [
            {
              name: "SHA256 Hash",
              convertFunc: SHA256Hash
            }
          ]
        }
      ]
    },
    {
      id: "image",
      title: "Image to Text",
      converterFC: ImageConverter,
      pages: [
        {
          id: "base64",
          title: "Base64 Image Encoder",
          converters: [
            {
              name: "Base64 Encoder",
              convertFunc: fileToDataUrl
            },
          ]
        },
        {
          id: "hex",
          title: "Hex Image Encoder",
          converters: [
            {
              name: "Hex Encoder",
              convertFunc: fileToHex
            },
          ]
        },
      ]
    }
  ],
}

export const sidebarNav: SidebarNavItem[] = converterConfig.converterGroups.map(converterGroup => (
  {
    title: converterGroup.title,
    items: converterGroup.pages.map(converterPage => ({
      title: converterPage.title,
      href: `/converter/${converterGroup.id}/${converterPage.id}`
    }))
  }
))

export function isConverterGroup<T extends ConverterGroupId>(converterGroupId: T) {
  return (converterGroup: ConverterGroupUnion): converterGroup is Extract<ConverterGroupUnion, ConverterGroup<T>> => {
    return converterGroup.id === converterGroupId;
  }
}