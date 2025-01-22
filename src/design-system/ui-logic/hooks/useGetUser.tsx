'use client'
import { useState, useEffect } from 'react'
import jwt from 'jsonwebtoken'

const useGetUser = () => {
  const [user, setUser] = useState<{ username: string | null, email: string | null } | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const getCookie = (name: string) => {
    if (typeof name !== 'string') {
      console.error('Cookie name must be a string');
      return undefined;
    }
  
    const value = `; ${document.cookie}`;
  
    const parts = value.split(`; ${name.trim()}=`);
    if (parts.length === 2) {
      return parts.pop()?.split(';').shift(); 
    }
  
    return undefined; 
  };
  
  useEffect(() => {
    const token = getCookie('auth_token')
    
    if (!token) {
      setUser(null)
      setLoading(false)
      setError('No token found')
      return
    }

    try {
      const decoded: any = jwt.decode(token)
      
      if (decoded) {
        if (decoded.username && decoded.email) {
          setUser({ username: decoded.username, email: decoded.email })
        } else {
          setError('Token does not contain expected fields')
          setUser(null)
        }
      } else {
        setError('Token is invalid or could not be decoded')
        setUser(null)
      }
    } catch (err) {
      console.error("Error decoding token:", err)
      setError('Error decoding token')
      setUser(null)
    } finally {
      setLoading(false)
    }
  }, [])
  
  return { user, loading, error }
}

export default useGetUser