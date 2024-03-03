// import { useContext } from "react";
// import { DarkModeContext } from "../API/DarkModeContext";

function Spinner({ small }) {
    // const { textColor, mainColor } = useContext(DarkModeContext);
    return (
        <div
            className={` ${
                small ? "h-[2rem] w-[2rem]" : "w-screen h-[100dvh]"
            }  flex items-center justify-center`}>
            <div
                style={{
                    border: `${small ? `6px solid black` : `8px solid white`}`,
                    width: `${small ? " 30px" : "40px"}`,
                    height: `${small ? " 30px" : "40px"}`,
                    borderRadius: "50%",
                }}
                className="spinner"></div>
        </div>
    );
}

export default Spinner;
