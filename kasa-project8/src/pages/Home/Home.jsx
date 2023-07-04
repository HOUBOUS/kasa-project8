import Navbar from '../../components/Navbar.jsx'
import Banner from '../../components/Banner.jsx'
import GalleryAppartments from '../../components/GalleryAppartments.jsx'
import Body from '../../components/Body.jsx'
import Footer from '../../components/Footer.jsx'
import '../../styles/Home.css'





function Home() {
  return (
    <div>
      <Navbar />
      <Body>
        <Banner />
        <GalleryAppartments />
      </Body> 
      <Footer />
      
    </div>
  );
}

export default Home;
