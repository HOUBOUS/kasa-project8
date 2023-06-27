import Navbar from '../../components/Navbar.jsx'
import Banner from '../../components/Banner.jsx'
import AppartmentCard from '../../components/AppartmentCard.jsx'
import Body from '../../components/Body.jsx'
import Footer from '../../components/Footer.jsx'
import '../../styles/Home.css'





function Home() {
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

export default Home;
