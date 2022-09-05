import logo from './logo.svg';
import './App.css';
// import AboutUs from './components/AboutUs';
// import ContactUs from './components/ContactUs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import NavBar from './components/NavBar';
// import NotFound from './components/NotFound';
// import {Add} from './Math'
import {lazy, Suspense} from "react"
import PureComp from './components/PureComp';
import UseMemoDemo from './components/UseMemoDemo';
import { App5 } from './components/ErrorHandlingDemo';
const AboutUs = lazy(()=> import('./components/AboutUs') ) 
const ContactUs = lazy(()=> import('./components/ContactUs'))
const NavBar = lazy(()=> import('./components/NavBar') ) 
const NotFound = lazy(()=> import('./components/NotFound') ) 

// import("./Math").then(math => {
//   console.log(math.Add(16, 26));
// });
// console.log(Add(10,23))
 function App() {
  return (
    <div className="App">
      learn react
      {/* <PureComp/> */}
      {/* <UseMemoDemo/> */}
      <App5/>
        {/* <BrowserRouter>
      <Suspense fallback ={<h1> Page is loading </h1>}>  
       <NavBar/>
      <Routes>
        <Route path="" element={<ContactUs/>}/>
         
        <Route path="/aboutus" element={<AboutUs/>}/>
        
        <Route path="/contactus" element={<ContactUs/>}/>
        
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </Suspense>
      </BrowserRouter>    */}
      {/* <Suspense fallback ={<h1> Page is loading </h1>}>    
      {/* <AboutUs/>
      <ContactUs/>
      </Suspense> */} 
    </div>
  );
}

export default App;
