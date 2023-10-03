import Image from 'next/image'
import TextImagePrincipal from './components/TextImagePrincipal'
import BannerContact from './components/BannerContact'
import Services from './components/Services'

export default function Home() {
  return (
    <main className="pt-40">

      <section className=' max-w-7xl m-auto md:px-3'>
        <TextImagePrincipal />
      </section>
      <section className='pt-10'>
        <hr className="h-px my-8 bg-sky-200 border-0 md:hidden"></hr>
        <BannerContact></BannerContact>
        <hr className="h-px my-8 bg-sky-200 border-0 md:hidden"></hr>
      </section>
      <section className='max-w-7xl m-auto px-3'>
        <Services></Services>
      </section>
    </main>
  )
}
