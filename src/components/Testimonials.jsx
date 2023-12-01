import SectionWrapper from "@/wrapper";
import { Typography } from "@mui/material";
import { Dot } from "lucide-react";

import { testimonials } from "@/constants";
import { useState } from "react";

const SmallCard = ({ index, onClick, fade }) => {


    return (
        <div onClick={onClick} className={`smallCard gap-6 xl:w-1/2 p-6 self-center hover:bg-opacity-60 hover:text-white rounded-md ${fade && "opacity-0"}`}>
            <Typography variant="body2">{testimonials[index].feedback}</Typography>
            <div className="flex flex-row gap-4">
                <img
                    src={testimonials[index].profile}
                    alt={testimonials[index].name}
                    className="w-16 h-16 overflow-hidden rounded-full"
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                />

                <div className="my-auto">
                    <Typography variant="body1">{testimonials[index].name}</Typography>
                    <Typography variant="body2" className="text-secondary">{testimonials[index].title}</Typography>
                </div>
            </div>
        </div>
    )
};

const BigCard = ({ index, fade }) => (
    <Typography variant="h6" className={`bg-secondary text-gray-200 pl-6 pr-12 py-12 rounded-2xl xl:w-3/4 ${fade && "opacity-0"}`}>
        {testimonials[index].feedback}
    </Typography>
);

const Testimonials = () => {

    const [curIndex, setCurIndex] = useState(0);
    const [fade, setfade] = useState(false);

    const handleClick = (dir) => {
        setfade(true);
        setTimeout(() => {
            setfade(false);
            setCurIndex((curIndex + dir + testimonials.length) % testimonials.length);
        }, 200);
    };

    return (
        <div className="mt-24 flex gap-12 min-h-screen">
            <div className="flex flex-col">
                <Typography variant="h2" className="font-bold px-12 py-3 self-start">Testimonials</Typography>
                <Typography variant="h6" className="text-gray-400 px-12 py-3">Let our users share their stories and experiences with you.<br /> Discover why they trust our services.</Typography>

                <div className={`flex items-center gap-8 px-12 py-3 my-auto self-end ${fade && "fade-card"}`}>
                    <div className="flex flex-col text-right">
                        <Typography variant="h4" fontWeight={400}>{testimonials[curIndex].name}</Typography>
                        <Typography variant="h6" className="text-secondary">{testimonials[curIndex].title}</Typography>
                    </div>
                    <img
                        src={testimonials[curIndex].profile}
                        alt={testimonials[curIndex].name}
                        className="w-28 h-28 overflow-hidden rounded-full"
                        style={{ objectFit: 'cover', objectPosition: 'center top' }}
                    />
                </div>
            </div>

            <div className="flex flex-col justify-between bg-white w-[6px] rounded-[4px]">
                {testimonials.map((_, i) =>
                    <div key={i} onClick={() => handleClick(i - curIndex)} className={`self-center hover:cursor-pointer hover:scale-x-150 w-[16px] h-[16px] rounded-full bg-white duration-300 ${(i === curIndex) && "scale-125 bg-[#aaa]"}`} />
                )}

            </div>

            <div className="flex flex-col w-1/2 gap-12 justify-around">
                <SmallCard index={(curIndex - 1 + testimonials.length) % testimonials.length} onClick={() => handleClick(-1)} fade={fade} />
                <BigCard index={curIndex} fade={fade} />
                <SmallCard index={(curIndex + 1) % testimonials.length} onClick={() => handleClick(1)} fade={fade} />
            </div>
        </div>
    )
};

export default SectionWrapper(Testimonials);