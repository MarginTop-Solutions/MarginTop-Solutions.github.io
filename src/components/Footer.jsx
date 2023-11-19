import SectionWrapper from "@/wrapper";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";

const Footer = () => (
    <div className="relative w-full h-screen gradient-bg flex flex-col gap-4 justify-center items-center">
        <img src="/footer.png" alt="footer wave" className="absolute top-0 right-0 h-full" />
        <img src="/footer.png" alt="footer wave" className="absolute top-0 left-0 h-full scale-x-[-1]" />

        <img src='/margintopBigLogo.svg' alt="logo" />

        <div className="flex flex-row gap-4">
            <Facebook width={32} height={32} className="fill-white" />
            <Linkedin width={32} height={32} className="fill-white" />
            <Github width={32} height={32} />
            <Instagram width={32} height={32} />
        </div>
    </div>
);

export default SectionWrapper(Footer);