import { useState } from 'react';

function ServiRegister({ values, isSubmitting, cerrarModal }) {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const [isLoading, setIsLoading] = useState(false);
    const [correctSend, SetCorrectSend] = useState(null)
    const [completeForm, setCompleteForm] = useState(false);

    const handleSubmit =()=>{

        setIsLoading(true);        

        if (values.email && values.password && values.fullname && values.username  != "") {

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                "email": values.email,
                "password": values.password,
                "fullname": values.fullname,
                "username": values.username
              });
      
              var requestOptions = {
                  method: 'POST',
                  headers: myHeaders,
                  body: raw,
                  redirect: 'follow'
              };
      
              fetch('https://x9d8pa.deta.dev/registro',requestOptions)
                .then(response => response.json())
                .then(data => {
      
                  setIsLoading(false);
      
                  if (data.detail == "correcto") {

                    SetCorrectSend(true)
                    setData(data)
                    setTimeout(() => {
                      cerrarModal()
                    }, 2000);       

                  }else{
                    SetCorrectSend(false)

                    setTimeout(()=>{
                        SetCorrectSend(null)
                    }, 4000)

                  }
                  
                })
            .catch(error => setError(error));   
        }else{

            setTimeout(() => {
                setIsLoading(false);
                setCompleteForm(true)
            }, 2000); 
            
            setTimeout(()=>{
                setCompleteForm(false)
            }, 5000)

                
        }
      

    } 

    

    return(
        <div>
            <button onClick={handleSubmit} disabled={isSubmitting} className="block m-auto py-2 px-4 bg-[#d19019] text-white font-semibold rounded-lg shadow-md hover:bg-[#ae7308] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">                
               
               {isLoading  &&                
                    <svg width="30" height="30" viewBox="0 0 58 58" xmlns="http://www.w3.org/2000/svg" className='m-auto'>
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
                    <p>Sign up</p>
                }
                
            </button>  

            {correctSend == true &&
             <p className='text-lime-600 text-center pt-4'>Registrado Correctamente</p>
            }
            {correctSend == false &&
             <p className='text-amber-900 text-center pt-4'>Email ya utilizado</p>
            }

            {completeForm && 
                <p className='text-amber-900 text-center pt-4'>Debe completar el formulario</p>
            }
                      
        </div>
    )
}

export default ServiRegister;