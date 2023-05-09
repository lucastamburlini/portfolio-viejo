import { BrowserRouter } from "react-router-dom";

import Footer from "./pages/Footer";
import Main from "./pages/Main";
import Navbar from "./pages/Navbar";
import Contact from "./pages/Contact";
import Banner from "./pages/Banner";
import Codewars from "./pages/Codewars";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Banner />
        <Main />
        <Codewars />
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
