import React,{useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { getItemLocalStorage, getItemSessionStorage, setItemLocalStorage, setItemSessionStorage } from './Utils/browserStorage';
import RouteComponent from './Routes/AppRoutes';
import { projectData } from './config';
import { Auth } from './Interfaces/interface';
import { getTokenService } from './Services/authServices';

function App() {

  const getToken = async () => {
    try {
      const payload: Auth = {
        username: "devAcct680",
        password: "X9gbf.t\$bJ4?3`E"
      }
      const response: any = await getTokenService(payload)
      if (response.status === 200) {
        setItemSessionStorage("auth_token", response.data.result.token)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const token: string | null | void  = getItemSessionStorage('auth_token')
    if (token === null || token === undefined) {
      getToken()
    }
    getToken()
  }, [])
  
  return (
    <div className="App">
      <RouteComponent/>
    </div>
  );
}

export default App;
