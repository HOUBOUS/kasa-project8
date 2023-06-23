import Navbar from './Navbar.jsx'
import Banner from './Banner.jsx'
import AppartmentCard from './AppartmentCard.jsx'
import Body from './Body.jsx'
import Footer from './Footer.jsx'
import '../styles/Home.css'





function App() {
  return (
    <div>
      <Navbar />
      <Body>
        <Banner />
        <AppartmentCard />
      </Body> 
      <Footer />
      
    </div>
  );
}

export default App;
