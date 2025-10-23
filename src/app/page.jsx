
import Navber from './lib/components/Navber';
import HeroSection from './lib/components/HeroSection'
import landingPage from '../../public/Landing.png'

import GsapTo from './lib/components/GsapTo';
import GsapFrom from './lib/components/GsapFrom';
import GsapFromTo from './lib/components/GsapFromTo';
import GsapTimeline from './lib/components/GsapTimeLine';
import GsapStagger from './lib/components/GsapStagger'

export default function Home() {
  return (
    <div>

      <div className='bg-cover bg-center ' style={{ backgroundImage: `url(${landingPage})` }}>



        <Navber></Navber>
        <HeroSection></HeroSection>


      </div>



      <div className='min-h-[50vh]'>
        <GsapTo></GsapTo>

        <GsapFrom></GsapFrom>

        <GsapFromTo></GsapFromTo>

        <GsapTimeline></GsapTimeline>

        <GsapStagger></GsapStagger>
      </div>

    </div >
  );
}
