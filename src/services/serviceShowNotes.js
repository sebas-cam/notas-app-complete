import CardNote from "../components/cardNote/cardNote";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';

function ShowNotes({reload}) {    

     //OPEN OPTIONS CARD
     const [openOptions,setopenOptions] = useState({open:false,id_code:""}) 
      
     const handleopenOptions=(id)=>{        
         setopenOptions({open:!openOptions.open,id_code:id})         
         
     }
 
     //EDIT NOTE MODAL
     const [modal, setModal] = useState({open:false,id_code:""});
 
     const activeModal = (id) => {      
         setModal({open:!modal.open,id_code:id});
         console.log(modal)
         handleopenOptions()
     }
 
     const cerrarModal = ()=>{
         setModal({open:false,id_code:""})
     }

     //API TO SHOW CARDS
     const [dataNoteBoard,setDataNoteBoard] = useState() 
     const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        const fetchData = async () => { 
            const token = Cookies.get("user_session")
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer " + token);
            myHeaders.append("Content-Type", "application/json");

            var requestOptions = {
              method: 'GET',
              headers: myHeaders,
              redirect: 'follow'
            };

            fetch("https://x9d8pa.deta.dev/nota/mostrar", requestOptions)
              .then(response => response.json())
              .then(result => {
                setIsLoading(false)
                setDataNoteBoard(result)                
              })
              .catch(error => console.log('error', error));
        }
        fetchData();

    }, [reload])

    return(
            <>

            {isLoading ? (
                
                <>                                        
                    <div className="border border-inherit shadow rounded-md px-4 py-1 max-w-sm w-full mx-auto">
                      <div className="animate-pulse flex space-x-4 pb-9">

                        <div className="flex-1 space-y-1.5 py-1">
                            <div className="flex justify-end px-1 pt-1 relative">
                                <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                                <span className="sr-only">Open dropdown</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                                </button>
                            </div>
                          <div className="h-5 bg-slate-200 rounded"></div>
                          <div className="space-y-3">
                            <div className="grid grid-cols-3 gap-4 mt-8">
                              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                            </div>
                            <div className="h-2 bg-slate-200 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border border-inherit shadow rounded-md px-4 py-1 max-w-sm w-full mx-auto">
                      <div className="animate-pulse flex space-x-4 pb-9">

                        <div className="flex-1 space-y-1.5 py-1">
                            <div className="flex justify-end px-1 pt-1 relative">
                                <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                                <span className="sr-only">Open dropdown</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                                </button>
                            </div>
                          <div className="h-5 bg-slate-200 rounded"></div>
                          <div className="space-y-3">
                            <div className="grid grid-cols-3 gap-4 mt-8">
                              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                            </div>
                            <div className="h-2 bg-slate-200 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border border-inherit shadow rounded-md px-4 py-1 max-w-sm w-full mx-auto">
                      <div className="animate-pulse flex space-x-4 pb-9">

                        <div className="flex-1 space-y-1.5 py-1">
                            <div className="flex justify-end px-1 pt-1 relative">
                                <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                                <span className="sr-only">Open dropdown</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                                </button>
                            </div>
                          <div className="h-5 bg-slate-200 rounded"></div>
                          <div className="space-y-3">
                            <div className="grid grid-cols-3 gap-4 mt-8">
                              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                            </div>
                            <div className="h-2 bg-slate-200 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border border-inherit shadow rounded-md px-4 py-1 max-w-sm w-full mx-auto">
                      <div className="animate-pulse flex space-x-4 pb-9">

                        <div className="flex-1 space-y-1.5 py-1">
                            <div className="flex justify-end px-1 pt-1 relative">
                                <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                                <span className="sr-only">Open dropdown</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                                </button>
                            </div>
                          <div className="h-5 bg-slate-200 rounded"></div>
                          <div className="space-y-3">
                            <div className="grid grid-cols-3 gap-4 mt-8">
                              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                            </div>
                            <div className="h-2 bg-slate-200 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border border-inherit shadow rounded-md px-4 py-1 max-w-sm w-full mx-auto">
                      <div className="animate-pulse flex space-x-4 pb-9">

                        <div className="flex-1 space-y-1.5 py-1">
                            <div className="flex justify-end px-1 pt-1 relative">
                                <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                                <span className="sr-only">Open dropdown</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                                </button>
                            </div>
                          <div className="h-5 bg-slate-200 rounded"></div>
                          <div className="space-y-3">
                            <div className="grid grid-cols-3 gap-4 mt-8">
                              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                            </div>
                            <div className="h-2 bg-slate-200 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border border-inherit shadow rounded-md px-4 py-1 max-w-sm w-full mx-auto">
                      <div className="animate-pulse flex space-x-4 pb-9">

                        <div className="flex-1 space-y-1.5 py-1">
                            <div className="flex justify-end px-1 pt-1 relative">
                                <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                                <span className="sr-only">Open dropdown</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                                </button>
                            </div>
                          <div className="h-5 bg-slate-200 rounded"></div>
                          <div className="space-y-3">
                            <div className="grid grid-cols-3 gap-4 mt-8">
                              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                            </div>
                            <div className="h-2 bg-slate-200 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                </>
                ) : (
                    Object.values(dataNoteBoard).map((item) => (
                        <CardNote key={item.id} id={item.id} modal={modal} cerrarModal={cerrarModal} handleopenOptions={handleopenOptions} openOptions={openOptions} activeModal={activeModal} titleNote={item.note_title} contentNote={item.note_content} reload={reload} />                        
                    ))
                )}
    
                    
            </>
    )
}

export default ShowNotes;