import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FaAddressBook } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FcPhoneAndroid } from "react-icons/fc";

const Cv2 = ({cvData}) => {
  console.log(cvData);
  console.log(cvData.skills);
  
  return (
    <div className="flex  items-center justify-center">
      <A cvData={cvData} />
    </div>
  )
}

function A({cvData}:{cvData:object}) {
return(
  <div className="w-70 sm:w-100 h-fit flex items-strecth justify-center p-2  text-white text-[.6rem]" >
    <div className="w-1/3  bg-black  p-2 flex flex-col justify-stretch items-stretch gap-2 text-[.4rem] sm:text-[.6rem]">
      <h1 className="text-white text-[.7rem]">{cvData.name}</h1>
      <p className="mb-3">{cvData.title}</p>
      <div className="flex flex-col gap-2">
        <p className="border-b capitalize pb-1">details</p>
        <ul className=" mn text-white flex flex-col gap-1">
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
        <h1 className="text-[.8rem] border-b pb-1 mb-3">Skills</h1>
        <ul className="flex flex-col gap-1">
          {
            cvData.skills.map((item,index)=>{
             return <li key={index} className="text-[.6rem] text-white">
                - {item}
              </li>
            })
          }
        </ul>
      </div>
      
    </div> 
    <div className="w-2/3 bg-purple-500 h-full flex flex-col justify-evenly  items-stretch text-[.4rem]  sm:text-[.6rem] font-semibold p-2">
         <div className="flex flex-col gap-2">
          <p className="border-b pb-1">Summary</p>
          <p>{cvData.description}</p>
         </div>
         <div className="flex flex-col gap-2">
          {
            cvData.experience.map((item,index)=>{
              return <ul className="flex font-[400]">
                <li className="flex flex-col gap-2">
                  <p className="text-white font-semibold">{item.position}</p>
                  <p className="text-white">{item.company}</p>
                  <p className="text-white">{item.startDate} - {item.endDate}</p>
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
          <div className="flex flex-col gap-2 mt-4">
            <p className="border-b pb-1">Projects</p>
            <div className="flex flex-col gap-2">
              {
                cvData.projects.map((item,index)=>{
                  return <ul className="flex font-[400]">
                    <li className="flex flex-col gap-2">
                      <p className="text-white font-semibold">{item.name}</p>
                      <p className="text-white">{item.link}</p>
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
    </div>
  </div>
)
}
export {A}

export default Cv2