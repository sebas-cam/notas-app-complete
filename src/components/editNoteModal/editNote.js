import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Formik, Form } from 'formik'
import ServiEditNote from '../../services/serviceEditNote'

function EditNoteModal({activeModal, cerrarModal , id_modal, id_nota, reload, titleNote_card, contentNote_card}) {

  const [valuesNote,setValuesNote] = useState({ titleNote: titleNote_card, contentNote: contentNote_card })

    const handletitleNote = (event) => {
      const { value } = event.target;
      setValuesNote({...valuesNote, titleNote: value });
    }

    const handlecontentNote = (event) => {
      const { value } = event.target;
      setValuesNote({...valuesNote, contentNote: value });
    }

    const handleReloadModal=()=>{
      setValuesNote({titleNote: "", contentNote: ""})
    }

    return(
        <>     
        {id_modal == id_nota &&
            <Transition appear show={activeModal.open} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={cerrarModal}>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel id={id_nota} className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900 text-center"
                        >
                        

                          <svg onClick={()=>{cerrarModal()}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-auto cursor-pointer transition duration-150 ease-out hover:scale-125">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>

                        </Dialog.Title>
                        <div className=" gap-6">

              <Formik initialValues={{ titleNote: '', contentNote: '' }}>
                <Form>
                <div className="relative z-0 w-full mb-6 group">
                    <input  onChange={handletitleNote} value={valuesNote.titleNote} type="text" name="floating_title" id="floating_title" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#d19019] peer" placeholder=" " required />
                    <label htmlFor="floating_title" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#d19019] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
                </div>

                <div className="relative z-0 w-full mb-6 group">
                    <textarea  onChange={handlecontentNote} value={valuesNote.contentNote}  rows="4" type="text" name="floating_content" id="floating_content" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#d19019] peer" placeholder=" " required />
                    <label htmlFor="floating_content" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#d19019] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Content</label>
                </div>

                <div className="mt-4">
                    <ServiEditNote values={valuesNote} id_nota={id_nota} cerrarModal={cerrarModal} reload={reload} reloadModal={handleReloadModal}/>
                </div>

                </Form>
              </Formik>





                    </div>


                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
        }
    </>
    )
}

export default EditNoteModal;