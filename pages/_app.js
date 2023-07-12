import { DefaultLayouts } from "~/layouts/DefaultLayout";

import "~/styles/main.scss";

export default function MyApp({ Component, pageProps }) {
  const Layout = Component.props?.layout || DefaultLayouts;
  return (
    <div id="layout">
      <Layout>
        <Component {...pageProps} />

      </Layout>
    </div>
  );
}
