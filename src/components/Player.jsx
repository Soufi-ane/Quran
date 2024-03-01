import { BsSoundwave } from "react-icons/bs";
import { IoPlay } from "react-icons/io5";
import { IoMdPause } from "react-icons/io";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Reciters } from "../data/Reciters";
import { useClickOutside } from "../hooks/useClickOutside";
import { RiArrowDownDoubleFill, RiArrowUpDoubleFill } from "react-icons/ri";
import Spinner from "../components/Spinner";

import { useParams } from "react-router-dom";

function Player() {
    const { number } = useParams();
    const [isOpen, setIsOpen] = useState(false);
    const [isPlaying, setIsplaying] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [reciter, setReciter] = useState("abdurrahmaan_as-sudays");
    const [AudioUrl, setAudioUrl] = useState(
        `https://download.quranicaudio.com/quran/${reciter}/${formatNumber(number)}.mp3`
    );

    const AudioRef = useRef();

    function formatNumber(num) {
        if (num > 99) return num;
        if (num < 10) return `00${num}`;
        else return `0${num}`;
    }
    useEffect(() => {
        setIsplaying(false);
        setIsLoading(true);
        setAudioUrl(
            `https://download.quranicaudio.com/quran/${reciter}/${formatNumber(number)}.mp3`
        );
        AudioRef.current?.addEventListener("canplay", () => {
            setIsLoading(false);
        });
    }, [number, reciter]);

    const HandleMore = () => {
        setIsOpen((curr) => !curr);
    };

    const toggleRef = useRef();
    useEffect(() => {
        AudioRef.current?.addEventListener("ended", () => {
            setIsplaying(false);
        });
    }, [isPlaying]);

    const { ref: playerRef } = useClickOutside(() => setIsOpen(false));
    useEffect(() => {
        return () => {
            setIsplaying(false);
        };
    }, []);

    useEffect(() => {
        if (isOpen) playerRef.current.style.height = "50vh";
        else playerRef.current.style.height = "9vh";
    }, [isOpen, playerRef]);

    return (
        <div
            ref={playerRef}
            className="bg-white h-[9vh] w-screen flex flex-col absolute bottom-0 items-center justify-between  px-3 py-1 transition-all">
            <IoIosArrowDown
                onClick={HandleMore}
                className={`text-3xl ${isOpen ? "inline" : "hidden"} transition-all mt-2 ml-auto `}
            />
            {isOpen && (
                <SelectReciter
                    reciters={Reciters}
                    current={Reciters.filter((res) => res.id === reciter)[0]}
                    setReciter={setReciter}
                />
            )}

            <div className="flex items-center justify-center gap-3 mt-auto">
                <div className="text-3xl text-white bg-black inline-block p-3 w-[3.5rem] h-[3.5rem] rounded-md">
                    {isLoading ? <Spinner small={true} /> : <BsSoundwave />}
                </div>

                <div className="text-3xl text-black  flex items-center gap-2 justify-between  ">
                    <div className="w-[53vw] bg-black">.</div>
                    <div
                        ref={toggleRef}
                        onClick={() => {
                            if (!isLoading) setIsplaying((curr) => !curr);
                            if (!isPlaying && !isLoading) {
                                AudioRef.current?.play();
                            } else {
                                AudioRef.current?.pause();
                            }
                        }}>
                        <IoPlay className={`  ${isPlaying ? "hidden" : "inline"}`} />
                        <IoMdPause className={`  ${isPlaying ? "inline" : " hidden"}`} />
                    </div>
                    <BiDotsVerticalRounded onClick={HandleMore} />
                </div>
            </div>
            <audio ref={AudioRef} src={AudioUrl} />
        </div>
    );
}

export default Player;

function SelectReciter({ reciters, current, setReciter }) {
    const [isOpen, setIsOpen] = useState(false);
    const HandleChoices = () => {
        setIsOpen((curr) => !curr);
    };

    return (
        <div
            style={{
                fontFamily: "Amiri Quran",
            }}
            className={`selection:text-xl rounded-md w-[90vw] h-[30vh] mt-5 flex items-center ${
                isOpen ? "bg-stone-100" : "bg-white"
            }  flex-col`}>
            <div
                onClick={HandleChoices}
                className={` h-[7vh] relative w-full bg-stone-100 flex items-center  ${
                    isOpen ? " rounded-t-md" : "rounded-md"
                } `}>
                <p className="leading-10 text-center w-full h-full  ">{current.name}</p>
                {isOpen ? (
                    <RiArrowUpDoubleFill className="text-2xl  absolute right-3" />
                ) : (
                    <RiArrowDownDoubleFill className="text-2xl absolute right-3" />
                )}
            </div>
            {isOpen && (
                <div
                    className={`w-[99%]  flex-1 rounded-b-md overflow-y-scroll space-y-0.5 text-center`}>
                    {reciters.map((re) => (
                        <div
                            onClick={() => {
                                setReciter(re.id);
                                setIsOpen(false);
                            }}
                            className="bg-white h-[7vh] flex items-center gap-5 felx-col justify-center"
                            key={re.id}>
                            <p className="leading-10 h-full">{re.name}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
