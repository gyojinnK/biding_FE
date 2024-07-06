import EnsureLogin from "@/components/ensure-login";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <EnsureLogin />
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}
