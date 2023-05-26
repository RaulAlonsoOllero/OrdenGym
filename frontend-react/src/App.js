import './App.css';
import Hero from './components/Hero/Hero'
import Modalidades from './components/Modalidades/Modalidades';
import Reasons from './components/Reasons/Reasons'
import Testimonials from './components/Testimonials/Testimonials'
import Plans from './components/Plans/Plans'
import Contact2 from './components/Contact2/Contact2';
import Footer from './components/Footer/Footer';
import News from './components/News/News'
import Products from './components/Products/Products';
function App() {
  return (
    <div className="App">
         <Hero></Hero>
         <News></News>
         <Modalidades></Modalidades>
         <Reasons></Reasons>
         <Plans></Plans>
         <Products></Products>
         <Testimonials></Testimonials>
         <Contact2></Contact2>
         <Footer></Footer>
    </div>
  );
}



export default App;
