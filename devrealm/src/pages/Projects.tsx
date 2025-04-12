import { Header } from "../components/Header/Header";
import { ProjectCard } from "../components/ProjectCard";
import { style } from "@vanilla-extract/css";
import { vars } from "../styles/theme.css";

const gridStyle = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: vars.spacing.md,
  padding: vars.spacing.lg,
});

const projects = [
  {
    title: "Project 1",
    description: "A cool web app built with React.",
    link: "https://example.com",
  },
  {
    title: "Project 2",
    description: "A machine learning dashboard.",
    link: "https://example.com",
  },
];

export function Projects() {
  return (
    <>
      <Header />
      <section className={gridStyle}>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </section>
    </>
  );
}
