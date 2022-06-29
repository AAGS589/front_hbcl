import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './login'
import Menu from './menu'

class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element= {<Login/>}/>
                    <Route exact path='/menu' element={<Menu/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}

export default App;