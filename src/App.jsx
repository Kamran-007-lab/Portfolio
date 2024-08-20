import About from "./components/About";
import Contact from "./components/Contact";
import Technologies from "./components/Technologies.jsx";
import Home from "./components/Home";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <>
    <div>
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
