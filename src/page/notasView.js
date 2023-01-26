import Header from "../components/header/header";
import AddNoteBotton from "../components/addNote/addNote";
import Cookies from 'js-cookie';
import ShowNotes from "../services/serviceShowNotes";
import { useState } from "react";

function NotasView() {    

  if (Cookies.get("user_session") == null) {
    window.location.pathname = "/"
    /* Cookies.remove('user_session'); */
  }
  

  const handlelogout = ()=>{
    Cookies.remove('user_session'); 
    window.location.pathname = "/"
  }

  //RELOAD NOTES BOX WHEN ADD, DELETE O EDIT A NOTE
  const [reload,setReload] = useState(false)

  const handleShowNotes =()=>{
    setReload(!reload)
  }



    return(
        <div>
            
          <Header handlelogout={handlelogout}/>
          <div className="bg-white shadow">
            <div className="grid md:grid-cols-2 gap-4 mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">Noteboar</h1>
              <AddNoteBotton reload={handleShowNotes}/>
            </div>
          </div>
          <main>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
              <div className="px-4 py-6 sm:px-0">
                <div className="min-h-full rounded-lg border-4 border-dashed border-gray-200 p-5">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
                    <ShowNotes reload={handleShowNotes} />
                  </div>
                </div>
              </div>
            </div>
          </main>             
            
        </div>        
    )
}

export default NotasView;