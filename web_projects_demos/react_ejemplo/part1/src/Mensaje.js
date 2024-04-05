
const Mensaje = ({color,message}) => {
    console.log(`El prop es ${message}`)
    return <h1 style={{color: color}}>{`Hola! ${message}`}</h1>
}

export default Mensaje

