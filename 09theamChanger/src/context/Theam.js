import { useContext } from "react";
import { createContext } from "react";

export const theamContext = createContext({
    theamMode : "light",
    lightMode:()=>{},
    darkMode:()=>{}
})

export const TheamProvider = theamContext.Provider

export default function useTheam() {
    return useContext(theamContext)
}