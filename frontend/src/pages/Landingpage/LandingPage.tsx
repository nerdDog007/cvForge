import Hero from "../../components/Hero"
import Navbar from "../../components/Navbar"

const LandingPage = () => {
  return (
    <>
    <Navbar />
    <main className="bg-[#EDF9FF]  w-screen">
      <Hero />
    </main>
    </>
  )
}

export default LandingPage