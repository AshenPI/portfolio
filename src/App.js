import {MdDarkMode , MdLightMode} from 'react-icons/md';
import {AiFillTwitterCircle , AiFillLinkedin } from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai';
import kanye from './kanyeshot.png';
import bmi from './bmishot.png';
import { useState } from 'react';

//https://github.com/AshenPI
function App() {
  const [darkMode , setDarkMode] = useState(false);
  //dark:bg-slate-900 
  return (
 <>
   <div className={darkMode ? "dark" :" "}>
     
        <title >Shadi Portfolio</title>
        
        
      
      <main className=' bg-white px-10 dark:bg-slate-900 '>
   
      <nav className=' py-10 mb-12 flex justify-between'>
        <h1 className=' dark:text-white text-xl'></h1>
        <ul className=' flex items-center'>
          <li> <MdDarkMode onClick={()=> {
                
                return  setDarkMode(!darkMode);
              } } className=' cursor-pointer text-2xl' /></li>
          <li > <a className=' bg-cyan-500 text-white px-4 py-2 rounded-md ml-8' href="https://drive.google.com/file/d/1Ji_M_sgMxRmJoUVsXI2emZd6Eo63VWY5/view?usp=sharing">Resume</a></li>
        </ul>
      </nav>
      <div className='text-center py-12'>
        <h2 className=' text-5xl text-teal-600 font-medium dark:text-white'>Shadi Abdulkarim</h2>
      
        <p className='dark:text-white'> IT Student interested in Security and Web Development</p>
      </div>
        

     
        <section >
          <div >
            <h3 className='text-3xl py-1 text-center dark:text-white'>
            My Projects
            </h3>
          </div>
        </section>
        <br />
          <div className=' grid place-items-center '>
        <div className="max-w-sm rounded overflow-hidden shadow-lg   ">
  <img  className="w-full " src={kanye} alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2 dark:text-white">Kanye Quotes</div>
    <p className="text-gray-700 text-base dark:text-white">
      A simple project using basic html and css with javascript and using the kanye API
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">

    <a className='inline-block  bg-cyan-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-cyan-100 dark:text-white' href="https://ashenpi.github.io/KanyeQuotes/">Demo</a>
  </div>

      </div>
      </div>
      <div className='grid place-items-center h-screen'>
      <div className="max-w-sm rounded overflow-hidden shadow-lg  ">
  <img  className="w-full" src={bmi} alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2 dark:text-white">BMI Calculator</div>
    <p className="text-gray-700 text-base dark:text-white">
    Simple BMI Caluclator
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
  <a className='inline-block dark:text-white bg-cyan-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-cyan-100' href="https://ashenpi.github.io/SimpleBMICalculator/">Demo</a>
  </div>

      </div>
        </div>
     
      
      <div className=' dark:text-white flex justify-center gap-6 '>
     <a href="https://www.linkedin.com/in/shadi-alenazi-65a87b187/"><AiFillLinkedin className=' text-6xl'/></a> 
     <a href="https://twitter.com/AshenPI"> <AiFillTwitterCircle className=' text-6xl' /></a>
     <a href="https://github.com/AshenPI"> <AiFillGithub className=' text-6xl' /></a>
      </div>
   
      

      </main>
     </div>

 </>
  );
}

export default App;
