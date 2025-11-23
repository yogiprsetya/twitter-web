import { Navigation } from '~/components/navigation';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex max-w-7xl justify-between mx-auto min-h-screen">
      <main className="max-h-screen flex-1 flex justify-start grow">
        {children}
      </main>

      <Navigation />
    </div>
  );
}
