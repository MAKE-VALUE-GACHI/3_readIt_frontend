import AuthUiLayout from '@/components/layout/authUiLayout'

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <AuthUiLayout>{children}</AuthUiLayout>
}
