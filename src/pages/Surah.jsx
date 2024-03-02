import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getSurah } from "../API/AlquranAPI";

import Spinner from "../components/Spinner";
import Player from "../components/Player";

function Surah() {
    const { number } = useParams();

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
                        className="pt-[10vh] pb-56 h-[90vh] px-7  overflow-y-scroll">
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
                            className="text-right text-3xl py-8 leading-[3rem]"
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
