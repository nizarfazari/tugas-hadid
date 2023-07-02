export const DefaultLayouts = ({ children }) => {
  return (
    <>
      {/* <Header /> */}
      <main className="site-main">
        <div className="container">{children}</div>
      </main>
      {/* <Footer /> */}
    </>
  );
};
