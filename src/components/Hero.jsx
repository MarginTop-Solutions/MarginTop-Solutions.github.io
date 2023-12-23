import { styles } from "@/styles/styles";
import SectionWrapper from "@/wrapper";
import { Typography } from "@mui/material";
import { Disc, ArrowRight } from "lucide-react";
import { Link } from "react-scroll";
import { making } from "@/constants";
import { useEffect, useState } from "react";

const TypedTypography = ({ value, variant, fontWeight, className, delay, onComplete = (_) => { } }) => {
    const [content, setContent] = useState('');
    useEffect(() => {
        let currentIndex = content.length;
        if (currentIndex >= value.length) {
            if (onComplete) onComplete();
            return;
        }

        const timeout = setTimeout(() => {
            setContent(content + value[currentIndex]);
        }, delay);
        return () => clearTimeout(timeout);
    });

    return (
        <Typography fontWeight={fontWeight} variant={variant} className={className}>{content}</Typography>
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
                <Typography variant="h3" className="font-poppins"> MAKING YOUR</Typography>
                <TypedTypography value={making[curIndex].title} fontWeight={600} variant="h3" key={curIndex} delay={70} onComplete={() => setActive(true)} />
                {active && <TypedTypography value={making[curIndex].description} fontWeight={400} variant="body2" key={-(curIndex + 1)} className="font-poppins md:w-1/2" delay={20} />}

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