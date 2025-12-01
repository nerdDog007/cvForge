import Hero from "../../components/Hero"
import Navbar from "../../components/Navbar"

const LandingPage = () => {
  return (
    <>
    <Navbar />
    <main className="bg-[#EDF9FF] p-2 w-screen">
      <Hero />
    </main>
    </>
  )
}

export default LandingPage