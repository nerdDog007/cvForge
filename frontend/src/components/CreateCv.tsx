import { useDispatch, useSelector } from "react-redux";
import {  addEducation, indexDecr, indexIncr, removeEducation, setContact, setName } from "../redux/cv";
import {
  addExperience,
  removeExperience,
  updateExperience,
} from "../redux/cv";
import {  updateEducation } from "../redux/cv";
import { GraduationCap, Plus, Trash2, Calendar, Edit2 } from "lucide-react";
import { addProject, updateProject, removeProject } from "../redux/cv";
import { FolderGit2, ExternalLink } from "lucide-react";
import { useState } from "react";
import { addSkill, updateSkill, removeSkill } from "../redux/cv";
import { Code, Check, X } from "lucide-react";
import { setDescription } from "../redux/cv";
import { FileText, Lightbulb, Sparkles } from "lucide-react";

const CreateCv = () => {
  const cv = useSelector((state) => state.cv);
  console.log(cv);
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        {
          cv.currentIndex === 0 && <Contact />
        }
        {
          cv.currentIndex === 1 && <ExperienceSection />
        }
        {
          cv.currentIndex === 2 && <Education />
        }
        {
          cv.currentIndex === 3 && <Skills />
        }
        {
          cv.currentIndex === 4 && <Projects />
        }
        {
          cv.currentIndex === 5 && <Summary />
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
      <PreNext />
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


const Education = () => {
  const dispatch = useDispatch();
  const educationList = useSelector((state) => state.cv.education);
  console.log(educationList);
  
  const handleAddEducation = () => {
    dispatch(addEducation());
  };

  const handleRemoveEducation = (index: number) => {
    if (educationList.length > 1) {
      dispatch(removeEducation(index));
    }
  };

  const handleChange = (index: number, field: string, value: string) => {
    dispatch(updateEducation({ index, value: { [field]: value } }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <GraduationCap className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-800">Education</h2>
        </div>
        <button
          onClick={handleAddEducation}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Education
        </button>
      </div>

      <div className="space-y-6">
        {educationList.map((edu, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-gray-700">
                Education #{index + 1}
              </h3>
              {educationList.length > 1 && (
                <button
                  onClick={() => handleRemoveEducation(index)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  School/University
                </label>
                <input
                  type="text"
                  value={edu.school}
                  onChange={(e) => handleChange(index, "school", e.target.value)}
                  placeholder="e.g., Harvard University"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Degree/Program
                </label>
                <input
                  type="text"
                  value={edu.degree}
                  onChange={(e) => handleChange(index, "degree", e.target.value)}
                  placeholder="e.g., Bachelor of Science in Computer Science"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="w-4 h-4 inline mr-1" />
                  Start Date
                </label>
                <input
                  type="month"
                  value={edu.startDate}
                  onChange={(e) => handleChange(index, "startDate", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="w-4 h-4 inline mr-1" />
                  End Date
                </label>
                <input
                  type="month"
                  value={edu.endDate}
                  onChange={(e) => handleChange(index, "endDate", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-gray-50 rounded-xl p-6 border border-gray-200">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Preview</h3>
        <div className="space-y-4">
          {educationList.map((edu, index) => (
            <div key={index} className="border-l-4 border-blue-600 pl-4">
              <h4 className="font-semibold text-gray-800">
                {edu.degree || "Degree Name"}
              </h4>
              <p className="text-gray-600">{edu.school || "School Name"}</p>
              <p className="text-sm text-gray-500">
                {edu.startDate && edu.endDate
                  ? `${new Date(edu.startDate + "-01").toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })} - ${new Date(edu.endDate + "-01").toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}`
                  : "Date range"}
              </p>
            </div>
          ))}
        </div>
      </div>
      <PreNext />
    </div>
  );
};


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
        <Inputt value={name} onChange={(e)=>dispatch(setName(e.target.value))} placeholder="Your Full Name" />
        <Inputt value={contact.email} placeholder="Your Email" onChange={(e)=>dispatch(setContact({email:e.target.value}))} />
        <Inputt value={contact.phone} placeholder="Your Phone Number" onChange={(e)=>dispatch(setContact({phone:e.target.value}))} />
        <Inputt value={contact.linkedin} placeholder="Your LinkedIn Profile" onChange={(e)=>dispatch(setContact({linkedin:e.target.value}))} />
        <Inputt value={contact.github} placeholder="Your Github Profile" onChange={(e)=>dispatch(setContact({github:e.target.value}))} />
        <Inputt value={contact.address} placeholder="Your Address" className="sm:col-span-2" onChange={(e)=>dispatch(setContact({address:e.target.value}))} />
      </form>
     <PreNext />
    </div>
  );
}


const Skills = () => {
  const dispatch = useDispatch();
  const skills = useSelector((state) => state.cv.skills);
  const [newSkill, setNewSkill] = useState("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editValue, setEditValue] = useState("");

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      dispatch(addSkill(newSkill.trim()));
      setNewSkill("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAddSkill();
    }
  };

  const handleRemoveSkill = (index: number) => {
    dispatch(removeSkill(index));
  };

  const startEditing = (index: number, value: string) => {
    setEditingIndex(index);
    setEditValue(value);
  };

  const saveEdit = () => {
    if (editValue.trim() && editingIndex !== null) {
      dispatch(updateSkill({ index: editingIndex, value: editValue.trim() }));
      setEditingIndex(null);
      setEditValue("");
    }
  };

  const cancelEdit = () => {
    setEditingIndex(null);
    setEditValue("");
  };

  const handleEditKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      saveEdit();
    } else if (e.key === "Escape") {
      cancelEdit();
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center gap-3 mb-6">
        <Code className="w-8 h-8 text-blue-600" />
        <h2 className="text-3xl font-bold text-gray-800">Skills</h2>
      </div>

      {/* Add Skill Section */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Add New Skill
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="e.g., JavaScript, React, Node.js"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          />
          <button
            onClick={handleAddSkill}
            disabled={!newSkill.trim()}
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            <Plus className="w-5 h-5" />
            Add
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Press Enter to add quickly
        </p>
      </div>

      {/* Skills List */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Your Skills ({skills.length})
        </h3>
        
        {skills.length === 0 ? (
          <div className="text-center py-8 text-gray-400">
            <Code className="w-12 h-12 mx-auto mb-2 opacity-50" />
            <p>No skills added yet. Start adding your skills above!</p>
          </div>
        ) : (
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg px-4 py-2 flex items-center gap-2 hover:shadow-md transition-all"
              >
                {editingIndex === index ? (
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      onKeyDown={handleEditKeyPress}
                      autoFocus
                      className="px-2 py-1 border border-blue-300 rounded focus:ring-2 focus:ring-blue-500 outline-none w-32"
                    />
                    <button
                      onClick={saveEdit}
                      className="text-green-600 hover:text-green-700"
                    >
                      <Check className="w-4 h-4" />
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="text-red-600 hover:text-red-700"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <>
                    <span className="text-blue-700 font-medium">{skill}</span>
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => startEditing(index, skill)}
                        className="text-blue-600 hover:text-blue-700 p-1"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleRemoveSkill(index)}
                        className="text-red-500 hover:text-red-700 p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Preview Section */}
      {skills.length > 0 && (
        <div className="mt-8 bg-gray-50 rounded-xl p-6 border border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Preview</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium border border-blue-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
      <PreNext />
    </div>
  );
};



const Projects = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.cv.projects);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const handleAddProject = () => {
    dispatch(addProject());
    setExpandedIndex(projects.length);
  };

  const handleRemoveProject = (index: number) => {
    if (projects.length > 1) {
      dispatch(removeProject(index));
      if (expandedIndex === index) {
        setExpandedIndex(null);
      }
    }
  };

  const handleChange = (index: number, field: string, value: any) => {
    dispatch(updateProject({ index, value: { [field]: value } }));
  };

  const handleAddDescription = (index: number) => {
    const currentDescriptions = projects[index].description;
    handleChange(index, "description", [...currentDescriptions, ""]);
  };

  const handleUpdateDescription = (projectIndex: number, descIndex: number, value: string) => {
    const currentDescriptions = [...projects[projectIndex].description];
    currentDescriptions[descIndex] = value;
    handleChange(projectIndex, "description", currentDescriptions);
  };

  const handleRemoveDescription = (projectIndex: number, descIndex: number) => {
    const currentDescriptions = projects[projectIndex].description.filter((_, i) => i !== descIndex);
    handleChange(projectIndex, "description", currentDescriptions);
  };

  const handleAddTechnology = (index: number) => {
    const currentTechnologies = projects[index].technologies;
    handleChange(index, "technologies", [...currentTechnologies, ""]);
  };

  const handleUpdateTechnology = (projectIndex: number, techIndex: number, value: string) => {
    const currentTechnologies = [...projects[projectIndex].technologies];
    currentTechnologies[techIndex] = value;
    handleChange(projectIndex, "technologies", currentTechnologies);
  };

  const handleRemoveTechnology = (projectIndex: number, techIndex: number) => {
    const currentTechnologies = projects[projectIndex].technologies.filter((_, i) => i !== techIndex);
    handleChange(projectIndex, "technologies", currentTechnologies);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <FolderGit2 className="w-8 h-8 text-indigo-600" />
          <h2 className="text-3xl font-bold text-gray-800">Projects</h2>
          <span className="text-sm bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-medium">
            Optional
          </span>
        </div>
        <button
          onClick={handleAddProject}
          className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Project
        </button>
      </div>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
          >
            {/* Header - Always Visible */}
            <div
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              className="flex items-center justify-between p-4 bg-gradient-to-r from-indigo-50 to-purple-50 cursor-pointer hover:from-indigo-100 hover:to-purple-100 transition-colors"
            >
              <div className="flex items-center gap-3">
                <FolderGit2 className="w-5 h-5 text-indigo-600" />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {project.name || `Project #${index + 1}`}
                  </h3>
                  {project.link && (
                    <p className="text-xs text-gray-500 flex items-center gap-1">
                      <ExternalLink className="w-3 h-3" />
                      {project.link}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                {projects.length > 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveProject(index);
                    }}
                    className="text-red-500 hover:text-red-700 transition-colors p-2"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                )}
                <span className="text-gray-400">
                  {expandedIndex === index ? "▲" : "▼"}
                </span>
              </div>
            </div>

            {/* Expandable Content */}
            {expandedIndex === index && (
              <div className="p-6 space-y-4">
                {/* Project Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Name
                  </label>
                  <input
                    type="text"
                    value={project.name}
                    onChange={(e) => handleChange(index, "name", e.target.value)}
                    placeholder="e.g., E-commerce Platform"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                  />
                </div>

                {/* Project Link */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Link (GitHub, Live Demo, etc.)
                  </label>
                  <input
                    type="url"
                    value={project.link}
                    onChange={(e) => handleChange(index, "link", e.target.value)}
                    placeholder="https://github.com/username/project"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                  />
                </div>

                {/* Description Points */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Description Points
                    </label>
                    <button
                      onClick={() => handleAddDescription(index)}
                      className="text-xs bg-indigo-100 text-indigo-700 px-3 py-1 rounded hover:bg-indigo-200 transition-colors"
                    >
                      + Add Point
                    </button>
                  </div>
                  <div className="space-y-2">
                    {project.description.map((desc, descIndex) => (
                      <div key={descIndex} className="flex gap-2">
                        <input
                          type="text"
                          value={desc}
                          onChange={(e) => handleUpdateDescription(index, descIndex, e.target.value)}
                          placeholder="e.g., Built a responsive UI with React and Tailwind"
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                        />
                        {project.description.length > 1 && (
                          <button
                            onClick={() => handleRemoveDescription(index, descIndex)}
                            className="text-red-500 hover:text-red-700 px-2"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Technologies Used
                    </label>
                    <button
                      onClick={() => handleAddTechnology(index)}
                      className="text-xs bg-indigo-100 text-indigo-700 px-3 py-1 rounded hover:bg-indigo-200 transition-colors"
                    >
                      + Add Tech
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="flex items-center gap-1 bg-gray-50 rounded-lg px-3 py-2 border border-gray-200">
                        <input
                          type="text"
                          value={tech}
                          onChange={(e) => handleUpdateTechnology(index, techIndex, e.target.value)}
                          placeholder="e.g., React"
                          className="w-24 bg-transparent outline-none text-sm"
                        />
                        {project.technologies.length > 1 && (
                          <button
                            onClick={() => handleRemoveTechnology(index, techIndex)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Preview Section */}
      <div className="mt-8 bg-gray-50 rounded-xl p-6 border border-gray-200">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Preview</h3>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-4 rounded-lg border-l-4 border-indigo-600">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-bold text-gray-800 text-lg">
                  {project.name || "Project Name"}
                </h4>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-700 text-sm flex items-center gap-1"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Link
                  </a>
                )}
              </div>
              {project.description.length > 0 && project.description[0] && (
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm mb-3">
                  {project.description.filter(d => d).map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              )}
              {project.technologies.length > 0 && project.technologies[0] && (
                <div className="flex flex-wrap gap-2">
                  {project.technologies.filter(t => t).map((tech, i) => (
                    <span
                      key={i}
                      className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <PreNext />
    </div>
  );
};



const Summary = () => {
  const dispatch = useDispatch();
  const description = useSelector((state) => state.cv.description);
  const name = useSelector((state) => state.cv.name);
  const title = useSelector((state) => state.cv.title);

  const handleChange = (value: string) => {
    dispatch(setDescription(value));
  };

  const characterCount = description.length;
  const wordCount = description.trim() ? description.trim().split(/\s+/).length : 0;
  const recommendedLength = { min: 50, max: 200 };

  const getProgressColor = () => {
    if (wordCount < recommendedLength.min) return "bg-yellow-500";
    if (wordCount > recommendedLength.max) return "bg-red-500";
    return "bg-green-500";
  };

  const exampleSummaries = [
    "Results-driven software engineer with 5+ years of experience building scalable web applications. Passionate about clean code, user experience, and solving complex problems with innovative solutions.",
    "Creative marketing professional specializing in digital strategy and brand development. Proven track record of increasing engagement by 200% through data-driven campaigns and compelling storytelling.",
    "Detail-oriented data analyst with expertise in Python, SQL, and machine learning. Experienced in transforming complex datasets into actionable insights that drive business decisions."
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center gap-3 mb-6">
        <FileText className="w-8 h-8 text-purple-600" />
        <h2 className="text-3xl font-bold text-gray-800">Professional Summary</h2>
      </div>

      {/* Main Input Section */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Write a brief summary about yourself
        </label>
        <textarea
          value={description}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Describe your professional background, key skills, and career objectives in 2-3 sentences..."
          rows={6}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none resize-none"
        />
        
        {/* Character & Word Count */}
        <div className="flex items-center justify-between mt-3 text-sm">
          <div className="flex items-center gap-4">
            <span className="text-gray-600">
              {wordCount} words
            </span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600">
              {characterCount} characters
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-full ${getProgressColor()} transition-all`}
                style={{
                  width: `${Math.min((wordCount / recommendedLength.max) * 100, 100)}%`
                }}
              />
            </div>
            <span className="text-xs text-gray-500">
              {wordCount < recommendedLength.min && "Too short"}
              {wordCount >= recommendedLength.min && wordCount <= recommendedLength.max && "Perfect!"}
              {wordCount > recommendedLength.max && "Too long"}
            </span>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6 mb-6">
        <div className="flex items-start gap-3">
          <Lightbulb className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Tips for a Great Summary</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>Keep it concise: Aim for 50-200 words (2-3 sentences)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>Highlight your key strengths and unique value proposition</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>Mention years of experience and your primary expertise</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>Use action words and quantify achievements when possible</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>Tailor it to the job you're applying for</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Example Summaries */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-purple-600" />
          <h3 className="font-semibold text-gray-800">Example Summaries</h3>
        </div>
        <div className="space-y-3">
          {exampleSummaries.map((example, index) => (
            <div
              key={index}
              className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-purple-300 transition-colors cursor-pointer group"
              onClick={() => handleChange(example)}
            >
              <p className="text-sm text-gray-700 leading-relaxed">
                {example}
              </p>
              <p className="text-xs text-purple-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                Click to use this example
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Preview Section */}
      {description && (
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Preview</h3>
          <div className="bg-white p-6 rounded-lg border-l-4 border-purple-600">
            {name && (
              <h4 className="text-2xl font-bold text-gray-800 mb-1">{name}</h4>
            )}
            {title && (
              <p className="text-lg text-gray-600 mb-4">{title}</p>
            )}
            <p className="text-gray-700 leading-relaxed text-justify">
              {description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};


function PreNext(){
  const dispatch = useDispatch();
  const {currentIndex} = useSelector((state) => state.cv);
  function increment(){
    if(currentIndex === 5){
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
    <div className="flex  items-center justify-between w-full mt-4">
    <h1 className="px-4 py-2  text-white text-xl font-semibold bg-purple-800 inline-block w-fit text-center"
    onClick={()=>increment()}
    >Next</h1>
    <h1 className="px-4 py-2  text-white text-xl font-semibold bg-purple-800 inline-block w-fit text-center"
    onClick={()=>decrement()}
    >Previous</h1>
    </div>
  )
}

function Inputt({ placeholder, className = "" ,onChange,value}) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border-b border-gray-300 w-full p-2 focus:outline-none focus:border-purple-600 transition-all ${className}`}
    />
  );
}

export default CreateCv;
