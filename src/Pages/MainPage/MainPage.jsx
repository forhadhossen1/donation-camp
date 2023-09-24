import { Outlet } from "react-router-dom";
import Navber from "../../Header/Navber";

const MainPage = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default MainPage;