import { Sidebar } from '~/components/sidebar';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex max-w-7xl justify-between mx-auto min-h-screen">
      <header className="max-h-screen max-w-fit overflow-y-scroll sticky top-0">
        <Sidebar />
      </header>

      <main className="max-h-screen flex-1 flex justify-start grow">
        {children}
      </main>
    </div>
  );
}

