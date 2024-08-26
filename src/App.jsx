import React from 'react';
import CourseListWithPagination from '../src/Components/CourseListWithPagination';
import Button from '../src/Components/Button';
import {Courses} from '../src/Components/Courses';

const App = () => {
  return (<>
    <div className="main-layout">
      <div className="course-actions">
        <Button label="Add New Course"/>
        <Button label="Manage Courses" />
      </div>
      <CourseListWithPagination Courses={Courses} />
  
    </div>
    </>
  );
};

export default App;
