import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Layout() {
  return (
    <>
      <Header
        name="Ergazy Zheleu"
        title="Web Development Learner"
      />

      <main>
        <Outlet />
      </main>

      <Footer text="© 2026 Ergazy Zheleu" />
    </>
  );
}

export default Layout;