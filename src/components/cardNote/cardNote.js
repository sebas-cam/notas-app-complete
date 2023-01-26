
import EditNoteModal from "../editNoteModal/editNote";
import DeleteNote from "../../services/serviceDeleteNote";

function CardNote({modal, cerrarModal, handleopenOptions, openOptions, activeModal, titleNote, contentNote, id, reload}) {

    return(
    
        <div id={id} className="m-auto min-h-full w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <EditNoteModal activeModal={modal} id_modal={modal.id_code} cerrarModal={cerrarModal} id_nota={id} reload={reload} contentNote_card={contentNote} titleNote_card={titleNote}/>
                <div className="flex justify-end px-4 pt-4 relative">
                  <button onClick={()=>{handleopenOptions(id)}} id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                      <span className="sr-only">Open dropdown</span>
                      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                  </button>

                    {openOptions.id_code == id && openOptions.open &&

                        <div id="dropdown"  className="absolute top-14 z-10 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                            <ul className="py-2" aria-labelledby="dropdownButton">
                              <li>
                                    <a onClick={()=>{activeModal(id)}} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 inline-block	mr-2.5">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                        </svg>
                                    Edit
                                    </a>
                              </li>

                              <li>
                                    <DeleteNote reload={reload}  id_nota={id}/>
                              </li>
                            </ul>
                        </div>
                    }              
                </div>
                <div className="flex flex-col items-center pb-10">
                
                  <h5 className="mb-1 text-2xl font-medium text-gray-900 dark:text-white"> {titleNote} </h5>
                  <p className="text-lg text-gray-500 dark:text-gray-400 pt-7 px-5 text-center ">{contentNote}</p>
                
                </div>
        </div>
        
    )
}

export default CardNote;