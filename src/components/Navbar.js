import React from 'react'
import { GiFullMotorcycleHelmet } from "react-icons/gi";

export const Navbar = () => {
    return (
        <nav className='navbar navbar-dark bg-success'>
            <div className='container'>
                <h3 className='text-light'> Motorcicles </h3>
                <h3 className='text-light'> Pablo Zapeta <GiFullMotorcycleHelmet style={{ marginLeft: "0.4em" }} /> </h3>
            </div>
        </nav>
    )
}
