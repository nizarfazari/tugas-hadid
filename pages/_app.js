import { DefaultLayouts } from "~/layouts/DefaultLayout";
import "~/styles/main.scss";

export default function MyApp({ Component, pageProps }) {
  const Layout = Component.props?.layout || DefaultLayouts;
  return (
    <div id="layout">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
