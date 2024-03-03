import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getSurah } from "../API/AlquranAPI";

import Spinner from "../components/Spinner";
import Player from "../components/Player";
// import { useContext } from "react";
// import { DarkModeContext } from "../API/DarkModeContext";

function Surah() {
    const { number } = useParams();
    // const { isDark, textColor } = useContext(DarkModeContext);

    const { data, isLoading, error } = useQuery({
        queryKey: [`surah-${number}`],
        queryFn: () => getSurah(number),
    });

    const { name, numberOfAyahs, ayahs } = data?.data?.data || {};

    return (
        <>
            {isLoading ? (
                <Spinner small={false} />
            ) : (
                <>
                    <div
                        style={{
                            fontFamily: "Amiri Quran",
                        }}
                        className={`pt-[10dvh] bg-white
                        }  pb-56 h-[90dvh] px-7 md:px-36 lg:px-44 xl:px-72 2xl:px-[20vw] overflow-y-scroll`}>
                        <div className="flex flex-col gap-3">
                            <h4 className="text-2xl text-center">{name}</h4>
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
                            className="text-right text-3xl md:text-4xl py-8 md:leading-[4rem] leading-[3.1rem] lg:text-5xl lg:leading-[5rem]"
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
                    <Player />
                </>
            )}
        </>
    );
}

export default Surah;
