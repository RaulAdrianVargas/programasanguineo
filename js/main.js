
alert("Bienvenido al programa de compatibilidad sanguínea");

let usuarioRegistrado = false;
let nombreUsuario = "";

// Login
while (!usuarioRegistrado) {
    nombreUsuario = prompt("Ingresa tu nombre de usuario:");

    if (nombreUsuario === null) {
        alert("Hasta luego");
        break;
    }

    let confirmacion = confirm("¿Es " + nombreUsuario + " tu nombre de usuario?");
    if (confirmacion) {
        usuarioRegistrado = true;
        alert("Bienvenido " + nombreUsuario + ", has ingresado con éxito.");
    } else {
        alert("Usuario incorrecto. Inténtalo de nuevo.");
    }
}

// Si el usuario decide ingresar al programa
if (usuarioRegistrado) {
    let intento = 0;
    let seguirConsultando = true;

    do {
        let pregunta = prompt("¿Cuál es tu grupo y factor sanguíneo? (Ej. A+, AB-, O-, etc.)");

        if (pregunta === null) {
            alert("Hasta luego");
            break;
        }

        let preguntaMinusculas = pregunta.toLowerCase();

        switch (preguntaMinusculas) {
            case "0-":
            case "o-":
            case "O-": 
                alert("Tu sangre es extremadamente valiosa, eres donante universal. Sin embargo, solo puedes recibir sangre de tu mismo grupo y factor.");
                break;
            case "0+":
            case "o+":
            case "O+":
                alert("Tu sangre es muy valiosa, puedes donar a todos los grupos siempre y cuando sean de factor Rh positivo. Si necesitas recibir donaciones, necesitas sangre 0+ y/o 0-.");
                break;
            case "a+":
            case "A+":
                alert("Tu sangre es bastante valiosa, puedes donar a cualquier persona del grupo y factor A+ y AB+. Además, si necesitas un trasplante, puedes recibir sangre de los grupos A+, A-, O+ y O-.");
                break;
            case "a-":
            case "A-":
                alert("Tu sangre es muy valiosa, podes donar a cualquier persona del grupo y factor a y ab independientemente del factor rh. Si necesitas una donacion, necesitas sangre del tipo a- y/o 0-");
                break;
            case "b+":
            case "B+":
                alert("Tu sangre es muy valiosa, podes donar a cualquier persona del grupo y factor b+ y ab+. Si necesitas una donacion, necesitas sangre del grupo b+, b-, 0+ o 0-");
                break;
            case "b-":
            case "B-":
                    alert("Tu sangre es muy valiosa, podes donar a cualquier persona del grupo y factor b y ab. Si necesitas una donacion, necesitas sangre del grupo b- o 0-");
                break;
            case "ab+":
            case "AB+":
            case "Ab+":
            case "aB+":           
                alert("Tu sangre es muy valiosa, podes donar unicamente a personas del grupo ab+. Si necesitas una donacion, cualquier persona podria donarte");
                break;
            case "ab-":
            case "AB-":
            case "Ab-":
            case "aB-":    
                alert("Tu sangre es muy valiosa, podes donar a personas del grupo ab, ya sea rh positivo o negativo. Si necesitas una donacion, necesitas sangre de cualquier grupo que sea de rh negativo");
                break
            default:
                alert("Lo siento, el grupo y factor sanguíneo ingresado no es válido.");
        }

        intento++;
        if (intento < 3) {
            seguirConsultando = confirm("¿Quieres hacer otra consulta? Te quedan " + (3 - intento) + " intentos.");
        } else {
            alert("Has alcanzado el máximo de intentos.");
            seguirConsultando = false;
        }
    } while (seguirConsultando);

    alert("Gracias por usar el programa de compatibilidad sanguínea.");
}

function reiniciarPrograma() {
    location.reload(); // Esta función recarga la página, reiniciando el programa
}

// Obtener referencia al botón de reinicio
const restartBtn = document.getElementById('restartBtn');

// Agregar un controlador de eventos al botón para manejar el reinicio del programa
restartBtn.addEventListener('click', reiniciarPrograma);