import { IPageController } from "../types/props";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

const PageController: React.FC<IPageController> = ({setCurrentPage, currentPage, minPage, maxPage}) => {

    const prevPage = () => {
        setCurrentPage(prev => prev - 1);
    };

    const nextPage = () => {
        setCurrentPage(prev => prev + 1);
    };

    return (
        <div className="w-full flex justify-between py-4 px-4">
            <button
                className="text-white font-semibold hover:text-[#55cc44] transition-colors duration-200 flex items-center"
                onClick={prevPage}
                disabled={currentPage === minPage}
            >
                <IoMdArrowDropleft />
                {"Prev Page"}
            </button>

            <button
                className="text-white font-semibold hover:text-[#55cc44] transition-colors duration-200 flex items-center"
                onClick={nextPage}
                disabled={currentPage === maxPage}
            >
                {"Next Page"}
                <IoMdArrowDropright />
            </button>
        </div>
    );
};

export default PageController;