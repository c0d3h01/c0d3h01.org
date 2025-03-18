import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ProjectsSection from './components/ProjectsSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import { SplineScene } from './components/Spline';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
}

const projects: Project[] = [
  {
    title: "Project Zenith",
    description: "A cutting-edge e-commerce platform built for scalability and performance.",
    imageUrl: "/project1.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    githubLink: "https://github.com/c0d3h01/project-zenith",
    liveLink: "https://project-zenith.com",
  },
  {
    title: "Nebula Analytics",
    description: "Real-time data visualization dashboard for insightful business intelligence.",
    imageUrl: "/project2.jpg",
    technologies: ["React", "D3.js", "Node.js", "Express"],
    githubLink: "https://github.com/c0d3h01/nebula-analytics",
  },
  {
    title: "Quantum Chat",
    description: "Secure and encrypted real-time chat application.",
    imageUrl: "/project3.png",
    technologies: ["Next.js", "Socket.IO", "WebRTC", "MongoDB"],
    githubLink: "https://github.com/c0d3h01/nebula-analytics",
    liveLink: "https://quantum-chat.app",
  },
];

function App() {
  return (
    <div className="w-full min-h-screen bg-gray-900 relative overflow-hidden text-white flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center px-6 md:px-12">
        <Hero />
        {/* <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="w-full h-[200px]" /> */}
        <About />
        <ProjectsSection projects={projects} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;