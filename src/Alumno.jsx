function Alumno(props){
    return (
        <>
            <p>
                <strong>Nombre:</strong> {props.nombre}<br />
                <strong>Edad:</strong> {props.edad} años <br /> 
            </p>            
        </>
    )
}

//Esto es para exportar, el por default es Alumno y no poner las llaves del otro
//Y no se puede porner dos export default solo uno
export default Alumno;