import Hero from "../../components/Hero"
import Navbar from "../../components/Navbar"
import Faq from "../../layouts/Faq"
import Reviews from "../../layouts/Reviews"
import Why from "../../layouts/Why"

const LandingPage = () => {
  return (
    <>
    <Navbar />
    <main className="flex flex-col gap-18 ">
      <Hero />
      <Reviews />
      <Why />
      <Faq />
    </main>
    </>
  )
}
 
export default LandingPage