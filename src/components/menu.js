import React from 'react'
import '../assets/estilos-menu.css'
class Menu extends React.Component{
    render(){
        return(
            <div className={'principal'}>
                <div className={'slide-bar'}>
                    <div id={'menu'}>
                        <p>Inicio</p>
                    </div>
                    <div id={'menu'}>
                        <p>Ingresar nuevo</p>
                    </div>
                    <div id={'menu'}>
                        <p>Reportes</p>
                    </div>
                    <div id={'menu'}>
                        <p>Administración</p>
                    </div>
                    <div id={'menu'} className={'log-out'}>

                        <p>Salir</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu;