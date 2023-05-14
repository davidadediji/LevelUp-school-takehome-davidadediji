import React from 'react'

type InputProps = {
    label:string
    name: string
    placeholder?: string
    type:string
    handleChange:(event:any)=>void
}

export default function Input({name, placeholder, type, handleChange, label}:InputProps) {
  return (
    <div className='input-container'>
        <label htmlFor={name}>{label}</label>
        <input type={type} placeholder={placeholder} onChange={handleChange} name={name} required className='input-style'/>
    </div>
  )
}
