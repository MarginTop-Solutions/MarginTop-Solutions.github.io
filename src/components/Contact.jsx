import { Typography } from "@mui/material";
import { Mail, PhoneCall } from "lucide-react";
import { useState } from "react";
import emailjs from '@emailjs/browser'

import SectionWrapper from "@/wrapper";
import ContactPage1 from "./Contact1";
import ContactPage2 from "./Contact2";
import ContactPage3 from "./Contact3";

const Contact = ({ need, setNeed }) => {

    const [page, setPage] = useState(0);

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

    const backBtn = () => (
        <button
            onClick={() => setPage((page + 2) % 3)}
            className="bg-primary border-secondary border-2 hover:bg-white hover:text-black rounded-full py-2 px-12 w-fit mt-6"
        >
            Go Back
        </button>
    );

    const handleNeed = (val, typeMode = false) => {
        let ls = need.split(',').map((x) => x.trim());
        if (ls.includes(val)) {
            ls = ls.filter((x) => x != val);
            setNeed(ls.join(', '));
        } else if (typeMode) {
            setNeed(val);
        } else {
            setNeed(need + val + ', ');
        }
    }

    const handleSubmit = (e) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!form.name || !form.email || !need) {
            alert('Name, E-Mail and reason for contact cannot be left empty !')
            return;
        } else if (!emailRegex.test(form.email)) {
            alert('Please enter a valid email address !');
            return;
        }

        emailjs.send('service_bt5gula', 'template_e8rk73d',
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
                    need: need
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
            setNeed("");
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
                    need={need}
                    handleNeed={handleNeed}
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
                    need={need}
                    handleNeed={handleNeed}
                    ContinueButton={continueBtn}
                />;
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
                    <div className="flex flex-col gap-6 hover:underline">
                      <div className="flex">
                      <PhoneCall fill="white" />
                        +977 9845926945 
                      </div>
                 <div className="flex">
                 <PhoneCall fill="white" />
                  +977 9814148108
                 </div>

                    </div>
                    <div className="flex hover:underline">
                        <Mail className="invert" fill="#0" />
                           hello@margintopsolutions.com
                    </div>
                    <Typography variant="h5" className="p-16 mt-12 bg-secondary rounded-xl">
                        Reach out and lets write the next chapter of success together.
                    </Typography>
                </div>
            </div>
        </div>
    )
};

export default SectionWrapper(Contact, "contact");