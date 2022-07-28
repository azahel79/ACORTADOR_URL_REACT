import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import Redirect from "./components/Redirect";
import UrlState from "./context/UrlState";
import "./estilos.css";

const App = () => {
    return ( 
       <BrowserRouter>
        <UrlState>
         <Routes>
             <Route path="/" element={<Home/>}/> 
             <Route path="/:shortUrl" element={<Redirect/>} />
         </Routes>
         </UrlState>
       </BrowserRouter>
     );
}
 
export default App;