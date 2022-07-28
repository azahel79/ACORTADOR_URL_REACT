import { Fragment, useContext, useEffect, useState,} from "react";
import { v4 } from "uuid";
import urlContext from "../context/UrlContext";
import Urls from "./Urls";

const Home = () => {
   
  


    // STATE GLOBAL DE LA URL
    const stateUrl = useContext(urlContext);

    const {error,urls,addURL_fn,getURL_storage_fn,viewError_fn} = stateUrl;
        ///VERIFICAR SI EXISTEN DATOS EN EL LOCALSTORAGE
       
   // STATE DE LA URL  
   let  [dataUrl, setUrl] = useState({
       url: ""
   });

    // DESTRUCTURING DE LA URL
    const {url} = dataUrl;

    ///OBTENER DATOS DE LA URL
    const getDataUrl = (e)=>{
       setUrl({
           ...dataUrl,
           [e.target.name]: e.target.value
       })
    }

    // CREAR LA URL
    const createNewUrl = (e)=>{
        e.preventDefault();
         if(url.trim() === ""){
             return viewError_fn();
         } 
         dataUrl = {...dataUrl,
            shortUrl: v4().toString().substring(24),
            views: 0,
            createdAt: Date.now()
        }
         
         addURL_fn(dataUrl);
        // console.log(urls.push(dataUrl));
        localStorage.setItem("urls",JSON.stringify([...urls,dataUrl]));

     
    }
 
     
    ///VERIFICAR SI EXISTEN DATOS EN EL LOCALSTORAGE
    useEffect(()=>{
     
        if(localStorage.getItem("urls")){
             return getURL_storage_fn(JSON.parse(localStorage.getItem("urls")));
        }
        // eslint-disable-next-line
      },[]);
    
  
    return ( 
       <Fragment>

           <h1 
           className="title">Acortador URL</h1>
      <div className="ctr__urls">
     
      <form onSubmit={createNewUrl} className="form__urls">
          <input type="text" 
          className="input__url" 
          name="url"
          placeholder="nombre de la url"
          onChange={getDataUrl}
          value={url}
          />
          <button className="send__url">send</button>

         
      </form>
      {error ? <p className="error">todos los campos son obligatorios</p> : null}
      <h1 className="title__urls">urls</h1>
      <div className="list__urls">

           {urls.length ?  (

                urls.map(url=>{
                  return <Urls key={url.shortUrl} url={url}/>
                 })
           )  : <p className="urls__none">no hay ninguna url disponible</p>}

          
      </div>

      </div>

      </Fragment> 
     );
}
 
export default Home;