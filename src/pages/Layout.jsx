import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function Layout() {
    return (
        <div
            style={{ fontFamily: "Poppins" }}
            className=" h-[100dvh] max-h-[100dvh] overflow-y-hidden flex flex-col">
            <Header />
            <Outlet />
            {/* <Player /> */}
        </div>
    );
}

export default Layout;
