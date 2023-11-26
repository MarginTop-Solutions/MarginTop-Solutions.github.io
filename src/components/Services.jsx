import SectionWrapper from "@/wrapper";
import { Typography } from "@mui/material";
import { service_tab_items } from "@/constants";
import { useState } from "react";
import { Link } from "react-scroll";
import { styles } from "@/styles/styles";
import ServicePopUp from "./ServicePopUp";

const ServiceHeader = () => (
    <div>
        <Typography variant="h6" fontWeight={400} className="font-poppins">
            Break New Grounds
        </Typography>

        <Typography variant="h1" fontWeight={800} letterSpacing={4} className="font-sans text-stroke-white text-fill-black">
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
            <div className="flex flex-row text-xl">
                {service_tab_items.map((item, i) => (
                    <button
                        className={`py-2 px-4 rounded-t-md ${i === index ? "bg-secondary font-bold" : "hover:bg-[#aaaa]"}`}
                        onClick={() => setIndex(i)}
                        key={i}
                    >
                        {item.topic}
                    </button>
                ))}
            </div>

            <div className="flex flex-row p-4 gradient-border">
                <div className="flex flex-col w-2/3 px-20 py-8 gap-6 justify-around">
                    <Typography variant="h2" fontWeight={600} className="gradient-text">{service_tab_items[index].topic}</Typography>
                    <Typography variant="h6" >{service_tab_items[index].description}</Typography>
                    <button className={`${styles.wht_button} w-fit`} onClick={()=>setActive(true)}>Learn More</button>
                </div>

                <img
                    className="rounded-md h-cover w-1/3"
                    src={service_tab_items[index].image}
                    alt={service_tab_items[index].topic}
                />
            </div>
            <ServicePopUp active={active} setActive={setActive} service={service_tab_items[index]} need={need} setNeed={setNeed} />
        </div>
    )
};

const Services = ({ need, setNeed }) => (
    <div className="flex flex-col mt-[6%] font-poppins">
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