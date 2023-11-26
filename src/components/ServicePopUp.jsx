import { styles } from "@/styles/styles";
import { Dialog, Typography } from "@mui/material";
import { Link } from "react-scroll";


export default function ServicePopUp({ active, setActive, service, need, setNeed }) {
    return (
        <Dialog
            open={active}
            maxWidth="lg"
            onClose={() => setActive(false)}
            className="bg-primary bg-opacity-80 mx-24"
        >
            <div className="flex flex-col items-center gap-6 p-12 gradient-bg text-white relative">
                <Typography variant="h4" >{service.topic}</Typography>
                <div className="flex gap-4 ">
                    <img
                        src={service.image}
                        alt={service.topic}
                        className="rounded-2xl w-1/2"
                    />
                    <Typography variant="h6" className="w-1/3 m-auto px-12 py-6">{service.description}</Typography>
                </div>

                <Link
                    to={"contact"}
                    spy={true}
                    smooth={true}
                    offset={-200}
                    duration={500}
                    className={styles.wht_button}
                    onClick={() => {
                        setActive(false);
                        setNeed(need + service.topic + ", ");
                    }}
                >
                    Get A Product
                </Link>
            </div>
        </Dialog>
    )
}