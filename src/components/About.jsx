import { styles } from "@/styles/styles";
import SectionWrapper from "@/wrapper";
import { Typography } from "@mui/material";
import { Link } from "react-scroll";
import { MoveRight } from "lucide-react";

const About = () => (
    <div className="py-48 flex flex-row gap-4">
        <div className="flex flex-1 px-6 py-4 flex-col items-end font-poppins gap-4">
            <Typography variant='h3' className="font-bold">Our Challenge</Typography>
            <Typography variant="h4">is our progress</Typography>
            <Link
                to={'tools'}
                spy={true}
                smooth={true}
                offset={-200}
                duration={500}
                className={`flex flex-row mt-12 gap-6 items-center ${styles.brd_button}`}
            >
                Learn More
                <MoveRight />
            </Link>
        </div>
        <div className="flex-1 px-6 py-4 flex flex-col justify-between font-inter text-lg">
            <p>
                Based in Amsterdam and Nepal, we blend Dutch precision with Nepali creativity to
                create exceptional software solutions. Our diverse team fosters continuous innovation,
                offering services from tailor made software.
            </p>
            <p>
                Join us in shaping the future of technology, where Amsterdam and the Himalayas converge
                to transform industries and enrich lives.
            </p>
        </div>
    </div>
);

export default SectionWrapper(About, "about");