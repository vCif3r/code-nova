import { useEffect, useState } from "react"
import Bootcamp from "./components/Bootcamp"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Pricing from "./components/Pricing"
import Testimonials from "./components/Testimonials"

function App() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(()=>{
    function handleScroll(){
      setScrolled(window.scrollY > 50);
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <div className="min-h-screen bg-linear-to-r from-slate-950 to-black text-white overflow-hidden">
      <Navbar scrolled={scrolled}/>
      <Hero/>
      <Features/>
      <Bootcamp/>
      <Pricing/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App