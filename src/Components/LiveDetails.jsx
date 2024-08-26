import React from 'react';

function LiveDetails() {
  return (
    <>
    <div className="live-details">
          <div className='live-logo'>
            <img
              src="pictures/Rectangle 1.png"
              alt="CSR Ltd"
            />
            <div>
              <h2>COURSE : Live Class</h2>
              <h3>Name of the course</h3>
            </div>
          </div>
          <button className="live-button">
            Go back
          </button>
        </div>
    <div className="lesson-details">
        <img src="pictures/Frame 8.png" alt="" />
        <div className='text'><h4>Today's Lesson</h4>
        <h2>Solving Problems</h2>
        <p>If you don't face up to problems, you'll never solve them. Practice "troubleshooting" some big issues: maybe your classmates have a solution?</p>
          <div className='timer'>
          <svg width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M13.7328 27.5C21.3172 27.5 27.4655 21.4558 27.4655 14C27.4655 6.54416 21.3172 0.5 13.7328 0.5C6.14837 0.5 0 6.54416 0 14C0 21.4558 6.14837 27.5 13.7328 27.5ZM14.7328 5.75003C14.7328 5.19774 14.285 4.75003 13.7328 4.75003C13.1805 4.75003 12.7328 5.19774 12.7328 5.75003V13.75C12.7328 14.4404 13.2924 15 13.9828 15H19.0733C19.6256 15 20.0733 14.5523 20.0733 14C20.0733 13.4477 19.6256 13 19.0733 13H14.7328V5.75003Z" fill="#222222"/>
          </svg>
          <p>45 min</p>
          <p>Class Start at 10:00</p>
          </div>
          <div><button className='cancel-btn'>Cancel</button>
          <button className='join-btn'>Save Changes</button></div>
          </div> 
        
      </div>
    </>
  );
}

export default LiveDetails;