import { useState } from 'react';
import Cookies from 'js-cookie';

function DeleteNote({reload, id_nota} ) {

    const [isLoading, setIsLoading] = useState(false);
    const [notaDeleted, setNotaDeleted] = useState(false);

    const handleSubmit=()=>{

        console.log(id_nota)

        const key = Cookies.get("user_session")
        setIsLoading(true);        

        if (id_nota) {

            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer " + key);
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                "id": id_nota            
              });
      
              var requestOptions = {
                  method: 'DELETE',
                  headers: myHeaders,
                  body: raw,
                  redirect: 'follow'
              };
      
              fetch('https://x9d8pa.deta.dev/nota/eliminar',requestOptions)
                .then(response => response.json())
                .then(data => {
                    
                  setIsLoading(false);
                    
                  if (data["nota eliminada"] == true) {
                    reload()                    
                    setNotaDeleted(true)               
                    setTimeout(() => {
                        setNotaDeleted(null) 
                    }, 2000);       

                  }
                  
                  
                })
            .catch(error => console.log(error));

        }else{

            setTimeout(() => {
                setIsLoading(false);                
            }, 2000);                     
                
        }
    }

    return(
        
        <>                                   

                                    
            <a onClick={()=>{handleSubmit()}} href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                        
                {isLoading  &&                
                    <svg width="25" height="25" viewBox="0 0 58 58" xmlns="http://www.w3.org/2000/svg" className='m-auto'>
                    <g fill="none" fillRule="evenodd">
                        <g transform="translate(2 1)" stroke="#000" strokeWidth="1.5">
                            <circle cx="42.601" cy="11.462" r="5" fillOpacity="1" fill="#000">
                                <animate attributeName="fill-opacity"
                                     begin="0s" dur="1.3s"
                                     values="1;0;0;0;0;0;0;0" calcMode="linear"
                                     repeatCount="indefinite" />
                            </circle>
                            <circle cx="49.063" cy="27.063" r="5" fillOpacity="0" fill="#000">
                                <animate attributeName="fill-opacity"
                                     begin="0s" dur="1.3s"
                                     values="0;1;0;0;0;0;0;0" calcMode="linear"
                                     repeatCount="indefinite" />
                            </circle>
                            <circle cx="42.601" cy="42.663" r="5" fillOpacity="0" fill="#000">
                                <animate attributeName="fill-opacity"
                                     begin="0s" dur="1.3s"
                                     values="0;0;1;0;0;0;0;0" calcMode="linear"
                                     repeatCount="indefinite" />
                            </circle>
                            <circle cx="27" cy="49.125" r="5" fillOpacity="0" fill="#000">
                                <animate attributeName="fill-opacity"
                                     begin="0s" dur="1.3s"
                                     values="0;0;0;1;0;0;0;0" calcMode="linear"
                                     repeatCount="indefinite" />
                            </circle>
                            <circle cx="11.399" cy="42.663" r="5" fillOpacity="0" fill="#000">
                                <animate attributeName="fill-opacity"
                                     begin="0s" dur="1.3s"
                                     values="0;0;0;0;1;0;0;0" calcMode="linear"
                                     repeatCount="indefinite" />
                            </circle>
                            <circle cx="4.938" cy="27.063" r="5" fillOpacity="0" fill="#000">
                                <animate attributeName="fill-opacity"
                                     begin="0s" dur="1.3s"
                                     values="0;0;0;0;0;1;0;0" calcMode="linear"
                                     repeatCount="indefinite" />
                            </circle>
                            <circle cx="11.399" cy="11.462" r="5" fillOpacity="0" fill="#000">
                                <animate attributeName="fill-opacity"
                                     begin="0s" dur="1.3s"
                                     values="0;0;0;0;0;0;1;0" calcMode="linear"
                                     repeatCount="indefinite" />
                            </circle>
                            <circle cx="27" cy="5" r="5" fillOpacity="0" fill="#000">
                                <animate attributeName="fill-opacity"
                                     begin="0s" dur="1.3s"
                                     values="0;0;0;0;0;0;0;1" calcMode="linear"
                                     repeatCount="indefinite" />
                            </circle>
                        </g>
                    </g>
                    </svg>
                }

                {isLoading == false &&
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 inline-block	mr-2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                        Delete
                    </p>            
                }
            
                

            </a>
        
        </>
    )    
}

export default DeleteNote;