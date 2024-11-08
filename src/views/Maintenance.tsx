import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/universal-components/Navbar'

interface maintenanceType{
    pageName: string
}

const Maintenance:React.FC<maintenanceType> = ({pageName}) => {
    return (
        <>
        <Navbar colorState=''/>
        <div style={
            {
                width: '100%',
                height: '100vh',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            <h1 style={{ width:'100', color: 'black', textAlign: 'center' }}>{`Sorry ${pageName} page is currently under Maintenance`}</h1>
            <p><Link style={{textDecoration: 'none', color: '#030416'}} to="/">Return to home page</Link></p>
            </div>
        </>
  )
}

export default Maintenance
