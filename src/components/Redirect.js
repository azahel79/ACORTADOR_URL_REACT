import {  useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


const Redirect = () => {
  // OBTENER LOS PARAMETROS
  const params = useParams();
  console.log(params.shortUrl);

  // NAVIGATE
  const navigate = useNavigate();  
  ///STATE DE LA URL


  // DESTRUCTURING DE LA URL
//   const {urls} =  urlState;


 


useEffect(()=>{
   
   const listUrls = JSON.parse(localStorage.getItem("urls"));
    const existingUrl = listUrls.find(link=> link.shortUrl === params.shortUrl);
    if(existingUrl){
         existingUrl.views = existingUrl.views + 1;   
         listUrls.map(list=> list.shortUrl === existingUrl.shortUrl   ? existingUrl  : list)

         
        localStorage.setItem("urls",JSON.stringify(listUrls));

        window.location.href = existingUrl.url;
    }else{
        navigate("/");    
    }
    //eslint-disable-next-line
},[])
  

    // const listUrls = JSON.parse(localStorage.getItem("urls"));
    // console.log(urlState);
    // console.log(listUrls);
    // const existingUrl = listUrls.find(link=> link.shortUrl === params.shortUrl);
    // if(existingUrl){
    //     // console.log(existingUrl);
    //     // window.location.href = existingUrl.url;
    // }else{
    //     navigate("/");    
    // }
    // eslint-disable-next-line
 
  
}
 
export default Redirect;