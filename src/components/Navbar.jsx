import logo from "../../public/logo.png"; 
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-20" src={logo} alt="logo" />
            </div>
            <div className="flex items-center gap-8">
                <a href="#home" className="text-lg hover:text-gray-700">Home</a>
                <a href="#about" className="text-lg hover:text-gray-700">About</a>
                <a href="#projects" className="text-lg hover:text-gray-700">Technologies</a>
                <a href="#projects" className="text-lg hover:text-gray-700">Experiences</a>
                <a href="#contact" className="text-lg hover:text-gray-700">Projects</a>
                <a href="#projects" className="text-lg hover:text-gray-700">Contact Info</a>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/gavin-liu-aab0a6241/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/liug88" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;