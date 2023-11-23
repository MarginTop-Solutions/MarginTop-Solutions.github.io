import SectionWrapper from "@/wrapper";
import { Typography } from "@mui/material";
import { useState } from "react";
import { industries } from "@/constants";
import { Dot } from "lucide-react";

const Industries = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="flex flex-col m-12">
            <div className="flex flex-row gap-2">
                <div className="bg-white w-[6px]" />
                <Typography variant="h2" className="font-bold">Industries we serve</Typography>
            </div>
            <Typography variant="body1" fontFamily={"sans"} className="py-4 w-1/2">
                Metaverse development refers to the creation of a shared virtual
                space that allows users to interact with each other and with digital objects in real-time.
            </Typography>

            <div className="flex flex-row gap-20 mt-6">
                <div className="flex-1 flex flex-col gap-4 justify-between">
                    {industries.map((field, i) => (
                        <button
                            key={i}
                            className={`text-2xl font-medium border-2 border-white rounded-lg px-12 py-6 ${i === currentIndex ? "bg-[#bbb] text-secondary" : "hover:bg-[#bbbb]"}`}
                            onClick={() => setCurrentIndex(i)}
                        >
                            {field.title}
                        </button>
                    ))}
                </div>

                <div className="relative flex-1 flex flex-col justify-between gap-8 bg-[#1c6d7ecd] rounded-xl p-12 overflow-hidden">
                    <img src={industries[currentIndex].image} alt={industries[currentIndex].title} className="absolute top-0 left-0 w-full h-full z-[-1]" />
                    <Typography variant="h5">{industries[currentIndex].description}</Typography>
                    <div className="mb-12">
                        {industries[currentIndex].topics.map((topic, i) => (
                            <div key={i} className="flex gap-4 text-xl font-poppins">
                                <Dot />
                                {topic}
                            </div>
                        ))}
                    </div>
                    <Typography variant="h4">{industries[currentIndex].title}</Typography>
                </div>
            </div>
        </div>
    )
};

export default SectionWrapper(Industries, "industries");