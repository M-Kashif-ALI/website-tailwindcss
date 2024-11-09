import bgVideo from '../../video/earth-bg.mp4'
import Hero from './components/hero';
import NavBar from './components/navBar';
import Services from './components/services';

export default function Home() {
  return (
    <div>
      <div className="h-[700px] relative"> 
      <video src={bgVideo} autoPlay muted loop className="fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]"/>
      <NavBar/>
      <Hero/>
      </div>

      <Services/>
    </div>
  );
}
