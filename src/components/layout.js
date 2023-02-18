import NavBar from "./navbar.js";
import Footer from "./footer.js";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
