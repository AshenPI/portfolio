import {MdDarkMode , MdLightMode} from 'react-icons/md';
import {AiFillTwitterCircle , AiFillLinkedin } from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai';
import kanye from './kanyeshot.png';
import bmi from './bmishot.png';
import vaultify from "./Vaultify.png";
import plank from "./Plank.png";
import nomad from "./nomad.png";
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
          <li > <a className=' bg-cyan-500 text-white px-4 py-2 rounded-md ml-8' href="https://drive.google.com/file/d/196kkIeZO1hT8fPnG5ct10Nt3YJUb3YUS/view?usp=sharing">CV</a></li>
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
        <div className='grid place-items-center h-screen'>
      <div className="max-w-sm rounded overflow-hidden shadow-lg  ">
  <img  className="w-full" src={vaultify} alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    <div id='vaultify' className=" font-bold text-xl mb-2 dark:text-white">Vaultify</div>
    <p className="text-gray-700 text-base dark:text-white">
    My Graduation project
    Vaultify a Cloud Point-of-Sale
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
  <a className='inline-block dark:text-white bg-cyan-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-cyan-100' href="https://github.com/AshenPI/Vaultify-main">Source Code</a>
  </div>

      </div>
        </div>

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
        <div className='grid place-items-center h-screen'>
      <div className="max-w-sm rounded overflow-hidden shadow-lg  ">
  <img  className="w-full" src={plank} alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2 dark:text-white">Plank</div>
    <p className="text-gray-700 text-base dark:text-white">
    An Android App Using java The App enables you to calculate your BMI . IBW , and a Calorie Calculator and healthtips
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
  <a className='inline-block dark:text-white bg-cyan-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-cyan-100' href="https://github.com/AshenPI/Plank">Source code</a>
  </div>


      </div>
        </div>

        <div className='grid place-items-center h-screen'>
      <div className="max-w-sm rounded overflow-hidden shadow-lg  ">
  <img  className="w-full" src={nomad} alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    <div id='nomad' className="font-bold text-xl mb-2 dark:text-white">NOMAD</div>
    <p className="text-gray-700 text-base dark:text-white">
   Nomad is a Hiking reservation website fully functional using php
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
  <a className='inline-block dark:text-white bg-cyan-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-cyan-100' href="https://github.com/AshenPI/NOMAD">Source code</a>
  </div>


      </div>
        </div>
      
        <div className='grid place-items-center h-screen'>
      <div className="max-w-sm rounded overflow-hidden shadow-lg  ">
  <img  className="w-full"  />
  <div className="px-6 py-4">
    <div id='' className="font-bold text-xl mb-2 dark:text-white">Node API</div>
    <p className="text-gray-700 text-base dark:text-white">
   A CRUD API using MongoDB and node js 
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
  <a className='inline-block dark:text-white bg-cyan-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-cyan-100' href="https://github.com/AshenPI/NodeCrudAPI">Source code</a>
  </div>


      </div>
        </div>

      <div className=' dark:text-white flex justify-center gap-6 '>
     <a href="https://www.linkedin.com/in/shadi-alenazi-65a87b187/"><AiFillLinkedin className=' text-6xl'/></a> 
     <a href="https://github.com/AshenPI"> <AiFillGithub className=' text-6xl' /></a>
      </div>
   
      

      </main>
     </div>

 </>
  );
}

export default App;
