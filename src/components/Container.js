import React from 'react'
import { Navbar } from './Navbar'


export const Container = ({ children, className }) => {
    return (
        <>
            <Navbar />
            <div className={`container mt-3 ${className}`}>
                {children}
            </div>
        </>

    )
}
