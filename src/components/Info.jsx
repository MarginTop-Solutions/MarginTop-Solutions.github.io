import SectionWrapper from "@/wrapper";
import { Typography } from "@mui/material";
import { ArrowRight, Box, Code2, InfinityIcon, Landmark, Lightbulb } from "lucide-react";

const InfoCard = () => (
    <div className="flex flex-row gap-12 px-16">
        <div className="flex flex-col justify-around px-6 py-4">
            <Typography variant="h3" fontWeight={700}>Artificial Intelligence</Typography>
            <Typography variant="body1">
                Metaverse development refers to the creation of a shared
                virtual space that allows users to interact with each other and with digital objects in real-time.
            </Typography>
            <div className="bg-secondary p-4 flex flex-row gap-2 rounded-md">
                <Box />
                <div className="flex flex-col gap-2">
                    <Typography variant="h5">Metaverse Development</Typography>
                    <Typography variant="body1">
                        Metaverse development refers to the creation of a shared virtual space
                        that allows users to interact with each other and with digital objects in real-time.
                    </Typography>
                </div>
            </div>
            <div className="flex flex-row gap-2 px-4 py-2 items-center bg-[#200a3177] border-2 border-[#222]">
                <InfinityIcon />
                <Typography variant="h5">NFT Marketplace Development</Typography>
            </div>

            <div className="flex flex-row gap-2 px-4 py-2 items-center bg-[#200a3177] border-2 border-[#222]">
                <Lightbulb />
                <Typography variant="h5">Crypto Wallet Development</Typography>
            </div>

            <div className="flex flex-row gap-2 px-4 py-2 items-center bg-[#200a3177] border-2 border-[#222]">
                <Code2 />
                <Typography variant="h5">Dapp Development</Typography>
            </div>

            <div className="flex flex-row gap-2 px-4 py-2 items-center bg-[#200a3177] border-2 border-[#222]">
                <Landmark />
                <Typography variant="h5">Smart Contract Development</Typography>
            </div>

        </div>
        <img src="/AI_info.png" alt="whatever" />
    </div>
);

const Info = () => {

    return (
        <div className="flex flex-row justify-center items-center mt-12 mx-16">
            <InfoCard/>
            <ArrowRight className="bg-[#2a2a2a] hover:bg-[#3a3a3a] w-12 h-12 p-2" />
        </div>
    )
};

export default SectionWrapper(Info);