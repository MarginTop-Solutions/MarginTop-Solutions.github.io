import { NavBar, Hero, About, Services, Contact, Portfolio, Info, Tools, Testimonials, Industries, Footer } from '@/components'


export default function Home() {
  return (
    <main>
      <img className='absolute top-0 z-[-1] w-screen h-screen' src='/herobg.png' alt='background' />
      <div className='min-h-screen py-12'>
        <NavBar />
        <Hero />
      </div>
      <div className='bg-gradient-to-r from-black via-[#1c6d7e33] to-black'>
        <About />
        <Services />
        <hr className='mx-[9%] mt-12 border-[#666]'/>
        <Portfolio />
        <Info />
        <Testimonials />
        <Contact />
        <Tools />
        <Industries />
        <Footer />
      </div>
    </main>
  )
}
