function Spinner({ small }) {
    console.log(small);
    return (
        <div
            className={` ${
                small ? "h-[2rem] w-[2rem]" : "w-screen h-[100dvh]"
            }  flex items-center justify-center`}>
            <div
                style={{
                    border: `${small ? "6px solid white" : "8px solid black"}`,
                    width: `${small ? " 30px" : "40px"}`,
                    height: `${small ? " 30px" : "40px"}`,
                    borderRadius: "50%",
                }}
                className="spinner"></div>
        </div>
    );
}

export default Spinner;
