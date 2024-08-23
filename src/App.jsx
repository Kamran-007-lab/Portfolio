import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Technologies from "./components/Technologies.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";
import SocialLinks from "./components/SocialLinks.jsx";

function App() {
  return (
    <>
    <div className="overflow-x-hidden" >
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Technologies />
      <Contact />

      <SocialLinks />
    </div>
    </>
  );
}

export default App;
