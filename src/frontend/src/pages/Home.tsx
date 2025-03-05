import Cta from '@/components/home/Cta'
import FeaturedServicesMotion from '@/components/home/FeaturedServicesMotion'
import HeroMotion from '@/components/home/HeroMotion'
import HomeDrawer from '@/components/home/HomeDrawer'
import CategorySlider from '@/components/home/Categories'
import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/Header'
import { Separator } from '@radix-ui/react-separator'
import Contact from '@/components/home/Contact'


const Home = () => {
    return (
        <>
            <Header />
            <HeroMotion />
            <Separator className='bg-[#2E3E4A] md:hidde' /> 
            <CategorySlider />
            <FeaturedServicesMotion />
            {/* <Cta /> */}
            <Contact />
            <Footer />
            <HomeDrawer />
      </>
    )
}

export default Home