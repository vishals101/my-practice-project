import { Auth } from "../Interfaces/interface"
import httpServices from "./httpServices"


export const getTokenService = (payload:Auth) =>{
    return httpServices.post("/auth",payload)
}