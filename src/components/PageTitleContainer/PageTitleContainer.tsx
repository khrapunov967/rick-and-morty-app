import "./PageTitleContainer.scss";

const PageTitleContainer: React.FC<{title: string}> = ({title}) => {
    return (
        <div className="page-title-container">
            <h1 className="page-title-container__title">
                {title}
            </h1>
        </div>
    );
};

export default PageTitleContainer;