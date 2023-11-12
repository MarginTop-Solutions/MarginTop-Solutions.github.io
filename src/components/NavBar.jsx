import SectionWrapper from "@/wrapper";
import { nav_items } from "@/constants"
import QuoteReqButton from "./QuoteReq";
import { Link } from "react-scroll";
import { styles } from "@/styles/styles";

const NavBar = () => (
    <div className="flex flex-row justify-between">
        <img src='/margintoplogo.svg' alt="logo" />

        <div className="flex flex-row justify-between my-auto gap-16 items-center">
            {nav_items.map(({ label, link }) => (

                <Link
                    to={link}
                    spy={true}
                    smooth={true}
                    offset={-200}
                    duration={500}
                    key={link}
                    className={styles.trp_button}
                >
                    {label}
                </Link>
            ))}
            <QuoteReqButton className={styles.grn_button} />
        </div>
    </div>
)


export default SectionWrapper(NavBar);