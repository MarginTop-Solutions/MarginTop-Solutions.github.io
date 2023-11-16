import { Typography } from "@mui/material";
import { portfolio_projects } from "@/constants";
import Link from "next/link";

const ProjectCard = ({ proj }) => (
    <div className="relative rounded-xl min-w-[40%] mx-4 overflow-hidden">
        <img src={proj.image} alt={proj.title} className="absolute rounded-xl z-[-1] w-full" />
        <div className="relative flex flex-col gap-8 w-2/5 bg-[#012a2abb] px-12 py-8 backdrop-blur">
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

const ProjectsView = () => {
    //  TODO : content is not overflowing here. so to prevent issues flex is set col for now..
    return (
        <div className="flex gap-8 items-center overflow-auto">
            {portfolio_projects.map((proj, i) => (
                <ProjectCard key={i} proj={proj} />
            ))}
        </div>
    );
}

const Portfolio = () => (
    <div className="mt-12 flex flex-col items-center" id="portfolio">
        <Typography variant="h6">PORTFOLIO</Typography>
        <Typography variant="h2" fontWeight={700}>They trusted Us</Typography>
        <Typography variant="h6" className="mx-[16%] text-center">
            We have extensive experience in designing and developing custom software development
            projects that can create brand awareness for your platform
        </Typography>

        <ProjectsView />

    </div>
);

export default Portfolio;