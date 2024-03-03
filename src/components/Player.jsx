import { BsSoundwave } from "react-icons/bs";
import { IoPlay } from "react-icons/io5";
import { IoMdPause } from "react-icons/io";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useContext, useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Reciters } from "../data/Reciters";
import { useClickOutside } from "../hooks/useClickOutside";
import { RiArrowDownDoubleFill, RiArrowUpDoubleFill } from "react-icons/ri";
import Spinner from "../components/Spinner";

import { useParams } from "react-router-dom";
// import { DarkModeContext } from "../API/DarkModeContext";

function Player() {
    const { number } = useParams();
    const [isOpen, setIsOpen] = useState(false);
    const [isPlaying, setIsplaying] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [currentTiming, setCurrentTiming] = useState(0);
    const [reciter, setReciter] = useState("abdurrahmaan_as-sudays");
    const [AudioUrl, setAudioUrl] = useState(
        `https://download.quranicaudio.com/quran/${reciter}/${formatNumber(number)}.mp3`
    );

    const AudioRef = useRef();
    // const { textColor, mainColor, secondColor } = useContext(DarkModeContext);

    useEffect(() => {
        if (isPlaying)
            setInterval(() => {
                setCurrentTiming(AudioRef.current?.currentTime);
            }, 100);
    }, [isPlaying]);

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
            setCurrentTiming(0);
        });
    }, [isPlaying]);

    const { ref: playerRef } = useClickOutside(() => setIsOpen(false));

    useEffect(() => {
        return () => {
            setIsplaying(false);
        };
    }, []);

    return (
        <div ref={playerRef}>
            <div
                className={`bg-white ${
                    isOpen ? "" : "border-t-2"
                }  border-stone-200 h-[9vh] z-20 w-screen flex flex-col absolute bottom-3 rounded-md items-center justify-between px-3 sm:px-80 `}>
                <div className="flex items-center justify-center gap-3 mt-auto">
                    <div
                        className={`text-3xl  inline-block ${
                            isLoading ? "p-3" : ""
                        }  w-[3.5rem] h-[3.5rem] rounded-md`}>
                        {
                            isLoading ? (
                                <Spinner small={true} />
                            ) : (
                                <img
                                    className="rounded-md"
                                    src="/Quran/img/quran.jpeg"
                                    alt="quran"
                                />
                            )
                            //  <BsSoundwave />
                        }
                    </div>

                    <div className="text-3xl  text-black  flex items-center gap-2 justify-between  ">
                        <div className="w-[53vw] flex flex-col justify-end gap-2 px-2  text-sm font-semibold">
                            <div>
                                <input
                                    className="w-[50vw]"
                                    type="range"
                                    min={0}
                                    max={
                                        AudioRef.current?.duration
                                            ? AudioRef.current?.duration
                                            : 2000
                                    }
                                    value={currentTiming}
                                    onChange={(e) => {
                                        AudioRef.current.currentTime = parseInt(e.target.value);
                                    }}
                                />
                            </div>
                            <div className={`flex items-center justify-between `}>
                                <span>{formatTime(currentTiming)}</span>
                                <span>
                                    {AudioRef.current?.duration
                                        ? formatTime(AudioRef.current?.duration)
                                        : "00:00:00"}
                                </span>
                            </div>
                        </div>
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

            <div
                className={`bg-white h-[50vh] ${
                    isOpen ? "" : "hidden translate-y-full"
                } absolute bottom-0 z-0 border-t-2 rounded-t-md border-stone-300  transition-all duration-100 w-screen flex  justify-center`}>
                <IoIosArrowDown
                    onClick={HandleMore}
                    className={`text-2xl ${
                        isOpen ? "inline" : "hidden"
                    } transition-all mt-2 absolute right-2 top-1 ml-auto `}
                />
                <SelectReciter
                    reciters={Reciters}
                    current={Reciters.filter((res) => res.id === reciter)[0]}
                    setReciter={setReciter}
                />
            </div>
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
            className={`text-xl mt-14  rounded-md w-[50%] h-[30vh] flex items-center ${
                isOpen ? "bg-stone-100" : ""
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
                            className=" h-[7vh] flex items-center gap-5 felx-col justify-center"
                            key={re.id}>
                            <p className="leading-10 h-full">{re.name}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

function formatTime(time) {
    let formated = Math.floor(time);
    let ours = Math.floor(formated / 3600);
    let minutes = Math.floor((formated % 3600) / 60);
    let seconds = formated % 60;
    if (ours < 10) ours = `0${ours}`;
    if (minutes < 10) minutes = `0${minutes}`;
    if (seconds < 10) seconds = `0${seconds}`;
    return `${ours}:${minutes}:${seconds}`;
}
