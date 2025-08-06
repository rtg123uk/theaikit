export const metadata = {
  title: 'Sanity Studio',
  description: 'Content management for AI Solopreneur Blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 