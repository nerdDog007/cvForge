import { FaAngleDown } from "react-icons/fa";
import {faq} from '../utils/faq'
import { useState } from "react";

const Faq = () => {
    
    console.log(faq);
    
  return (
    <div className="w-screen">
        <h1 className="text-2xl font-bold sm:text-2xl md:text-3xl lg:text-4xl text-center">Frequently Asked Questions</h1>
        <ul className="flex flex-col gap-8 items-center w-full p-4">
            {faq.map((item, index) => (
                <FaqItem key={index} title={item.title} description={item.description}  />
            ))}
        </ul>
    </div>
  )
}
function FaqItem(props: any) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <li className="flex items-center gap-4 w-full md:w-[80%] lg:w-[60%] justify-between rounded-lg bg-purple-700 shadow-md text-white p-4"
      onClick={toggle}
      >
        <div className="flex flex-col gap-2 w-[90%]">
          <p className="text-[1.5rem] font-medium">{props.title}</p>
  
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-[1rem] mt-2">{props.description}</p>
          </div>
        </div>
  
        <FaAngleDown
          className={`text-white text-4xl w-[10%] cursor-pointer transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          
        />
      </li>
    );
  }
export default Faq