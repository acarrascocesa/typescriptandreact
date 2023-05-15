import { useCounter } from "../hooks/useCounter";

const ContadorConHook = () => {

    const { counter, handlerPlus, handlerMinus } = useCounter(0)
    return (
        <>
            <h3>Contador con Hook: <small>{counter}</small></h3>
            <button className="btn btn-primary" onClick={() => handlerPlus(5)}>+1</button>
            &nbsp;
            <button className="btn btn-primary" onClick={() => handlerMinus(1)}>-1</button>
        </>
    )
}

export default ContadorConHook