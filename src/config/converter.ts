import { ConverterConfig } from "@/types"

export const converterConfig: ConverterConfig = {
  mainNav: [
    {
      title: "Converter",
      href: "/converter/base64",
    },
    {
      title: "Guides",
      href: "/guides",
      disabled: true,
    },
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
        },
        {
          title: "Search",
          href: "/docs/in-progress",
          disabled: true,
        },
      ],
    }
  ],
}