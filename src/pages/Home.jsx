import Hero from "../sections/hero.jsx";
import AboutUs from "../sections/AboutUs.jsx";
import Services from "../sections/Services.jsx";

const Home = () => {
    return (
        <div className="w-full mx-auto">
            <Hero />
            <AboutUs />
            <Services />

        </div>
    );
};

export default Home;
