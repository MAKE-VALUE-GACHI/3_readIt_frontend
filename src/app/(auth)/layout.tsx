import AuthUiLayout from '@/components/layout/AuthUiLayout'

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <AuthUiLayout>{children}</AuthUiLayout>
}
