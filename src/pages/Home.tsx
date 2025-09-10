import AboutGreener from "../components/home/AboutGreener";
import FaqSection from "../components/home/FaqSection";
import Header from "../components/home/Header";
import ServicesSection from "../components/home/ServicesSection";
import StepsProcess from "../components/home/StepsProcess";

const Home = () => {
  return (
    <div>
      <Header />
      <AboutGreener />
      <ServicesSection />
      <StepsProcess />
      <FaqSection />
    </div>
  );
};

export default Home;
