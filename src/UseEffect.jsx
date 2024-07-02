import { useEffect } from "react";

function odd(){
    useEffect(()=>{
        console.log("creation of compoenent");
    return()=>{
        console.log("deletion of component"); //it is deleted when even component executes
    }
    },[]); //[] - dependencies is passed
}