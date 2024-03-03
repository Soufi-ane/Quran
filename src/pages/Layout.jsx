import { Outlet } from "react-router-dom";
import Header from "../components/Header";
// import { useContext } from "react";
// import { DarkModeContext } from "../API/DarkModeContext";

function Layout() {
    // const { mainColor } = useContext(DarkModeContext);
    return (
        <div
            style={{ fontFamily: "Poppins" }}
            className={` h-[100dvh] max-h-[100dvh] bg-white       overflow-y-hidden flex flex-col`}>
            <Header />
            <Outlet />
            {/* <Player /> */}
        </div>
    );
}

export default Layout;
