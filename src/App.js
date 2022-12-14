import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./global.css";
import Footer from "./components/Footer";
import Childcare from "./pages/childcare";
import Home from "./pages/home";
import Jobs from "./pages/jobs";
import Legal from "./pages/legal";
import School from "./pages/school";
import Medical from "./pages/medical";
import Food from "./pages/food";
import Contact from "./pages/contact";
import FixedNav from "./components/FixedNav";
import { Helmet } from "react-helmet";


function App() {
  return (
    <>
      <Header />
      <Helmet>
        <title>Helping Hands</title>
        <meta name='description' content="Find local resources to help immigrants in the Grand Rapids community"/>
     <meta name='keywords' content='Immigration, legal, childcare, Grand Rapids, food, medical help'/>
      </Helmet>
      <FixedNav />
      <Routes>
        <Route path="/childcare" element={<Childcare />} />
        <Route path="/food" element={<Food />} />
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/school" element={<School />} />
        <Route path="/medical" element={<Medical />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
