import SectionWrapper from "@/wrapper";
import { Typography } from "@mui/material";
import { service_tab_items } from "@/constants";
import { useState } from "react";
import { Link } from "react-scroll";

const ServiceHeader = () => (
    <div>
        <Typography variant="h6" fontWeight={400} className="font-poppins">
            Break New Grounds
        </Typography>

        <Typography variant="h1" fontWeight={800} letterSpacing={4} className="font-sans text-stroke-white text-fill-black">
            Services
        </Typography>

        <Typography variant="body2" className="font-poppins">
            We prioritize Customer Experience, crafting impactful solutions through understanding actions, emotions, and unmet needs.
        </Typography>

    </div>
);

const ServicesTab = () => {

    const [index, setIndex] = useState(0);

    return (
        <div className="py-6">
            <div className="flex flex-row text-xl">
                {service_tab_items.map((item, i) => (
                    <button
                        className={i === index ? "bg-secondary py-2 px-4 rounded-t-md font-bold" : "py-2 px-4"}
                        onClick={() => setIndex(i)}
                        key={i}
                    >
                        {item.topic}
                    </button>
                ))}
            </div>

            <div className="flex flex-row p-4 gradient-border">
                <div className="flex flex-col px-20 py-8 justify-around">
                    <Typography variant="h2" fontWeight={600} className="gradient-text">{service_tab_items[index].topic}</Typography>
                    <Typography variant="h6" >{service_tab_items[index].description}</Typography>
                    <Link
                        to={'tools'}
                        spy={true}
                        smooth={true}
                        offset={-200}
                        duration={500}
                        className= "bg-white text-secondary w-fit px-6 py-2 text-lg rounded-md font-semibold"
                    >
                        Learn More
                    </Link>
                </div>

                <img
                    className="rounded-md h-full w-[50%]"
                    src={service_tab_items[index].image}
                    alt={service_tab_items[index].topic}
                />
            </div>
        </div>
    )
};

const Services = () => (
    <div className="flex flex-col mt-[6%] font-poppins">
        <ServiceHeader />
        <ServicesTab />
        <Link
            to={'tools'}
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
            className="bg-white text-secondary w-fit self-center px-12 py-2 text-lg rounded-md font-semibold"
        >
            More
        </Link>
    </div>
);

export default SectionWrapper(Services, "services");