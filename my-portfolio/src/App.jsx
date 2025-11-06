import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

function App() {
    return (
        <div className="font-sans text-gray-800 bg-gradient-to-b from-white via-blue-50 to-blue-100 scroll-smooth">
            <Navbar />
            <Hero />
            <About />
            <Education />
            <Experience />
            <Projects />
            <Skills />
            <Certifications />
            <Contact />
        </div>
    );
}

export default App;
