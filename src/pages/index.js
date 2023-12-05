import { NavBar, Hero, About, Services, Contact, Portfolio, Info, Tools, Testimonials, Industries, Footer } from '@/components'
import { useState } from 'react'


export default function Home() {
  const [need, setNeed] = useState("");
  return (
    <main>
      <img className='absolute top-0 right-0 z-[-1]' src='/wavefull.svg' alt='background' />
      <img className='absolute top-0 z-[-1] w-screen' src='/herobg.png' alt='background' />
      <div className='min-h-screen w-full flex flex-col gap-12 md:gap-36'>
        <NavBar />
        <Hero />
      </div>
      <About />
      <Services need={need} setNeed={setNeed} />
      <hr className='mx-12 md:mx-24 mt-12 border-[#666]' />
      <Portfolio need={need} setNeed={setNeed} />
      <hr className='mx-12 md:mx-24 mt-12 border-[#666]' />
      <Info need={need} setNeed={setNeed} />
      <Testimonials />
      <Contact need={need} setNeed={setNeed} />
      <Tools />
      <Industries />
      <Footer />
    </main>
  )
}
