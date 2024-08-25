import React, { useState } from 'react';
import '../../styles/popup/popup.css';
import { useAppContext } from "../../context/Context";
import { IoClose, IoCamera } from "react-icons/io5";






const CoursePopup = () => {
    const { isPopupOpen, openPopup, closePopup } = useAppContext();
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        courseName: '',
        industry: '',
        description: '',
        startDate: '',
        endDate: '',
        proficiencyLevel: '',
        image: null,
        skills: ''
    });
    const [skillsList, setSkillsList] = useState([]);


    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'file' ? files[0] : value,
        }));
    };

    const addSkill = () => {
        if (formData.skills.trim() !== '') {
            setSkillsList(prevSkills => [...prevSkills, formData.skills.trim()]);
            setFormData(prevData => ({
                ...prevData,
                skills: ''
            }));
        }
    };
    const handleDeleteSkill = (indexToDelete) => {
        setSkillsList(prevSkills => prevSkills.filter((_, index) => index !== indexToDelete));
    };
    const handleNext = () => {
        setCurrentStep(prevStep => prevStep + 1);
    };
    const handlePrevious = () => {
        setCurrentStep(prevStep => prevStep - 1);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const completeFormData = { ...formData, skillsList };
        console.log('Form Data:', completeFormData);
    };


    if (!isPopupOpen) return null;
    return (
        <div className="overlay">
            <div className="popup">
                <div className="add-course">
                    <div className="title">
                        <h3>Add new course</h3>
                        <div className="icon">
                            <button onClick={closePopup}>
                                <IoClose />
                            </button>
                        </div>
                    </div>
                    <form id="form" onSubmit={handleSubmit}>
                        {currentStep === 1 && (
                            <div className="form-step">
                                <div className="input-fields">
                                    <input
                                        type="text"
                                        name="courseName"
                                        placeholder="Course Name"
                                        value={formData.courseName}
                                        onChange={handleChange}
                                    />
                                    <select
                                        name="industry"
                                        value={formData.industry}
                                        onChange={handleChange}
                                    >
                                        <option value="" disabled hidden>Select the Industry</option>
                                        <option value="Accounting">Accounting</option>
                                        <option value="Languages">Languages</option>
                                        <option value="graphic_design">Graphic Design</option>
                                        <option value="software_engineering">Software Engineering</option>
                                        <option value="tech_support">Tech Support</option>
                                        <option value="digital_marketing">Digital Marketing</option>
                                    </select>
                                </div>
                                <div className="input-fields">
                                    <textarea
                                        name="description"
                                        placeholder="Enter task Description"
                                        value={formData.description}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="input-fields">
                                    <div className="field">
                                        <label>Start date</label>
                                        <input
                                            type="date"
                                            name="startDate"
                                            value={formData.startDate}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="field">
                                        <label>End date</label>
                                        <input
                                            type="date"
                                            name="endDate"
                                            value={formData.endDate}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="input-fields">
                                    <select
                                        name="proficiencyLevel"
                                        value={formData.proficiencyLevel}
                                        onChange={handleChange}
                                    >
                                        <option value="" disabled hidden>Select Proficiency Level</option>
                                        <option value="beginner_friendly">Beginner Friendly</option>
                                        <option value="intermediate">Intermediate</option>
                                        <option value="professional">Professional</option>
                                    </select>
                                </div>
                                <div className="btns">
                                    <button
                                        className="bttn cancel-btn"
                                        type="button"
                                        onClick={closePopup}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className="bttn add-btn"
                                        type="button"
                                        onClick={handleNext}
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        )}
                        {currentStep === 2 && (
                            <div className="form-step">
                                <div className="input-fields">
                                    <input
                                        type="file"
                                        placeholder='Select an image'
                                        name="image"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="input-fields">
                                    <input
                                        type="text" name="skills" placeholder="Skills Needed"
                                        value={formData.skills}
                                        onChange={handleChange}
                                    />
                                    <button type="button" onClick={addSkill} className="add-skill-btn">+</button>
                                </div>
                                <div className="skills-list">
                                    {skillsList.map((skill, index) => (
                                        <div key={index} className="skill-item">
                                            {skill}
                                            <button
                                                type="button"
                                                onClick={() => handleDeleteSkill(index)}
                                                className="delete-skill-btn"
                                            >
                                                x
                                            </button>
                                        </div>
                                    ))}
                                </div>
                                
                                <div className="btns">
                                    <button
                                        className="bttn cancel-btn"
                                        type="button"
                                        onClick={handlePrevious}
                                    >
                                        Previous
                                    </button>
                                    <button
                                        className="bttn add-btn"
                                        type="submit"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CoursePopup;






