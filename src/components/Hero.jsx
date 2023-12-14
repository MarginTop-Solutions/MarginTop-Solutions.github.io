import { styles } from "@/styles/styles";
import SectionWrapper from "@/wrapper";
import { Typography } from "@mui/material";
import { Disc, ArrowRight } from "lucide-react";
import { Link } from "react-scroll";
import { making } from "@/constants";
import { useEffect, useState } from "react";

const TypedTypography = ({ value, fontWeight, className, delay, active = true, setActive = () => { } }) => {
    const [content, setContent] = useState('');
    useEffect(() => {
        let currentIndex = content.length;
        if (currentIndex >= value.length) {
            setActive(true);
            return;
        }
        const timeout = setTimeout(() => {
            setContent(content + active ? value[currentIndex] : '');
        }, delay);
        return () => clearTimeout(timeout);
    });

    return (
        <Typography fontWeight={fontWeight} className={className}>{content}</Typography>
    )
}

const Hero = () => {
    const [curIndex, setCurIndex] = useState(0);
    const [active, setActive] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCurIndex((i) => (i + 1) % making.length);
            setActive(false);
        }, 5000);

        return () => clearTimeout(timeout);
    }, [curIndex, making.length]);

    return (
        <div className="my-auto flex flex-row gap-6">
            <div className="flex flex-col items-center gap-6">
                {making.map((_, i) => i === curIndex ?
                    <Disc key={i} /> : <div className="w-4 h-4 rounded-full bg-white" key={i} />
                )}
            </div>
            <div className="flex-grow">
                <Typography variant="h5">WE MADE AND WE ARE</Typography>
                <Typography className="text-5xl md:text-7xl font-poppins"> MAKING YOUR</Typography>
                <TypedTypography value={making[curIndex].title} fontWeight={600} key={curIndex} className="text-4xl md:text-6xl" delay={70} setActive={setActive} />
                <TypedTypography value={making[curIndex].description} fontWeight={400} key={-(curIndex + 1)} className="font-poppins md:w-1/2" delay={20} active={active} />

                <Link
                    to={'about'}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    className={`flex flex-row gap-2 items-center w-fit mt-12 ${styles.grn_button}`}
                >
                    About Us
                    <ArrowRight />
                </Link>
            </div>
        </div>
    )
};

export default SectionWrapper(Hero, "home");