import Image from 'next/image'
import TextImagePrincipal from './sections/TextImagePrincipal'
import Services from './sections/Services'
import AboutMe from './sections/AboutMe'
import Index from './sections/Index'
import BannerDent from './sections/BannerDent'
import Contact from './sections/Contact'
import GeneraInformation from './sections/GeneraInformation'
import CellphoneNumber from './sections/CellphoneNumber'
import Galery from './sections/Galery'
export default function Home() {
  return (
    <main className=" bg-[]">
      <section id='principal' className=' bg-black'>
        <TextImagePrincipal />
      </section>
      <section className=''>
        <div className='max-w-7xl m-auto px-3 lg:px-20 py-10'>
          <Index></Index>
        </div>
      </section>

      <section >
        <div className=''>
          <BannerDent></BannerDent>
        </div>
      </section>
      <section id='services' className='max-w-7xl m-auto px-3 py-10'>
        <Services></Services>
      </section>
      <section id='aboutme' className='color-beige'>
        <div className=' '>
          <AboutMe></AboutMe>
        </div>
      </section>
      <section id='contact' className='section-contact'>
        <div className='max-w-7xl m-auto px-3 pt-14'>
          <Contact></Contact>
        </div>
      </section>
      <section>
        <CellphoneNumber></CellphoneNumber>
      </section>
      <section>
        <GeneraInformation></GeneraInformation>
      </section>
      <section id='galery' className='max-w-7xl m-auto px-3 py-10'>
        <Galery></Galery>
      </section>
    </main>
  )
}
