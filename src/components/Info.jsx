import SectionWrapper from "@/wrapper";
import { Typography } from "@mui/material";
import { ArrowRight, Box, Code2, InfinityIcon, Landmark, Lightbulb } from "lucide-react";
import { useState } from "react";
import { infos } from "@/constants";

const InfoCard = ({ info }) => {

    const [subIndex, setSubIndex] = useState(0);

    return (
        <div className="flex flex-row gap-12 px-16">
            <div className="flex flex-col w-2/3 justify-around px-6 py-4">

                <div className="flex flex-row gap-2">
                    <div className="bg-white w-[6px]" />
                    <Typography variant="h3" fontWeight={700}>{info.title} </Typography>
                </div>

                <Typography variant="body1">{info.description}</Typography>

                {info.topics.map((x, i) =>
                    i != subIndex ?
                        <div
                            key={i}
                            className="flex flex-row gap-2 p-4 items-center bg-[#200a3177] border-2 border-[#222] hover:bg-[#aaaa] hover:cursor-pointer"
                            onClick={() => setSubIndex(i)}
                        >
                            <Box className="min-w-[24px]" />
                            <Typography variant="h5">{x.title}</Typography>
                        </div>
                        :
                        <div key={i} className="flex flex-row gap-2 p-4 bg-secondary rounded-md">
                            <InfinityIcon className="min-w-[24px]" />
                            <div className="flex flex-col gap-2">
                                <Typography variant="h5">{x.title}</Typography>
                                <Typography variant="body1">{x.description}</Typography>
                            </div>
                        </div>
                )}
            </div>

            <img src="/AI_info.png" alt="whatever" className="w-1/3" />
        </div>
    )
};

const Info = () => {

    const [index, setIndex] = useState(0);

    return (
        <div className="flex lg:flex-row flex-col justify-center items-center mt-12 mx-4">
            <InfoCard info={infos[index]} />
            <ArrowRight
                className="bg-[#2a2a2a] hover:bg-[#3a3a3a] hover:cursor-pointer px-2"
                onClick={() => setIndex((index + 1) % infos.length)}
                width={64}
                height={54}
            />
        </div>
    )
};

export default SectionWrapper(Info);