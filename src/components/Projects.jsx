import projectThumbnail1 from '../assets/work1.jpg';
import projectThumbnail2 from '../assets/work2.jpg';
import projectThumbnail3 from '../assets/work3.jpg';
import Footer from './Footer';

function Projects () {
  return (
    <div>
      <h1>Projects</h1>
      <p>Checkout My Cool Projects!</p>

      {/* Project Cards */}
      <div className="project-cards">
      
        <div className="project-card">
          <img src={projectThumbnail1} alt="Project 1" className="project-thumbnail" />
          <div className="project-info">
            <h3>Find My Park</h3>
            <p>GPS Based App that Finds Perfect Spot for You.</p>
          </div>
        </div>

        <div className="project-card">
          <img src={projectThumbnail2} alt="Project 2" className="project-thumbnail" />
          <div className="project-info">
            <h3>Light Wins Dark</h3>
            <p>AI Tool that Helps Making the Right Decisions and Guidance for Users.</p>
          </div>
        </div>

        <div className="project-card">
          <img src={projectThumbnail3} alt="Project 3" className="project-thumbnail" />
          <div className="project-info">
            <h3>Homer st. Cafe & Bar (Responsive)</h3>
            <p>There is No Place Like Homer.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
