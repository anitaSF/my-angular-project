// Para trabajar con objetos, se crean modelos o interfaces, que son objetos que definen el tipo de valor que es cada propiedad.
// se debe exportar con "export default" e imporar en cada archivo tapeScript del componente que se quiera utilizar. 
// En este .ts, la variable objeto que se cree con esta interface, deberá tiparse con el nombre de la interface dado aquí, y se definiran sus propiedades dentro del modo constructor creado

export default interface Project {
    id: number,
    name: string,
    category: string,
    year: number,
    image: string,
    isPublic: boolean
}