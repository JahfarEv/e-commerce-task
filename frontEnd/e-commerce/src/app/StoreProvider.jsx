"use client"
import React from 'react'
import { Provider } from 'react-redux'

const StoreProvider = ({children}) => {
  return (
   <Provider store={stop}></Provider>
  )
}

export default StoreProvider
