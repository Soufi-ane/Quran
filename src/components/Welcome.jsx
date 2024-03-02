import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { getSurahsData } from "../API/AlquranAPI";

function Welcome() {
    const queryClient = useQueryClient();
    queryClient.prefetchQuery({
        queryKey: ["surahsData"],
        queryFn: getSurahsData,
    });
    const navigate = useNavigate();
    function HandleStart() {
        navigate("Surahs");
    }
    return (
        <div className="text-center pt-28">
            <p
                className="text-xl"
                style={{
                    fontFamily: "Amiri Quran",
                }}>
                بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
            </p>
            <h4 className="text-2xl font-medium py-10">Welcome</h4>
            <p className="text-lg font-medium pb-20 px-10">
                Dive into the Quran, accessible in over 40 languages, with recitations from more
                than 80 esteemed reciters.
            </p>
            <button
                onClick={HandleStart}
                className="text-white bg-black rounded-md py-2 px-5 text-lg">
                Start
            </button>
        </div>
    );
}

export default Welcome;
