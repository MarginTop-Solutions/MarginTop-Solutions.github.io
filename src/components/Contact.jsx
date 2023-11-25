import { Typography } from "@mui/material";
import { Mail, PhoneCall } from "lucide-react";
import { useState } from "react";
import emailjs from '@emailjs/browser'

import SectionWrapper from "@/wrapper";
import ContactPage1 from "./Contact1";
import ContactPage2 from "./Contact2";
import ContactPage3 from "./Contact3";

const Contact = () => {

    const [page, setPage] = useState(0);

    const [selectedList, setSelectedList] = useState([]);
    const [lookingFor, setLookingFor] = useState('');

    const [form, setForm] = useState({
        name: '',
        country: '',
        email: '',
        number: '',
        budget: '',
        detail: ''
    });

    const handleChange = (e, label) => {
        setForm({ ...form, [label]: e.target.value });
    }

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

    const backBtn = () => (
        <button
            onClick={() => setPage((page + 2) % 3)}
            className="bg-primary border-secondary border-2 hover:bg-white hover:text-black rounded-full py-2 px-12 w-fit mt-6"
        >
            Go Back
        </button>
    );

    const handleSubmit = (e) => {
        if (!form.name || !form.email || !form.number || (!lookingFor && !selectedList)) return;

        emailjs.send('todo', 'template_1lawbul',
            {
                from_name: form.name,
                to_name: "MarginTop Solutions",
                from_email: form.email,
                to_email: "todo",
                message: JSON.stringify({
                    country: form.country,
                    number: form.number,
                    budget: form.budget,
                    detail: form.detail,
                    lookingFor: lookingFor ?? selectedList
                })
            },
            'FFrphKn6nBenkdvRA'
        ).then(() => {
            alert('Thank you ! I will get back to you as soon as possible.');
            setForm({
                name: '',
                country: '',
                email: '',
                number: '',
                budget: '',
                detail: ''
            });
            setLookingFor('');
            setSelectedList([]);
        }, (err) => {
            console.log(err);
            alert('Something went wrong !');
        })
    }

    const continueBtn = () => (
        <button
            onClick={() => {
                if (page === 2)
                    handleSubmit();
                setPage((page + 1) % 3);
            }}
            className="bg-secondary hover:bg-white hover:text-black rounded-full py-2 px-12 w-fit mt-6"
        >
            Continue
        </button>
    );


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
                    values={{ name: form.name, country: form.country, email: form.email, number: form.number }}
                    handleChange={handleChange}
                    ContinueButton={continueBtn}
                    GoBackButton={backBtn}
                />;

            case 2:
                return <ContactPage3
                    values={form}
                    handleChange={handleChange}
                    ContinueButton={continueBtn}
                    GoBackButton={backBtn}
                />;

            default:
                return <ContactPage1
                    selectedList={selectedList}
                    updateItem={updateItem}
                    lookingFor={lookingFor}
                    handleLookingFor={handleLookingFor}
                    ContinueButton={continueBtn}
                />
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