import { useReducer } from "react"
import { ADD_URL, GET_URL_STORAGE, VIEW_ERROR } from "../types";
import urlContext from "./UrlContext";
import { urlReducer } from "./UrlReducer";

const UrlState = (props)=>{
    
   const initialState = {
       error: false,
       urls: []
   }

   let  [state,dispatch] = useReducer(urlReducer,initialState);


   // FUNCION PARA AGREGAR UNA NUEVA URL
   const addURL_fn = (dataUrl)=>{
         dispatch({
             type:ADD_URL,
             payload: dataUrl
         })
   }

   // FUNCION PARA OBTENER LAS URLS SI EXISTEN EN LOCALSTORAGE
   const getURL_storage_fn = (urls)=>{
       dispatch({
           type: GET_URL_STORAGE,
           payload: urls
       })
   }

   /// FUNCION PARA MOSTRAR UN ERROR
   const viewError_fn = ()=>{
       dispatch({
           type: VIEW_ERROR
       })
   }

   return(
    <urlContext.Provider  value={{
        error: state.error,
        urls: state.urls,
        addURL_fn,
        getURL_storage_fn,
        viewError_fn
    }}>
      {props.children}
    </urlContext.Provider>
   )

}

export default UrlState;