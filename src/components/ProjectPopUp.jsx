import { styles } from "@/styles/styles";
import { Dialog, Typography } from "@mui/material";
import { Link } from "react-scroll";


export default function ProjectPopUp({ active, setActive, project, need, setNeed }) {
    return (
        <Dialog
            open={active}
            maxWidth="lg"
            onClose={() => setActive(false)}
            className="bg-primary bg-opacity-80 mx-24"
        >
            <div className="flex flex-col items-center gap-6 p-12 bg-primary text-white relative">
                <Typography variant="h4" >{project.title}</Typography>
                <div className="flex gap-4 ">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="rounded-2xl w-1/2"
                    />
                    <Typography variant="h6" className="w-1/3 m-auto px-12 py-6">{project.description}</Typography>
                </div>
                <div className="flex flex-row w-full justify-around">
                    <Link
                        to={"contact"}
                        spy={true}
                        smooth={true}
                        offset={-200}
                        duration={500}
                        className={styles.brd_button}
                        onClick={() => {
                            setActive(false);
                            setNeed(need + project.title + ", ");
                        }}
                    >
                        Get Similiar Product
                    </Link>

                    {project.link &&
                        <a href={project.link} className={styles.brd_button}>View Product</a>
                    }
                </div>
            </div>
        </Dialog>
    )
}