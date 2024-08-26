import React from 'react';

const DeleteCourse = ({ deleteCourse, index }) => {
  return (
    <button onClick={() => deleteCourse(index)}>Delete</button>
  );
};

export default DeleteCourse;
