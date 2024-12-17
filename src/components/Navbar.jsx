import logo from "../../public/logo.png"; 
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-20" src={logo} alt="logo" />
            </div>
            <div className="flex items-center gap-8">
                <Link to="home" smooth={true} duration={500} className="text-lg hover:text-gray-700">Home</Link>
                <Link to="about" smooth={true} duration={500} className="text-lg hover:text-gray-700">About</Link>
                <Link to="technologies" smooth={true} duration={500} className="text-lg hover:text-gray-700">Technologies</Link>
                <Link to="experiences" smooth={true} duration={500} className="text-lg hover:text-gray-700">Experiences</Link>
                <Link to="projects" smooth={true} duration={500} className="text-lg hover:text-gray-700">Projects</Link>
                <Link to="contact" smooth={true} duration={500} className="text-lg hover:text-gray-700">Contact Info</Link>
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