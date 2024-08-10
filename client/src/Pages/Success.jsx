import React from 'react'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f0f8ff'
    }}>
      <div style={{
        textAlign: 'center',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#ffffff'
      }}>
        <h1 style={{
          fontSize: '3rem',
          color: '#4CAF50',
          marginBottom: '20px'
        }}>Success</h1>
        <h4 style={{
          fontSize: '1.2rem',
          color: '#333',
          marginBottom: '30px'
        }}>Your Transaction has been Successful</h4>
        <Link to='/'>
          <button style={{
            padding: '10px 20px',
            fontSize: '1rem',
            backgroundColor: '#4CAF50',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>Purchase More</button>
        </Link>
      </div>
    </div>
  )
}

export default Success;
