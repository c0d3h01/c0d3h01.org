const Header: React.FC = () => {
    return (
      <header className="py-8 px-6 md:px-12 flex justify-between items-center border-b border-gray-700">
        <a href="/" className="text-2xl font-bold">Harshal Sawant</a>
        <nav>
          <ul className="flex space-x-10">
            <li><a href="#about" className="hover:text-white-500 hover:underline transition duration-200">About</a></li>
            <li><a href="#projects" className="hover:text-white-500 hover:underline transition duration-200">Projects</a></li>
            <li><a href="#contact" className="hover:text-white-500 hover:underline transition duration-200">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;