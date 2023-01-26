import { useState } from 'react';
import Cookies from 'js-cookie';

function ServiLogin({ values }) {

    const [isLoading, setIsLoading] = useState(false);
    const [userNotRegister, SetUserNotRegister] = useState(null)

    const handleSubmit =()=>{
        
        setIsLoading(true);        

        if (values.email && values.password  != "") {

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                "email": values.email,
                "password": values.password
              });
      
              var requestOptions = {
                  method: 'POST',
                  headers: myHeaders,
                  body: raw,
                  redirect: 'follow'
              };
      
              fetch('https://x9d8pa.deta.dev/login',requestOptions)
                .then(response => response.json())
                .then(data => {
      
                  setIsLoading(false);
      
                  if (data.detail == "el correo no se encuentra registrado" || data.detail == "la contraseña no es correcta") {
                    SetUserNotRegister(true)               
                    setTimeout(() => {
                        SetUserNotRegister(null) 
                    }, 2000);       

                  }else if(data.access_token){                     
                    const cookie_days = Math.round(data.time_expire / 1440);
                    Cookies.set('user_session', data.access_token, { expires: cookie_days});
                    SetUserNotRegister(false)
                    setTimeout(()=>{
                        SetUserNotRegister(null) 
                        window.location.pathname = "/notas"
                    }, 2000)

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
        <div>                                    

            <button onClick={()=>{handleSubmit()}} type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#d19019] py-2 px-4 text-sm font-medium text-white hover:bg-[#ae7308] focus:outline-none focus:ring-2 focus:ring-[#d19019] focus:ring-offset-2">
              
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

                    <p>
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">

                        <svg className="h-5 w-5 text-[#a16f13] group-hover:text-[#f6af2d]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                        </svg>
                        </span>
                        <span>Sign in</span>
                    </p>
                }
              
            </button>

            {userNotRegister &&
             <p className='text-amber-900 text-center pt-4'>Invalid credentials</p>
            }
            {userNotRegister == false &&
             <p className='text-lime-600 text-center pt-4'>Login successfully</p>
            }
                      
        </div>
    )
}

export default ServiLogin;