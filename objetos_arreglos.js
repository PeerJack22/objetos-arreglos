// Página para el ejercicio : instagram.com

// Objetos

const usuario = {
    nombre: "Paulo Cisneros",
    edad: 22,
    direccion:{
        ciudad: "Quito",
        calle: "Manuela Cañizares",
        telefono: 20713254
    },
    Amigos: ["Anthon","Eddy","Roger"],
    estado : true,
    sendMail (){
        return `Enviando mail a ${this.amigos[0]}`
    },
    sendNotification(){
        return `Enviando notificación a ${this.amigos[1]}`
    }

}

console.log(usuario.estado)
console.log(usuario.sendMail())
console.log(usuario.sendNotification())

// Agregar clave y valor al objeto
usuario.avatar = "paulo.jpg"
console.log(usuario.avatar)

// Eliminar clave y valor del objeto
delete usuario.estado
console.log(usuario.estado)

// Destructuración del objeto
const {nombre, edad, direccion} = usuario
console.log(nombre, edad, direccion.calle)

// Congelar el objeto
Object.freeze(usuario)
console.log(Object.isFrozen(usuario))
usuario.apodo = "Jordy"

// Uso del seal
Object.seal(usuario)
console.log(Object.isSealed(usuario))
usuario.apodo = "Jordyf"
console.log(usuario.apodo)

// Copiar dos datos

const usuario2 ={
    nombre: "Jordy Nacevilla",
    edad: 22
}

const extraInformacion = {
    direccion: "Quito",
    telefono: 20713254
}

const allInfo = {...usuario2, ...extraInformacion}
console.log(allInfo)

// Métodos para trabajar con objetos

console.log("Obtener las claves del objeto",Object.keys(usuario))
console.log("Obtener los valores del objeto",Object.values(usuario))
console.log("Obtener las claves y valores en un array",Object.entries(usuario))

// ES6 nombre abreviados de variables

const nSeguidores = 200
const tema = "Programación"

const estadisticaUsuario = {
    nSeguidores,
    tema
}

console.log(estadisticaUsuario)

// Arrays

const seguidores = ["Anthon", "Eddy", "Roger", "Jordy"]

const dataNewUser = ["Paulo", "Cisneros", 22, "Quito", "Manuela Cañizares", 20713254]

const temas = ["Programación", "Física", "Matemáticas", "Química"]

const followers = [25, 50, 100]

console.log("Numero de elementos: ", seguidores.length)

// Recorrido
// for in
for (let i = 0; i < seguidores.length; i++){
    console.log(seguidores[i])
}
// for of
for (const seguidor of seguidores){
    console.log(seguidor)
}

//Métodos para trabajar con arrays
// push
seguidores.push("Jordy")
console.log(seguidores)
// unshift
seguidores.unshift("Anthon")
console.log(seguidores)
// pop
seguidores.pop()
console.log(seguidores)
// shift
seguidores.shift()
console.log(seguidores)
// slice
seguidores.slice(0, 2)
console.log(seguidores)
// Array.isArray
console.log(Array.isArray(seguidores))

// Destructuracion
const [publicacion, seguido, reel] = dataNewUser
console.log(publicacion)
console.log(seguido)
console.log(reel)

// Rest operator

const [usuario, ...resto] = ["Roland","Childer", 22, "Quito", "Manuela Cañizares", 20713254]
console.log(usuario)
console.log(resto)

// Spread operator
const dataNewUser2 = ["Paulo", "Cisneros", 22, "Quito", "Manuela Cañizares", 20713254]
const dataNewUser3 = ["Roland", "Childer", 22, "Quito", "Manuela Cañizares", 20713254]

const newData = [...dataNewUser2, ...dataNewUser3]
console.log(newData)


