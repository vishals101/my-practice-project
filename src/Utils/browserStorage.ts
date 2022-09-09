// Local Storage
export const getItemLocalStorage = (key: string) => {
    const item = localStorage.getItem(key)
    return item
}

export const getJsonObjLocalStorage = (key: string) => {
    const obj = localStorage.getItem(key)
    return obj && obj !== "undefined" ? JSON.parse(obj) : false
}

export const setItemLocalStorage = (key: string, value: string) => {
    localStorage.setItem(key, value)
}

export const removeItemLocalStorage = (key: string) => {
    localStorage.removeItem(key)
}

export const clearLocalStorage = () => {
    localStorage.clear()
}

// Session Storage
export const setItemSessionStorage = (key: string, value: string) => {
    sessionStorage.setItem(key, value)
}

export const getItemSessionStorage = (key: string) => {
    const item = sessionStorage.getItem(key)
    return item
}

export const clearSessionStorage = ()=>{
    sessionStorage.clear()
}