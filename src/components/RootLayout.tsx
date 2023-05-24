import Footer from "./Footer";
import Header from "./Header";

const RootLayout: React.FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <section className="w-full max-w-[1500px] my-0 mx-auto flex flex-col min-h-screen justify-between">
            <div className="w-full">
                <Header />
                {children}
            </div>

            <Footer />
        </section>
    );
};

export default RootLayout;