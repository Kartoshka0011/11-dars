import Main from "../../components/main/Main";
import About from "../../components/about/About";
import Leader from "../../components/leader/Leader";
import Section from "../../components/section/Section";
import News from "../../components/news/News";
const Home = () => {
  return (
    <div className="cont">
      <Main />
      <About />
      <Leader />
      <Section />
      <News />
    </div>
  );
};

export default Home;
