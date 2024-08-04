import Header from "@/components/header";
import HeaderMobile from "@/components/header-mobile";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <HeaderMobile />

      <main className="container w-full max-w-7xl">{children}</main>
    </>
  );
}
