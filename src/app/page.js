import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Partners from './components/partners/Partners'
import Features from './components/features/Features'
import Howitworks from './components/howitworks/Howitworks'
import Templates from './components/templates/Templates'
import Pricing from './components/pricing/Pricing'
import Faq from './components/faq/Faq'
import Footer from './components/footer/Footer'
import Demo from './components/demo/Demo'

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Partners />
      <Features />
      <Howitworks />
      <Templates />
      <Pricing />
      <Faq />
      <Demo />
      <Footer />
    </>
  )
}

export default page