
const TitleContainer: React.FC<{title: string}> = ({title}) => {
    return (
        <div className="w-full flex justify-center mb-[50px]">
            <h1 className="text-6xl font-extrabold text-[#202329]">
                {title}
            </h1>
        </div>
    );
};

export default TitleContainer;