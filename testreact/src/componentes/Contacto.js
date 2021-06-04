import React,{useState,useRef,Fragment} from 'react';
import {esNombre,esCorreo} from "../validaciones"


class InputText extends React.Component{
    constructor(props){
        super(props);
        this.actualizarState= this.actualizarState.bind(this);
        this.state={
            value:"",
            error: false
            ,
            mensajeError:""
        };
    }

    actualizarState(e){
        const {name,value} = e.target;
        //console.log(name)
        //console.log(value)
        //console.log(this.props.validacion(value));

        if(this.props.validacion(value)){
            this.setState({value, error: false, mensajeError: ""});
            this.props.actualizarState({
                name, value, error: false
            });
        }else{
            this.setState({
                value, error:true, mensajeError: this.props.mensajeError
            });
            this.props.actualizarState({
                name, value, error: true
            });
        }
    }

    render(){
        return(
            <Fragment>
                <div className="componente-input">
                    <label htmlFor={"id-"+this.props.name}>{this.props.label}{"\n"}</label>
                    <input id={"id-"+this.props.name} type="text" name={this.props.name}
                    placeholder={this.props.placeholder} className={this.state.error ? "border-error":""} 
                    onChange={this.actualizarState}/>
                    {
                        this.state.error ?(
                            <p className="componente-input-error">{this.state.mensajeError}</p>
                        ) : ("")
                    }
                </div>
            </Fragment>
        )
    }

}


class Contacto extends React.Component{

    constructor(props){
        super(props);
        this.submit = this.submit.bind(this);
        this.actualizarState = this.actualizarState.bind(this);
        this.state={
            nombre:{value:"",
            error:false},
            apellidoPaterno:{value:"",
            error:false},
            apellidoMaterno:{value:"",
            error:false},
            email:{value:"",
            error:false},
            }
    }

        actualizarState(input){
            //console.log(input);
            this.setState({...this.state,[input.name]:{
                value:input.value, error:input.error
            }},()=>{console.log(this.state);});
            //console.log(this.state);

        }

        submit(e){}
    
        render(){
            return(
                <div>
                    <form onSubmit={this.submit}>
                    <h1>Formulario de Registro</h1>
    
                    <InputText
                        //label="Nombre"
                        name="nombre"
                        placeholder="Nombre"
                        validacion ={esNombre}
                        mensajeError="Se Esperan solo letras"
                        actualizarState={this.actualizarState}/>

                        <InputText
                        //label="Apellido Paterno"
                        name="apellidoPaterno"
                        placeholder="Apellido Paterno"
                        validacion ={esNombre}
                        mensajeError="Se Esperan solo letras"
                        actualizarState={this.actualizarState}/>

                        <InputText
                        //label="Apellido Paterno"
                        name="apellidoMaterno"
                        placeholder="Apellido Materno"
                        validacion ={esNombre}
                        mensajeError="Se Esperan solo letras"
                        actualizarState={this.actualizarState}/>        

                    <InputText
                        //label="Email"
                        name="email"
                        placeholder="Email"
                        validacion ={esCorreo}
                        mensajeError="Formato de correo invalido"
                        actualizarState={this.actualizarState}/>    
                          
                    <button 
                        type="submit"
                        disabled={this.state.nombre.error ||
                                this.state.apellidoPaterno.error ||
                                this.state.apellidoMaterno.error ||
                                this.state.email.error}
                        className={this.state.nombre.error ||
                                this.state.apellidoPaterno.error ||
                                this.state.apellidoMaterno.error ||
                                this.state.email.error? "button-disable":"button"}>
                        Enviar
                    </button>    
                    </form>
                </div>   
            )
        }
    }
    
    export default Contacto;