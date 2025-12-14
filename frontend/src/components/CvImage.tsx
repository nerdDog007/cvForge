import { TbFileCv } from "react-icons/tb";
import {motion} from "framer-motion"
import { useSelector } from "react-redux";
import { A } from "./Cv2";
const CV = () => {
  const {createCv} = useSelector((state) => state)
  return (
    <div className="  w-full flex items-center justify-center" >
        <div className="  flex justify-start items-center relative">
        <div className="w-full text-[.4rem] md:text-[.7rem] sm:w-[90%] md:w-[80%] lg:w-[75%] xl:w-[80%] relative mx-auto">
      <A cvData={createCv} />
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
    </div>
  )
}

export default CV
