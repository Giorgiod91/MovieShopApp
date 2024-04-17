"use client";
import React from 'react'

function CheckoutButton() {


  const sendToRegister = () => {
    window.location.href = '/register'
  }


  return (
    <div onClick={sendToRegister}  className=''
    >CheckoutButton</div>
  )
}

export default CheckoutButton