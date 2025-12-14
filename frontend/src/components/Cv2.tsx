import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FaAddressBook } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FcPhoneAndroid } from "react-icons/fc";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { useDownloadPDF } from "../hooks/download";

const Cv2 = () => {
  const cvData = useSelector(state=>state.cv)
  console.log(cvData);
  const ref = useRef(null);
  const downloadPDF = useDownloadPDF();
  return (
    <div className="flex  items-center justify-center w-full sm:w-[70%]  md:w-[60%] lg:w-[55%] xl:w-[35%] mx-auto text-[.6rem] sm:text-[.8rem] md:text-[1.2rem]">
      <A cvData={cvData} ref={ref} />
      <button
                className="px-4 py-2 y text-white  rounded-lg fixed top-4 right-4 z-50"
                onClick={() =>downloadPDF(ref)} >
                Download PDF
      </button>
    </div>
  )
}

function A({cvData,ref}:{cvData:object,ref:any}) {
return(
  <div className="w-full h-fit flex   p-2  v" ref={ref}>
    <div className="w-1/3    u p-2 flex flex-col justify-stretch items-stretch gap-2">
      <h1 className="  text-[1rem] sm:text-[1rem]">{cvData.name}</h1>
      <p className="mb-3">{cvData.title}</p>
      <div className="flex flex-col gap-2">
        <p className="border-b capitalize pb-1">details</p>
        <ul className=" mn  flex flex-col gap-1">
          <li className="flex">
            <FaGithub className="" />
            <p className="">{cvData.contact.github}</p>
          </li>
          <li>
          <FcPhoneAndroid className="text-green-700" />
          <p className="">{cvData.contact.phone}</p>
          </li>
          <li>
            <TfiEmail className="" />
            <p className="">{cvData.contact.email}</p>
          </li>
          <li>
            <FaLinkedin className="" />
            <p className="">{cvData.contact.website}</p>
          </li>
          <li>
            <FaAddressBook className="" />
            <p className="">{cvData.contact.address}</p>
          </li>
        </ul>
      </div>
      <div className="mt-4">
        <h1 className=" border-b pb-1 mb-3">Skills</h1>
        <ul className="flex flex-col gap-1">
          {
            cvData.skills.map((item,index)=>{
             return <li key={index} className=" ">
                - {item}
              </li>
            })
          }
        </ul>
      </div>
      
    </div> 
    <div className="w-2/3 t  h-full flex flex-col justify-evenly  items-stretch  font-semibold p-2">
         <div className="flex flex-col gap-2">
          <p className="border-b pb-1">Summary</p>
          <p>{cvData.description}</p>
         </div>
         <div className="flex flex-col gap-2 mt-10">
          <h1>Experience</h1>
          {
            cvData.experience.map((item,index)=>{
              return <ul key={index} className="flex font-[400]">
                <li className="flex flex-col gap-2">
                  <p className=" font-semibold">{item.position}</p>
                  <p className="">{item.company}</p>
                  <p className="">{item.startDate} - {item.endDate}</p>
                  {
                    item.highlights.map((highlight,index)=>{
                      return <p  className="text-white" key={index}>- {highlight}</p>
                    })
                  }
                </li>
             </ul>
            })
          }
          </div>
          <div className="flex flex-col gap-2 mt-10">
            <p className="border-b pb-1">Projects</p>
            <div className="flex flex-col gap-2 ">
              {
                cvData.projects.map((item,index)=>{
                  return <ul className="flex font-[400]">
                    <li key={index} className="flex flex-col gap-2">
                      <p className=" font-semibold">{item.name}</p>
                      <p className="">{item.link}</p>
                      {
                        item.description.map((description,index)=>{
                          return <p  className="text-white" key={index}>- {description}</p>
                        })
                      }
                      <p className="mt-2">Tech Stack:</p>
                      <div className="flex flex-col  gap-2">
                      {
                        item.technologies.map((tech,index)=>{
                          return <p className="text-white" key={index}>- {tech}</p>
                        })
                      }
                      </div>
                    </li>
                 </ul>
                })
              }
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-10">
            <p className="border-b pb-1">Education</p>
            <div className="flex flex-col gap-2 ">
              {
                cvData.education.map((item,index)=>{
                  return <ul key={index} className="flex font-[400]">
                    <li className="flex flex-col gap-2">
                      <p className=" font-semibold">{item.school}</p>
                      <p className="">{item.degree}</p>
                      <p className="">{item.startDate} - {item.endDate}</p>
                    </li>
                 </ul>
                })
              }
            </div>
          </div>
    </div>
  </div>
)
}
export {A}

export default Cv2