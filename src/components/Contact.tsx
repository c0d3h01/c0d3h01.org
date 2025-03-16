import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 w-full max-w-3xl">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <p className="text-gray-300 mb-4">
        Feel free to reach out to me!  I'm always open to discussing new opportunities and collaborations.
      </p>
      <div className="flex space-x-10">
        <a href="https://github.com/c0d3h01" target="_blank" rel="noopener noreferrer" className="">
          <FaGithub size={32} />
        </a>
        <a href="https://linkedin.com/in/haarshalsawant" target="_blank" rel="noopener noreferrer" className="">
          <FaLinkedin size={32} />
        </a>
        <a href="https://x.com/haarshalsawant" className="">
          <FaTwitter size={32} />
        </a>
        <a href="mailto:c0d3h01@example.com" className="">
          <FaEnvelope size={32} />
        </a>
      </div>
    </section>
  );
};

export default Contact;