import { useState } from "react"

const Contador = () => {

    const [counter, setCounter] = useState<number>(0);

    const handlerPlus = (numero: number) => {
        return setCounter(counter + numero)
    }

    const handlerMinus = (numero: number) => {
        return setCounter(counter - numero)
    }

    return (
        <>
            <h3>Contador: <small>{counter}</small></h3>
            <button className="btn btn-primary" onClick={() => handlerPlus(5)}>+1</button>
            &nbsp;
            <button className="btn btn-primary" onClick={() => handlerMinus(1)}>-1</button>
        </>
    )
}

export default Contador