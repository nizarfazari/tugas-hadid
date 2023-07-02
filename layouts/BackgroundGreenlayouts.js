import { Footer } from "~/components/footer";
import { Header } from "~/components/header";

export const BackgroundGreenlayouts = ({ children }) => {
  return (
    <div className="bg-[#CBE4DE]">
      <Header isLogo={false} />
      <main className="site-main min-h-screen mt-20">
        <div className="container mx-auto">{children}</div>
      </main>
      <Footer />
    </div>
  );
};
