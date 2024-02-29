import { FaGithub } from "react-icons/fa";

function Header() {
    return (
        <div className="bg-white text-xl border-b-[2px] border-stone-100  text-black h-[8vh] flex items-center justify-between px-5 fixed w-screen">
            <p>🕌</p>
            <p className="text-center font-medium py-4">Al Quran</p>
            <a href="https://github.com">
                <FaGithub />
            </a>
        </div>
    );
}

export default Header;
