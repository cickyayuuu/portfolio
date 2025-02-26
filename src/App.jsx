
import './App.css'
import Navbar from './components/Navbar'
import Intro from './components/Intro/Intro'
import About from './components/Aboutme/About'
import Techstack from './components/Tech-stack/Techstack'
import Thoughts from './components/Thoughts/Thoughts'
import Certifications from './components/Cwertifications/Certifications'
import Fotter from './components/footer/Fotter'
import { ToastContainer } from 'react-toastify';
// import useLocalStorage from "use-local-storage";
import './index.css';
function App() {
  
  
  return (
    <div className=''> 
      
     
      <Intro className="animated-section" />
      <About className="animated-section" />
      <Techstack className="animated-section" />
      <Thoughts className="animated-section" />
      <Certifications className="animated-section" />
      <Fotter className="animated-section" />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      
    </div>
  )
}

export default App
