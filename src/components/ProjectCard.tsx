interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    imageUrl: string;
    technologies: string[];
    githubLink?: string;
    liveLink?: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const openLink = (url?: string) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover transition-all duration-300 hover:scale-110" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="mb-4">
          {project.technologies.map((tech, i) => (
            <span key={i} className="inline-block bg-gray-700 text-gray-300 px-2 py-1 rounded-lg text-sm mr-2 mb-2">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-5">
          {project.githubLink && (
            <button
              onClick={() => openLink(project.githubLink)}
              className="bg-indigo-500 text-white hover:underline font-bold py-2 px-4 rounded-lg transition duration-300 shadow-lg shadow-indigo-500/50 transition-all duration-300 hover:scale-110"
              aria-label={`View ${project.title} on GitHub`}
            >
              GitHub
            </button>
          )}
          {project.liveLink && (
            <button
              onClick={() => openLink(project.liveLink)}
              className="bg-blue-500 text-white hover:underline font-bold py-2 px-4 rounded-lg transition duration-300 shadow-lg shadow-blue-500/50 transition-all duration-300 hover:scale-110"
              aria-label={`View live demo of ${project.title}`}
            >
              Live Demo
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;