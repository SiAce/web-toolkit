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
      pageName: "Base64 Converter",
      converters: [
        {
          name: "Base64 Encoder",
          url: "#base64-encoder",
          convertFunc: stringToBase64
        },
        {
          name: "Base64 Decoder",
          url: "#base64-decoder",
          convertFunc: Base64ToString
        },
      ]
    },
    url: {
      pageName: "URL Converter",
      converters: [
        {
          name: "URL Encoder",
          url: "#url-encoder",
          convertFunc: encodeURI
        },
        {
          name: "URL Decoder",
          url: "#url-decoder",
          convertFunc: decodeURI
        },
      ]
    },
    "utf-8": {
      pageName: "UTF-8 Converter",
      converters: [
        {
          name: "UTF8 Encoder",
          url: "#utf8-encoder",
          convertFunc: UTF8Encode
        },
        {
          name: "UTF8 Decoder",
          url: "#utf8-decoder",
          convertFunc: UTF8Decode
        },
      ]
    },
    json: {
      pageName: "JSON Converter",
      converters: [
        {
          name: "JSON Minify",
          url: "#json-minify",
          convertFunc: JSONMinify
        },
        {
          name: "JSON Prettify",
          url: "#json-prettify",
          convertFunc: JSONPrettify
        },
      ]
    },
    md5: {
      pageName: "MD5 Hash",
      converters: [
        {
          name: "MD5 Hash",
          url: "#md5-hash",
          convertFunc: MD5Hash
        }
      ]
    },
    sha256: {
      pageName: "SHA256 Hash",
      converters: [
        {
          name: "SHA256 Hash",
          url: "#sha256-hash",
          convertFunc: SHA256Hash
        }
      ]
    }
  }
}