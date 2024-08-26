import React from 'react';
import './App.scss';
import CourseHeader from './components/CourseHeader';
import CourseInfo from './components/CourseInfo';
import SessionList from './components/SessionList';
import ProgressBar from './components/ProgressBar';
import LessonList from './components/LessonList';

function App() {
  return (
    <div className="app">
      <CourseHeader />
      <CourseInfo />
      <SessionList />
      <ProgressBar />
      <LessonList />
    </div>
  );
}

export default App;

