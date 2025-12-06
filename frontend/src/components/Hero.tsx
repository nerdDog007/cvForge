import { useEffect, useState } from "react"
import CV from "./CvImage";
import {motion} from "framer-motion"

const Hero = () => {
    const [count, setCount] = useState(293)
    useEffect(() => {
      setTimeout(() => {
            setCount(count + 1)
      }, 5000)
    },[count]);
  return (
    <main className="flex  items-center sm:justify-center lg:justify-between w-screen bg-purple-700 text-white mx-auto flex-wrap gap-6 md:gap-0">
      <div className="flex  items-center sm:justify-center lg:justify-between flex-wrap p-2 sm:p-8">
  
        <section className="flex flex-col items-center justify-center w-full md:w-full lg:w-1/3 xl:w-1/4 gap-6 pb-4 ">
            <div className="flex items-center gap-2">
                <motion.p 
                animate={{opacity: [0, 1, 0]}}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-white w-2 h-2 rounded-full bg-green-400 block">
                </motion.p>
                <p className="font-bold">{count}</p>
                <p>resumes created today</p>
            </div>
            <h1 className="text-3xl font-bold text-center md:text-5xl">
            Create your CV with an 
            <br/>
            <span className="text-green-400">
            AI-powered CV maker
            </span>
            </h1>
            <p className="text-center">The first step to a better job? A better CV. Only 2% of CVs win, and yours will be one of them. Build it now!</p>
            <button className="w-full sm:w-[50%] md:w-full  text-xl text-white px-4 py-2 bg-[#05A2FF] font-semibold rounded-xl">
                Create A Cv
            </button>
            <button className="w-full sm:w-[50%] md:w-full text-xl  px-4 py-2 text-white border-2 bg-[#05A2FF] border-[#05A2FF] font-semibold rounded-xl">
                Improve My Cv
            </button>
        </section>
        <motion.section 
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        animate={{opacity: [0, 0, 1]}}
        className="flex flex-col items-center  justify-center w-full sm:w-fit ">
                <CV />
        </motion.section>
        <section className="flex flex-col md:flex-row gap-4 items-center justify-center w-full font-medium text-[1rem] md:text-2xl">
            <h1 className="font-[500] text-xl">Our customers have been hired at:
            </h1>
            <div className="opacity-35 flex gap-4 text-[.9rem] md:Text-xl">
            <p>Google</p>
            <p>Netflix</p>
            <p>Meta</p>
            <p>Amazon</p>
            <p>Apple</p>
            </div>
        </section>
        </div>
    </main>
  )
}

export default Hero