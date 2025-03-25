// import aboutMeImage from '../assets/aboutme.jpg'; 
// import Footer from './Footer';

// function About () {
//   return (
//     <div className="about-page">
//       <h1>About</h1>

//       <div className="about-content">
//         {/* About Me Image */}
//         <div className="about-image">
//           <img src={aboutMeImage} alt="About Me" />
//         </div>

//         {/* Bio Section */}
//         <div className="bio-section">
//           <h2>About Me</h2>
//           <p>
//             Hello! I'm a passionate web developer with a love for building
//             interactive and user-friendly websites. I specialize in frontend
//             technologies like React.js and CSS. My goal is to create efficient,
//             scalable, and enjoyable digital experiences.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;




import React, { useState, useEffect } from 'react';
import aboutMeImage from '../assets/aboutme.jpg'; 
import Footer from './Footer';

function About () {
  
  const [bioData, setBioData] = useState(null); 
  const [loading, setLoading] = useState(true); 

 
  useEffect(() => {
   
    setTimeout(() => {
      setBioData({
        name: "Jenny Kim",
        profession: "UIUX Designner and Web Developer",
        description: "🚀 Turning creative ideas into interactive web experiences! Obsessed with designing websites that don’t just look good but feel amazing to use. Let’s build something awesome together! 🌐✨"
      });
      setLoading(false); 
    }, 2000); 
  }, []); 

  if (loading) {
    return <p>Loading...</p>; 
  }

  return (
    <div className="about-page">
      <h1>About</h1>

      <div className="about-content">
       
        <div className="about-image">
          <img src={aboutMeImage} alt="About Me" />
        </div>

       
        <div className="bio-section">
          <h2>Hi, This is {bioData.name}</h2>
          <p>{bioData.description}</p>
        </div>
      </div>
    </div>
  );
}

export default About;
