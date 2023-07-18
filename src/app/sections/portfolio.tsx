import ProjectCard from "@/components/projectcard/projectcard";
import projectsData from "../../data/projects.json";
import "../../styles/portfolio.css";

export default function Portfolio() {
  return (
    <div
      id="portfolio"
      className="portfolio-section"
      style={{ height: "100%" }}
    >
      <h2>Portfolio</h2>
      <div className="portfolio-container">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
