import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";

const Header: React.FC = () => {
    return (
        <header className="w-full flex justify-between p-4 items-center mb-[40px]">
            <Link to={"/"}>
                <img 
                    src={Logo} 
                    alt="Logo" 
                    className="w-[150px]"
                />
            </Link>

            <nav className="flex gap-5">
                <Link to={"/"} className="text-xl font-bold text-[#333333] transition-colors duration-200 hover:text-[#55cc44]">
                    Characters
                </Link>

                <Link to={"/locations"} className="text-xl font-bold text-[#333333] transition-colors duration-200 hover:text-[#55cc44]">
                    Locations
                </Link>

                <Link to={"/episodes"} className="text-xl font-bold text-[#333333] transition-colors duration-200 hover:text-[#55cc44]">
                    Episodes
                </Link>
            </nav>
        </header>
    );
};

export default Header;