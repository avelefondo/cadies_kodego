import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Farm from "../components/Farm"
import Creations from "../components/Creations"
import Faq from "../components/Faq"
import Footer from "../components/Footer"
import Head from "next/head"
import Script from "next/script"

export default function Home() {
  return (
    <div>
      <div className="heroHeight bg-p1Primary d-flex flex-column">
        <Navbar />
        <Hero />
      </div>
      <Farm />
      <Creations />
      <Faq />
      <Footer />
    </div>
  )
}
