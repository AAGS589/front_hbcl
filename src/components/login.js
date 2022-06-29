import React from 'react'
import '../assets/estilos-login.css'
import {Link} from "react-router-dom";

class Login extends React.Component{
    render(){
        return(
            <div class={'body-login'}>
                <div className={'section-inputs '}>
                    <h1 id={'titulo-login'}>Iniciar Sesión</h1>
                    <div className={'formulario'}>

                        <input className={'input inputLogin'} type={'text'}
                            name={'username'}
                            id={'username'}
                            placeholder={'Ingrese su usuario'}/>
                    </div>
                    <div className={'formulario'}>

                        <input className={'input inputLogin'} type={'text'}
                               name={'username'}
                               id={'username'}
                               placeholder={'Ingrese su contraseña'}/>
                    </div>
                    <div className="formulario">
                        <Link to='/menu'>
                            <button type="button" className="btn-login">Iniciar sesión</button>
                        </Link>
                    </div>
                </div>
            </div>


        )
    }

}

export default Login;