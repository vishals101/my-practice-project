import axios from "axios";
import { projectData } from "../config";
import { clearLocalStorage, getItemSessionStorage, clearSessionStorage } from "../Utils/browserStorage";

const axiosInstance = axios.create({
    baseURL: projectData.apiBaseURL
})

axiosInstance.interceptors.request.use(
    async (config: any) => {
        let token: string | null | void = getItemSessionStorage('auth_token')
        // const token: string | null = getItemLocalStorage('auth_token')
        if (!token && !config.url.includes("auth")) {
            const payload = {
                username: projectData.userName,
                password: projectData.password
            }
            const response: any = await axios.post(`${projectData.apiBaseURL}/auth`, payload)
            token = response.data.result.token
        }
        if (token !== null || token !== undefined) {
            config.headers = {
                Authorization: `Bearer ${token}`
            }
        }
        return config
    }
)

axiosInstance.interceptors.response.use(undefined, (error: any) => {
    if (error.message === "Network Error" && !error.response) {
        console.log("Network error - make sure API is running!");
    }
    if (error.response) {
        const { status } = error.response;
        if (status === 404) {
            console.log("Not Found");
        }
        if (status === 401) {
            clearLocalStorage()
            clearSessionStorage()
            window.location.href = "/";
            console.log("Your session has expired, please login again");
        }
        return error.response;
    } else {
        // throw transformError(error);
        console.log(error)
        return error
    }
})

export default axiosInstance;
