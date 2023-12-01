import { nav_items } from "@/constants"
import QuoteReqButton from "./QuoteReq";
import { Link } from "react-scroll";
import { styles } from "@/styles/styles";
import { useState, useEffect } from "react";
import { AlignJustify, XIcon } from "lucide-react";


const CollapsableNavBar = () => {
    const [collapsed, setCollapsed] = useState(true);
    if (collapsed) return <AlignJustify onClick={() => setCollapsed(!collapsed)} width={64} height={56} className="my-auto mx-8 bg-secondary p-4 rounded-full hover:cursor-pointer" />;

    return (
        <nav className="relative flex flex-row gap-2 rounded-xl">

            <div className="fixed w-full md:w-1/2 h-screen top-0 right-0 py-6 px-12 flex flex-row bg-primary rounded-xl">

                <div className=" flex flex-col justify-around py-4 px-8 w-full">
                    {nav_items.map(({ label, link }) => (

                        <Link
                            to={link}
                            spy={true}
                            smooth={true}
                            offset={-200}
                            duration={500}
                            key={link}
                            className={`${styles.trp_button}`}
                        >
                            {label}
                        </Link>
                    ))}
                    <QuoteReqButton className={styles.grn_button} />
                </div>
                <XIcon onClick={() => setCollapsed(!collapsed)} width={64} height={56} className="p-2 rounded-full hover:cursor-pointer hover:rotate-180 duration-500 ease-in-out" />
            </div>
        </nav>
    );
}

const NavBar = () => {
    const [isSmall, setIsSmall] = useState(false);

    const updateScreenWidth = () => setIsSmall(window.innerWidth <= 1165);

    useEffect(() => {
        window.addEventListener('resize', updateScreenWidth);
        updateScreenWidth();
        return () => {
            window.removeEventListener('resize', updateScreenWidth);
        };
    }, []);

    return (
        <div className="flex flex-row justify-between xl:px-24 py-12 gap-2 xl:gap-6">
            <img src='/margintoplogo.svg' alt="logo" className="w-64 xl:px-0" />

            {!isSmall ?
                <nav className={`flex flex-row gap-2 xl:gap-4 px-4 justify-between my-auto items-center`}>
                    {nav_items.map(({ label, link }) => (

                        <Link
                            to={link}
                            spy={true}
                            smooth={true}
                            offset={-200}
                            duration={500}
                            key={link}
                            className={`${styles.trp_button}`}
                        >
                            {label}
                        </Link>
                    ))}
                    <QuoteReqButton className={styles.grn_button} />
                </nav> :
                <CollapsableNavBar />
            }
        </div>
    );
};


export default NavBar;