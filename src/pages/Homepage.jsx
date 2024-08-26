import React from "react";
import Header from '../Components/header'
import Footer from '../Components/footer'
import '../styles/main.css'
import '../styles/home/home.css'
import SuccessCard from '../Components/successCard';
import StudentCount from '../Components/studentCount'
import { useNavigate } from "react-router-dom";

const Homepage = () => {
    const navigate = useNavigate();
    return(
        <>
        <div className="home">
            <div className="home-container">
                <Header/>
                <div className="main-div">
                    <div className="hero-section">
                        <div className="container">
                            <div className="text-container">
                            <h1>Studying Online is now much easier</h1>
                            <p>CSR e-learning platform is an interesting platform that will teach you more in an interactive way</p>
                            <div className="buttons">
                                <button className="join" onClick={() => {navigate('/signup')}}>Join for free</button>
                                {/* <button className="watch">Watch how it works</button> */}
                            </div>
                            </div>
                            <div className="image-container">
                                <img src="/images/class.png" alt="hero image" />
                            </div>
                            <img src="/images/info.png" alt="" className="info" />
                            
                        </div>
                        <div className="curve">
                            
                        </div>
                    </div>
                    <div className="success-section">
                        <div className="container">
                            {/* <div className="description">
                                <h3>Our Success</h3>
                                <p>Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci. </p>
                            </div> */}
                            <div className="numbers">
                                <StudentCount number='15K+' description='Students' />
                                <StudentCount number='5' description='Departments' />
                                <StudentCount number='26' description='Chief Experts'/>
                                <StudentCount number='5' description='Years Of Experience'/>
                            </div>

                            {/* <div className="software">
                                <h3>All-In-One Cloud Software</h3>
                                <p>CSR Ltd is one powerful online software suite that combines all the tools needed to run a successful school or office.
                                </p>

                            </div> */}

                            {/* <div className="cards">
                                <SuccessCard/>

                            </div> */}
                        </div>
                    </div>

                    <div className="about-us-section">
                        <div className="container">
                            <div className="description">
                                <h3>What is CSR Ltd E-learning platform?
                                </h3>
                                <p>CSR Ltd is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
                            </div>
                            <div className="cards">
                                <SuccessCard description="Teachers upload various educational materials & students can access course materials in a self-paced learning environment" title="Accessibility to Learning Resources"/>
                                <SuccessCard description="This educational platform streamlines the management of courses and evaluations for teachers" title="Streamlined Course Management" />
                                <SuccessCard description="Teachers can easily schedule and share information for all students to stay informed and participate in learning sessions" title="Communication & Collaboration" />
                            </div>
                            <div className="more-info">
                                <div className="text-container">
                                    <h4>
                                    Everything you can do in a physical classroom, you can do with CSR Ltd
                                    </h4>
                                    <p>The platform helps traditional and online courses manage scheduling and virtual classrooms all in one secure cloud-based system.</p>
                                    <a href="https://www.youtube.com/watch?v=eBEswRd4l64" target="_blank">Learn more</a>
                                </div>
                                <div className="image-container">
                                    <img src="/images/play-button.svg" alt="play button" onClick={() => window.open('https://www.youtube.com/watch?v=eBEswRd4l64', '_blank')} style={{cursor: 'pointer'}} />
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    {/* <div className="features-section">
                        <div className="container">
                            <div className="description">
                                <h3>Our Features</h3>
                                <p>This very extraordinary feature, can make learning activities more efficient </p>
                            </div>
                            <div className="more-info">
                                <div className="image-container">

                                </div>
                                <div className="text-container">
                                    <h3>A user interface designed for the classroom</h3>
                                    <div className="feature">
                                        <div className="icon"></div>
                                        <p>Teachers don’t get lost in the grid view and have a dedicated Podium space.
                                        </p>
                                    </div>
                                    <div className="feature">
                                        <div className="icon"></div>
                                        <p>Teachers don’t get lost in the grid view and have a dedicated Podium space.
                                        </p>
                                    </div>
                                    <div className="feature">
                                        <div className="icon"></div>
                                        <p>Teachers don’t get lost in the grid view and have a dedicated Podium space.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div className="courses-section">
                        <div className="container">
                        <div className="courses">
                            <div className="explore-overlay">
            <h2>Explore</h2>
            <button className="view-courses-btn" onClick={() => navigate('/courses')}>View our courses</button>
          </div>

                            </div>
                            <div className="description">
                                <h3>View courses available & Enroll</h3>
                                <p>Start a course today and learn new skills with all of the necessary tools for your progress.</p>
                            </div>
                            
                        </div>
                    </div>

                    {/* <div className="testimonial-section">
                        <div className="container">
                            <div className="description">
                                <h3>What They Say?</h3>
                                <p>
                                TOTC has got more than 100k positive ratings from our users around the world.  
                                Some of the students and teachers were greatly helped by the Skilline.
                                </p>
                            </div>
                            <div className="testimonial-button">
                            Are you too? Please give your assessment
                            <button>Write your assessment</button>
                            </div>
                        </div>
                    </div> */}
                </div>
                <Footer/>
            </div>
        </div>
        </>
    )

}

export default Homepage;