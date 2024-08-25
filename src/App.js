import Analytics from "./components/Analytics";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Services from "./components/Services";


function App() {
  return (
    <div >
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Services />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
