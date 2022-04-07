import React from 'react'

const MensajeError = ({ children, tipo }) => 
{
    return (
        <div className={`alert ${tipo} text-center mt-3`}>{children}</div>

    )
}

export default MensajeError