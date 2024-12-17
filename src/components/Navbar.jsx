import { useState } from "react";
import logo from "../../public/logo.png"; 
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-20" src={logo} alt="logo" />
            </div>
            <div className="hidden md:flex items-center gap-8">
                <Link to="home" smooth={true} duration={500} className="text-lg hover:text-gray-700">Home</Link>
                <Link to="about" smooth={true} duration={500} className="text-lg hover:text-gray-700">About</Link>
                <Link to="technologies" smooth={true} duration={500} className="text-lg hover:text-gray-700">Technologies</Link>
                <Link to="experiences" smooth={true} duration={500} className="text-lg hover:text-gray-700">Experiences</Link>
                <Link to="projects" smooth={true} duration={500} className="text-lg hover:text-gray-700">Projects</Link>
                <Link to="contact" smooth={true} duration={500} className="text-lg hover:text-gray-700">Contact Info</Link>
            </div>
            <div className="md:hidden flex items-center">
                <button onClick={toggleMenu} className="text-2xl">
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
            <div className="m-8 hidden md:flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/gavin-liu-aab0a6241/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/liug88" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
            </div>
            {isOpen && (
                <div className="absolute top-0 left-0 w-full h-screen bg-gray-900 flex flex-col items-center justify-center gap-8 text-lg">
                    <Link to="home" smooth={true} duration={500} className="hover:text-gray-700" onClick={toggleMenu}>Home</Link>
                    <Link to="about" smooth={true} duration={500} className="hover:text-gray-700" onClick={toggleMenu}>About</Link>
                    <Link to="technologies" smooth={true} duration={500} className="hover:text-gray-700" onClick={toggleMenu}>Technologies</Link>
                    <Link to="experiences" smooth={true} duration={500} className="hover:text-gray-700" onClick={toggleMenu}>Experiences</Link>
                    <Link to="projects" smooth={true} duration={500} className="hover:text-gray-700" onClick={toggleMenu}>Projects</Link>
                    <Link to="contact" smooth={true} duration={500} className="hover:text-gray-700" onClick={toggleMenu}>Contact Info</Link>
                    <div className="flex items-center justify-center gap-4 text-2xl">
                        <a href="https://www.linkedin.com/in/gavin-liu-aab0a6241/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/liug88" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;