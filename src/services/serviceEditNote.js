import { useState } from 'react';
import Cookies from 'js-cookie';

function ServiEditNote({ values, cerrarModal, reload, reloadModal, id_nota }) {

    const [isLoading, setIsLoading] = useState(false);
    const [notaAdded, setNotaAdded] = useState(false);

    const handleSubmit=()=>{

        const key = Cookies.get("user_session")
        setIsLoading(true);        

        if (values.titleNote && values.contentNote  != "") {

            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer " + key);
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                "id": id_nota,
                "note_title": values.titleNote,
                "note_content": values.contentNote 
              });
      
              var requestOptions = {
                  method: 'PUT',
                  headers: myHeaders,
                  body: raw,
                  redirect: 'follow'
              };
      
              fetch('https://x9d8pa.deta.dev/nota/editar',requestOptions)
                .then(response => response.json())
                .then(data => {
                    
                  setIsLoading(false);
                    
                  if (data["nota editada"] == true) {
                    reload()
                    reloadModal()
                    cerrarModal()
                    setNotaAdded(true)               
                    setTimeout(() => {
                        setNotaAdded(null) 
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
        <button onClick={()=>{handleSubmit()}} className="block m-auto py-2 px-4 bg-[#d19019] text-white font-semibold rounded-lg shadow-md hover:bg-[#ae7308] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            {isLoading  &&                
                <svg width="25" height="25" viewBox="0 0 58 58" xmlns="http://www.w3.org/2000/svg" className='m-auto'>
                    <g fill="none" fillRule="evenodd">
                        <g transform="translate(2 1)" stroke="#FFF" strokeWidth="1.5">
                            <circle cx="42.601" cy="11.462" r="5" fillOpacity="1" fill="#fff">
                                <animate attributeName="fill-opacity"
                                     begin="0s" dur="1.3s"
                                     values="1;0;0;0;0;0;0;0" calcMode="linear"
                                     repeatCount="indefinite" />
                            </circle>
                            <circle cx="49.063" cy="27.063" r="5" fillOpacity="0" fill="#fff">
                                <animate attributeName="fill-opacity"
                                     begin="0s" dur="1.3s"
                                     values="0;1;0;0;0;0;0;0" calcMode="linear"
                                     repeatCount="indefinite" />
                            </circle>
                            <circle cx="42.601" cy="42.663" r="5" fillOpacity="0" fill="#fff">
                                <animate attributeName="fill-opacity"
                                     begin="0s" dur="1.3s"
                                     values="0;0;1;0;0;0;0;0" calcMode="linear"
                                     repeatCount="indefinite" />
                            </circle>
                            <circle cx="27" cy="49.125" r="5" fillOpacity="0" fill="#fff">
                                <animate attributeName="fill-opacity"
                                     begin="0s" dur="1.3s"
                                     values="0;0;0;1;0;0;0;0" calcMode="linear"
                                     repeatCount="indefinite" />
                            </circle>
                            <circle cx="11.399" cy="42.663" r="5" fillOpacity="0" fill="#fff">
                                <animate attributeName="fill-opacity"
                                     begin="0s" dur="1.3s"
                                     values="0;0;0;0;1;0;0;0" calcMode="linear"
                                     repeatCount="indefinite" />
                            </circle>
                            <circle cx="4.938" cy="27.063" r="5" fillOpacity="0" fill="#fff">
                                <animate attributeName="fill-opacity"
                                     begin="0s" dur="1.3s"
                                     values="0;0;0;0;0;1;0;0" calcMode="linear"
                                     repeatCount="indefinite" />
                            </circle>
                            <circle cx="11.399" cy="11.462" r="5" fillOpacity="0" fill="#fff">
                                <animate attributeName="fill-opacity"
                                     begin="0s" dur="1.3s"
                                     values="0;0;0;0;0;0;1;0" calcMode="linear"
                                     repeatCount="indefinite" />
                            </circle>
                            <circle cx="27" cy="5" r="5" fillOpacity="0" fill="#fff">
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
                <p>Edit Note</p>            
            }
            
            {notaAdded &&
            <p className='text-lime-600 text-center pt-4'>Nota Editada correctamente</p>
            }

        </button>
        </>
    )
}

export default ServiEditNote;