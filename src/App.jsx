import Hero from "./components/Header/Hero.jsx"
import Navbar from "./components/Navbar.jsx"
import AboutMe from "./components/About/AboutMe.jsx";
import Skills from "./components/Skills/Skills.jsx";
import ContactMe from "./components/ContacMe.jsx";


function App() {


  const sections= [
    { id: "home", title: "Home", components: <Hero />},
    { id: "about", title: "About me", components: <AboutMe />},
    { id: "skills", title: "Skills", components: <Skills />},
    { id: "contacts", title: "Contacts", components: <ContactMe />},
  ];
  
  
  return (
    <>
      <Navbar navElements={sections} />
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
