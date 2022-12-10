const submit = document.getElementById("submit");
const formulario = document.querySelector("form");
const estudiantes = [];
let poblacion = 0
function accion(e) {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = parseFloat(document.getElementById("edad").value);
    let curso = document.querySelector("#cursos").value;
    let sexo = document.querySelector("#sexo").value;
    let civil = document.querySelector("#civil").value;
    let ubica = document.querySelector("#ubicacion").value;

    if (nombre == "" || nombre.length < 2) {
        alert("Escriba un nombre valido")
        return
    } 
    if (apellido == "" || apellido.length < 2) {
        alert("Escriba un apellido valido")
        return
    } 
    if (!edad) {
        alert("Escriba una edad en numeros");
        return
    } 
    if (curso == 0) {
        alert("Seleccione un curso")
        return
    }  
    if (sexo == 0) {
        alert("Seleccione un genero valido")
        return
    } 
    if (civil == 0) {
        alert("Seleccione un estado civil")
        return
    } 
    if (ubica == 0) {
        alert("Seleccione una ubicacion")
        return
    } 
    if (poblacion == 0) {
        alert("Seleccione una poblacion")
        return
    }
    let estudiante = {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        curso: curso,
        sexo: sexo,
        civil: civil,
        ubica: ubica,
        poblacion: poblacion
    }
    estudiantes.push(estudiante)

    conChange(1)
    formulario.reset()
    poblacion = 0
    estadistica()

}

function estadistica() {
    var mayores = 0, masculino = 0, femenino = 0, vulnerable = 0
    var grado = {}, ubica = {}
    for (let i = 0; i < estudiantes.length; i++) {
        const estudiante = estudiantes[i];
        if (estudiante.edad >= 18) {
            mayores++
        }
        if (estudiante.sexo == 1) {
            masculino++
        }
        if (estudiante.sexo == 2) {
            femenino++
        }
        if (estudiante.poblacion == 1) {
            vulnerable++ 
        }
        if (grado[estudiante.curso] > 0) {
            grado[estudiante.curso]++
        } else {
            grado[estudiante.curso] = 1
        }
        if (ubica[estudiante.ubica] > 0) {
            ubica[estudiante.ubica]++
        } {
            ubica[estudiante.ubica] = 1
        }

    }
    const total = estudiantes.length
    const nombreEstudiante = document.getElementById("numeroEstudiantes")
    const mayoresNode = document.getElementById("mayores")
    const masculinos = document.getElementById("masculinos")
    const femeninos = document.getElementById("femeninos")
    const vulner = document.getElementById("vulner")
    const porCurso = document.getElementById("porCurso")
    const porUbicacion = document.getElementById("porUbicacion")
    const nomArray = ["","La playa", "Malambo", "Barranquilla", "Galapa"]

    nombreEstudiante.innerHTML = total
    mayoresNode.style.width = reglaTres(mayores, total)+"%"
    masculinos.style.width = reglaTres(masculino, total)+"%"
    femeninos.style.width = reglaTres(femenino, total)+"%"
    vulner.style.width = reglaTres(vulnerable, total)+"%"

    masculinos.innerText = masculino || "0"
    femeninos.innerText = femenino || "0"
    mayoresNode.innerText = mayores || "0"
    vulner.innerText = vulnerable || "0"
    porCurso.innerHTML = ""
    porUbicacion.innerHTML = ""
    var keyGrados = Object.keys(grado)
    for (let i = 0; i < keyGrados.length; i++) {
        const key = keyGrados[i];
        porCurso.innerHTML += key+"° Grado: "+grado[key]+"<br>"
    }

    for (const key in ubica) {
        if (Object.hasOwnProperty.call(ubica, key)) {
            const element = ubica[key];
            porUbicacion.innerHTML += nomArray[key] + ": "+element+"<br>"
        }
    }
}
function reglaTres(number, max) {
    var a = (number * 100) / max
    if (a < 1) {
        a = 1
    }
    return a
}
function conChange(number) {
    const cons = document.getElementsByClassName("con");
    for (let i = 0; i < cons.length; i++) {
        const con = cons[i];
        con.style.display = "none";
        if (i == number) {
            con.style.display = "block";
        }
    }
}

document.getElementById("si").onclick = ()=> {
    poblacion = 1
}
document.getElementById("no").onclick = ()=> {
    poblacion = 2
}
document.getElementById("siBoton").onclick = ()=> {
    conChange(0)
}
document.getElementById("noBoton").onclick = ()=> {
    conChange(2)
}
formulario.onsubmit = accion