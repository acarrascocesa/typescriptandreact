// Interface sirve para indicar como luciran nuestros objetos.
// Las interfaces no sirver para crear instancias: const persona = new Persona().
interface Persona {
    nombreCompleto: string,
    edad: number,
    direccion: Direccion
}

interface Direccion {
    pais: string,
    casaNo: number
}

const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: "Angel",
        edad: 34,
        direccion: {
            pais: "Republica Dominicana",
            casaNo: 615
        }
    }

    return (
        <>
            <h3>Objetos Literales</h3>
            {/* {JSON.stringify(persona)} */}
            <code>
                <pre>
                    {JSON.stringify(persona, null, 2)}
                </pre>
            </code>
        </>
    )
}

export default ObjetosLiterales