import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import '../styles/main.css';
import '../styles/home/home.css';

const Homepage = () => {
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
                            <p>TOTC is an interesting platform that will teach you in more an interactive way</p>
                            <div className="buttons">
                                <button className="join">Join for free</button>
                                {/* <button className="watch">Watch how it works</button> */}
                            </div>
                            </div>
                            <div className="image-container">
                                <img src="/images/hero-image.png" alt="hero image" />
                            </div>
                            
                        </div>
                        <div className="curve">
                            
                        </div>
                    </div>
                    <div className="success-section">
                        <div className="container">
                            <div className="description">
                                <h3>Our Success</h3>
                                <p>Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci. </p>
                            </div>
                            <div className="numbers">
                                <div className="number">
                                    <h4>15K+</h4>
                                    <p>Students</p>
                                </div>
                            </div>

                            <div className="software">
                                <h3>All-In-One Cloud Software</h3>
                                <p>CSR Ltd is one powerful online software suite that combines all the tools needed to run a successful school or office.
                                </p>

                            </div>

                            <div className="cards">

                            </div>
                        </div>
                    </div>

                    <div className="about-us-section">
                        <div className="container">
                            <div className="description">
                                <h3>What is CSR Ltd?</h3>
                                <p>CSR Ltd is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
                            </div>
                            <div className="cards">

                            </div>
                            <div className="more-info">
                                <div className="text-container">
                                    <h4>
                                    Everything you can do in a physical classroom, you can do with CSR Ltd
                                    </h4>
                                    <p>TOTC’s school management software helps traditional and 
online schools manage scheduling, attendance, payments 
and virtual classrooms all in one secure cloud-based system.</p>
                                    <a href="">Learn more</a>
                                </div>
                                <div className="image-container">

                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div className="features-section">
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
                    </div>

                    <div className="courses-section">
                        <div className="container">
                            <div className="description">
                                <h3>Explore Courses</h3>
                                <p>Choose from over 220,000 online video courses with new additions published every month</p>
                            </div>
                            <div className="courses">

                            </div>
                        </div>
                    </div>

                    <div className="testimonial-section">
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
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
        </>
    )

}

export default Homepage;