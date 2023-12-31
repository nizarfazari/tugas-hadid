import { Footer } from "~/components/footer";
import { Header } from "~/components/header";

export const DefaultLayouts = ({ children }) => {
  return (
    <>
      <Header />
      <main className="site-main">
        <div className="container mx-auto">{children}</div>
      </main>
      <Footer />
    </>
  );
};
