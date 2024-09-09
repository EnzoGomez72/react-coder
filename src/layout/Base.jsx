import Header from "../containers/Header/Index";
import Footer from "../containers/Footer/Index";

const Base = ({children}) => {

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Base;