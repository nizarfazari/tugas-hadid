import { Footer } from "~/components/footer";

export const LoginLayouts = ({ children }) => {
  return (
    <div className="bg-[#2E4F4F]">
      <main className="site-main min-h-screen">
        <div className="container mx-auto">{children}</div>
      </main>
      <Footer />
    </div>
  );
};
