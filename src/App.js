import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Section from './components/Section/Section';
import Footer from './components/Footer/Footer';
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import { useMediaQuery } from 'react-responsive';
import { FaHamburger } from 'react-icons/fa';
import Form from "./components/Contact-Form/Form";

// import NewsComponent from "./components/News/News";

// export const myContext = createContext();//


function App() {
  const [lightMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode(!lightMode)
    console.log("theme changed")  // for  error check 
  };

  
    // Use the useMediaQuery hook to check if the screen width is less than 768px
    const isMobile = useMediaQuery({ maxWidth: 1360 });
  
  
  // const label = "meow"





  return (


    <div>



      <BrowserRouter>
      


          <Navbar
            hambgr={isMobile && <FaHamburger />}
            functiondarkmode={toggleDarkMode}
            buttonName={lightMode ? "Dark Mode" : "Light Mode"}
            divLi={lightMode ? "nav-li" : "nav-li-dark"}
            divName={lightMode ? "light-nav" : "dark-nav"}

            link1="Home"
            link2="Services"
            link3="Contact"
            link4="Gallery"
         

          />

          <Routes>
            <Route path="/" element={<Section
              // user= '𝖘𝖆𝖇𝖎𝖙'
              central={lightMode ? "central" : "central-dark"}
              section={lightMode ? "section" : "section-dark"}


            />} />
            <Route path="/services" element={<Services
              divName={lightMode ? "main-div-light" : "main-div-dark"}
              section={lightMode ? "center-section" : "center-section-dark"}
            />} />





            <Route path="/contact" element={<Contact />} />

            <Route path="/gallery" element={<Gallery />} />

            <Route path="/form" element={<Form/>} />

            <Route path="/about" element={<About />} />
            {/* <Route path="/news" element={<NewsComponent/>} /> */}
            
          </Routes>


          <Footer
            divName={lightMode ? "footer-light" : "footer-dark"}
            diva={lightMode ? "footer-a" : "footer-a-dark"}
            />
          
             

        
        
      </BrowserRouter>




    </div>








  );
};

export default App;
