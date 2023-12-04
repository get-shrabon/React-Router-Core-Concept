import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <h1>i am In Home Component</h1>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;