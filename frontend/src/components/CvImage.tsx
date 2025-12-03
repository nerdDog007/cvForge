import hero from "../assets/scren.png"
import { TbFileCv } from "react-icons/tb";
import {motion} from "framer-motion"
import { useSelector } from "react-redux";
import CV1 from "./CV1";
import { CVTemplate } from "./CV1";
const CV = () => {
  const {createCv} = useSelector((state) => state)
  console.log(createCv); 
  return (
    <div className="  w-full flex items-center justify-center" >
        <div className=" lg:w-2/4  h-2/3 flex justify-center items-center relative  ">
        {/* <img src={hero} alt="hero" className="w-full " /> */}
            <CVTemplate cvData={createCv} className="w-full justify-center flex items-stretch h-100 w-100" />

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
