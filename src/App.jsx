import { Outlet } from "react-router-dom";
import { DarkModeContext } from "./API/DarkModeContext";
import { useState } from "react";
function App() {
    const [isDark, setIsDark] = useState(true);
    const mainColor = isDark ? "stone-700" : "white";
    const secondColor = isDark ? "stone-500" : "stone-100";
    const textColor = isDark ? "white" : "black";
    return (
        <DarkModeContext.Provider value={{ isDark, setIsDark, mainColor, secondColor, textColor }}>
            <Outlet />;
        </DarkModeContext.Provider>
    );
}

export default App;
