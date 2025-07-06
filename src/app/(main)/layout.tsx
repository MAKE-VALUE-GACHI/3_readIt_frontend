import MainUiLayout from '@/components/layout/mainUiLayout'

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <MainUiLayout>{children}</MainUiLayout>
}
