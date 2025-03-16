import ProjectCard from './ProjectCard';

interface ProjectsSectionProps {
    projects: {
        title: string;
        description: string;
        imageUrl: string;
        technologies: string[];
        githubLink?: string;
        liveLink?: string;
    }[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({projects}) => {
  return (
    <section id="projects" className="py-20 w-full">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;