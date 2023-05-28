
const PropCard: React.FC<{title: string; value: string}> = ({title, value}) => {
    return (
        <div className="flex border-[#1c1c1c] bg-[#202128] p-2 border-2 rounded-xl w-full justify-between">
            <p className="text-white font-bold text-xl">
                {title}:
            </p>

            <p className="text-white text-xl">
                {value}
            </p>
        </div>
    );
};

export default PropCard;