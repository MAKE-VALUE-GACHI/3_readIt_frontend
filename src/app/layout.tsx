import Provider from './provider'
import localFont from 'next/font/local'
import './globals.css'

const pretendard = localFont({
  src: '../public/fonts/pretendard/PretendardVariable.woff2',
  display: 'swap',
  weight: '100 900',
  variable: '--font-pretendard',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <body className={pretendard.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
