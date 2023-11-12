import { styles } from "@/styles/styles";
import SectionWrapper from "@/wrapper";
import { Typography } from "@mui/material";
import { Disc, ArrowRight } from "lucide-react";
import { Link } from "react-scroll";

const Hero = () => (
    <div className="mt-[15%] flex flex-row gap-6">
        <div className="flex flex-col items-end gap-6">
            <Disc />
            <div className="w-4 h-4 rounded-full bg-white" />
            <div className="w-4 h-4 rounded-full bg-white" />
            <div className="w-4 h-4 rounded-full bg-white" />
        </div>
        <div className="flex-grow">
            <Typography variant="h5">WE MADE AND WE ARE</Typography>
            <Typography variant="h2" className="font-poppins"> MAKING YOUR</Typography>
            <Typography variant="h3" fontWeight={600}>WEB-APPS</Typography>
            <Typography variant="h6" fontWeight={400} className="font-poppins">
                Secure the finest web designing and development services with us <br />
                We offer innovative solutions to expand your business and enhance its reach.
            </Typography>

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
);

export default SectionWrapper(Hero, "home");