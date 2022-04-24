import Clients from '../components/Clients';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

function Header() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Clients />
    </div>
  );
}

export default Header;
