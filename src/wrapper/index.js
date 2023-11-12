import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function SectionWrapper(Component, id) {
    return function comp(props) {
        return (
            <section className={`px-28`} id={id}>
                <Component {...props} />
            </section>
        );
    }
}