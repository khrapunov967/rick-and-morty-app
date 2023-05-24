import Header from "./Header";

const RootLayout: React.FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <section className="root-layout">
            <Header />
            {children}
        </section>
    );
};

export default RootLayout;