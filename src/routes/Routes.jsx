import Home from "./home/Home";
import Shifokorlar from "./shifokorlar/Shifokorlar";
import Bulimlar from "./sectionss/Sectionss";
import Yangiliklar from "./yangiliklar/Yangiliklar"
import Ish from "./ish/Ishorni";
import Qvp from "./qvp/Qvp";
import Contact from "./contact/Contact";
import { Route } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
const Routes = () => {
  return (
    <div className="cont">
      <Header />
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/shifokorlar">
        <Shifokorlar />
      </Route>

      <Route exact path="/sectionss">
        <Bulimlar />
      </Route>

      <Route exact path="/yangiliklar">
        <Yangiliklar />
      </Route>

      <Route exact path="/ish">
        <Ish />
      </Route>

      <Route path="/qvp">
        <Qvp />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>



      <Footer />
    </div>
  );
};

export default Routes;
