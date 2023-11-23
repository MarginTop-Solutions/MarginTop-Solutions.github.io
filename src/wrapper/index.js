import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function SectionWrapper(Component, id) {
    return function comp(props) {
        return (
            <section className='px-12 xl:px-24' id={id}>
                <Component {...props} />
            </section>
        );
    }
}