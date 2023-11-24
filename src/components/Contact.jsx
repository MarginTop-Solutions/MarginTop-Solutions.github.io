import SectionWrapper from "@/wrapper";
import { Typography } from "@mui/material";
import { Mail, PhoneCall, XIcon } from "lucide-react";
import { service_tab_items } from "@/constants";
import { useState } from "react";

const ContactPage1 = ({ selectedList, updateItem, lookingFor, handleLookingFor, ContinueButton }) => {

    return (
        <div className="flex flex-col gap-4 bg-[#2f2f2f88] px-16 py-12 rounded-xl">

            <Typography variant="body1">What are you looking to have developed</Typography>

            <div className="flex flex-row gap-4 flex-wrap">
                {service_tab_items.map((service, i) =>
                    selectedList.includes(service.topic) ?
                        <div className="relative" >
                            <XIcon
                                onClick={() => updateItem(service.topic)}
                                className="p-1 absolute -right-2 -top-2 bg-secondary rounded-full hover:bg-white hover:text-black"
                            />
                            <button
                                key={i}
                                className="bg-primary rounded-xl px-6 py-2 gap-3"
                            >
                                {service.topic}
                            </button>
                        </div>
                        : <button
                            key={i}
                            className="bg-secondary hover:bg-white hover:text-black rounded-xl px-6 py-2 gap-3"
                            onClick={() => updateItem(service.topic)}
                        >
                            {service.topic}
                        </button>
                )}
            </div>

            <Typography variant="body1" className="py-2">Or, tell us what you're looking for</Typography>

            <input
                type="text"
                className="bg-[#0000] border-b-2 border-gray-400 focus:border-white outline-none w-1/2"
                placeholder="Enter a topic"
                value={lookingFor ? lookingFor : selectedList}
                onChange={(e) => handleLookingFor(e.target.value)}
            />

            <ContinueButton />

        </div>
    );
}

const ContactPage2 = ({ values, setValues, ContinueButton, GoBackButton }) => {


    const InputField = ({ label, value, placeholder, onChange }) => (
        <div className="flex flex-col gap-2 w-2/5">
            <Typography variant="body1">{label}</Typography>
            <input
                type="text"
                className="bg-[#0000] border-b-2 border-gray-400 focus:border-white outline-none"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    )

    return (
        <div className="flex flex-col flex-grow gap-8 bg-[#2f2f2f88] px-16 py-12 rounded-xl">

            <Typography variant="body1">Tell us about yourself</Typography>

            <div className="flex flex-row flex-wrap gap-8 justify-between">
                <InputField label="Name" value={values.name} placeholder="Full Name" onChange={setValues.name} />
                <InputField label="Country" value={values.country} placeholder="Nepal" onChange={setValues.country} />
                <InputField label="Email" value={values.mail} placeholder="example@example.com" onChange={setValues.mail} />
                <InputField label="WhatsApp Number" value={values.number} placeholder="+977-9800000000" onChange={setValues.number} />
            </div>

            <div className="flex flex-row gap-8">
                <ContinueButton />
                <GoBackButton />
            </div>

        </div>
    )
}

// TODO
const ContactPage3 = () => {
    return <Typography>nnnnnnnnnnnnn</Typography>
}

const Contact = () => {

    const [page, setPage] = useState(0);

    const [selectedList, setSelectedList] = useState([]);
    const [lookingFor, setLookingFor] = useState('');

    const [name, setName] = useState("");
    const [country, setCountry] = useState("");
    const [mail, setMail] = useState("");
    const [number, setNumber] = useState("");

    const handleLookingFor = (value) => {
        if (selectedList) setSelectedList([]);
        setLookingFor(value);
    }

    const updateItem = (item) => {
        if (selectedList.includes(item))
            setSelectedList(selectedList.filter((s) => s != item))
        else
            setSelectedList([...selectedList, item]);

        if (selectedList) setLookingFor('');
    }


    const continueBtn = () => (
        <button
            onClick={() => setPage((page + 1) % 3)}
            className="bg-secondary hover:bg-white hover:text-black rounded-full py-2 px-12 w-fit mt-6"
        >
            Continue
        </button>
    );

    const backBtn = () => (
        <button
            onClick={() => setPage((page + 2) % 3)}
            className="bg-primary border-secondary border-2 hover:bg-white hover:text-black rounded-full py-2 px-12 w-fit mt-6"
        >
            Go Back
        </button>
    )

    const getPage = (index) => {
        switch (index) {
            case 0:
                return <ContactPage1
                    selectedList={selectedList}
                    updateItem={updateItem}
                    lookingFor={lookingFor}
                    handleLookingFor={handleLookingFor}
                    ContinueButton={continueBtn}
                />;

            case 1:
                return <ContactPage2
                    values={{ name: name, country: country, mail: mail, number: number }}
                    setValues={{ name: setName, country: setCountry, mail: setMail, number: setNumber }}
                    ContinueButton={continueBtn}
                    GoBackButton={backBtn}
                />;

            case 3:
                return <ContactPage3 />;

            default:
                ContactPage1;
        }
    }

    return (
        <div className="flex flex-col m-12">
            <div className="flex flex-row gap-2">
                <div className="bg-white w-[6px]" />
                <Typography variant="h2" className="font-bold">Contact Us</Typography>
            </div>
            <Typography variant="h6" fontFamily={"sans"} className="py-2">Lets chat about your amazing ideas and projects</Typography>

            <div className="flex flex-row gap-16 mt-12">

                {getPage(page)}

                <div className="flex flex-col gap-4 text-lg w-1/3">
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