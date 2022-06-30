import React from "react";

import '../assets/estilos-register.css'
import {Link} from "react-router-dom";

class Register extends React.Component{
    render() {
        return(
            <div className={'body-register'}>
                <div className={'section-inputs '}>
                    <h1 id={'titulo-login'}>Registro</h1>
                    <div className={'formulario'}>

                        <input className={'input inputLogin'} type={'text'}
                               name={'username'}
                               id={'username'}
                               placeholder={'Ingresa un nombre de usuario'}/>
                    </div>
                    <div className={'formulario'}>

                        <input className={'input inputLogin'} type={'text'}
                               name={'username'}
                               id={'username'}
                               placeholder={'Ingrese sus nombres'}/>
                    </div>
                    <div className={'formulario'}>

                        <input className={'input inputLogin'} type={'text'}
                               name={'username'}
                               id={'username'}
                               placeholder={'Ingrese sus apellido'}/>
                    </div>
                    <div className={'formulario'}>

                        <input className={'input inputLogin'} type={'text'}
                               name={'username'}
                               id={'username'}
                               placeholder={'Ingrese una contraseña'}/>
                    </div>
                    <div className="formulario">
                        <Link to='/register'>
                            <button type="button" className="btn-login">Registrarme</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;