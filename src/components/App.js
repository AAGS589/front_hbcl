import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './login'
import Menu from './menu'
import Register from './register'

class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element= {<Login/>}/>
                    <Route exact path='/menu' element={<Menu/>}/>
                    <Route exact path='/register' element={<Register/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}

export default App;