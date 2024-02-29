import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getSurah } from "../API/AlquranAPI";
import { useState } from "react";
import Spinner from "../components/Spinner";

function Surah() {
    const { number } = useParams();
    // const [surahText, setSurahText] = useState("");
    const { data, isLoading, error } = useQuery({
        queryKey: [`surah-${number}`],
        queryFn: () => getSurah(number),
    });
    const { name, numberOfAyahs, ayahs } = data?.data?.data || {};
    if (data) console.log(ayahs);

    return (
        <>
            {isLoading ? (
                <Spinner />
            ) : (
                <div
                    style={{
                        fontFamily: "Amiri Quran",
                    }}
                    className="pt-[10vh] px-7">
                    <div className="flex flex-col gap-3">
                        <h4 className="text-xl text-center">{name}</h4>
                        <div className="flex items-center justify-between">
                            <p className="flex items-center gap-2">
                                <span>{numberOfAyahs}</span>
                                <span>عدد الآيات</span>
                            </p>
                            <p className="flex items-center gap-2">
                                <span>{number}</span>
                                <span>الترتيب في المصحف</span>
                            </p>
                        </div>
                    </div>
                    <div
                        className="text-right text-lg py-8 leading-8"
                        style={{
                            fontFamily: "Amiri Quran",
                        }}>
                        {number == "9" || number == "1" ? null : (
                            <span>
                                <span> بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</span>
                                <span>{`. `}</span>
                            </span>
                        )}
                        {ayahs?.map((aya) => (
                            <span key={aya.number}>
                                {aya.text
                                    .replace(/[a-zA-Z0-9\]\[\!@#$%^&*()_+{}|;:'",.<>?\\/]/g, "")
                                    .replaceAll("[ـٰٓ]", "")}
                                {` `}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

export default Surah;
