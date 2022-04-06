import React from 'react'
import FetchUsers from '../components/effect/FetchUsers'
import IntroUseEffect from '../components/effect/IntroUseEffect'
import Time from '../components/effect/Time'


const FundamentoUseEffect = () => {
  return (
    <>
      <IntroUseEffect/>
      <Time/>
      <FetchUsers/>
    </>
  )
}

export default FundamentoUseEffect