import './App.css'
// import Navbar from "./components/Nav"
// import ButtonL from "./components/Button-L"
// import ButtonM from './components/Button-M';
// import ButtonS from './components/Button-S';
// import CustomTag from './components/Tag';
import MultiActionAreaCard from './components/HighlightCard';
import CardMission from './components/MissionCard';
import PublicationCard from './components/PublicationCard'
import domba from '../src/assets/domba.jpeg'

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <ButtonL label="Discover More" />
      <ButtonM label="Discover More" />
      <ButtonS label="Discover More" />
      <CustomTag label="Custom Tag" /> */}
      <MultiActionAreaCard />
      <CardMission />
      <PublicationCard imageUrl={domba} title="Muara Gembong: Non-Forested Forest Areas" typography="By definition, forest area is a specific area determined by the Government to preserve its existence as a Permanent Forest. In" buttonLabel="Read More"/>
    </div>
  );
}

export default App
