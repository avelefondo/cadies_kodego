import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Farm from "../components/Farm"
import Creations from "../components/Creations"
import Faq from "../components/Faq"
import Footer from "../components/Footer"


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
