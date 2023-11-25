import { Typography } from "@mui/material"

const ContactPage2 = ({ values, handleChange, ContinueButton, GoBackButton }) => {

    const labels = ["Name", "Country", "Email", "WhatsApp number"];
    const placeHolders = ["Your Name", "Nepal", "example@example.com", "+977-9800000000"]

    return (
        <div className="flex flex-col flex-grow gap-8 bg-[#2f2f2f88] px-16 py-12 rounded-xl">

            <Typography variant="body1">Tell us about yourself</Typography>

            <div className="flex flex-row flex-wrap gap-8 justify-between">
                {Object.entries(values).map(([_, value], i) =>
                    <div key={i} className="flex flex-col gap-2 w-2/5">
                        <Typography variant="body1">{labels[i]}</Typography>
                        <input
                            type="text"
                            className="bg-[#0000] border-b-2 border-gray-400 focus:border-white outline-none"
                            placeholder={placeHolders[i]}
                            value={value}
                            onChange={(e) => handleChange(e, _)}
                        />
                    </div>
                )}
            </div>

            <div className="flex flex-row gap-8">
                <ContinueButton />
                <GoBackButton />
            </div>

        </div>
    )
}

export default ContactPage2;