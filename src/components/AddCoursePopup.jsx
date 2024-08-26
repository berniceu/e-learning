import React from 'react';

const AddCoursePopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="popup-header">
          <h2>Add new course</h2>
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
        </div>

        <form className="course-form">
          <div className="form-group">
            <input type="text" placeholder="Course name" required />
            <input type="text" placeholder="Industry" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Course Details" rows="4" required></textarea>
          </div>
          <div className="form-group">
            <input type="date" placeholder="Start Date" required />
            <input type="date" placeholder="End Date" required />
          </div>
          <div className="form-group">
            <select required>
              <option value="" disabled selected>
                Proficiency Level
              </option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
          <div className="form-actions">
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="next-btn">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoursePopup;
