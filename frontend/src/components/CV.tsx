import hero from "../assets/scren.png"
import { TbFileCv } from "react-icons/tb";
import {motion} from "framer-motion"
import { GrDocumentNotes } from "react-icons/gr";
const CV = () => {
  return (
    <div className="  w-full  h-full" >
        <div className=" w-1/2 md:w-[50%] lg:w-[35%] xl:w-[30%] flex justify-center items-center relative  mx-auto">
        <img src={hero} alt="hero" className="w-full " />
        <div className="bg-white shadow-2xl  flex gap-1 absolute top-1/2 left-[-10%]">
        <p className="this bg-amber-200"></p>
        <p className="this bg-blue-200"></p>
        <p className="this bg-green-200"></p>
        <p className="this bg-black"></p>
        </div>
        <p className="bg-[#09C375] p-2 rounded-2xl  text-white font-medium text-[.6rem] absolute bottom-[10%] left-[-10%]">ATS PERFECT</p>
        <motion.div
        animate={{
            opacity: [0, 1, 0],
            y: ["0%", "50%", "0%"] 
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
         className="flex flex-col gap-2 absolute top-0 right-[0%]">
            <TbFileCv className="text-black bg-white text-[2rem]" />
        </motion.div>
        </div>
    </div>
  )
}

export default CV
