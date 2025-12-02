import { FaGithub, FaLinkedin } from "react-icons/fa"
import { useSelector } from "react-redux"
import { FaAddressBook } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FcPhoneAndroid } from "react-icons/fc";
import { useRef } from "react";
import { usePDF } from "react-to-pdf";

function CV(){
    const cvData = useSelector((state) => state.createCv)    
    const cvRef = useRef(null);
    // const { toPDF } = usePDF({ filename: "cv.pdf" });     
    const { toPDF } = usePDF({ filename: "cv.pdf", targetRef: cvRef });
        return ( 
            <>
            <button
                className="px-4 py-2 bg-blue-600 text-white rounded-lg fixed top-4 right-4 z-50"
                onClick={() => toPDF()} >
                Download PDF
            </button>
            <div className="hidden md:flex  min-h-screen max-h-fit bg-green-200  justify-center items-center">
        <div ref={cvRef} className="w-fit h-fit mx-auto flex justify-center items-stretch m-4">
            <div  className="w-fit md:w-[30%] lg:w-[23%] xl:w-[16%]  bg-gray-700 m p-4 text-white flex flex-col gap-4 " >
                <h1 className="text-3xl font-bold">
                    {cvData.name}
                </h1>
                <h2 className="text-[1rem] ">
                    {cvData.title}
                </h2>
                <div className="flex flex-col gap-2">
                    <h1 className="border-b-1 p-1">Details</h1>
                    <div className="flex flex-col gap-4 mt-4">
                    <Info Icon={FaGithub} text={cvData.contact.github}/>
                    <Info Icon={FcPhoneAndroid} text={cvData.contact.phone}/>
                    <Info Icon={TfiEmail} text={cvData.contact.email}/>
                    <Info Icon={FaLinkedin} text={cvData.contact.website}/>
                    <Info Icon={FaAddressBook} text={cvData.contact.address}/>
                    </div>
                </div>
                <div className="mt-8">
                    <h1 className="border-b-1 p-1">Skills</h1>
                    <ol className="flex flex-col gap-2 mt-4">
                        {cvData.skills.map((skill,index)=>(
                            <li key={index} className="flex items-center gap-2">
                                <p>-</p>
                                <span className="text-[1rem]">{skill}</span>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
            <div className="w-fit md:w-[50%] lg:w-[45%] xl:w-[28%] h-full min-h-[90vh] bg-white p-4 n flex flex-col gap-8 justify-between overflow-x-scroll">
                <div className="">
                    <h1 className="text-xl border-b-1 pb-2">Summary</h1>
                    <p className="mt-4 text-[1rem] font-[300]"> {cvData.description} {cvData.description} kdjsdkj kasjdansd kasdjn eouqweoi aiwud askdj </p>
                </div>
                <div>
                        <h1 className="border-b-1">Experience</h1>
                        <div className="flex flex-col gap-4 mt-4">
                            {cvData.experience.map((experience,index)=>(
                                <div key={index} className="flex flex-col gap-2">
                                    <h2 className="text-xl">{experience.position}</h2>
                                    <p className="text-[1rem]">{experience.company}</p>
                                    <p className="text-[1rem]">{experience.startDate} - {experience.endDate}</p>
                                    <p className="text-[1rem]">{experience.summary}</p>
                                </div>
                            ))}
                        </div>
                </div>
                <div>
                    <h1 className="border-b-1">Projects</h1>
                    <div className="flex flex-col gap-4 mt-4">
                        {cvData.projects.map((project,index)=>(
                            <div key={index} className="flex flex-col gap-2">
                                <h2 className="text-xl">{project.name}</h2>
                                <p className="text-[1rem]">{project.link}</p>
                                {
                                    project.description.map((description,index)=>(
                                        <p key={index} className="text-[1rem]"> - {description}</p>
                                    ))
                                }
                                <p className="mt-2">Tech Stack:</p>
                                <div className="flex  gap-2">
                                {project.technologies.map((tech,index)=>(
                                    <p key={index} className="text-[1rem]"> - {tech}</p>
                                ))}
                                </div>
                           </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h1 className="border-b-1">Education</h1>
                    <div className="flex flex-col gap-4 mt-4">
                        {cvData.education.map((education,index)=>(
                            <div key={index} className="flex flex-col gap-2">
                                <h2 className="text-xl">{education.school}</h2>
                                <p className="text-[1rem]">{education.degree}</p>
                                <p className="text-[1rem]">{education.startDate} - {education.endDate}</p>
                            </div>
                        ))}
                    </div>
                </div>    

                {/* exmm */}
                {/* <div>
                    <h1 className="border-b-1">Education</h1>
                    <div className="flex flex-col gap-4 mt-4">
                        {cvData.education.map((education,index)=>(
                            <div key={index} className="flex flex-col gap-2">
                                <h2 className="text-xl">{education.school}</h2>
                                <p className="text-[1rem]">{education.degree}</p>
                                <p className="text-[1rem]">{education.startDate} - {education.endDate}</p>
                            </div>
                        ))}
                    </div>
                </div> 
                <div>
                    <h1 className="border-b-1">Education</h1>
                    <div className="flex flex-col gap-4 mt-4">
                        {cvData.education.map((education,index)=>(
                            <div key={index} className="flex flex-col gap-2">
                                <h2 className="text-xl">{education.school}</h2>
                                <p className="text-[1rem]">{education.degree}</p>
                                <p className="text-[1rem]">{education.startDate} - {education.endDate}</p>
                            </div>
                        ))}
                    </div>
                </div> 
                <div>
                    <h1 className="border-b-1">Education</h1>
                    <div className="flex flex-col gap-4 mt-4">
                        {cvData.education.map((education,index)=>(
                            <div key={index} className="flex flex-col gap-2">
                                <h2 className="text-xl">{education.school}</h2>
                                <p className="text-[1rem]">{education.degree}</p>
                                <p className="text-[1rem]">{education.startDate} - {education.endDate}</p>
                            </div>
                        ))}
                    </div>
                </div>    */}
                          {/*  end debu*/}
            </div>
        </div>
        </div>
        {/* <div className="md:hidden text-white h-screen w-screen flex items-center justify-center">Please view on laptop or tablet bigger than 600px for better experience</div> */}
        </>


    )
}

function Info({Icon,text}){
    return (
        <div className="flex items-center gap-2">
            <Icon className="text-2xl"/>
            <p className="">{text}</p>
        </div>
    )
}

export default CV