
const Footer: React.FC = () => {
    return (
        <footer className="w-full flex bg-[#202329] py-6 items-center flex-col">
            <div className="flex gap-1">
                <p className="text-[#f5f5f5]">
                    ❮❯ by:
                </p>

                <a 
                    href="https://github.com/khrapunov967" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#f5f5f5] transition-colors duration-200 hover:text-[#55cc44]"
                >
                    Andrew Khrapunov        
                </a>
            </div>
        </footer>
    );
};

export default Footer;