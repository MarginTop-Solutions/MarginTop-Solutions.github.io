import { NavBar, Hero, About, Services, Contact, Portfolio, Info, Tools, Testimonials, Industries, Footer } from '@/components'


export default function Home() {
  return (
    <main>
      <img className='absolute top-0 z-[-1] w-screen h-screen' src='/herobg.png' alt='background' />
      <div className='min-h-screen'>
        <NavBar />
        <Hero />
      </div>

      <About />
      <Services />
      <hr className='mx-[9%] mt-12 border-[#666]' />
      <Portfolio />
      <hr className='mx-[9%] mt-12 border-[#666]' />
      <Info />
      <Testimonials />
      <Contact />
      <Tools />
      <Industries />
      <Footer />
    </main>
  )
}
