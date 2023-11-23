import SectionWrapper from "@/wrapper";
import { Typography } from "@mui/material";
import { Dot } from "lucide-react";

import { testimonials } from "@/constants";
import { useState } from "react";

const SmallCard = ({ index, onClick }) => (
    <div onClick={onClick} className="bg-secondary bg-opacity-5 text-gray-500 gap-6 flex flex-col xl:w-1/2 p-6 self-center hover:bg-opacity-60 hover:text-white rounded-md">
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
);

const BigCard = ({ index }) => (
    <Typography variant="h6" className="bg-secondary text-gray-200 pl-6 pr-12 py-12 rounded-2xl xl:w-3/4">
        {testimonials[index].feedback}
    </Typography>
);

const Testimonials = () => {

    const [curIndex, setCurIndex] = useState(0);

    return (
        <div className="mt-12 flex gap-12">
            <div className="flex flex-col">
                <Typography variant="h2" className="font-bold px-12 py-3 self-start">Testimonials</Typography>
                <Typography variant="h6" className="text-gray-400 px-12 py-3">Let our users share their stories and experiences with you.<br /> Discover why they trust our services.</Typography>

                <div className="flex items-center gap-8 px-12 py-3 my-32 self-end">
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
                <Dot className="translate-x-[-9px] stroke-[10px]" />
                <Dot className="translate-x-[-9px] stroke-[10px]" />
                <Dot className="translate-x-[-9px] stroke-[10px]" />
                <Dot className="translate-x-[-9px] stroke-[10px]" />
                <Dot className="translate-x-[-9px] stroke-[10px]" />
            </div>

            <div className="flex flex-col w-1/2 gap-12 justify-around">
                <SmallCard index={(curIndex - 1 + testimonials.length) % testimonials.length} onClick={() => setCurIndex((curIndex - 1 + testimonials.length) % testimonials.length)} />
                <BigCard index={curIndex} />
                <SmallCard index={(curIndex + 1) % testimonials.length} onClick={() => setCurIndex((curIndex + 1) % testimonials.length)} />
            </div>
        </div>
    )
};

export default SectionWrapper(Testimonials);