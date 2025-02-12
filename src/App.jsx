import { useState, useEffect } from "react";

import Hero from "./components/Header/Hero.jsx"
import Navbar from "./components/Navbar.jsx"
import AboutMe from "./components/About/AboutMe.jsx";
import Skills from "./components/Skills/Skills.jsx";
import ContactMe from "./components/Contacts/ContacMe.jsx";


function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observerOptions = {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 0.6, // Attiva quando il 60% della sezione è visibile
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect(); // Cleanup quando il componente si smonta
  }, []);

  const sections= [
    { id: "home", title: "Home", components: <Hero />},
    { id: "about", title: "About me", components: <AboutMe />},
    { id: "skills", title: "Skills", components: <Skills />},
    { id: "contacts", title: "Contacts", components: <ContactMe />},
  ];
  
  
  return (
    <>
      <Navbar navElements={sections} activeId={activeSection}/> 
      <div className="scroll-smooth snap-y snap-mandatory overflow-y-scroll h-screen">
        {sections.map(({id, components})=>{
          return (
              <section key={id} id={id} className="h-screen snap-center">
                  {components}
              </section>
          )
        })}
      </div>
      {/* <Hero />
      <AboutMe /> */}
    </>
  )
}

export default App
