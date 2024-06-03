import React from 'react'
import NavBar from '../Components/CommonSection/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/CommonSection/Footer'

const MainLayout = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout
