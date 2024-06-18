import CTASection from '~/components/landing/cta-section'
import Hero from '~/components/landing/hero'

export default async function Home() {
   return (
      <>
         <Hero />
         {/* <Testimonials /> */}
         <CTASection />
      </>
   )
}
