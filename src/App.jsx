import './App.css'
// import Navbar from "./components/Nav"
// import ButtonL from "./components/Button-L"
// import ButtonM from './components/Button-M';
// import ButtonS from './components/Button-S';
// import CustomTag from './components/Tag';
import HighlightCard from './components/HighlightCard';
import CardMission from './components/MissionCard';
import PublicationCard from './components/PublicationCard'
import khdpk from '../src/assets/KHDPK.jpg'
import OurTeamCard from './components/OurTeamCard';
import gambar2 from '../src/assets/2.jpg'
import gambar1 from '../src/assets/1.jpg'
import gambar4 from '../src/assets/4.jpg'
import PostsCard from './components/PostsCard';

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <ButtonL label="Discover More" />
      <ButtonM label="Discover More" />
      <ButtonS label="Discover More" />
      <CustomTag label="Custom Tag" /> */}
      <PostsCard image={gambar4} postCaption="Scoping for Accelerated Implementation of Social Forestry at KHDPK in Java: Sumedang" customTagLabel="EVENTS, UPCOMING" />
      <HighlightCard description="Scoping for Accelerated Implementation of Social Forestry at KHDPK in Java: Indramayu" image={gambar4} customTagLabel="Program Snapshot"/>
      <CardMission image={gambar1} caption="Patera Smallholders Support"/>
      <PublicationCard imageUrl={khdpk} title="Muara Gembong: Non-Forested Forest Areas" typography="By definition, forest area is a specific area determined by the Government to preserve its existence as a Permanent Forest. In dsfdsdfsdfd dsfsdf dsfsdf sdfsdfsdvsdwedfd ewfwedwedwe fw" buttonLabel="Read More"/>
      <OurTeamCard name="Rachmatul Rajab Aqsha" jobTitle="Deputy Manager" imageUrl={gambar2}/>
    </div>
  );
}

export default App
