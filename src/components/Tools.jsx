import { tools } from "@/constants";
import { Typography } from "@mui/material";

const Tools = () => (
    <div className="bg-[#333b] flex flex-col gap-6 px-32 py-16" id="tools">
        <Typography variant="h5" fontFamily={"sans"}>Tools we use</Typography>

        <div className="flex flex-row justify-between py-6">
            {tools.map((tool, i) => (
                <img src={tool} key={i} alt={tool} />
            ))}
        </div>

        {/* <div className="flex flex-row justify-between scale-[-1]">
            {tools.map((tool, i) => (
                <img src={tool} key={i} alt={tool} />
            ))}
        </div> */}
    </div>
);

export default Tools;