import Image from 'next/image'
import TextImagePrincipal from './sections/TextImagePrincipal'
import BannerContact from './components/BannerContact'
import Services from './sections/Services'
import AboutMe from './components/AboutMe'
import Index from './sections/Index'
import BannerDent from './sections/BannerDent'

export default function Home() {
  return (
    <main className=" bg-[]">
      <section className=' bg-black'>
        <TextImagePrincipal />
      </section>
      <section className=''>
        <div className='max-w-7xl m-auto px-3 lg:px-20 py-10'>
          <Index></Index>
        </div>
      </section>
      {/* <section className='pt-10 md:pt-10'>
        <hr className="h-px my-8 bg-sky-200 border-0 md:hidden"></hr>
        <BannerContact></BannerContact>
        <hr className="h-px my-8 bg-sky-200 border-0 md:hidden"></hr>
      </section> */}

      <section>
        <div className=''>
          <BannerDent></BannerDent>
        </div>
      </section>
      <section className='max-w-7xl m-auto px-3 py-10'>
        <Services></Services>
      </section>
      <section className='color-beige'>
        <div className=' '>
          <AboutMe></AboutMe>
        </div>
      </section>
    </main>
  )
}
