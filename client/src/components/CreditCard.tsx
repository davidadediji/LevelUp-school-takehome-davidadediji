import React from 'react'
import MasterCard from "../assets/mastercard.png"
import AmericanExpress from "../assets/american-express.png"
import Visa from "../assets/visa.png"

export default function CreditCard() {
  return (
    <div className='checkout-header'>
        <p>Credit or Debit Card</p>
        <div style={{display:'flex', gap:10}}>
            <img src={MasterCard} width="50px"alt="mastercard" />
            <img src={Visa} width={"50px"} alt="visa-card" />
            <img src={AmericanExpress} width={"50px"} alt="american-express" />
        </div>
    </div>
  )
}
