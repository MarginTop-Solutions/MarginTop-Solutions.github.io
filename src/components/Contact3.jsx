import { Typography } from "@mui/material";

const ContactPage3 = ({ values, handleChange, ContinueButton, GoBackButton }) => {

    return (
        <div className="flex flex-col flex-grow gap-8 bg-[#2f2f2f88] px-16 py-12 rounded-xl">

            <Typography variant="body1">Tell us more about your project</Typography>

            <div className="flex flex-col gap-2">
                <Typography variant="body1">Budget Range</Typography>

                <input
                    type="text"
                    className="bg-[#0000] border-b-2 border-gray-400 focus:border-white outline-none w-1/2"
                    placeholder="N/A - N/A"
                    value={values.budget}
                    onChange={(e) => handleChange(e, "budget")}
                />
            </div>

            <textarea
                type="text"
                rows={6}
                className="bg-[#0003] p-4 border-[#111] focus:border-white w-3/4"
                placeholder="Tell us more about you project..."
                value={values.detail}
                onChange={(e) => handleChange(e, "detail")}
            />


            <div className="flex flex-row gap-8">
                <ContinueButton />
                <GoBackButton />
            </div>

        </div>
    )
}

export default ContactPage3;