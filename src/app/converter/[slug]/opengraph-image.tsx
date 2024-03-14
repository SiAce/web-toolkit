import { ImageResponse } from 'next/og'
import { ConverterPageProps } from './page'
import { converterConfig } from '@/config/converter'
import { siteConfig } from '@/config/site'


// Image metadata
export const alt = siteConfig.description
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'


// Image generation
export default async function Image({ params }: ConverterPageProps) {
  const slug = params.slug;
  const { title } = converterConfig.pages[slug];


  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {title}
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    }
  )
}