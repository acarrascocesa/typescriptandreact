/* eslint-disable @typescript-eslint/no-inferrable-types */
import { useState } from "react"

export const useCounter = (inicial: number = 0) => {
    const [counter, setCounter] = useState<number>(inicial);

    const handlerPlus = (numero: number) => {
        return setCounter(counter + numero)
    }

    const handlerMinus = (numero: number) => {
        return setCounter(counter - numero)
    }
    return {
        counter,
        handlerPlus,
        handlerMinus
    }
}

