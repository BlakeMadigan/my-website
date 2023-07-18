import "./projectcard.css";
import Link from "next/link";

export default function ProjectCard({ project }) {
  const { title, description, stack, url } = project;

  return (
    <div className="project-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <span>Software</span>
      <ul>
        {stack.map((item) => (
          <li key={item}>{item},</li>
        ))}
      </ul>
      <Link href={url}>View Project</Link>
    </div>
  );
}
