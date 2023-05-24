import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

const Header: React.FC = () => {
    return (
        <header className="header">
            <Link to={"/"}>
                <img 
                    src={Logo} 
                    alt="Logo" 
                    className="header__logo-image"
                />
            </Link>

            <nav className="header__nav">
                <Link to={"/"} className="header__nav__link">
                    Characters
                </Link>

                <Link to={"/"} className="header__nav__link">
                    Locations
                </Link>

                <Link to={"/"} className="header__nav__link">
                    Episodes
                </Link>
            </nav>
        </header>
    );
};

export default Header;