import { style } from "@vanilla-extract/css";
import { vars } from "../styles/theme.css";

const cardStyle = style({
  border: `1px solid ${vars.colors.secondary}`,
  borderRadius: "8px",
  padding: vars.spacing.md,
  maxWidth: "300px",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
});

const titleStyle = style({
  fontSize: "1.5rem",
  marginBottom: vars.spacing.sm,
});

const buttonStyle = style({
  backgroundColor: vars.colors.primary,
  color: "white",
  padding: vars.spacing.sm,
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
});

type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
};

export function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <div className={cardStyle}>
      <h3 className={titleStyle}>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button className={buttonStyle}>View Project</button>
      </a>
    </div>
  );
}
