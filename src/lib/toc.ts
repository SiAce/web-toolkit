// @ts-nocheck
// TODO: Fix this when we turn strict mode on.


interface Item {
  title: string
  url: string
  items?: Item[]
}

interface Items {
  items?: Item[]
}

export type TableOfContents = Items