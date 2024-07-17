import './index.css'
import Image from './components/Image';
import Name from './components/Name';
import About from './components/About';
import Interest from './components/Interest';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <Image />
      <Name />
      <About />
      <Interest />
      <Footer />
    </div>
  );
}


export default App;

