import { Typography } from "@mui/material";
import { portfolio_projects } from "@/constants";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Circle } from "lucide-react";
import SectionWrapper from "@/wrapper";

const SideCard = ({ proj, onClick }) => (
    <img src={proj.image} alt={proj.title} className="rounded-xl w-1/3 xl:w-1/5 hover:opacity-80" onClick={onClick} />
)

const FocusedCard = ({ proj }) => (
    <div className="relative rounded-xl min-w-1/2 overflow-hidden">
        <img src={proj.image} alt={proj.title} className="absolute rounded-xl z-[-1] w-full" />
        <div className="relative flex flex-col gap-16 xl:w-3/5 w-2/3 bg-[#012a2abb] px-8 py-12 backdrop-blur">
            <Typography variant="h4" fontWeight={600} >{proj.title}</Typography>
            <Typography variant="h6" >{proj.description}</Typography>
            <Link
                href={proj.link}
                className="bg-white text-secondary text-lg w-fit px-8 py-2 rounded-md"
            >
                View Project
            </Link>
        </div>
    </div>
)

const ProjectsView = ({ focusedIndex, handleScroll }) => (
    <div className="flex flex-col xl:flex-row justify-around gap-4 items-center">
        <SideCard
            proj={portfolio_projects[(focusedIndex - 1 + portfolio_projects.length) % portfolio_projects.length]}
            onClick={() => handleScroll(-1)}
        />
        <FocusedCard proj={portfolio_projects[focusedIndex]} />
        <SideCard
            proj={portfolio_projects[(focusedIndex + 1) % portfolio_projects.length]}
            onClick={() => handleScroll(1)}
        />
    </div>
);

const Portfolio = () => {
    const [focusedIndex, setFocusedIndex] = useState(0);

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

            <ProjectsView focusedIndex={focusedIndex} handleScroll={handleScroll} />
            <div className="flex flex-row items-center gap-4 py-4 px-6 mt-4">
                <ArrowLeft onClick={() => handleScroll(-1)} />
                {portfolio_projects.map((_, i) => <Circle key={i} strokeWidth={i === focusedIndex ? 4 : 2} />)}
                <ArrowRight onClick={() => handleScroll(1)} />
            </div>

        </div>
    )
};

export default SectionWrapper(Portfolio, "portfolio");