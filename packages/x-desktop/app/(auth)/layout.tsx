export const metadata = {
  title: 'Masuk ke Twitter',
  description: 'Masuk atau daftar ke Twitter',
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      {children}
    </div>
  );
}
