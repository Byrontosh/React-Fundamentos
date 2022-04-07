import { useState } from 'react'

const useManejoFormulario = (initialState={}) => 
{
    const [formValues, setFormValues] = useState(initialState)
    const [estadoForm, setestadoForm] = useState(false)
    const [errorValidacion, seteErorValidacion] = useState(false)

    const handleChange = (e) =>
    {
       setFormValues({
           ...formValues,
           [e.target.name]:e.target.value,
       })
    }

    const handleChecked = (e) =>
    {
       setFormValues({
           ...formValues,
           [e.target.name]:e.target.checked
       })
    }

    const handleSubmit =(e) =>{
        e.preventDefault()
        if(Object.values(formValues).includes(""))
        {
            seteErorValidacion(true)
            setTimeout(() => {
                seteErorValidacion(false)
            }, 1000);
            return
        }
        setestadoForm(true)
    }

    const handleReset =()=>
    {
        setestadoForm(false)
        setFormValues({   
            email:"",
            sabor:document.querySelector('input[type=radio][name=sabor]:checked').checked=false,
            password:"",
            terminos:document.getElementById('exampleCheck1').checked = false,
            color: ""
    })
    }

    return [formValues,handleChange,handleChecked,handleSubmit,estadoForm,errorValidacion,handleReset]
}


export default useManejoFormulario
