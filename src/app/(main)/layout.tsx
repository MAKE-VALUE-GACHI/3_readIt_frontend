import MainUiLayout from '@/components/layout/MainUiLayout'

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <MainUiLayout>{children}</MainUiLayout>
}
