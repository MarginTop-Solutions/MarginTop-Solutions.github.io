import SectionWrapper from "@/wrapper";
import { Typography } from "@mui/material";
import { service_tab_items } from "@/constants";
import { useState } from "react";
import { Link } from "react-scroll";
import { styles } from "@/styles/styles";
import ServicePopUp from "./ServicePopUp";

const ServiceHeader = () => (
    <div className="flex flex-col gap-2">
        <Typography variant="h6" fontWeight={400} className="font-poppins">
            Break New Grounds
        </Typography>

        <Typography fontWeight={800} letterSpacing={4} variant="h1" className="font-sans text-stroke-white text-fill-black">
            Services
        </Typography>

        <Typography variant="body1" className="font-poppins">
            We prioritize Customer Experience, crafting impactful solutions through understanding actions, emotions, and unmet needs.
        </Typography>

    </div>
);

const ServicesTab = ({ need, setNeed }) => {
    const [active, setActive] = useState(false);
    const [index, setIndex] = useState(0);

    return (
        <div className="py-6">
            <div className="flex flex-row text-xl overflow-scroll">
                {service_tab_items.map((item, i) => (
                    <button
                        className={`p-2 lg:px-4 rounded-t-md ${i === index ? "bg-secondary font-bold" : "hover:bg-[#aaaa]"}`}
                        onClick={() => setIndex(i)}
                        key={i}
                    >
                        {item.topic}
                    </button>
                ))}
            </div>

            <div className="flex flex-row lg:gradient-border relative">
                <div className="flex flex-col w-full lg:w-2/4 lg:px-20 gap-6 p-4 justify-around">
                    <Typography fontWeight={600} variant="h4" className="gradient-text">{service_tab_items[index].topic}</Typography>
                    <Typography variant="h6" >{service_tab_items[index].description}</Typography>
                    <button className={`${styles.wht_button} w-fit`} onClick={() => setActive(true)}>Learn More</button>
                </div>

                <img
                    className="rounded-md pt-20 pb-20 pr-10 h-full w-full object-cover absolute z-[-1] opacity-30 md:opacity-100 md:static lg:w-2/4"
                    src={service_tab_items[index].image}
                    alt={service_tab_items[index].topic}
                />
            </div>
            <ServicePopUp active={active} setActive={setActive} service={service_tab_items[index]} need={need} setNeed={setNeed} />
        </div>
    )
};

const Services = ({ need, setNeed }) => (
    <div className="flex flex-col my-[3%] font-poppins">
        <ServiceHeader />
        <ServicesTab need={need} setNeed={setNeed} />
        <Link
            to={'tools'}
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
            className={`${styles.wht_button} w-fit self-center`}
        >
            Tools We Use
        </Link>
    </div>
);

export default SectionWrapper(Services, "services");