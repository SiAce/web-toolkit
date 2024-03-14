import { Base64ToString, JSONMinify, JSONPrettify, MD5Hash, SHA256Hash, UTF8Decode, UTF8Encode, stringToBase64 } from "@/lib/client-utils"
import { ConverterConfig } from "@/types"

export const converterConfig: ConverterConfig = {
  mainNav: [
    {
      title: "Converter",
      href: "/converter/base64",
    }
  ],
  sidebarNav: [
    {
      title: "Converter",
      items: [
        {
          title: "Base64 Encoder/Decoder",
          href: "/converter/base64",
        },
        {
          title: "URL Encoder/Decoder",
          href: "/converter/url",
        },
        {
          title: "UTF-8 Encoder/Decoder",
          href: "/converter/utf-8",
        },
        {
          title: "JSON Minify/Prettify",
          href: "/converter/json",
        },
        {
          title: "MD5 Hash",
          href: "/converter/md5",
        },
        {
          title: "SHA256 Hash",
          href: "/converter/sha256",
        }
      ],
    }
  ],
  pages:
  {
    base64: {
      title: "Base64 Encoder/Decoder",
      href: "/converter/base64",
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
    url: {
      title: "URL Encoder/Decoder",
      href: "/converter/url",
      converters: [
        {
          name: "URL Encoder",
          convertFunc: encodeURI
        },
        {
          name: "URL Decoder",
          convertFunc: decodeURI
        },
      ]
    },
    "utf-8": {
      title: "UTF-8 Encoder/Decoder",
      href: "/converter/utf-8",
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
    json: {
      title: "JSON Minify/Prettify",
      href: "/converter/json",
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
    md5: {
      title: "MD5 Hash",
      href: "/converter/md5",
      converters: [
        {
          name: "MD5 Hash",
          convertFunc: MD5Hash
        }
      ]
    },
    sha256: {
      title: "SHA256 Hash",
      href: "/converter/sha256",
      converters: [
        {
          name: "SHA256 Hash",
          convertFunc: SHA256Hash
        }
      ]
    }
  }
}