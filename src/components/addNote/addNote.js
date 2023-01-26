import AddNoteModal from '../addNoteModal/addNoteModal';
import { useState } from 'react';

function AddNoteBotton({reload}) {

  const [modal, setModal] = useState(false);

    const activeModal = () => {
        setModal(true);
    }

    const cerrarModal = ()=>{
        setModal(false)
    }

  return(
        <div>
         
         <AddNoteModal activeModal={modal} cerrarModal={cerrarModal} reload={reload}/>
          
            <a onClick={activeModal} href="#" className="group block max-w-xs ml-auto rounded-lg p-3 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-[#d19019] hover:ring-[#d19019]">
              <div className="flex items-center space-x-3">
                
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6 stroke-[#d19019] group-hover:stroke-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
    
                <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">New note</h3>
              </div>
              
            </a>  
                              

        </div>
    )
}

export default AddNoteBotton;