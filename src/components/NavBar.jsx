import SectionWrapper from "@/wrapper";
import { nav_items } from "@/constants"
import QuoteReqButton from "./QuoteReq";
import { Link } from "react-scroll";
import { styles } from "@/styles/styles";
import { useState, useEffect } from "react";
import { List } from "lucide-react";


const MobileNavBar = () => {
    const [collapsed, setCollapsed] = useState(true);
}

const NavBar = () => {
    const [isSmall, setIsSmall] = useState(false);

    const updateScreenWidth = () => setIsSmall(window.innerWidth <= 600);

    useEffect(() => {
        window.addEventListener('resize', updateScreenWidth);
        updateScreenWidth();
        return () => {
            window.removeEventListener('resize', updateScreenWidth);
        };
    }, []);

    return (
        <div className="flex flex-row justify-between">
            <img src='/margintoplogo.svg' alt="logo" className="w-64" />

            {!isSmall ?
                <div className={`flex flex-row gap-8 justify-between my-auto items-center`}>
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
                </div> :
                <MobileNavBar />
            }
        </div>
    );
};


export default SectionWrapper(NavBar);