import Register from "../components/registerModal/register";
import { useState } from 'react';
import ServiLogin from "../services/serviceLogin";
import { Form, Formik } from "formik";
import Cookies from 'js-cookie';

function Login() {

  if (Cookies.get("user_session") != null) {
    window.location.pathname = "/notas"
  }

    //OPEN MODAL REGISTER
    const [modal, setModal] = useState(false);

    const activeModal = () => {
        setModal(true);
    }

    const cerrarModal = ()=>{
        setModal(false)
    }

    //DATA LOGIN
    const [valuesLogin,setValuesLogin] = useState({ email: "", password: "" })

    const handleEmail = (event) => {
      const { value } = event.target;
      setValuesLogin({...valuesLogin, email: value });
    }

    const handlePassword = (event) => {
      const { value } = event.target;
      setValuesLogin({...valuesLogin, password: value });
    }

    
    

    return(
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <Register activeModal={modal} cerrarModal={cerrarModal}/>
          <div className="w-full max-w-md space-y-8">
            <div>
              <img className="mx-auto h-12 w-auto hidden" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"/>
              <svg  className="w-28 m-auto fill-[#d19019]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H288V368c0-26.5 21.5-48 48-48H448V96c0-35.3-28.7-64-64-64H64zM448 352H402.7 336c-8.8 0-16 7.2-16 16v66.7V480l32-32 64-64 32-32z"></path></svg>
              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                Or 
                <a onClick={()=>{activeModal()}} className="cursor-pointer font-medium text-[#d19019] hover:text-[#ae7308]"> Sign up</a>
              </p>
            </div>

            <Formik initialValues={{ email: '', password: '' }}>

              <Form className="mt-8 space-y-6" >
                <input type="hidden" name="remember" value="true"/>
                <div className="-space-y-px rounded-md shadow-sm">
                  <div>
                    <label htmlFor="email-address" className="sr-only">Email address</label>
                    <input onChange={handleEmail} value={valuesLogin.email} id="email-address" name="email" type="email" autoComplete="email" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email address"/>
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input onChange={handlePassword} value={valuesLogin.password} id="password" name="password" type="password" autoComplete="current-password" required className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password"/>
                  </div>
                </div>
                    
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    
                  </div>
                    
                  <div className="text-sm">
                    {/* <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a> */}
                  </div>
                </div>
                    
                    

                <ServiLogin values={valuesLogin}  />                
                    
                    
              </Form>
            </Formik>

          </div>
        </div>

        
    )
}

export default Login;