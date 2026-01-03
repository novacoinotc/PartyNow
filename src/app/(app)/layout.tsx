import { Navbar, BottomNav } from "@/components/layout/navbar";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="pt-16 pb-20 md:pb-8 min-h-screen">{children}</main>
      <BottomNav />
    </>
  );
}
