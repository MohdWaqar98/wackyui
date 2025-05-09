import { ImageResponse } from 'next/og'
 
// Route segment config
export const runtime = 'edge'
 
// Image metadata
export const alt = 'WackyUI - Modern React UI Components'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
// Image generation
export default async function Image() {
  // Font
  const interSemiBold = fetch(
    new URL('https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap', import.meta.url)
  ).then((res) => res.arrayBuffer())
 
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(to bottom right, #3B82F6, #8B5CF6)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '40px 80px',
          textAlign: 'center',
          fontFamily: '"Inter"',
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 'bold', marginBottom: 40 }}>
          WackyUI
        </div>
        <div style={{ fontSize: 36, opacity: 0.9, maxWidth: '80%' }}>
          Modern React UI Components
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
      fonts: [
        {
          name: 'Inter',
          data: await interSemiBold,
          style: 'normal',
          weight: 600,
        },
      ],
    }
  )
}
