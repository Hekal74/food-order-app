import { useState } from "react";

export function useForm(intialValues){
    const [values,setValues] = useState (intialValues);

    const handleChange = (e) => {
        const {name,value} = e.target;
        setValues ((prev) => ({...prev,[name]: value}))
    };

    const resetForm =() =>{
        setValues(intialValues);
    }
    
    return{values,handleChange,resetForm};
}