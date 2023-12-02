import { Link } from "react-scroll";
/*
import { GetRandomQuote } from "@/constants";
import { styles } from "@/styles/styles";
import { Dialog, Typography } from "@mui/material";
import { Copy, CopyCheck } from "lucide-react";
import { useState } from "react";

const QuoteReqButton = (props) => {
    const [active, setActive] = useState(false);
    const [quote, setQuote] = useState("");
    const [copied, setCopied] = useState(false);

    if (!active) return (
        <button {...props} onClick={() => {
            setActive(true);
            setQuote(GetRandomQuote());
        }}>
            Request a Quote
        </button>
    )

    const handleClick = () => {
        navigator.clipboard.writeText(quote);
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <Dialog
            open={active}
            fullWidth={true}
            onClose={() => { setActive(false); setCopied(false); }}
            className="bg-primary bg-opacity-80"
        >
            <div className="flex flex-col items-center gap-6 p-12 gradient-bg text-white" >
                <Typography variant="h6" className={`flex flex-col gap-12 px-8 py-4 ${copied ? " bg-secondary" : "bg-black"} rounded-2xl duration-300 ease-in-out`}>
                    {quote}

                    {copied ?
                        <div className="self-end flex gap-2 items-center">
                            <Typography variant="body2">Copied to clipboard</Typography><CopyCheck />
                        </div>
                        : <Copy
                            className="text-gray-500 hover:text-white cursor-pointer self-end"
                            onClick={handleClick}
                        />
                    }
                </Typography>
                <button onClick={() => setQuote(GetRandomQuote())} className={`${styles.trp_button}`}>Next</button>
            </div>
        </Dialog>
    )
}*/


const QuoteReqButton = (props) => (
    <Link
        to="contact"
        spy={true}
        smooth={true}
        offset={-200}
        duration={500}
        {...props}
    >
        Request a Quote
    </Link>
)

export default QuoteReqButton;