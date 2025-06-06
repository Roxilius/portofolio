import { useEffect } from "react";
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loading from "./components/Loading";

function App() {
  const [isLoading, setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    }, 500);
  })
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
      <AnimatePresence>
        {isLoading && <Loading/>}
      </AnimatePresence>
      <div className="container mx-auto px-8">
        <Header />
        <Hero />
        <About/>
        <TechStack/>
        <Projects/>
      </div>
    </div>
  );
}

export default App;
