import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavbarTree from "./components/common/navbar/Navbar";
import Footer from "./components/common/navbar/footer/Footer";

const App = () => {
  return (
    <>
      <NavbarTree />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
