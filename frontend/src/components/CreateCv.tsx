import { useDispatch, useSelector } from "react-redux";
import {  setContact, setName } from "../redux/cv";
import {
  addExperience,
  removeExperience,
  updateExperience,
} from "../redux/cv";

const CreateCv = () => {
  const {currentIndex} = useSelector((state) => state.cv);
  console.log(currentIndex);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        {
          currentIndex === 1 && <Contact />
        }
        {
          currentIndex === 0 && <ExperienceSection />
        }
      </div>
    </div>
  );
};





 function ExperienceSection() {
  const dispatch = useDispatch();
  const experience = useSelector((state) => state.cv.experience);

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-bold text-center">Experience</h1>

      {experience.map((exp, index) => (
        <div
          key={index}
          className="p-6 rounded-lg shadow-md bg-white border flex flex-col gap-6"
        >
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold">Job {index + 1}</h2>
            {experience.length > 1 && (
              <button
                onClick={() => dispatch(removeExperience(index))}
                className="text-red-600 hover:text-red-800 text-sm"
              >
                Remove
              </button>
            )}
          </div>

          {/* Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Input
              label="Company"
              value={exp.company}
              onChange={(value) =>
                dispatch(updateExperience({ index, value: { company: value } }))
              }
            />

            <Input
              label="Position"
              value={exp.position}
              onChange={(value) =>
                dispatch(updateExperience({ index, value: { position: value } }))
              }
            />

            <Input
              type="date"
              label="Start Date"
              value={exp.startDate}
              onChange={(value) =>
                dispatch(updateExperience({ index, value: { startDate: value } }))
              }
            />

            <Input
              type="date"
              label="End Date"
              value={exp.endDate}
              onChange={(value) =>
                dispatch(updateExperience({ index, value: { endDate: value } }))
              }
            />
          </div>

          {/* Summary */}
          <textarea
            className="border p-3 rounded-md w-full min-h-[100px]"
            value={exp.summary}
            placeholder="Summary of your role..."
            onChange={(e) =>
              dispatch(updateExperience({ index, value: { summary: e.target.value } }))
            }
          />

          {/* Highlights */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold">Highlights</h3>

            {exp.highlights.map((hl, hlIndex) => (
              <input
                key={hlIndex}
                value={hl}
                placeholder={`Highlight ${hlIndex + 1}`}
                onChange={(e) => {
                  const newHighlights = [...exp.highlights];
                  newHighlights[hlIndex] = e.target.value;
                  dispatch(updateExperience({ index, value: { highlights: newHighlights } }));
                }}
                className="border-b p-2 focus:border-purple-600"
              />
            ))}

            {/* Add Highlight */}
            <button
              onClick={() => {
                dispatch(updateExperience({ index, value: { highlights: [...exp.highlights, ""] } }));
              }}
              className="text-purple-700 text-sm"
            >
              + Add Highlight
            </button>
          </div>
        </div>
      ))}

      {/* Add Experience Button */}
      <button
        onClick={() => dispatch(addExperience())}
        className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md self-start"
      >
        + Add Another Experience
      </button>
    </div>
  );
}

function Input({ label, value, onChange, type = "text" }) {
  return (
    <div className="flex flex-col w-full">
      <label className="font-medium text-sm">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border-b p-2 focus:border-purple-600"
      />
    </div>
  );
}


// function Input({ label, value, onChange, type = "text" }) {
//   return (
//     <div className="flex flex-col w-full">
//       <label className="font-medium text-sm">{label}</label>
//       <input
//         type={type}
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         className="border-b p-2 focus:border-purple-600"
//       />
//     </div>
//   );
// }



function Contact() {
  const {contact,name} = useSelector((state) => state.cv);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="text-center">
        <h1 className="font-extrabold text-2xl md:text-3xl text-gray-800">
          Contact Information
        </h1>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Add your up-to-date contact details so employers can easily reach you.
        </p>
      </div>

      <form className="text-lg grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
        <Input value={name} onChange={(e)=>dispatch(setName(e.target.value))} placeholder="Your Full Name" />
        <Input value={contact.email} placeholder="Your Email" onChange={(e)=>dispatch(setContact({email:e.target.value}))} />
        <Input value={contact.phone} placeholder="Your Phone Number" onChange={(e)=>dispatch(setContact({phone:e.target.value}))} />
        <Input value={contact.linkedin} placeholder="Your LinkedIn Profile" onChange={(e)=>dispatch(setContact({linkedin:e.target.value}))} />
        <Input value={contact.github} placeholder="Your Github Profile" onChange={(e)=>dispatch(setContact({github:e.target.value}))} />
        <Input value={contact.address} placeholder="Your Address" className="sm:col-span-2" onChange={(e)=>dispatch(setContact({address:e.target.value}))} />
      </form>
     <PreNext />
    </div>
  );
}


function PreNext(){
  const dispatch = useDispatch();
  const {currentIndex} = useSelector((state) => state.cv);
  function increment(){
    if(currentIndex === 2){
      return
    }
    dispatch(indexIncr())
  }
  function decrement(){
    if(currentIndex === 0){
      return
    }
    dispatch(indexDecr())
  }
  return(
    <div className="flex  items-center justify-between w-full">
    <h1 className="px-4 py-2  text-white text-xl font-semibold bg-purple-800 inline-block w-fit text-center"
    onClick={()=>increment()}
    >Next</h1>
    <h1 className="px-4 py-2  text-white text-xl font-semibold bg-purple-800 inline-block w-fit text-center"
    onClick={()=>decrement()}
    >Previous</h1>
    </div>
  )
}

// function Input({ placeholder, className = "" ,onChange,value}) {
//   return (
//     <input
//       type="text"
//       placeholder={placeholder}
//       value={value}
//       onChange={onChange}
//       className={`border-b border-gray-300 w-full p-2 focus:outline-none focus:border-purple-600 transition-all ${className}`}
//     />
//   );
// }

export default CreateCv;
