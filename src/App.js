 
 import Menu from "./components/Menu/Menu";
 import Cards from "./components/Cards/Cards";
 import Header from "./components/Header/Header";
 import Section from "./components/Section/Section";

 import "./App.sass"
  
 function App() {
   
   return ( <div className="container"> 
   <Menu/>
   <Header/>
   <Section/>
   <Cards/>   
   </div>);
   }

   export default App;