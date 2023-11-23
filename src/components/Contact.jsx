import SectionWrapper from "@/wrapper";
import { Typography } from "@mui/material";
import { Mail, PhoneCall } from "lucide-react";
import { service_tab_items } from "@/constants";
import { useState } from "react";

const Contact = () => {
    const [lookingFor, setLookingFor] = useState('');

    return (
        <div className="flex flex-col m-12">
            <div className="flex flex-row gap-2">
                <div className="bg-white w-[6px]" />
                <Typography variant="h2" className="font-bold">Contact Us</Typography>
            </div>
            <Typography variant="h6" fontFamily={"sans"} className="py-2">Lets chat about your amazing ideas and projects</Typography>

            <div className="flex flex-row gap-16 mt-12">
                <div className="flex flex-col gap-4 bg-[#2f2f2f88] px-16 py-12 rounded-xl">

                    <Typography variant="body1">What are you looking to have developed</Typography>

                    <div className="flex flex-row gap-4 flex-wrap">
                        {service_tab_items.map((service, i) => (
                            <button key={i} className="bg-secondary hover:bg-white hover:text-black rounded-xl px-6 py-2 gap-3" onClick={()=>setLookingFor(service.topic)}>
                                {service.topic}
                            </button>
                        ))}
                    </div>

                    <Typography variant="body1" className="py-2">Or, tell us what you're looking for</Typography>

                    <input
                        type="text"
                        className="bg-[#0000] border-b-2 border-gray-400 focus:border-white outline-none w-1/2"
                        placeholder="Enter a topic"
                        value={lookingFor}
                        onChange={(e) => setLookingFor(e.target.value)}
                    />

                    <button className="bg-secondary hover:bg-white hover:text-black rounded-full py-2 px-12 w-fit mt-6">
                        Continue
                    </button>

                </div>

                <div className="flex flex-col gap-4 text-lg">
                    <div className="flex gap-6 hover:underline">
                        <PhoneCall fill="white" />
                        +977 9876543210
                    </div>
                    <div className="flex gap-6 hover:underline">
                        <Mail className="invert" fill="#0" />
                        contact@margintop.com
                    </div>
                    <Typography variant="h5" className="p-16 mt-12 bg-secondary rounded-xl">
                        Reach out and let's write the next chapter of success together.
                    </Typography>
                </div>
            </div>
        </div>
    )
};

export default SectionWrapper(Contact, "contact");