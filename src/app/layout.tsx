import './globals.css'

export const metadata = {
  title: 'drop-it-healthcare-patient-portal-1754793789453 - Healthcare Portal',
  description: 'One drop at a time',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  )
}