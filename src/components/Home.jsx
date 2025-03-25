// import React from 'react';
// import { Link } from 'react-router-dom'; // For navigation
// import Footer from './Footer';

// // Import images
// import cloudLeft from '../assets/cloud1.jpg'; // cloud1.jpg
// import cloudRight from '../assets/cloud2.jpg'; // cloud2.jpg
// import paragraph from '../assets/paragraph.jpg'; // paragraph.jpg

// const Home = () => {
//   console.log("Rendering Home");

//   return (
//     <div>
//       <h1>Home</h1>
//       <p>Welcome to my portfolio!</p>

//       {/* Only render the clouds and paragraph in Home page */}
//       <div className="container">
//         <div className="paragraph">
//           <img src={paragraph} alt="Paragraph" />
//         </div>

//         <div className="cloud cloud1">
//           <img src={cloudLeft} alt="Cloud1" />
//         </div>
//         <div className="cloud cloud2">
//           <img src={cloudRight} alt="Cloud2" />
//         </div>
//       </div>

//       {/* New Content Section */}
//       <section className="home-content">
//         <h2>About This Portfolio</h2>
//         <p>
//           This portfolio showcases my skills, projects, and experience. I hope you enjoy exploring it!
//         </p>

//         {/* "Learn More About Me" Button */}
//         <Link to="/about">
//           <button className="learn-more-btn">Learn More About Me</button>
//         </Link>
//       </section>
//     </div>
//   );
// };

// export default Home;



import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // For navigation
import Footer from './Footer';

// Import images
import cloudLeft from '../assets/cloud1.jpg'; // cloud1.jpg
import cloudRight from '../assets/cloud2.jpg'; // cloud2.jpg
import paragraph from '../assets/paragraph.jpg'; // paragraph.jpg

const Home = () => {
  // useState for handling click count
  const [counter, setCounter] = useState(0); // State to keep track of button clicks

  // Handle button click to increment counter
  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to my portfolio!</p>

      {/* Only render the clouds and paragraph in Home page */}
      <div className="container">
        <div className="paragraph">
          <img src={paragraph} alt="Paragraph" />
        </div>

        <div className="cloud cloud1">
          <img src={cloudLeft} alt="Cloud1" />
        </div>
        <div className="cloud cloud2">
          <img src={cloudRight} alt="Cloud2" />
        </div>
      </div>

      {/* New Content Section */}
      <section className="home-content">
        <h2>About This Portfolio</h2>
        <p>
          This portfolio showcases my skills, projects, and experience. I hope you enjoy exploring it!
        </p>

        {/* "Learn More About Me" Button */}
        <Link to="/about">
          <button className="learn-more-btn">Learn More About Me</button>
        </Link>

        {/* Display the counter value */}
        <div>
          <p>You've clicked the button {counter} times!</p> {/* Show the current counter */}
          <button onClick={handleClick}>Click Me</button> {/* Button to increment the counter */}
        </div>
      </section>
    </div>
  );
};

export default Home;

