import React from 'react'
import Array from '../components/state/Array'
import Formulario from '../components/state/Formulario'
import Conditional from '../components/state/Conditional'
import Counter from '../components/state/Counter'
import MensajesError from '../components/state/MensajesError'
import Objetos from '../components/state/Objetos'

const FundamentoUseState = () => {
  return (
    <>
      <Counter/>
      <Conditional/>
      <MensajesError/>
      <Objetos/>
      <Array/>
      <Formulario/>
    </>
  )
}

export default FundamentoUseState