import React from 'react'
import { Routes,Route } from 'react-router'
import Dashboard from '../pages/Dashboard'
import InvokeTicket from '../pages/InvokeTicket'
import Ticketmanager from '../pages/Ticketmanager'
import Setting from '../pages/Setting'
const Rou = () => {
    return (
        <Routes>
            <Route path='/' element={<Dashboard/>}></Route>
            <Route path='/ticketmanager' element={<Ticketmanager/>}></Route>
            <Route path='/invoketicket' element={<InvokeTicket/>}></Route>
            <Route path='/setting' element={<Setting/>}></Route>
        </Routes>
    )
}

export default Rou
