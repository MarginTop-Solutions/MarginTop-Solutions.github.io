import SectionWrapper from "@/wrapper";
import { Facebook, Github, Instagram, Linkedin, Mail, Phone, PhoneCallIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => (
    <div className="relative w-full h-screen gradient-bg flex flex-col gap-4 justify-center items-center">
        <img src="/footer.png" alt="footer wave" className="absolute top-0 right-0 h-full" />
        <img src="/footer.png" alt="footer wave" className="absolute top-0 left-0 h-full scale-x-[-1]" />

        <img src='/margintopBigLogo.svg' alt="logo" className="h-80" />

        <div className="flex flex-row gap-4">
            <Link href="https://www.facebook.com/margintopsolutionsnepal"><Facebook width={32} height={32} className="fill-white" /></Link>
            <Link href="https://www.linkedin.com/company/margintop-solutions"><Linkedin width={32} height={32} className="fill-white" /></Link>
            {/* <Link href="www.instagram.com"><Instagram href="" width={32} height={32} /></Link> */}
            <Link href="https://github.com/orgs/MarginTop-Solutions"><Github width={32} height={32} /></Link>
        </div>
        <div className="flex flex-row gap-4">
        <Link href="tel:+9779845926945"><PhoneCallIcon width={32} height={32} /></Link>
    <Link href="mailto:hello@margintopsolutions.com.np"><Mail width={32} height={32} /></Link>
    <Link href="tel:+97798141148108"><PhoneCallIcon width={32} height={32} /></Link>

        </div>
    </div>
);

export default Footer;