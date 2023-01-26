import { useEffect, useState } from "react";
import Cookies from 'js-cookie';

function ServiMe() {

    const [userName, setUserName] = useState("")

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

            fetch("https://x9d8pa.deta.dev/users/me", requestOptions)
              .then(response => response.json())
              .then(result => {                                
                setUserName(result.username)              
              })
              .catch(error => console.log('error', error));
        }
        fetchData();

    }, [])

    return(
        <>
            <span className="text-white">{userName}</span>
        </>
    )    
}

export default ServiMe;