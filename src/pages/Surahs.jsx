import { useQuery } from "@tanstack/react-query";
import { getAllSurahs } from "../API/AlquranAPI";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

function Surahs() {
    const { data, error, isLoading } = useQuery({
        queryKey: ["surahs"],
        queryFn: getAllSurahs,
    });
    if (!isLoading) console.log(data);
    return (
        <>
            {isLoading ? (
                <Spinner />
            ) : (
                <div className=" grid h-[97dvh] grid-cols-2 gap-5 pt-[10vh] overflow-y-scroll px-5 pb-[15vh]">
                    {data?.map((surah) => (
                        <Surah surah={surah} key={surah.number} />
                    ))}
                </div>
            )}
        </>
    );
}

export default Surahs;

function Surah(surah) {
    const { name, number, ayahs } = surah.surah;
    const navigate = useNavigate();
    function HandleSurah() {
        navigate(`${number}`);
    }
    return (
        <div
            onClick={HandleSurah}
            style={{
                fontFamily: "Amiri Quran",
            }}
            className="bg-stone-100 p-3 h-[6rem] cursor-pointer rounded-md flex flex-col gap-3 overflow-y-scroll">
            <p className="text-xl text-center">{name}</p>
            <div className="flex items-center justify-between text-xs">
                <p className="flex flex-col  items-center">
                    <span>عدد الآيات</span>
                    <span>{ayahs.length}</span>
                </p>
                <p className="flex flex-col  items-center">
                    <span>الترتيب</span>
                    <span>{number}</span>
                </p>
            </div>
        </div>
    );
}