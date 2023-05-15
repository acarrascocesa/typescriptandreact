/* eslint-disable @typescript-eslint/no-inferrable-types */

const TiposBasicos = () => {

    const nombre: string = 'Angel';
    const edad: number = 34;
    const estaActivo: boolean = true;

    const poderes: string[] = ["Velocidad, Volar, Velocidad"];


    return (
        <>
            <h3>Tipos Basicos</h3>
            {nombre}, {edad}, {(estaActivo) ? "activo" : "no activo"}
            <br />
            {poderes.join(", ")}
        </>
    )
}

export default TiposBasicos