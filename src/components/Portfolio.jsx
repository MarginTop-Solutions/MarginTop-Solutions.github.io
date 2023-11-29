import { Typography } from "@mui/material";
import { portfolio_projects } from "@/constants";
import { useState, useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight, Circle } from "lucide-react";
import ProjectPopUp from "./ProjectPopUp";
import SectionWrapper from "@/wrapper";

const ProjectsView = ({ focusedIndex, need, setNeed }) => {
    const [active, setActive] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            const focusedItem = containerRef.current.querySelector(`.project-${focusedIndex}`);
            if (focusedItem) {
                const containerWidth = containerRef.current.offsetWidth;
                const itemLeftOffset = focusedItem.offsetLeft;
                const itemWidth = focusedItem.offsetWidth;

                const scrollOffset = itemLeftOffset + itemWidth / 2 - containerWidth / 2;
                console.log(itemLeftOffset, scrollOffset);
                containerRef.current.scrollTo({
                    left: scrollOffset,
                    behavior: 'smooth',
                });
            }
        }
    }, [focusedIndex]);


    return (
        <div ref={containerRef} className="flex flex-row items-center overflow-x-hidden w-screen">
            {portfolio_projects.map((proj, i) => (
                <div
                    key={i}
                    className={`project-${i} relative rounded-xl min-w-[800px] ${focusedIndex != i && "scale-50"} overflow-hidden duration-1000 ease-in-out`}
                >
                    <img src={proj.image} alt={proj.title} className={`absolute w-full rounded-xl z-[-1]`} />

                    <div className={`relative flex flex-col gap-16 xl:w-3/5 w-2/3 bg-[#012a2abb] px-8 py-12 ${focusedIndex === i ? "" : "opacity-0"} duration-1000 ease-in-out`}>
                        <Typography variant="h4" fontWeight={600}>
                            {proj.title}
                        </Typography>
                        <Typography variant="h6">{proj.description}</Typography>
                        <button onClick={() => setActive(true)} className="bg-white text-secondary text-lg w-fit px-8 py-2 rounded-md">
                            View Project
                        </button>
                    </div>

                    <ProjectPopUp active={active} setActive={setActive} project={proj} need={need} setNeed={setNeed} />
                </div>
            ))}
        </div>
    );
};


const Portfolio = ({ need, setNeed }) => {
    const [focusedIndex, setFocusedIndex] = useState(Math.round(portfolio_projects.length / 2));

    const handleScroll = (direction) => {
        setFocusedIndex((focusedIndex + direction + portfolio_projects.length) % portfolio_projects.length);
    };

    return (
        <div className="mt-12 flex flex-col gap-4 items-center">
            <Typography variant="h6">PORTFOLIO</Typography>
            <Typography variant="h2" fontWeight={700}>They trusted Us</Typography>
            <Typography variant="h6" className="mx-[16%] text-center">
                We have extensive experience in designing and developing custom software development
                projects that can create brand awareness for your platform.
            </Typography>

            <ProjectsView focusedIndex={focusedIndex} need={need} setNeed={setNeed} />
            <div className="flex flex-row items-center gap-4 py-4 px-6 mt-4">
                <ArrowLeft onClick={() => handleScroll(-1)} />
                {portfolio_projects.map((_, i) => <Circle key={i} strokeWidth={i === focusedIndex ? 4 : 2} />)}
                <ArrowRight onClick={() => handleScroll(1)} />
            </div>

        </div>
    )
};

export default SectionWrapper(Portfolio, "portfolio");