function Spinner() {
    return (
        <div className="h-[100dvh] flex items-center justify-center">
            <div
                style={{
                    border: `8px solid black`,
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                }}
                className="spinner"></div>
        </div>
    );
}

export default Spinner;
