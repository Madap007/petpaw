import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FeatureCards from '../components/FeatureCards'
import OurStory from '../components/Ourstory'
import AdoptionCarousel from '../components/AdoptionCarousel'

function Home() {
  return (
    <div>
      <div className='bg-rose-100'>
        <Navbar />
        <div className='pb-5' style={{paddingBottom: '100px'}}>
          <Hero />
        </div>
      </div>
      <div className='relative z-10 -mt-40'>
        <FeatureCards />
      </div>
      <div className="bg-white py-20">
        <OurStory />
      </div>
      <div className='bg-rose-100 py-20'>
        <AdoptionCarousel />
      </div>
     
    </div>
  )
}

export default Home

