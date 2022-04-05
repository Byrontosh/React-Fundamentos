import React from 'react'
import { useState } from 'react'

const Formulario = () => 
{
  const [estadoForm, setEstadoForm] = useState(false)

  const [form, setForm] = useState({
      email:"",
      sabor:"",
      password:"",
      terminos:false,
      color: ""
  })


  const handleChange = (e) =>
  {
     setForm({
         ...form,
         [e.target.name]:e.target.value
     })
  }

  const handleChecked = (e) =>
  {
     setForm({
         ...form,
         [e.target.name]:e.target.checked
     })
  }

  const handleSubmit = (e) => 
  {
    e.preventDefault()
    setEstadoForm(true)
  }

  const handleReset = () =>{
    setEstadoForm(false)
    setForm({
        email:"",
        sabor:document.querySelector('input[type=radio][name=sabor]:checked').checked=false,
        password:"",
        terminos:document.getElementById('exampleCheck1').checked = false,
        color: ""
    })
  }

  return (
    <>
        <div className="container mt-4">
        <h1 className="mb-4 text-2xl">Form App 🐱‍👤🐺</h1>
        <hr />
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Ingresa tu email:</label>
                    <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                    onChange={handleChange}
                    value={form.email}
                    /> 
                </div>

                <div className="mb-3">
                <label className='fw-bold'>Elije tu bebida: </label>
                <br/>
                <label htmlFor="coca">Coca Cola: </label>
                <input className='m-2' type="radio" id="coca" name="sabor" value="coca" onChange={handleChange} />
                
                <label htmlFor="pepsi">Pepsi: </label>
                <input className='m-2' type="radio" id="pepsi" name="sabor" value="pepsi" onChange={handleChange}/>
                
                <label htmlFor="cerveza">Cerveza: </label>
                <input className='m-2' type="radio" id="cerveza" name="sabor" value="cerveza" onChange={handleChange}/>
                </div>


                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Ingresa tu Password:</label>
                    <input type="password" name='password' className="form-control" id="exampleInputPassword1" 
                    onChange={handleChange}
                    value={form.password}
                    />
                </div>



                <div className="mb-3 form-check">
                    <input type="checkbox" name='terminos' className="form-check-input" id="exampleCheck1" onChange={handleChecked}/>
                    <label className="form-check-label fw-bold" htmlFor="exampleCheck1">Terminos y Condiciones</label>
                </div>



                <select name="color" id="color" className="form-select fw-bold" onChange={handleChange} value={form.sabor}>
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
                    <p>Email: {form.email}</p>
                    <p>Bebida: {form.sabor}</p>
                    <p>Contraseña: {form.password}</p>
                    <p>Terminos y Condiciones: {form.terminos.toString()}</p>
                    <p>Color favorito: {form.color}</p>
                    <button type="submit" className="btn btn-outline-danger mt-4 w-100" onClick={handleReset}>Reiniciar</button>
                    </div>
            )}



        </div>
  </>
  )
}

export default Formulario