// import { useContext } from "react";
import { FaGithub } from "react-icons/fa";

// import { DarkModeContext } from "../API/DarkModeContext";

function Header() {
    // const { isDark, setIsDark, secondColor, textColor } = useContext(DarkModeContext);
    return (
        <div
            className={` 
                bg-stone-100
             text-xl border-b-[2px] border-stone-100 h-[8vh] flex items-center justify-between px-5 fixed w-screen`}>
            <p>🕌</p>

            <p className="text-center font-medium py-4">Al Quran</p>
            <div className="flex items-center gap-5">
                <a href="https://github.com/Soufi-ane/Quran/">
                    <FaGithub />
                </a>
            </div>
        </div>
    );
}

export default Header;
