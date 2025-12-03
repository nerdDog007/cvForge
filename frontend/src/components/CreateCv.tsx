import { useSelector } from "react-redux";
import CV1 from "./CV1"

const CreateCv = () => {
  const cvData = useSelector((state) => state.createCv)    
  console.log(cvData);
  
  return (
    <div className="flex items-center bg-black ">
        <CV1 cvData={cvData}/>     
    </div>
  )
}

export default CreateCv