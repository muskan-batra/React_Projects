import Header from './components/Header';
import './styles/App.css'
import  Home  from './components/Home';
import  About from './components/About';
import {Routes , Route} from 'react-router-dom'
function App() {
  return (
    <div>
     
      
        <Header />

         <Routes>

     <Route path="/home" element={<Home />} />
    <Route path="/about" element={<About />} />
 
     </Routes> 
       
 
    </div>
  );
}

export default App;
