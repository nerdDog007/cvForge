import { useEffect, useState } from "react"
import CV from "./CV";

const Hero = () => {
    const [count, setCount] = useState(293)
    useEffect(() => {
      setTimeout(() => {
            setCount(count + 1)
      }, 5000)
    },[count]);
  return (
    <main className="flex items-cente w-screen  md:w-[95%] lg:w-[90%] xl:w-[80%] mx-auto flex-wrap ">
        <section className="flex flex-col items-center justify-center w-full md:w-1/2 lg:w-1/3 xl:w-1/4 gap-6">
            <div className="flex items-center gap-2">
                <p className="text-blue-500 w-2 h-2 rounded-full bg-green-400 block">
                </p>
                <p className="font-bold">{count}</p>
                <p>resumes created today</p>

            </div>
            <h1 className="text-3xl font-bold text-center md:text-5xl">
            Create your CV with an 
            <br/>
            <span className="text-blue-500">
            AI-powered CV maker
            </span>
            </h1>
            <p className="text-center">The first step to a better job? A better CV. Only 2% of CVs win, and yours will be one of them. Build it now!</p>
            <button className="w-full sm:w-[50%] md:w-full  text-xl text-white px-4 py-2 bg-[#05A2FF] font-semibold rounded-xl">
                Create A Cv
            </button>
            <button className="w-full sm:w-[50%] md:w-full text-xl  px-4 py-2 text-blue-500 border-2 border-[#05A2FF] font-semibold rounded-xl">
                Improve My Cv
            </button>
        </section>

        <section className="flex flex-col items-end  justify-center w-full md:w-1/2  lg:w-2/3 xl:w-3/4 gap-6">
                <CV />
        </section>

        <section>

        </section>
    </main>
  )
}

export default Hero