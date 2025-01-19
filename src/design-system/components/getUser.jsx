'use client'
import React from 'react'
import jwt from 'jsonwebtoken'

const getUser = () => {
  const token = localStorage.getItem('token')
  const JWT_SECRET = "ecomm12345"

  if (!token) {
    console.log("No token found")
    return ({user: null})
  }

  if (typeof token !== 'string') {
    console.log("Token is not a valid string")
    return
  }

  const tokenParts = token.split('.')
  if (tokenParts.length !== 3) {
    console.log("Invalid token structure")
    return
  }

  const decoded = jwt.decode(token)

  return ({user: decoded.username})
}

export default getUser
