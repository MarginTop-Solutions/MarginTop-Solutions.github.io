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
                to={'industries'}
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
        <div className="flex-1 px-6 py-4 flex flex-col justify-between font-inter">
        <Typography variant='h1' className="font-bold">Hi !</Typography>
        <Typography variant='h4' className="font-light">Welcome to MarginTop Solutions</Typography>
            <br />
            <p>
            We believe in innovative ideas comes from the ground level. We believe in building relationship and trust before building the prototype. So, if you share the same value as we do, we would love to talk to you and shape your idea into reality.
            </p>
            <p>
            Team MarginTop Solutions.
            </p>
        </div>
    </div>
);

export default SectionWrapper(About, "about");