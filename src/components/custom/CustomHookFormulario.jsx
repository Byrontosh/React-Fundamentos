import React from 'react'
import useManejoFormulario from '../hooks/useForm'
import MensajeError from './MensajeError'

const initialValues = {
    email:"",
    sabor:"",
    password:"",
    terminos:false,
    color: ""
}


const CustomHookFormulario = () => 
{
    const [formValues,handleChange,handleChecked,handleSubmit,estadoForm,errorValidacion,handleReset] = useManejoFormulario(initialValues)

  return (
    <div className="container mt-4">
    <h1 className="mb-3 text-2xl">Form App 🐱‍👤🐺</h1>
    <hr />
        
        {
            errorValidacion && <MensajeError tipo={'alert-danger'}>Existen campos vacíos</MensajeError>
        }

        <form onSubmit={handleSubmit} className="mt-3">
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Ingresa tu email:</label>
                <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                onChange={handleChange}
                value={formValues.email}
                
                /> 
            </div>

            <div className="mb-3">
            <label className='fw-bold'>Elije tu bebida: </label>
            <br/>
            <label htmlFor="coca">Coca Cola: </label>
            <input className='m-2' type="radio" id="coca" name="sabor" value="coca"  onChange={handleChange} />
            
            <label htmlFor="pepsi">Pepsi: </label>
            <input className='m-2' type="radio" id="pepsi" name="sabor" value="pepsi" onChange={handleChange} />
            
            <label htmlFor="cerveza">Cerveza: </label>
            <input className='m-2' type="radio" id="cerveza" name="sabor" value="cerveza" onChange={handleChange} />
            </div>


            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Ingresa tu Password:</label>
                <input type="password" name='password' className="form-control" id="exampleInputPassword1" 
                onChange={handleChange}
                value={formValues.password}
                
                />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" name='terminos' className="form-check-input" id="exampleCheck1" onChange={handleChecked}/>
                <label className="form-check-label fw-bold" htmlFor="exampleCheck1">Terminos y Condiciones</label>
            </div>

            
            <select name="color" id="color" className="form-select fw-bold" onChange={handleChange} value={formValues.sabor}>
                    <option value="">Selecciona tu color favorito</option>
                    <option value="azul">Azul</option>
                    <option value="verde">Verde</option>
                    <option value="amarillo">Amarillo</option>
            </select>


            <button type="submit" className="btn btn-outline-success mt-4 w-100">Enviar</button>
        </form>


        {estadoForm && (
                    <div className="text-right">
                    <h2 className="mt-4 mb-4">Los datos ingresados en el formulario son:</h2>
                    <p>Email: {formValues.email}</p>
                    <p>Bebida: {formValues.sabor}</p>
                    <p>Contraseña: {formValues.password}</p>
                    <p>Terminos y Condiciones: {formValues.terminos.toString()}</p>
                    <p>Color favorito: {formValues.color}</p>
                    <button type="submit" className="btn btn-outline-danger mt-4 w-100 mb-5" onClick={handleReset}>Reiniciar</button>
                    </div>
            )}


    </div>
  )
}

export default CustomHookFormulario