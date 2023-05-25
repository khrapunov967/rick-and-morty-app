
const CardContainer: React.FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <div className="w-full flex flex-wrap py-5 px-1 justify-center gap-8">
            {children}
        </div>
    );
};

export default CardContainer;