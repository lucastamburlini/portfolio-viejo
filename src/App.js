import { BrowserRouter } from "react-router-dom";

import Footer from "./pages/Footer";
import Main from "./pages/Main";
import Navbar from "./pages/Navbar";
import Contact from "./pages/Contact";
import Banner from "./pages/Banner";
import Themes from "./pages/Themes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Banner />
        <Themes />
        <Main />
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
