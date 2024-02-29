import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Player from "../components/Player";
function Layout() {
    return (
        <div style={{ fontFamily: "Poppins" }} className=" h-[100dvh]  flex flex-col">
            <Header />
            <Outlet />
            <Player />
        </div>
    );
}

export default Layout;
